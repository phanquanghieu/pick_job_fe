import React from 'react'
import { Input } from 'antd'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="mt-20 flex justify-center items-center bg-slate-100">
      <div className="w-[500px] px-14 py-14 rounded-md shadow-md bg-white">
        <div className="mb-1 flex justify-center items-center font-bold text-3xl text-slate-700">
          Welcome to Pick Job!
        </div>
        <div className="mb-12 flex justify-center items-center text-slate-700">
          Register your Pick Job account
        </div>
        <div>
          <div className="pb-4">
            <div className="font-medium">Email</div>
            <Input type="email" required placeholder={'admin'} />
          </div>
          <div className="pb-4">
            <div className="font-medium">Password</div>
            <Input type="password" required placeholder={'admin'} />
          </div>
          <div className="pb-6">
            <div className="font-medium">Confirm password</div>
            <Input type="password" required placeholder={'admin'} />
          </div>
          <button
            type="button"
            className="w-full py-1 mb-2 bg-sky-500 text-white rounded shadow text-xl font-medium hover:shadow-md"
          >
            Register
          </button>
        </div>
        <div className="flex justify-center mt-4 text-sky-500">
          <Link to="/login">
            <div>Login</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
