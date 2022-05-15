
import Axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

const ProductEdit = ( { tags, getCat, makeSlug } ) => {


  // form data manage
  const [inputs, setInputs] = useState({
    id : '',
    name : '',
    // slug : '',
    reg_price : '',
    sale_peice : '',
    desc : '',
    rating : '',
    categoryId : '',
    tagsId : '',
    photo : ''
  })

  // params
  const parms = useParams()
  let { id } = parms;

  // console.log(inputs);

  // get single product data 
  useEffect( () => {

    Axios.get('http://localhost:5050/products/'+ id ).then( res => {

      setInputs({
        name : res.data.name,
        reg_price : res.data. reg_price,
        sale_peice : res.data.sale_peice,
        desc : res.data.desc,
        rating : res.data.rating,
        categoryId : res.data.categoryId,
        tagsId : res.data.tagsId,
        photo : res.data.photo
      })
    })
  },[])

  // hadle form submit
  const handleProductEdit = (e) => {
    e.preventDefault()
    
    const slug = makeSlug(inputs.name)
    Axios.patch('http://localhost:5050/products/'+ id   ,{
      id : '',
      name : inputs.name,
      slug : slug,
      reg_price : inputs. reg_price,
      sale_peice : inputs.sale_peice,
      desc : inputs.desc,
      rating : Number(inputs.rating),
      categoryId : Number(inputs.categoryId),
      tagsId : Number(inputs.tagsId),
      photo : inputs.photo

    } ).then( res => {
      
      setInputs({
        id : '',
        name : '',
        slug : '',
        reg_price : '',
        sale_peice : '',
        desc : '',
        rating : '',
        categoryId : '',
        tagsId : '',
        photo : ''
      })
    })

  }



  return (
    <>
      <h1>Edit Product</h1>
      <hr />
      <Link to='/admin/products' className='btn btn-info btn-sm' >All Product</Link>     
      <hr />
      <Form onSubmit={ handleProductEdit}>
        <Form.Group >
          <Form.Label>Product Name</Form.Label>
          <Form.Control  type='text' value={ inputs.name} onChange={ e => setInputs({ ...inputs, name : e.target.value})} />
        </Form.Group>

        <Form.Group >
          <Form.Label>Regular Price</Form.Label>
          <Form.Control  type='text' value={ inputs.reg_price} onChange={ e => setInputs({ ...inputs, reg_price : e.target.value})} />
        </Form.Group>

        <Form.Group >
          <Form.Label>Sale Price</Form.Label>
          <Form.Control  type='text' value={ inputs.sale_peice} onChange={ e => setInputs({ ...inputs, sale_peice : e.target.value})} />
        </Form.Group>

        <Form.Group >
          <Form.Label>Short Description</Form.Label>
          <textarea className='form-control' value={ inputs.desc} onChange={ e => setInputs({ ...inputs, desc : e.target.value})} ></textarea>
          {/* <textarea className='form-control'  onChange={ e => setInputs({ ...inputs, desc : e.target.value})} >{ inputs.desc}</textarea> */}
        </Form.Group>

        <Form.Group >
          <Form.Label>Rating</Form.Label>
          <Form.Control  type='text' value={ inputs.rating} onChange={ e => setInputs({ ...inputs, rating : e.target.value})} />
        </Form.Group>

        <Form.Group >
          <Form.Label>Category</Form.Label>
          <select className='form-control' value={ inputs.categoryId } onChange={ e => setInputs({ ...inputs, categoryId : e.target.value})}>
            <option value="">-select-</option>
            {
              getCat.map( data => 
                <option value={data.id}>{ data.name }</option>
              )
            }
          </select>
        </Form.Group>

        <Form.Group >
          <Form.Label>Tags</Form.Label>
          <select className='form-control' value={ inputs.tagsId} onChange={ e => setInputs({ ...inputs, tagsId : e.target.value})}>
            <option value="">-select-</option>
            {
              tags.map( data => 
                <option value={data.id}>{ data.name }</option>
              )
            }
          </select>
        </Form.Group>
        <Form.Group >
          <Form.Label>Photo</Form.Label>
          <Form.Control  type='text' value={ inputs.photo} onChange={ e => setInputs({ ...inputs, photo : e.target.value})} />
        </Form.Group>
        <br/>
        <Form.Group >
          <Button type='submit' className='btn-sm' variant='primary' >Edit</Button>
        </Form.Group>
      </Form>

    </>
  )
}

export default ProductEdit;