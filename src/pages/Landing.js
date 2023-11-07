import React from 'react'
import Navbar from '../components/Navbar'
import Admin from '../admin/Admin'
export default function Landing() {
  return (
    <div>
        <Navbar />
        <h1 className='land-text'>Blog</h1>
        <Admin />
    </div>
  )
}
