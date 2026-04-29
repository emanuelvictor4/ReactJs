import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

// Componentes (páginas)
import Home from './Home'
import Animes from './Animes'
import Mangas from './Mangas'
import Personagens from './Personagens'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Cria as rotas para as páginas 
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'animes', element: <Animes /> },
      { path: 'mangas', element: <Mangas /> },
      { path: 'personagens', element: <Personagens /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)