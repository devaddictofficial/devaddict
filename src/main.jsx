// Other Imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Styling Files
import './index.css'

// JSX Files
import App from './App.jsx'

// Root
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
