import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Task2() {
    const [val, setval] = useState("")
    const handleclick1 = () => {
        setval("Hi")
    }
    const handleclick2 = () => {
        setval("Hello")
    }
  return (
    <div className='container mt-2'>
          
            <button className='btn btn-primary me-2' onClick={handleclick1} >1</button>  
          
            <button className='btn btn-primary' onClick={handleclick2}>2</button>  
          
          <h2>{val}</h2>
    </div>
  )
}
