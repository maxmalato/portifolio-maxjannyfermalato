import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useThemeStore } from './store/useThemeStore.js'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

useThemeStore.getState().setInitialTheme()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster position='top-center' reverseOrder={false} />
  </StrictMode>,
)
