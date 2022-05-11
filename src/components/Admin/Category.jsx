
import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
    setTagEditform(false)
  }

  // input category data
  const [category, setCategory] = useState({
    name : '',
    id : '',
    slug : ''
  });

  // get category data
  const [getCat, setGetCat] = useState([]);


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

  // get category data
  useEffect( () => {
    axios.get('http://localhost:5050/category').then( res => {
      setGetCat(res.data)
    })
  }, [ getCat ])

  // delete category
  const haldleCatDelete = (id) => {
    axios.delete('http://localhost:5050/category/' + id )
  }

  // show/hide edit form
  const [tagEditform, setTagEditform] = useState(false);

  // category Edit
  const haldleCatEditForm = (id) => {
    setTagEditform(true)
    setCategoryForm(false)

    axios.get('http://localhost:5050/category/' + id).then( res => {
      setCategory({
        name : res.data.name,
        id : res.data.id
      })
    }) 

  }

  //Edit form Submit
  const handleEditformSubmit = (e) => {
    e.preventDefault()

    let slug = makeSlug(category.name)

    axios.patch('http://localhost:5050/category/' + category.id, {
      name : category.name,
      slug : slug
    }).then( res => {
      setTagEditform(false)
      setCategory({
        name : '',
        id : ''
      })
    }).catch( err => {
      console.log(err);
    })

  }


  return (
    <>
      <h1>Category</h1>
      <Button onClick={ handleAddform } className='btn btn-info btn-sm' >Add New tag</Button>     
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

          {
            getCat.map((data, index) => 
              <>
                <tr>
                  <td>{ index + 1 }</td>
                  <td>{ data.name}</td>
                  <td>{ data.slug}</td>
                  <td>
                    <Button onClick={() => haldleCatEditForm(data.id)} variant='warning' className='btn-sm '>Edit</Button>
                    <Button onClick={() => haldleCatDelete(data.id)} variant='danger' className='btn-sm '>Delete</Button>
                  </td>
                </tr>
              </>
            )
          }
          
        </tbody>
      </Table>
        { 
          tagEditform && 
          <>
            <Form onSubmit={ handleEditformSubmit } >
              <Form.Group className='my-3'>
                <Form.Control value={category.name}  onChange={ e => setCategory({ ...category, name : e.target.value})}  type='text' placeholder='Category Name'/>
              </Form.Group>
              <br />
              <Form.Group className=' my-3'>
                <Button  type='submit' variant='info' className='btn-sm' >Udate</Button>
              </Form.Group>
            </Form>
          </>
        }
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
      
    
    
    </>
  )
}

export default Category