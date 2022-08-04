import React from 'react';
import AppContext from '../lib/app-context';
/** Since I am not passing the username and the password state to any of the other  components
 * should I create a function to define the state for this function.
 */
export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleModalDisplayChange = this.handleModalDisplayChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { username: '', password: '', signIn: true };
  }

  handleModalDisplayChange(event) {
    this.setState({ signIn: !this.state.signIn });
    // console.log(this.state.signIn);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    // console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className=''>
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-background modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modal-titles">Sign-in</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form id='loginModal' onSubmit={this.handleSubmit}>
              <div className="form-outline mb-4 text-center">
                <label>
                  <p>Username</p>
                  <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </label>
              </div>
                  <div className="form-outline mb-4 text-center">
                <label>
                  <p>Password</p>
                  <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>
              </div>
              <div className="form-outline mb-4 text-center">
                  <button className='btn btn-primary' type='submit' value="submit">Sign Up</button>
                  <a className="user-nav nav-link" onClick={this.handleModalDisplayChange} type="button">register</a>
              </div>
            </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
LoginModal.contextType = AppContext;
