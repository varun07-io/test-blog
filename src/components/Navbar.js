import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from '@mui/material'

export default function Navbar() {
  return (
    <div className='main' style={{border: "1px solid whitesmoke"}}>
        <Container>
            <div className='navbar' >
                <div className='nav'>
                    <Link to="/"  style={{ textDecoration: 'none',color: 'black'}}><p>Home</p></Link>
                    <Link to="/Admin"  style={{ textDecoration: 'none',color: 'black'}}><p>Admin</p></Link> 
                    <Link to="/Blogs" style={{ textDecoration: 'none',color: 'black' }}><p>Blogs</p></Link> 
                </div>
            </div>
        </Container>
    </div>
    )
}