import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from 'components/Footer'
import Header from './components/Header'
import HasAuth from 'components/HasAuth'
import Loader from 'components/Loader'

const Home = lazy(() => import('pages/home/Home'))
const Company = lazy(() => import('pages/home/Company'))
const Job = lazy(() => import('pages/home/Job'))
const Login = lazy(() => import('pages/home/Login'))
const Register = lazy(() => import('pages/home/Register'))
const Account = lazy(() => import('pages/home/Account'))
const Profile = lazy(() => import('pages/home/Profile'))
const AppliedJob = lazy(() => import('pages/home/AppliedJob'))

function HomeLayout() {
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="min-h-screen w-full max-w-5xl m-auto">
        <Suspense
          fallback={
            <div className="h-screen w-screen">
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/company/:companyId" element={<Company />} />
            <Route path="/job/:jobId" element={<Job />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/account"
              element={
                <HasAuth>
                  <Account />
                </HasAuth>
              }
            >
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<Profile />} />
              <Route path="applied-job" element={<AppliedJob />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout
