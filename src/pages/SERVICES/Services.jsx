import React from 'react'
import Header from '../../components/HEADER/header'
import servicesData from './ServicesData.js';
const Services = () => {
  return (
    <div>
      <Header />
      <div className="container our-services my-80">
        <div className="row bb- br- bl- bg-gradient-2">
          <h3 className='text-center pt-4 mb-0 courier fw-600 fs-33 text-b2'>Our Services</h3>
          <p className='text-center grey-200 mb-4 montserrat'>Personalized solutions and services to boost your online business.</p>
        </div>
        <div className="row bl- br- bd- pb-0 bg-gradient-2 ">
          {
            servicesData.map(val => (
              <div className="col-4 d-flex border">

                <div className="col-2">
                  <div className="service-icon my-4 ps-3">
                    <img src={val.image} className='img-fluid mb-2 p-1 pt-0' alt="" />
                  </div>
                </div>
                <div className={`col-10 ps-3 pe-3 `}>
                  <div className="service-detail my-4">
                    <p className='text-left fw-700  fs-18 mb-0 text-b2 text-uppercase'>{val.name}</p>
                    <p className='grey-200 fs-14 mb-0'>{val.description}</p>
                  </div>
                </div>

              </div>
            ))
          }



        </div>
      </div>
    </div>
  )
}

export default Services
