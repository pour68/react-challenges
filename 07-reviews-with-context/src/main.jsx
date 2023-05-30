import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import { SlideProvider } from './contexts/SlideContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SlideProvider>
      <App />
    </SlideProvider>
  </React.StrictMode>,
)
