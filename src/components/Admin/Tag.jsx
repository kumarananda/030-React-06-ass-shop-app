import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tag = () => {

  //slug Genarete
  const makeSlug = (data) => {
    let arr = data.split(' ');
    return arr.join('-').toLowerCase();
  }

  // edit tag state
  const [tag, setTag] = useState({
    name : '',
    id : ''
  });

  const [tagupdateform, setTagupdateform] = useState(false);

  // tag state
  const [tags, setTags] = useState([]); 

// console.log(tags);
  // get data 
  useEffect( () => {

    axios.get('http://localhost:5050/tags').then( res => {
      setTags( res.data);
    })
  },[tags]);

  // tag delete 
  const handlTagDelete = (id) => {
    axios.delete('http://localhost:5050/tags/' + id)
  }

  //tag edit
  const handlTagEdit = (id) => {
    setTagupdateform(true)
    axios.get('http://localhost:5050/tags/' + id).then(res => {
      setTag({
        name : res.data.name,
        id : res.data.id,
      });
      

    }

    )
  }


//  console.log(tag.id);
  // Edit Form Submit 
  const handleUdateForm = (e) => {
    e.preventDefault();

    let slug = makeSlug(tag.name);

    axios.patch('http://localhost:5050/tags/' + tag.id, {
      name : tag.name,
      slug : slug
    }).then(
      setTagupdateform(false)
    ).catch(err => {
      console.log(err);
    }
      
    )

  }

  
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
            <td>{ index +1 }</td>
            <td>{ data.name }</td>
            <td>{ data.slug }</td>
            <td>
              <Button onClick={ () => handlTagEdit(data.id)} variant='' className='btn-warning btn-sm '>Edit</Button>
              <Button onClick={ () => handlTagDelete(data.id)} variant='danger' className='btn-sm '>Delete</Button>
            </td>
          </tr>
            
            
             )
          }
        </tbody>
        <tbody></tbody>
      </Table>
      {
        tagupdateform && 
        <>
          <h3>Edit tag data</h3>
          <hr />
          <Form onSubmit={handleUdateForm } >
            <Form.Group className='my-3'>
              <Form.Control value={tag.name} onChange={ e => setTag({...tag, name : e.target.value}) }  type='text' placeholder='Tag Name'/>
            </Form.Group>
            <br />
            <Form.Group className=' my-3'>
              <Button  type='submit' variant='success' className='btn-sm' >Udate</Button>
            </Form.Group>
          </Form>
        </>
      }

    </>
  )
}

export default Tag;