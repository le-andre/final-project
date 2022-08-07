import React from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { route } = this.context;
    if (route.path === 'sign-in') {
      window.location.hash = 'sign-up';
    } else {
      window.location.hash = 'sign-in';
    }
  }

  render() {
    const { user, route, handleSignIn } = this.context;

    if (user) return <Redirect to="" />;

    const welcomeMessage = route.path === 'sign-up'
      ? 'Register'
      : 'Sign-in';

    const linkMessage = route.path === 'sign-up'
      ? 'Sign-in'
      : 'Register';

    const href = route.path === 'sign-up'
      ? '#sign-in'
      : '#sign-up';

    return (
        <AppContext.Provider value={AppContext}>
        <div className=''>
          <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content" id='modal-background'>
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-login-title">{welcomeMessage}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <AuthForm
                  route={route.path}
                  onSignIn={handleSignIn} />
                  <div className="form-outline mb-4 text-center">
                    <a className="user-nav nav-links" onClick={this.handleChange} href={href}>{linkMessage}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </AppContext.Provider>
    );
  }
}
AuthPage.contextType = AppContext;
