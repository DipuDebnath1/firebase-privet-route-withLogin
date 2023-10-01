import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/pathrouter.jsx/Path'
import Authprovider from './AuthProvider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authprovider>
         <RouterProvider router={router}></RouterProvider>
      </Authprovider>
  </React.StrictMode>,
)
