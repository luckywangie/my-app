import React from 'react';

function NavBar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', borderBottom: '2px solid maroon' }}>
      <a href="#home" style={{ textDecoration: 'none', color: 'maroon' }}>Home</a>
      <a href="#about" style={{ textDecoration: 'none', color: 'maroon' }}>About</a>
    </nav>
  );
}

export default NavBar;
