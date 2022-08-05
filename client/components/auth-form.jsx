import React from 'react';
import AppContext from '../lib/app-context';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleModalDisplayChange = this.handleModalDisplayChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: '', password: '' };
  }

  handleModalDisplayChange(event) {
    this.setState({ signIn: !this.state.signIn });
    // console.log(this.state.signIn);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { route } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${route}`, req)
      .then(res => res.json())
      .then(result => {
        if (route === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          this.props.onSignIn(result);
        }
      });
  }

  render() {
    return (
      <form id='loginModal' onSubmit={this.handleSubmit}>
        <div className="form-outline mb-4 text-center">
          <label htmlFor="username">
            <p>Username</p>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
            <div className="form-outline mb-4 text-center">
            <label htmlFor="password">
            <p>Password</p>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </div>
      </form>
    );
  }
}
AuthForm.contextType = AppContext;
