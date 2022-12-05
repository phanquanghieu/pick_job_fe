import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RecruiterRoute = lazy(() => import('pages/recruiter/RecruiterRoute'))
const HomeRoute = lazy(() => import('pages/home/HomeRoute'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomeRoute />} />
        <Route path="recruiter/*" element={<RecruiterRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
