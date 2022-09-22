import React from 'react'
import './home.css'
const Homecard = (props) => {
  return (
    <>
    <div className="item">
        <img src={props.imgdata} alt="" className='item-img' />
        <p className="item-label">{props.headdata}</p>
    </div>
    </>
  )
}

export default Homecard