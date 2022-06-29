// import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath  } from 'react-router-dom';

function Navbar() {
  const goToArticle = (articleUrl) => {
    const newWindow = window.open(articleUrl, '_blank', 'noopener, noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
      <nav className='bg-primary items-stretch flex w-full h-20 text-white justify-between px-2 gap-2'>
        <Link to='/' className='text-3xl items-center flex ml-5'>
          effAbout
          </Link>

        <ul className="p-0 mr-5 flex gap-3 list-none items-center">
            {/* <CustomLink
            to='https://matias.ma/nsfw/'
            // onClick={goToArticle('https://matias.ma/nsfw/')}
            >
              Don't Click
            </CustomLink> */}

            <CustomLink to='/normiefeed'>Normie News</CustomLink>
            <CustomLink to='/customfeed'>Tailored News</CustomLink>
            <CustomLink to='/later'>Saved For Later</CustomLink>

        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  // const path =window.location.pathname
  return (
    <li className={isActive === to ? "active" : "active:text-orange"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;