import React, { Component } from 'react'
import loader1 from './loader1.gif'

const Spinner=()=> {
 
    return (
      <div className='text-center my-3'>
        <img src={loader1} alt="loading" style={{height:'30px'}} />
      </div>
    )
  
}
export default Spinner;
