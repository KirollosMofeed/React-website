import React from 'react'
import Menuitems from '../help/Menulist'
import { Container } from 'react-bootstrap'
import '../App.css'
function Menu() {
  return (
      <Container>
      <div className='menu'>
      <h2>Our Menu</h2>
        {Menuitems.map((lists ,key) => {
          return (
            <div className='card' key={key}>
              <img src={lists.image} alt=''/>
              <h4>{lists.name}</h4>
              <span>${lists.price}</span>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default Menu
