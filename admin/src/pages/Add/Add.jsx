import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
function Add() {
  return (
    <div className='add'>
      <form className="flex-col">
        <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={assets.upload_area} alt="" />
            </label>
            <input type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input type="text" name='name' placeholder='Enter Product Name' />      
        </div>
        <div className="add-product-description flex-col"></div>
      </form>
    </div>
  )
}

export default Add
