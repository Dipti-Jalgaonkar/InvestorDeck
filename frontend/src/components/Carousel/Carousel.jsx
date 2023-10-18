import React from 'react'
import './Carousel.css'
import { useState } from 'react';
const slides = [
    {
      title: "Welcome to Investor Deck",
      subtitle: "A World of Opportunities",
      content: "Discover how we're transforming industries with innovative solutions.",
      image: "https://briteadvisors-usa.com/wp-content/uploads/2022/08/Market-Update-February-2021-header-img-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1.jpg",
    },
    {
      title: "Our Vision and Mission",
      subtitle: "Driving Change in Technology",
      content: "Explore our vision for the future and our mission to make it a reality.",
      image: "https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160928.jpg?w=996&t=st=1697004506~exp=1697005106~hmac=f5d3ffa8cb3757ee3f25dc5f3ffb6139aa3784bfd1a484ab8920178271048682",
    },
    {
      title: "Investment Opportunities",
      subtitle: "Join Our Journey",
      content: "Learn about investment options and how you can be a part of our success.",
      image: "https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?size=626&ext=jpg&ga=GA1.2.155463035.1697004429&semt=sph",
    },
    {
      title: "Get in Touch",
      subtitle: "Contact Us",
      content: "Reach out to us for inquiries, partnerships, or investment discussions.",
      image: "https://media.istockphoto.com/id/1044323966/video/double-exposure-of-graph-and-rows-of-money-coins.jpg?b=1&s=640x640&k=20&c=JsbOvO1jYf8HmoK2YEyx2Qii8rxp4SFOCoTRtGiOI5U=",
    },
    {
      title: "Get in Touch",
      subtitle: "Contact Us",
      content: "Reach out to us for inquiries, partnerships, or investment discussions.",
      image: "https://dwtyzx6upklss.cloudfront.net/Pictures/1024x536/9/7/3/15973_doindexfundsmonitortheirportfoliofirms_446567.jpg",
    },
  ];
  
export default function  Carousel() {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }
    return (
      <div className='carousel-item'> 
        {slides.map((slide,index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
        {index === current && (
            <div className='carousel-item'>                            
            <div>{slide.title}</div>
            <div>{slide.subtitle}</div>
            <div>{slide.content}</div>
            <div><img src={slide.image}/>
            </div>
        </div>
         )}
           
            </div>
        ))}
      </div>
    )
  }
  