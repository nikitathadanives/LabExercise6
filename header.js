import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>College Name</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
      </nav>
    </header>
  );
};

export default Header;
