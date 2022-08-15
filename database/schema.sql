set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
    "userId" serial NOT NULL,
    "userName" TEXT NOT NULL UNIQUE,
    "hashedPassword" TEXT NOT NULL,
    "userImage" TEXT default null,
    CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."scores" (
    "scoreId" serial NOT NULL,
    "userId" integer NOT NULL,
    "attempts" integer NOT NULL,
    "timestamp" TIMESTAMPTZ NOT NULL default now(),
    CONSTRAINT "scores_pk" PRIMARY KEY ("scoreId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."chatroom" (
    "chatroomId" serial NOT NULL,
    "userId" integer NOT NULL UNIQUE,
    "userText" TEXT NOT NULL,
    "timestamp" TIMESTAMPTZ NOT NULL default now(),
    CONSTRAINT "chatroom_pk" PRIMARY KEY ("chatroomId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."gameHistory" (
    "historyId" serial NOT NULL,
    "scoreId" integer NOT NULL,
    "word" text NOT NULL,
    "attempts" integer NOT NULL,
    "timestamp" TIMESTAMPTZ NOT NULL default now(),
    CONSTRAINT "gameHistory_pk" PRIMARY KEY ("historyId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "scores" ADD CONSTRAINT "scores_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "chatroom" ADD CONSTRAINT "chatroom_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "gameHistory" ADD CONSTRAINT "gameHistory_fk0" FOREIGN KEY ("scoreId") REFERENCES "scores"("scoreId");
