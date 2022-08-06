require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const app = express();
const publicPath = path.join(__dirname, 'public');
const jsonMiddleware = express.json();
app.use(jsonMiddleware);
const pg = require('pg');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
} else {
  app.use(express.static(publicPath));
}

/* user can create account */
app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2.hash(password)
    .then(hashedPassword => {
      const sql = `
       INSERT INTO "users" ("userName", "hashedPassword")
       VALUES($1, $2)
       RETURNING "userId", "userName"
       `;
      const values = [username, hashedPassword];
      db.query(sql, values)
        .then(result => {
          const [newObj] = result.rows;
          res.status(201).send(newObj);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

/* user can sign in */
app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  const sql = `
  SELECT "userId", "hashedPassword"
  FROM "users"
  where "userName" = $1
  `;
  const value = [username];
  db.query(sql, value)
    .then(result => {
      const [newObj] = result.rows;
      if (!newObj) {
        throw new ClientError(401, 'invalid login');
      }
      const { userId, hashedPassword } = newObj;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if (!isMatching) {
            throw new ClientError(401, 'invalid login');
          }
          const payload = { userId, username };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.json({ token, user: payload });
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
