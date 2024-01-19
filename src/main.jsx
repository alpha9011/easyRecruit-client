import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
 </AuthProvider>
)
