import React from 'react';
import './Footer.css';
import '../../universalstyle.css'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-r">
      <div className="footer-container">
        <div className="footer-column col-3">
          <h3 className='montserrat fw-bold  fs-15 '>Kriyona.</h3>
          <p className='fs-16 roboto'>
            We aew Kriyona ecommerce . An E-commerce Marketing Company
          </p>
        </div>

        <div className="footer-column col-2">
          <h3 className='montserrat fw-bold'>Company</h3>
          <ul className=''>
            <li className='mb-3 fs-16 roboto'><a href="/about">About</a></li>
            <li className='mb-3 fs-16 roboto'><a href="/services">Services</a></li>
            <li className='mb-3 fs-16 roboto'><a href="/contact">Contact</a></li>
            <li className='mb-3 fs-16 roboto'><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column col-3">
          <h3 className='montserrat fw-bold'>Contact Us</h3>
          <p className='roboto fs-16'>Email: info@company.com</p>
          <p className='roboto fs-16'>Phone: +123 456 789</p>
          <p className='roboto fs-16'>Address: 1234 Street Name, City, Country</p>
        </div>
        <div className="footer-column">
          <h3 className='montserrat fw-bold'>Follow Us </h3>
          <ul className="m-0 p-0 d-flex flex-wrap">
            <li className="mx-2 bg-transparent rounded-circle hw-50">
              <a href="#" className="text-darkgreen fs-4">
                <IoIosMail />
              </a>
            </li>
            <li className="mx-2 bg-transparent rounded-circle hw-50">
              <a href="#" className="text-darkgreen fs-4">
                <FaInstagram />
              </a>
            </li>
            <li className="mx-2 bg-transparent rounded-circle hw-50">
              <a href="#" className="text-darkgreen fs-4">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="mx-2 bg-transparent rounded-circle hw-50">
              <a href="#" className="text-darkgreen fs-4">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>


      </div>

      <div className="footer-bottom text-center mb-0">
        <p>© 2024 Company Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
