import React from 'react'
import { Carousel } from 'react-bootstrap';
import './FirstCarousal.css';
function FirstCarousal() {
  return (
    <div className="carousel-container">
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/htxg06NZ/613011-Napoleon-Hill-quote.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Some description about the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/J0BdLVN9/The-ultimate-measure-of-a-man-is-not-where-he-stands-in-moments-of-comfort-and-convenience-but-where.jpg"
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Some description about the second slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* Add more Carousel.Items for additional slides */}
    </Carousel>
        </div>
  )
}

export default FirstCarousal