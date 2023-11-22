import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js';



import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'
import ListarCadastro from './routes/ListarCadastros.jsx'



const router= createBrowserRouter([
  
  {
    path: '/', element: <App/>, 

    children:[
      {path: '/', element: <Home/>},
      {path: '/Login', element: <Login/>},
      {path: '/Cadastro', element: <Cadastro/>},
      {path: '/listarCadastro', element: <ListarCadastro/>},
      {path: '/incluir/', element:<Cadastro/>},
      {path: '/editar/:id',element:<Cadastro/>},
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
