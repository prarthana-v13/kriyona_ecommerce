import React from "react";
import './Services.css'; // Import the CSS file for styling
import '../../universalstyle.css';
import { FaLinkedin } from "react-icons/fa6";


const Services = () => {
  return (
    <div className="container py-5 ">
      <div className="row bb- br- bl- bg-gradient-b ">
        <h2 className="montserrat fs-42 bd- py-4 fw-500 text-center">Our Services</h2>
        <div className="col-12 d-flex my-4 px-5">
          <div className="col-4">
            <div className="member-info bb- br- bl- mx-2 text-center">
              {/* <p>{member.name}</p> */}
              <div className="col-12 d-flex justify-content-center">
                <div className="s-image mt-5 mb-4">
                  <img src='images/1.png' alt='' className="rounded shadow-md" />
                </div>
              </div>
              <div className='px-4'>
                <h3 className="team-name fs-20 montserrat">Account Management</h3>
                <p className=''>
                  <a href="https://www.linkedin.com/in/prarthnavaghani/" target='_blank' className='grey-100'><FaLinkedin /></a>
                </p>
              </div>
            </div>

          </div>
          <div className="col-4">
            <div className="member-info bb- br- bl- mx-2 text-center">
              {/* <p>{member.name}</p> */}
              <div className="col-12 d-flex justify-content-center">
                <div className="s-image mt-5 mb-4">
                  <img src='images/3.png' alt='' className="rounded" />
                </div>
              </div>
              <div className='px-4'>
                <h3 className="team-name fs-20 montserrat">Digital Marketing</h3>
                <p className=''>
                  <a href="https://www.linkedin.com/in/prarthnavaghani/" target='_blank' className='grey-100'><FaLinkedin /></a>
                </p>
              </div>
            </div>

          </div>
          <div className="col-4">

            <div className="member-info bb- br- bl- mx-2 text-center">
              {/* <p>{member.name}</p> */}
              <div className="col-12 d-flex justify-content-center">
                <div className="s-image mt-5 mb-4">
                  <img src='images/2.png' alt='' className="rounded" />
                </div>
              </div>
              <div className='px-4'>
                <h3 className="team-name fs-20 montserrat">Web Design and Developement</h3>
                <p className=''>
                  <a href="https://www.linkedin.com/in/prarthnavaghani/" target='_blank' className='grey-100'><FaLinkedin /></a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
