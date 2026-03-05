import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Header from '../../components/Header.jsx'

import './Homepage.css'

const Homepage = () => {

  const[products ,setProducts]= useState([])
  const[cart , setCart] =useState([])
  
  // fetch('http://localhost:3000/api/products')
  // .then((response)=>{
  //   response.json().then((data)=>{
  //     console.log(data)
  //   })
  // })
 useEffect(()=>{
   axios.get('/api/products')
  .then((response)=>{
    setProducts(response.data)
  })
  .catch((err)=>{
    console.error('Failed to fetch products', err);
  });

 },[])
  

  useEffect(() => {
    document.title = 'HomePage';
  }, []);

  
  return (
    <div>
      <Header cart={cart} />
    <div className="home-page">
     
    </div>
    </div>
  )
}

export default Homepage