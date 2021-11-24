import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/slid1.jpg'
import banner2 from '../../../images/slide2.jpg'
import banner3 from '../../../images/doctor-isn-t-as-scary-as-she-seems_329181-7677.jpg'

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      width="100%"
      className="d-block w-80  "
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Wellcome to our Hospital</h3>
      <p>Our Hospital is renowned in this area,and Our service is vary nice.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>This is medical team</h3>
      <p>Successfull our medical team.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>This is  theatment time</h3>
      <p>Our doctor is 24 hour treatment the patinet</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;