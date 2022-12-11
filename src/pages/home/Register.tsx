import React, { useState } from 'react'
import { Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from 'utils/api'
import local from 'utils/local'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword || password !== confirmPassword)
      return toast.error('Invalid Parameter')
    let res = await api.post('/auth/register', { email, password })
    if (res.data?.error) return toast.error(res.data.message)
    if (res.data?.token) {
      local.setJwtToken(res.data.token)
      let userRes = await api.get('/users/profile')
      local.setUser(userRes?.data)
    }
    toast.success('Register success')
    navigate('/')
  }
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
          <div className="pb-6">
            <div className="font-medium">Confirm password</div>
            <Input
              type="password"
              required
              placeholder={'Confirm Password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleRegister}
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
