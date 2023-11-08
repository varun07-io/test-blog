import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'


export default function Landing() {
  return (
    <div>
      <Navbar />
      <h1 className='land-text'>Blogs</h1> 
      <Cards />
    </div>
  )
}
