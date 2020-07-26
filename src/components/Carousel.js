import React from 'react'
import { Carousel } from 'react-bootstrap';
import styles from '../styles/Carousel.module.css'

const myCarousel = () => {
    return(
        <Carousel >
        <Carousel.Item className = {styles.carouselItem}>
          <img
            className="d-block w-100"
            src="img/first.jpg"
            alt="First slide"
          />
          <Carousel.Caption className = {styles.carouselCaption}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/second.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption
          className = {styles.carouselCaption}
          >
            <h3>Second slide labelllll</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/third.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption className = {styles.carouselCaption}>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}

export default myCarousel;