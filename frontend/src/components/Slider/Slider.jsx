
import React from 'react'
import './Slider.css'

function Slider() {
    let slideIndex = 0;

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 2000); 
    }
    setTimeout(showSlides, 1000)
    // showSlides();

  return (
    <>
    
      <div className="slideshow-container">

<div className="mySlides fade">
  <img src="https://emotionalegghead.com/wp-content/uploads/2021/06/investmentemotionalegghead-scaled.jpg"/>
</div>

<div className="mySlides fade">
  <img src="https://www.theindianwire.com/wp-content/uploads/2020/05/Startup.jpg"/>
</div>

<div className="mySlides fade">
  <img src="https://d24uab5gycr2uz.cloudfront.net/uploads/other_pic/GkPFRMDxrh.png"/>
</div>
<div className="mySlides fade">
  <img src="http://localhost:3000/dipti.jpg"/>
</div>
</div>

<div className='No'>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
</div>
  </>
  )
}

export default Slider