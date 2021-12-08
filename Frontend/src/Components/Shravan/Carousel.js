import React from 'react'

export default function Carousel() {
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  return (
    <div>
      <div class="slideshow-container">

        <div class="mySlides fade">
          <div class="numbertext"><p>1 / 3</p></div>
          <img src='./images/wishlist.png' className='wishlistImg' alt="wishlist-icon" />
          <div class="text"><p>Caption Text</p></div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img src='./images/wishlist.png' className='wishlistImg' alt="wishlist-icon" />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img src='./images/wishlist.png' className='wishlistImg' alt="wishlist-icon" />
          <div class="text">Caption Three</div>
        </div>
        <a className="prev" onClick='plusSlides(-1)'>&#10094;</a>
        <a className="next" onClick='plusSlides(1)'>&#10095;</a>
        {/* <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
  </div> */}
      </div>
    </div>
  )
}
