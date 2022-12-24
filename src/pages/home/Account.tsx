import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ProfileOutlined, SendOutlined } from '@ant-design/icons'
import Loader from 'components/Loader'
import local from 'utils/local'

function Account() {
  const user = local.getUser()
  const menus = [
    {
      label: 'Profile',
      to: 'profile',
      icon: ProfileOutlined,
    },
    {
      label: 'Applied Job',
      to: 'applied-job',
      icon: SendOutlined,
    },
  ]
  return (
    <div className="mt-6">
      <div className="flex space-x-6">
        <div className="w-1/4">
          <div className="p-4 rounded shadow bg-white">
            <div className="">
              <div className="h-11 rounded-full flex">
                <img
                  src="https://yt3.ggpht.com/PA1QUYdy1Fl3ZRupLkqUhhCjIzQ980gxYp57ADXkppKlXKp9064leNhurzLCi9o3y1KnlNt1=s108-c-k-c0x00ffffff-no-rj"
                  className="h-11 w-11 rounded-full"
                />
                <div className="flex text-lg items-center px-2 pl-4">
                  {user.full_name ?? user.email}
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              {menus.map((menu) => (
                <NavLink
                  to={menu.to}
                  key={menu.to}
                  className={({ isActive }) => (isActive ? 'selected' : '')}
                >
                  <div
                    className="relative px-1 mb-3 rounded-md cursor-pointer flex items-center text-slate-500
                    hover:bg-slate-100 hover:text-sky-500
                    selected:bg-sky-100 selected:text-sky-600 selected:font-medium"
                  >
                    <div className="w-10 h-10 flex justify-center items-center">
                      <menu.icon className="w-6 h-6 transition-all duration-300 collapsed:w-7 collapsed:h-7" />
                    </div>
                    <div
                      className="absolute left-12 ml-1 transition-all duration-300 origin-left
                      whitespace-nowrap collapsed:opacity-0 collapsed:scale-0"
                    >
                      {menu.label}
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <Suspense
            fallback={
              <div className="h-full w-full">
                <Loader />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Account
