import React from 'react'
import ReactDom from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'

function Main() {
  return (
<BrowserRouter>
<ul>
    <li>
        <Link to='/home' >Home</Link>
    </li>
    <li>
        <Link to='/about' >About</Link>
    </li>
    <li>
        <Link to='/contact' >Contact</Link>
    </li>
</ul>

<Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
</Routes>

</BrowserRouter>
  )
}

ReactDom.createRoot(document.getElementById('main')).render(<Main />);
