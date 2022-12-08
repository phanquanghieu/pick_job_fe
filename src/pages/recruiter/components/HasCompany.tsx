import React from 'react'
import { Navigate } from 'react-router-dom'
import local from 'utils/local'

function HasCompany({ children }: any) {
  const user = local.getUser()

  if (!user.__company_id) return <Navigate to="/recruiter/profile" />
  return children
}

export default HasCompany
