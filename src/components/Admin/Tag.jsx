import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tag = () => {
  return (
    <>
      <h1>Tag</h1>
      <hr />
      <Link  className='btn btn-success btn-sm' to={'/admin/add-tag'}>Add New tag</Link>
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

export default Tag