import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ProfileOutlined, SendOutlined } from '@ant-design/icons'

function Account() {
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
                  src="https://static.topcv.vn/user_avatars/trhwMHMXa5vt4sAkuq1H_630bcb93768d7_av.jpg"
                  className="h-11 w-11 rounded-full"
                />
                <div className="flex text-lg items-center px-2 pl-4">
                  phanquanghieu
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
          <div className="py-3 px-4 rounded shadow bg-white">
            <Suspense fallback={<div>load</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
