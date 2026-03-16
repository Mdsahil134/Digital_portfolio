import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorOverlay } from './components/ErrorOverlay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorOverlay>
      <App />
    </ErrorOverlay>
  </StrictMode>,
)
