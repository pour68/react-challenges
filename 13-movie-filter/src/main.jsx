import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { GenreProvider } from './contexts/GenreContext.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';
import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieProvider>
      <GenreProvider>
        <App />
      </GenreProvider>
    </MovieProvider>
  </React.StrictMode>,
)
