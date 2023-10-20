import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="slider-img1">
      <img src='https://www.accountingforsustainability.org/content/a4s/corporate/en/knowledge-hub/webinars/webinar-recording-tcfd-2021/_jcr_content/par/pageteaser/image.img.jpg/1634035365275.jpg'/>
      </div>     
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3 className='carousel-head'>Welcome to Investor Deck</h3>
          <p className='carousel-p'>Empowering Your Financial Future: Explore, Invest, and Innovate with Our Investment and Startup Platform!</p>
        </Carousel.Caption>
   
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-img1">
      <img src="https://www.analyticsinsight.net/wp-content/uploads/2020/12/Data-Analyst-1024x576.jpg"/>
      </div>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3 className='carousel-head'>Our Vision and Mission</h3>
          <p className='carousel-p'>Our mission is to empower individuals and businesses to unlock their full financial potential and engage with the ever-evolving landscape of innovation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-img1">
      <img src="https://wallpaperaccess.com/full/3734602.jpg"/>
      </div>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3 className='carousel-head'>Investment Opportunities</h3>
          <p className='carousel-p'>
          Grow Your Wealth: Explore Smart Investment Choices with Us
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;