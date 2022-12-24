import { Dropdown, Menu } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import local from 'utils/local'

function Header() {
  const user = local.getUser()
  const navigate = useNavigate()
  const handleLogout = () => {
    local.clear()
    toast.success('Logout success')
    navigate('/')
  }
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
          <div className="flex items-center text-lg">
            {user ? (
              <Dropdown
                menu={{
                  items: [
                    {
                      key: '1',
                      label: (
                        <button className="w-full" onClick={handleLogout}>
                          Logout
                        </button>
                      ),
                    },
                  ],
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <div className="h-8 border rounded-full shadow-sm flex cursor-pointer">
                    <img
                      src="https://yt3.ggpht.com/PA1QUYdy1Fl3ZRupLkqUhhCjIzQ980gxYp57ADXkppKlXKp9064leNhurzLCi9o3y1KnlNt1=s108-c-k-c0x00ffffff-no-rj"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex items-center px-2">{user.email}</div>
                  </div>
                </a>
              </Dropdown>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
