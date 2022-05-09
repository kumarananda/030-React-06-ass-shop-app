import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tag = () => {

  const [tags, setTags] = useState([]); 

// console.log(tags);
  // get data 
  useEffect( () => {
    console.log(tags);
    axios.get('http://localhost:5050/tags').then( res => {
      setTags( res.data);
    })
  },[tags]);

  
  return (
    <>
      <h1>Tag</h1>
      <hr />
      <Link  className='btn btn-success btn-sm' to='/admin/add-tag'>Add New tag</Link>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
 

          {
            tags.map( (data, index) => 
            
            <tr>
            <td>#</td>
            <td>Men</td>
            <td>men</td>
            <td>
              <Button variant='info' className='btn-sm '>View</Button>
              <Button variant='' className='btn-warning btn-sm '>Edit</Button>
              <Button variant='danger' className='btn-sm '>Delete</Button>
            </td>
          </tr>
            
            
             )
          }
         


        </tbody>
        <tbody></tbody>
      </Table>
    
    
    </>
  )
}

export default Tag;