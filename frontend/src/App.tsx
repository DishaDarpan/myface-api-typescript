import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import PostsPage from './Components/PostsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <h1>My Face</h1>
      <Routes>
        <Route path= "/posts" element ={<PostsPage/>}/>

    </Routes>
    </Router>
  ) 
        
}

export default App
