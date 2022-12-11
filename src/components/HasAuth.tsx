import React from 'react'
import { Navigate } from 'react-router-dom'
import local from 'utils/local'

function HasAuth({ children }: any) {
  const jwtToken = local.getJwtToken()

  if (!jwtToken) return <Navigate to="/login" />
  return children
}

export default HasAuth
