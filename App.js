import React,{useState,useEffect} from 'react';
import './App.css';
import  Navbar  from './Component/Navbar';
import Header from './Component/Header';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import {css} from "@emotion/core";
import  PropagateLoader  from 'react-spinners/PropagateLoader';

function App() {
  const[loading,setLoading]=useState(false);
  const override=css`
  display:block;
  border-color:red;
  margin-top:20%;
  `;
  useEffect(()=>{
   setLoading(true)
   setTimeout(()=>{
   setLoading(false)
   },2000);
  },[]);
  
  return(
    <>
    <div className='App'>
      
        loading ? <PropagateLoader color={"#3d2514"} Loading={loading} css={override} size={40}/>
      
    </div>
    <Navbar/>
    <Header/>
    <Product/>
    <About/>
    <Contact/>
    </>
  );
  }
export default App;
