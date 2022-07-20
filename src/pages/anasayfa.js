import React from 'react'
//import {Slider} from '..//components';
import Carousel from 'react-bootstrap/Carousel';
import './anasayfa.css';

const anasayfa = () => {
  return (
    //Slider=================================================================
    <div className="home_set">
    <Carousel margin-top="20px">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://siradisidigital.com/upload/yemek-fotografi-nasil-cekilir-ankara-dijital-ajans-siradisi-digital-5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://kemalseckin.com/images/gallery/Yemek-ve-Urun-Fotograflar/thumbs/3010-kemal-seckin-yemek-ve-urun-fotograflari-katibim.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://shiftdelete.net/wp-content/uploads/2020/11/yemek-fotografciligi-00.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    //slider-End========================================================================
  )
}

export default anasayfa