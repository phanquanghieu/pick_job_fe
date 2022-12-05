import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function HomeRoute() {
  return (
    <div className='bg-slate-100'>
      <Header/>
      <div className='h-screen'>
        <Routes>
          <Route path="/" element={<div />}></Route>
          <Route
            path="/company"
            element={<div className="h-[10000px]">compaay</div>}
          />
          <Route path="/company" element={<div>compaay</div>} />
        </Routes>
      </div>
      <div>Footer</div>
    </div>
  )
}

export default HomeRoute
