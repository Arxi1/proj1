import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Myapp from './Myapp';
import Welcome from './Welcome';
import './index.css'
import App from './App.jsx'
import Myapp from './Myapp.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './Welcome.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='p001'>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="app" element={<App />} />
      <Route path="myapp" element={<Myapp />} />
    </Routes>
  </BrowserRouter>
);