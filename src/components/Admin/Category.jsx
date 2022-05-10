
import axios from 'axios';
import React, { useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'

const Category = () => {

    //slug Genarete
    const makeSlug = (data) => {
      let arr = data.split(' ');
      return arr.join('-').toLowerCase();
    }

  // category Form state
  const [categoryForm, setCategoryForm ] = useState(false);

  // handle Add form
  const handleAddform = () => {
    setCategoryForm(true)
  }

  // input category data
  const [category, setCategory] = useState({
    name : '',
    id : '',
    slug : ''
  });

  // Category  add handle
  const handleCatAddSubmit = (e) => {
    e.preventDefault();

    if(category.name === ''){
      alert('empty')
    }else {

    let slug = makeSlug(category.name)
    axios.post('http://localhost:5050/category', {
      id : '',
      name : category.name,
      slug : slug
    }).then(res => {
      setCategory({
        name : ''
      })
      setCategoryForm(false)
    }).catch(err => {
      console.log(err);
    })
    }

  }  




  return (
    <>
      <h1>Category</h1>
      
      <Button onClick={handleAddform} className='btn btn-info btn-sm' >Add New tag</Button>
      <hr />
      {
        categoryForm && 
        <>
        
          <Form onSubmit={handleCatAddSubmit} >
            <Form.Group className='my-3'>
              <Form.Control value={category.name}  onChange={ e => setCategory({ ...category, name : e.target.value})}  type='text' placeholder='Category Name'/>
            </Form.Group>
            <br />
            <Form.Group className=' my-3'>
              <Button  type='submit' variant='success' className='btn-sm' >Add</Button>
            </Form.Group>
          </Form>
        </>
      }
      <hr />
      <Table>
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Slug</td>
            <td>Action</td>
          </tr>

        </thead>
        <tbody>
          <td>1</td>
          <td>Men</td>
          <td>men</td>
          <td>
            <Button variant='info' className='btn-sm '>View</Button>
            <Button variant='warning' className='btn-sm '>Edit</Button>
            <Button variant='danger' className='btn-sm '>Delete</Button>
          </td>
        </tbody>
      </Table>
    
    
    </>
  )
}

export default Category