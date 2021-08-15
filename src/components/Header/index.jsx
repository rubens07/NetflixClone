import React from 'react'
import './styles.css'

const Header = ({ black }) => {
  return (
    <header className={black ? "header-black" : ""}>
      <div className="header-logo">
        <a href="/">
          <img src="netflix-logo.png" alt="netflix-logo" />
        </a>
      </div>
      <div className="header-avatar">
        <a href="/">
          <img src="netflix-avatar.png" alt="user-avatar" />
        </a>
      </div>
    </header>
  );
}

export default Header;