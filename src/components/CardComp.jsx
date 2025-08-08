import React from 'react'

const CardComp = (props) => {
  return (
    <div className='bg-teal-300 m-5 p-6 text-black rounded inline-block text-center'>
      <div className='align-middle place-items-center'>
        <img className='h-32 w-32 rounded-full mb-3' src={props.photo} alt="Img Not Found" />        
      </div>
      <h1 className='text-2xl font-semibold mb-4'>{props.name}</h1>
      <h2>{props.city}, {props.age}</h2>
      <h2>{props.profession}</h2>
      <button className='mt-5 bg-emerald-700 text-white px-4 py-2 font-medium rounded'>Add Friend</button>
    </div>
  )
}

export default CardComp
