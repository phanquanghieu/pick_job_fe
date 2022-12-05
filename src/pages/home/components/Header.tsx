import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="h-12 shadow bg-white bg- sticky top-0">
      <div className="w-full h-full max-w-5xl m-auto">
        <div className="w-full h-full flex justify-between items-center">
          <div className="h-full flex items-center">
            <div>
              <div className="text-sky-500 text-xl font-bold italic">
                PICK JOB
              </div>
            </div>
            <div className='flex'>
              <Link to='/'><div className='px-5 py-2 flex items-center'>Job</div></Link>
              <Link to='/company'><div className='px-5 py-2 flex items-center'>Company</div></Link>
              <Link to='/job'><div className='px-5 py-2 flex items-center'>Profile</div></Link>
            </div>
          </div>
          <div>ddd</div>
        </div>
      </div>
    </div>
  )
}

export default Header
