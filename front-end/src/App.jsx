import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CheckoutPage from './pages/CheckoutPage'
import Orders from './pages/Orders'
import './App.css'
import TrackingPage from './pages/TrackingPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App
