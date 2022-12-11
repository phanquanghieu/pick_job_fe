import React, { lazy, Suspense } from 'react'
import { ConfigProvider } from 'antd'
import HasAuth from 'components/HasAuth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Loader from 'components/Loader'
import 'react-toastify/dist/ReactToastify.css'

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
        <Suspense
          fallback={
            <div className="h-screen w-screen">
              <Loader />
            </div>
          }
        >
          <Routes>
            <Route path="*" element={<HomeLayout />} />
            <Route
              path="recruiter/*"
              element={
                <HasAuth>
                  <RecruiterLayout />
                </HasAuth>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover={false}
      />
    </ConfigProvider>
  )
}

export default App
