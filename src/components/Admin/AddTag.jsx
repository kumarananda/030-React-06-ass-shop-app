
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddTag = () => {

  const [tags, setTags] = useState();

  //slug Genarete
  const makeSlug = (r) => {
    let arr = r.split(' ');
    return arr.join('-').toLowerCase();
  }
  console.log(makeSlug('My name is Asraf'));

  // useEffect(() => {
  //   Axios.post('http://localhost:5050/tags', { 
  //     id : '',
  //     name : tags,
  //     slug : makeSlug(tags)
  //   })
  // },[])



  
  return (

    <>
      <h1>Add New Tag</h1>
      <hr />
      <Link  className='btn btn-primary btn-sm' to={'/admin/tag'}>All Tags</Link>
      <hr />
      <Form>
        <Form.Group my={3}>
          <Form.Control value={tags} onChange={e => setTags(e.target.value) }  type='text' placeholder='Tag Name'/>
        </Form.Group>
        <Form.Group my={3}>
          <Button type='submit' variant='success' className='btn-sm' >Add</Button>
        </Form.Group>
      </Form>
    
    
    </>
  )
}

export default AddTag