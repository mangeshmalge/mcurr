import React from 'react'
import { Link } from 'react-router-dom'

export default function Task() {
  return (
    <div className='container'> 
      <Link to="/career">
      <button className='btn btn-success me-2'>Career</button>
      </Link>
      <Link to="/aboutus">
      <button className='btn btn-success me-2'>About us</button>
      </Link>
      <Link to="/task2">
      <button className='btn btn-success me-2'>task2</button>
      </Link>
    </div>
  )
}
