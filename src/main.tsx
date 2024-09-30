import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './pages/ProductContext.tsx'
import App from './App.tsx'
import './index.scss'
import AuthContext from './pages/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <AuthContext>
        <ProductContext>
          <App />
        </ProductContext>
      </AuthContext>
    </StrictMode>
  </BrowserRouter>,
)
