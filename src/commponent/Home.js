import React from 'react'
import { Button , Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
function Home() {
  return (
    <div className='home'>
      <Container>
      <div className='text'>
      <h2>React-Bootstrap</h2>
      <p>The most popular front-end framework, rebuilt for React.</p>
      <Button href='/menu' variant='outline-primary'>Menu</Button>
      </div>
      </Container>
    </div>
  )
}

export default Home
