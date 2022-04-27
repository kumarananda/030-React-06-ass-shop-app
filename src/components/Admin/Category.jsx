
import React from 'react'
import { Table, Button } from 'react-bootstrap'

const Category = () => {
  return (
    <>
      <h1>Category</h1>
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