import React, { useState } from 'react'
import { Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import local from 'utils/local'
import { toast } from 'react-toastify'
import api from 'utils/api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    if (!email || !password) return toast.error('Enter email, password')

    let res = await api.post('/auth/login', { email, password })
    if (res.data?.error) return toast.error(res.data.message)
    if (res.data?.token) {
      local.setJwtToken(res.data.token)
      let userRes = await api.get('/users/profile')
      local.setUser(userRes?.data)
    }
    toast.success('Login success')
    navigate('/')
  }
  return (
    <div className="mt-20 flex justify-center items-center bg-slate-100">
      <div className="w-[500px] px-14 py-14 rounded-md shadow-md bg-white text-slate-700">
        <div className="mb-1 flex justify-center items-center font-bold text-3xl text-slate-700">
          Welcome to Pick Job!
        </div>
        <div className="mb-12 flex justify-center items-center ">
          Login to your Pick Job account
        </div>
        <div>
          <div className="pb-4">
            <div className="font-medium">Email</div>
            <Input
              type="email"
              required
              placeholder={'Enter email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pb-4">
            <div className="font-medium">Password</div>
            <Input
              type="password"
              required
              placeholder={'Enter Password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="w-full py-1 mb-2 bg-sky-500 text-white rounded shadow text-xl font-medium hover:shadow-md"
          >
            Login
          </button>
        </div>
        <div className="flex justify-center mt-4 text-sky-500">
          <Link to="/register">
            <div>Register</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
