import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Subfooter from './Subfooter.jsx'
import Datafetch from './Datafetch.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/subfooter" element={<Subfooter/>}/>
      <Route path="/data" element={<Datafetch/>}/>
      
    </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)
