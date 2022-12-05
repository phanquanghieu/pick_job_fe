import { ConfigProvider } from 'antd'
import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RecruiterLayout = lazy(() => import('pages/recruiter/RecruiterLayout'))
const HomeLayout = lazy(() => import('pages/home/HomeLayout'))

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'rgb(14 165 233)',
        },
      }}
    >
      <BrowserRouter>
        <Suspense fallback={<div>load</div>}>
          <Routes>
            <Route path="*" element={<HomeLayout />} />
            <Route path="recruiter/*" element={<RecruiterLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
