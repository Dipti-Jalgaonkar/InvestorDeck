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
          <h3>Angel investors </h3>
          <p>focus on helping startups take their first steps rather than getting a favorable return on a loan.</p>
        </Carousel.Caption>
   
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-img1">
      <img src="https://www.analyticsinsight.net/wp-content/uploads/2020/12/Data-Analyst-1024x576.jpg"/>
      </div>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider-img1">
      <img src="https://wallpaperaccess.com/full/3734602.jpg"/>
      </div>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;