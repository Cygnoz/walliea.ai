import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RegistrationProvider } from './context/RegistrationContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RegistrationProvider>
      <App />
    </RegistrationProvider>
  </StrictMode>,
)
