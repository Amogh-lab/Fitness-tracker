import React, { useState } from 'react'
import './date.css'

const date = () => {
  const today = new Date();
  
  const day = today.toLocaleDateString('default', {weekday : 'long'});
  const datenum = today.getDate();
  const month = today.toLocaleDateString('default', {month : 'long'});
  const monthnum = today.getMonth();
  const year = today.getFullYear();

  return (
    <div className='container'>
      <div className='day'>
        <p className='dayformat'>{day}</p>
        <label className='dayformat'>Date : {datenum} </label>
      </div>
      <div>
        <label className='dayformat'>Month : </label>
        <span className='dayformat'>{month} ( {monthnum} )<br/></span>
        <label className='dayformat'>Year : {year} </label>
      </div>
    </div>
  )
}

export default date