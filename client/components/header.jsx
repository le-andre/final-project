import React from 'react';

export default function Header(props) {
  return (
    <div className="container">
      <nav className="navbar bg-dark fixed-top">
        <div className="container-fluid">
          <div className="navbar-nav">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Leaderboard</a>
            <a className="nav-link" href="#">How  to play</a>
            <a className="nav-link" href="#">Chatroom</a>
            <a className="nav-link justify-content-end" href="#">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
