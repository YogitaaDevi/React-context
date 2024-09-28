import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './pages/ProductContext.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <ProductContext>
        <App />
      </ProductContext>
    </StrictMode>
  </BrowserRouter>,
)
