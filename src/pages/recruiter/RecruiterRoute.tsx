import React from 'react'
import { Route, Routes } from 'react-router-dom'

function RecruiterRoute() {
  return (
    <Routes>
      <Route path="/" element={<div />}></Route>
      <Route path="/company" element={<div >rec</div>} />
    </Routes>
  )
}

export default RecruiterRoute
