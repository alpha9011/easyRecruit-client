import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(


  <QueryClientProvider client={queryClient} >
    <AuthProvider>
      <React.StrictMode>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </React.StrictMode>
    </AuthProvider>
  </QueryClientProvider>
)
