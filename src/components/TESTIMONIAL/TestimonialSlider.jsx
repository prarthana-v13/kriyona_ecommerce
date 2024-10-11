import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TestimonialSlider.css';
import '../../universalstyle.css';
import { CiTextAlignCenter } from "react-icons/ci";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    feedback: "This service is amazing!This service is amazing!This service is amazing!This service is amazing!This service is amazing!This service is amazing!This service is amazing!This service is amazing!",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Head",
    feedback: "Highly satisfied with the results.",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Mark Johnson",
    position: "E-com manager",
    feedback: "I would highly recommend this to anyone. Totally worth it!",
    image: "https://via.placeholder.com/100",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ ...styles.arrowButton, right: "10px" }}>
      <FaArrowRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ ...styles.arrowButton, left: "10px" }}>
      <FaArrowLeft />
    </button>
  );
};

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Disable autoplay
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container py-5">
      <div className="row px-0 d-flex justify-content-center">
        <div className="col-12 px-0 ">
          <div className="t-box text-center py-5 bg-gradient-r">
            <h2 className="montserrat fs-42 pb-3 pt-0 fw-500 t-heading">Testimonials</h2>
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <h3 className="t-name montserrat py-3">{testimonial.name}</h3>
                  <p className="t-position montserrat pb-3">{testimonial.position}</p>
                  <div className="col-12 d-flex justify-content-center pb-4">
                    <div className="col-10 px-5">
                      <p className="t-feedback courier text-center">“{testimonial.feedback}”</p>

                    </div>
                  </div>
                </div>
              ))}
            </Slider>

          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  arrowButton: {
    background: "none",
    color: "#424f5f",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    position: "absolute",
    bottom: "0px", // Position buttons at the bottom
    zIndex: 1, // Ensure buttons are on top
  },
  buttonContainer: {
    position: "relative",
    height: "50px", // Space for the buttons
  },
};

export default TestimonialSlider;
