import React from 'react';
import AppContext from '../lib/app-context';

export default class Header extends React.Component {

  render() {
    const { user, handleSignOut } = this.context;

    const loginMessage = user === null
      ? 'Sign-in'
      : user.username;
    const signOut = user === null
      ? ''
      : 'sign-out bi bi-person-x-fill user-nav nav-link text-end';
    return (
  <div className='container-fluid nav-background'>
    <div className='row'>
      <nav className='col-5 navbar navbar-expand-md navbar-light'>
        <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle="collapse"
        data-bs-target="#toggleMobileMenu"
        aria-controls="toggleMobileMenu"
        aria-expanded="false"
        >
        <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="toggleMobileMenu">
          <ul className='navbar-nav'>
            <li>
              <a className="nav-link" href="#">Home</a>
            </li>
            <li>
              <a className="nav-link" href="#">Leaderboard</a>
            </li>
            <li>
                <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"href="#">How to play</a>
            </li>
            <li>
              <a className="nav-link" href="#">Chatroom</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='col-2'>
        <h3 className='center-nav-text'>HangMe</h3>

      </div>
          <div className='user-buttons col text-end'>
            <a className="login-link user-nav nav-link text-end" type="button" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={() => { window.location.hash = 'sign-in'; }} href='#sign-in'>{loginMessage}</a>
            <i onClick={handleSignOut} className={signOut}></i>
      </div>
    </div>
  </div>
    );
  }
}

Header.contextType = AppContext;
