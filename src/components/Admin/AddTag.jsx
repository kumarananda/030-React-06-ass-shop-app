import React, { useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddTag = () => {

  const [tag, setTagname] = useState()


  
  return (

    <>
      <h1>Add New Tag</h1>
      <hr />
      <Link  className='btn btn-success btn-sm' to={'/admin/tag'}>All Tags</Link>
      <hr />
      <Form>
        <Form.Group my={3}>
          <Form.Control type='text' placeholder='Tag Name'/>
        </Form.Group>
        <Form.Group my={3}>
          <Button variant='primary' className='btn-sm' >Add</Button>
        </Form.Group>
      </Form>
    
    
    </>
  )
}

export default AddTag