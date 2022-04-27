import React from 'react'
import { Col, Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css'

const Dashbord = () => {
  return (
    <section className="dash my-5">
      <Container>
        <Col md={3}>
           <ul className="dash-menu" >
              <li className='list-group-item' ><Link to="/admin">Dashbord</Link></li>
             <li className='list-group-item' ><Link to="/admin/products">Products</Link></li>
             <li className='list-group-item' ><Link to="/admin/category">Category</Link></li>
             <li className='list-group-item' ><Link to="/admin/tag">Tags</Link></li>
             <li className='list-group-item' ><a href='#'>Logout</a></li>
           </ul>
        </Col>
        <Col md={9}>

          <Outlet/>
          
        </Col>
      </Container>
    </section>
  )
}

export default Dashbord;