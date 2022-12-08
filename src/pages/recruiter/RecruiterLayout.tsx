import Footer from 'components/Footer'
import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const Profile = lazy(() => import('pages/recruiter/Profile'))
const Job = lazy(() => import('pages/recruiter/Job'))
const Candidate = lazy(() => import('pages/recruiter/Candidate'))

function RecruiterLayout() {
  return (
    <div className="h-screen bg-slate-100 p-4 flex space-x-6">
      <div className="w-1/5 bg-white rounded-md shadow">
        <Sidebar />
      </div>
      <div className="w-4/5 rounded-md overflow-auto">
        <Suspense fallback={<div>load</div>}>
          <Routes>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />}></Route>
            <Route path="job" element={<Job />}></Route>
            <Route path="candidate" element={<Candidate />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default RecruiterLayout
