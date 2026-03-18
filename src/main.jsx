import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Analytics } from '@vercel/analytics/react'; // 1. Added this import

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics /> {/* 2. Added the component here */}
  </React.StrictMode>,
)