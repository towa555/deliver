
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Service from './components/pages/Service'
import Signin from './components/pages/Signin'
import Login from './components/pages/Login'
import Error from './components/pages/Error'
import React from 'react';



function App() {
  return (

<Router>
<nav className='flex justify-center bg-slate-600 h-14 w-17 '>
  <div className='relative right-96 text-white text-lg'>logo</div>
  <div className='relative left-96'>
<Link  className='link' to='/'>Home</Link>
<Link className='link'  to='/about'>About</Link>
<Link className='link'  to='/contact'>Contact</Link>
<Link className='link'  to='/service'>Service</Link>
</div>
</nav>
<Routes>

<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />}/>
<Route path="/contact" element={<Contact />}/>
<Route path="/service" element={<Service />}/>
<Route path="/signin" element={<Signin />}/>
<Route path="/login" element={<Login />}/>
<Route path="*" element={<Error />}/>

</Routes>

 </Router>

  );
}

export default App;
