import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
       {/* <Router> */}
       <Navbar/>
       
       
       <Routes>
         <Route path="/" element={<News country = "in" category = "general"/>}/>
         {/* <Route path="/" element={<News country = "in" category = "general"/>}/> */}
          <Route path="/General" element={<News country = "in"category = "general"/>}/>
          <Route path="/Business" element={<News country = "in"category = "Business"/>}/>
          <Route path="/Entertainment" element={<News country = "in"category = "Entertainment"/>}/>
          <Route path="/Health" element={<News country = "in"category = "Health"/>}/>
          <Route path="/Science" element={<News country = "in"category = "Science"/>}/>
          <Route path="/Sports" element={<News country = "in"category = "Sports"/>}/>
          <Route path="/Technology" element={<News country = "in"category = "Technology"/>}/>
        </Routes>
       {/* </Router> */}
      </div>
      
    )
  }
}

