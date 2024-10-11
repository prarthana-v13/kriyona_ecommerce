import React from 'react';
import { useState, useEffect } from 'react';
import './header.css'
import '../../universalstyle.css';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className={` header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container roboto my-4">
          <div className="row align-items-center ">
            <div className="navbar">
              <div className="col-2 mb-0 text-center">
                <h2 className='logo bg-gradient-btn mb-0 bb- br- bl-'>Kriyona</h2>
              </div>
              <div className="col-7 d-flex justify-content-center">
                <ul className="d-flex ml-auto align-items-center mb-0">
                  <li>
                    <Link className='text-b1  menu-link montserrat bl-' to={'/'} href="/">Home</Link>
                  </li>
                  <li>
                    <Link className='text-b1 menu-link montserrat bl-' to={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link className='text-b1 menu-link montserrat bl-' to={'/services'}>Services</Link>
                  </li>
                  <li>
                    <Link className='text-b1 menu-link montserrat bl- br- ' >Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-3 d-flex justify-content-end">
                <a className='logo mb-0 bb- br- bl- p-all montserrat text-b1 '>Get Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
