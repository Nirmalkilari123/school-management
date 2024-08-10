import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './Navbar.css'
const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/de4euasql/image/upload/v1723050519/Latha__7_-removebg-preview_xyc6wo.png" className='img'/></Link>
      <div className="navbar-links">
      <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/teachers">Teachers</Link>
        {user ? (
          <>
            <span className="navbar-text">{user.username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
