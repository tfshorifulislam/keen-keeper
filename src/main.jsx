import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './router/Router.jsx'
import FriendContext from './friendContext/FriendContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendContext>
      <RouterProvider router={router} />
    </FriendContext>
  </StrictMode>,
)
