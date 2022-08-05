import React from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default class AuthPage extends React.Component {

  render() {
    const { user, route, handleSignIn } = this.context;

    if (user) return <Redirect to="" />;

    const welcomeMessage = route.path === 'sign-in'
      ? 'Sign-in'
      : 'Register';

    const buttonMessage = route.path === 'sign-in'
      ? 'Log in'
      : 'Sign Up';

    const linkMessage = route.path === 'sign-in'
      ? 'Register'
      : 'Sign-in';

    return (
        <AppContext.Provider value={AppContext}>
        <div className=''>
          <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-background modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modal-titles">{welcomeMessage}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <AuthForm
                  key={route.path}
                  action={route.path}
                  onSignIn={handleSignIn} />
                  <div className="form-outline mb-4 text-center">
                    <button className='btn btn-primary' type='submit' value="submit">{buttonMessage}</button>
                    <a className="user-nav nav-link" onClick={this.userChange} type="button">{linkMessage}</a>
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
