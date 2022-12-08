import React from 'react'
import { ProfileOutlined, SendOutlined } from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'
import local from 'utils/local'

function Sidebar() {
  const user = local.getUser()
  const menus = [
    {
      label: 'Company Profile',
      to: 'profile',
      icon: ProfileOutlined,
    },
  ]
  if (user.__company_id) {
    menus.push(
      {
        label: 'Jobs',
        to: 'job',
        icon: SendOutlined,
      },
      {
        label: 'Candidate',
        to: 'candidate',
        icon: SendOutlined,
      }
    )
  }
  return (
    <div className="p-4">
      <div className="flex justify-center">
        <Link to="/">
          <div className="px-2 text-sky-500 text-xl font-bold italic border-dashed border-4 border-sky-500 rounded-md">
            PICK JOB <span className="text-xs text-violet-500">RECRUITER</span>
          </div>
        </Link>
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
  )
}

export default Sidebar
