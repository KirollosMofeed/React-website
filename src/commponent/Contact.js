import React from 'react'
import { Container } from 'react-bootstrap'
import Image from '../asset/images.png'
import '../App.css'
function Contact() {
  return (
    <Container>
        <div className='contact'>
            <div className='right'>
                <img src={Image} alt=''/>
            </div>
            <div className='left'>
                <h3>Contact us</h3>
                <form>
                    <label htmlFor='name'>Full name</label>
                    <input type='text' id='name' placeholder='Enter your name'/>
                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' placeholder='Enter your email'/>
                    <label htmlFor='massage'>Massage</label>
                    <textarea id='massage' placeholder='Talk to us'></textarea>
                </form>
            </div>
        </div>
    </Container>
  )
}

export default Contact
