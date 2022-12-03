import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Admin = React.lazy(() => import('pages/admin'))
const Home = React.lazy(() => import('pages/home'))
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='tuyen-dung' element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
