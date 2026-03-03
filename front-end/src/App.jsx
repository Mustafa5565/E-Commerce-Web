import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import CheckoutPage from './pages/CheckoutPage'
import Orders from './pages/Orders'
import './App.css'
import TrackingPage from './pages/TrackingPage'

function App() {
  const[cart , setCart]= useState([])

  useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
      .then((response)=>{
        console.log(response.data)
          setCart(response.data);
      })
      .catch((err)=>{
          console.error('Failed to fetch cart items', err);
         
      });
  },[])
    
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage cart={cart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App
