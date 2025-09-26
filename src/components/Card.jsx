import React from 'react'

function Card({img,title}) {
  return (
    <div className='bg-blue-950 h-[285px] w-[278px]' >
        <div>
            <img src={img} alt="" />
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default Card