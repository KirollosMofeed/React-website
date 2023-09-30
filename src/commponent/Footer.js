import React from 'react'
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import { IconBrandTwitter } from '@tabler/icons-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import '../App.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <IconBrandFacebook href='https://www.youtube.com/' size={50}/>
        <IconBrandInstagram size={50}/>
        <IconBrandTwitter size={50}/>
        <IconBrandWhatsapp size={50}/>
      </div>
      <div>Created by me kirollosmofeed@gmail.com</div>
    </div>
  )
}

export default Footer
