import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TarjetaInfo } from './components/tarjetainfo/tarjetainfo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TarjetaInfo />
  </StrictMode>,
)
