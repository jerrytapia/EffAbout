import React from 'react';
// import Navbar from './Navbar.jsx';

function Layout(props) {
  return (
    <div className='layout w-full'>

      <div className='content'>
        {props.children}
      </div>

    </div>
  );
}

export default Layout;