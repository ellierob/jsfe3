// inside .js extensioned component file: App.js

// in JSX, you import css instead of using link element
import './App.css';
// import dotenv from 'dotenv'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'


import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import AddBooks from './pages/AddBooks/AddBooks.jsx'
import FundMe from './pages/FundMe/FundMe.jsx'



// one function for one component
// i.e. one replicating design

import { useState } from 'react';

function App() {
  const url =
    // 'http://192.168.0.6:3004/';
    // import.meta.env.VITE_APP_BACKEND_URL;
    import.meta.env.REACT_APP_BACKEND_URL;
  // process.env.REACT_APP_BACKEND_URL;
  // process.env.BACKEND_URL;
  // 'http://172.18.0.3:3002/';
  // 'http://114.31.1.70:53004/';
  // 'http://10.14.123.155:53004/';
  // 'http://10.160.58.232:53004/';
  // 'http://192.168.2.2:3004/';
  // 'http://192.168.2.2:3005/';
  // 'http://172.21.156.57:3001/';
  // 'http://127.0.0.1:3001/';
  // 'http://localhost:3001/';
  // 'http://localhost:3005/';
  // 'http://172.20.0.2:3005/';
  // 'http://172.17.0.3:3005/';
  // 'http://172.17.0.0:3005/';
  // 'http://172.17.0.1:3005/';
  // 'http://mongoxp:3004/';
  // 'http://172.18.0.3:3005/';
  // 'http://172.19.0.2:3005/';
  // 'mongoxp://mongoxp:3004/';
  // const [name, setUname] = useState("root");
  // const [password, setPss] = useState("example");

  console.log(`url:`, url);

  const [creds, setCreds] = useState({ name: '', password: '', email: '', phone: '' });
  const [root, setRoot] = useState(localStorage.getItem('stat') || 'login');
  const login = (<Login root={root} setRoot={setRoot} url={url} creds={creds} setCreds={setCreds} />);
  const home = (<Home root={root} setRoot={setRoot} url={url} creds={creds} setCreds={setCreds} />);
  const roots = {
    login: login,
    matches: home,
    // failed: Login
    wrong: login
  }
  return (
    /* function can return only one element object, 
    so all elements need to be nested inside one element*/
    <div className="app">
      {/* all react-router elements must be inside browser router element */}
      <BrowserRouter>
        <nav className='nav'>
          {/* converts navlink react-dom element to html a element 
          to option converts into hyperlink*/}
          {/* <NavLink to='/'>Login</NavLink> */}
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Signup</NavLink>
          {/* <NavLink to='/home'>Home</NavLink> */}
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/add-book'>Add Book</NavLink>
          <NavLink to='/fund-me'>Fund Me</NavLink>
        </nav>
        {/* path converts connects hyperlink to page element/component */}
        <Routes>
          {/* <Route path='/login' element={<Login url={url} 
          name={name} password={password} setUname={setUname}
          creds={creds} setCreds={setCreds}
          />}/> */}
          {/* <Route path='/' element={<Login url={url} name={name} password={password}/>}/> */}
          <Route path='/signup' element={<Signup root={root} setRoot={setRoot} url={url} creds={creds} setCreds={setCreds} />} />
          <Route path='/' element={
            roots[root]
            // root!=='matches'? 
            // (<Login
            //   root={root} setRoot={setRoot}
            //   url={url} 
            //   // name={name} password={password} setUname={setUname}
            //   creds={creds} setCreds={setCreds}
            // />):(<Home
            //   root={root} setRoot={setRoot}
            //   url={url}
            //   // name={name} password={password} setUname={setUname}
            //   creds={creds} setCreds={setCreds}
            // />)
          }
          />
          {/* <Route path='/home' element={<Home name={name} password={password}/>} /> */}
          <Route path='/login' element={
            roots['login']
            // <Login
            // root={root} setRoot={setRoot}
            // url={url} 
            // // name={name} password={password} setUname={setUname}
            // creds={creds} setCreds={setCreds}
            // />
          }
          />
          <Route path='/about' element={<About />} />
          <Route path='/add-book' element={<AddBooks />} />
          <Route path='/fund-me' element={<FundMe setRoot={setRoot} url={url} creds={creds} setCreds={setCreds} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

// default export
export default App
