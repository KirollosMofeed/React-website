import React from 'react'
import { Container } from 'react-bootstrap'
import '../App.css'
function About() {
  return (
    <div className='about'>
      <Container>
      <h2>About us</h2>
      <p>
        A card is a flexible and extensible content container. 
        It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
        If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. 
        Similar functionality to those components is available as modifier classes for cards.
      </p>
      </Container>
    </div>
  )
}

export default About
