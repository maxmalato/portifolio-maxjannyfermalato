import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useThemeStore } from './store/useThemeStore.js'
import App from './App.jsx'
import 'boxicons/css/boxicons.min.css'
import 'devicon/devicon.min.css'
import './index.css'

useThemeStore.getState().setInitialTheme()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
