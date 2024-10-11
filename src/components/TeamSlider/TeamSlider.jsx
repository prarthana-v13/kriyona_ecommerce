import React from 'react';
import Slider from 'react-slick';
import { teamMembers } from './data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TeamSlider.css';
import { FaLinkedin } from "react-icons/fa6";

const TeamSlider = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="px-5">
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="col-3 ">
                <div className="member-info bb- br- bl- mx-2 mb-3 mt-2 text-center">
                  {/* <p>{member.name}</p> */}
                  <div className="col-12 d-flex justify-content-center">
                    <div className="team-image mt-5 mb-4">
                      <img src={member.image} alt={member.name} className="" />
                    </div>
                  </div>
                  <div className='px-4'>
                    <h3 className="team-name">{member.name}</h3>
                    <p className=''>
                      <a href="https://www.linkedin.com/in/prarthnavaghani/" target='_blank' className='grey-100'><FaLinkedin /></a>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;
