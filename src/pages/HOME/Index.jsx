import React from 'react'
import Header from '../../components/HEADER/header';
import '../../universalstyle.css';
import './home.css';
import TestimonialSlider from '../../components/TESTIMONIAL/testimonialSlider';
import Footer from '../../components/FOOTER/footer';
import Details from '../../components/DETAILS/Details';
import Services from '../../components/SERVICES/Services';

const Index = () => {

  return (
    <>
      <Header />
      <div className="" >
        <div className="container px-0">
          <div className="row mx-11">
            <div className="bg-gradient-2 bb- br- bl-">

              <div className="col-12   text-center ">
                <p className=' fs-17 roboto pt-5'>Welcome ! Start Growing Your Buisness Today.</p>
                <h1 className=' fw-600 montserrat fs-69 py-4'>Drive Sales, Boost Growth, <br />Succeed Online</h1>
                <p className='roboto pb-5 pt-4'>We are Kriyona ecommerce , an E-commerce Marketing Company.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Details />
      <Services />
      {/* <TestimonialSlider /> */}
      <Footer />
    </>
  )
}

export default Index
