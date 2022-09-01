import { useState } from 'react'
import './App.scss'
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PostsPage from './Components/PostsPage';
import UsersPage from './Components/UsersPage';
import UserProfile from './Components/UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <h1>My Face</h1>
      <nav>
        <a href="/">Home</a>
        |
        <a href="/posts">Posts</a>
        |
        <a href="/users">Users</a>
      </nav>
      <Routes>
        <Route path="/posts" element={<PostsPage/>}/>
        <Route path="/users"> 
          <Route index
            element={<UsersPage/>}/>
          <Route path=":userId" 
            element={<UserProfile/>}/>
        </Route>
    </Routes>
    </Router>
  ) 
        
}

export default App
