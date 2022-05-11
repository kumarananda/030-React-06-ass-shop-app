
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ProductAdd = ( { tags, getCat } ) => {

  //slug Genarete
  const makeSlug = (data) => {
    let arr = data.split(' ');
    return arr.join('-').toLowerCase();
  }











  return (
    <>
      <h1>Add New Product</h1>
      <hr />
      <Link to='/admin/products' className='btn btn-info btn-sm' >All Product</Link>     
      <hr />
      <Form>
        <Form.Group >
          <Form.Label>Product Name</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group >
          <Form.Label>Regular Price</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group >
          <Form.Label>Sale Price</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group >
          <Form.Label>Short Description</Form.Label>
          <textarea className='form-control'></textarea>
        </Form.Group>

        <Form.Group >
          <Form.Label>Rating</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group >
          <Form.Label>Category</Form.Label>
          <select className='form-control'>
            <option value="">-select-</option>
            {
              getCat.map( data => 
                <option value={data.name}>{ data.name }</option>
              )
            }
          </select>
        </Form.Group>

        <Form.Group >
          <Form.Label>Tags</Form.Label>
          <select className='form-control'>
            <option value="">-select-</option>
            {
              tags.map( data => 
                <option value={data.name}>{ data.name }</option>
              )
            }
          </select>
        </Form.Group>
      </Form>

    </>
  )
}

export default ProductAdd;