import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1 className="head">Welcome to School Management</h1>
      <p>
        Now you can manage your school, college, or any educational center with Latha School Management. It's 100% free for a lifetime with no limitations.
      </p> 
      <div>
       <button className='button'> <a
          href="sign-up"
          className="button button-cta bg-m-blue7 m-white raised"
          style={{ border: 'none', margin: '5px' }}
        >
          <i className="im im-icon-Add-User"></i> Sign Up Now, It's Free
        </a>
        </button>
      </div>
    </div>
  );
}

export default Header;
