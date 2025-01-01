import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import Homepage from './Routes/Homepage.jsx'
import About from './Routes/About.jsx'

const routes = [
  {path:'/',
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<Homepage/>
      },
      {
        path:'/about',
        element:<About/>
      }
    ]
  }
]
const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
