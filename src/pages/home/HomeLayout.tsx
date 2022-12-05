import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

const Home = lazy(() => import('pages/home/Home'))
const Company = lazy(() => import('pages/home/Company'))
const Job = lazy(() => import('pages/home/Job'))

function HomeLayout() {
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="min-h-screen w-full max-w-5xl m-auto">
        <Suspense fallback={<div>load</div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/company" element={<Company />} />
            <Route path="/job/:jobId" element={<Job />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout
