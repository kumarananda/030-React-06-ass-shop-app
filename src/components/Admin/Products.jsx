import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = () => {



  return (
    <>
      <h1>Products</h1>
      <hr />
      <Link className='btn btn-primary btn-sm' to={'/admin/add-products'}>Add Product</Link>
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

export default Products