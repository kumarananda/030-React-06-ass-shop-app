
import axios from 'axios';
import React, {  useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ProductAdd = ( { tags, getCat, makeSlug } ) => {


  // form data manage
  const [inputs, setInputs] = useState({
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

  // console.log(inputs);

  // hadle form submit
  const handleProductAdd = (e) => {
    e.preventDefault()
    
    const slug = makeSlug(inputs.name)
    axios.post('http://localhost:5050/products', {
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
      <h1>Add New Product</h1>
      <hr />
      <Link to='/admin/products' className='btn btn-info btn-sm' >All Product</Link>     
      <hr />
      <Form onSubmit={ handleProductAdd}>
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
          <Button type='submit' className='btn-sm' variant='primary' >Add Now</Button>
        </Form.Group>
      </Form>

    </>
  )
}

export default ProductAdd;