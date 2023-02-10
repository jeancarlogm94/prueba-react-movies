import React from 'react'

function Carousel({ children: moviList1, moviList2}) {
  return (
    <div className='overflow-hidden'>
      <div className='flex'>{moviList1}</div>
      <div className='flex'>{moviList2}</div>
    </div>
  )
}

export default Carousel
