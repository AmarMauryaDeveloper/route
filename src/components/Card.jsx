import React from 'react'

function Card({img,title}) {
  return (
    <div className='bg-blue-950 h-[255px] w-[278px] m-10 ' >
        <div className=''>
            <img src={img} alt=""  className='h-40  flex px-8 pt-4'/>
            <h4 className='text-2xl text-shadow-white text-gray-100  flex justify-center my-2'> {title}</h4>
        </div>
    </div>
  )
}

export default Card