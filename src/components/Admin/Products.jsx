import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = ( {product} ) => {

  // console.log(product);


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

            <td>Action</td>
          </tr>

        </thead>
        <tbody>
          {
            product.map((data, index) => 
            <>
              <tr>
                <td>{ index + 1 }</td>
                <td>{ data.name}</td>

                <td>
                  <Button variant='info' className='btn-sm '>View</Button>
                  <Link to={`/admin/edit-products/${data.id}`}   className='btn-sm btn-warning btn '>Edit</Link>
                  <Button variant='danger' className='btn-sm '>Delete</Button>
                </td>
              </tr>
            </>

            )
          }

          
        </tbody>
      </Table>
    
    
    </>
  )
}

export default Products;