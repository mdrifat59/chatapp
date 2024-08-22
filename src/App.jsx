import React from 'react' 
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Registration from './page/Registration'
import 'react-toastify/dist/ReactToastify.css';
import Login from './page/Login';
import Home from './page/Home'; 
import LoggedInUserRoute from './PrivateRoute/LoggedInUser';
import NotLoggedInUserRoute from './PrivateRoute/NotLoggedInUser';

function App() {  
  let router = createBrowserRouter( 
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedInUserRoute/>}>
        <Route path='/' element={<Home/>}></Route>
        </Route>
        <Route element={<NotLoggedInUserRoute/>}>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        </Route>
      </Route>
    )
  ) 

  return (
    <>
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
