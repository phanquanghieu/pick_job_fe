import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="h-12 shadow bg-white bg- sticky top-0 z-50">
      <div className="w-full h-full max-w-5xl m-auto">
        <div className="w-full h-full flex justify-between items-center">
          <div className="h-full flex items-center">
            <div>
              <Link to="/">
                <div className="mr-3 px-2 text-sky-500 text-xl font-bold italic border-dashed border-4 border-sky-500 rounded-md">
                  PICK JOB
                </div>
              </Link>
            </div>
            <div className="flex text-lg">
              <Link to="/recruiter">
                <div className="px-3 py-2 flex items-center hover:text-sky-500">
                  Recruiter
                </div>
              </Link>
              <Link to="/company">
                <div className="px-3 py-2 flex items-center hover:text-sky-500">
                  Company
                </div>
              </Link>
              <Link to="/account">
                <div className="px-3 py-2 flex items-center hover:text-sky-500">
                  Profile
                </div>
              </Link>
            </div>
          </div>
          <div className='flex items-center text-lg'>
            <Link to="/login">
              <div className="px-3 py-2 flex items-center hover:text-sky-500">
                Login
              </div>
            </Link>
            <Link to="/register">
              <div className="px-3 py-2 flex items-center hover:text-sky-500">
                Register
              </div>
            </Link>
            <div className="h-8 bg-slate-100 rounded-full shadow flex">
              <img
                src="https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg"
                className="h-8 w-8 rounded-full"
              />
              <div className="flex items-center px-2">phanquanghieu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
