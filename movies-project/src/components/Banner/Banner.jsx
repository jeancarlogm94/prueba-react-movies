import React from 'react'
import './Banner.css'
import banner from '../../assets/banner.jpg'

function Banner() {
  return (
    <div className='banner'>
      <img className='img-banner' src={banner} alt="banner" />
    </div>
  )
}

export default Banner
