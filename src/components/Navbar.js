import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from '@mui/material'

export default function Navbar() {
  return (
    <div className='main' style={{border: "1px solid whitesmoke"}}>
        <Container>
            <div className='navbar' >
                <div className='nav'>
                    <p>Admin</p>
                    <p>Blogs</p>
                </div>
            </div>
        </Container>
    </div>
    )
}