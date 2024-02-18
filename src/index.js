import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import User from './components/User/User';
import GitHub from './components/GitHub/GitHub';
/*
const router = createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    {
      path:"",
      element:<Home />
    },
    {
      path:"/home",
      element:<Home />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Contact />
    }
  ]
}])
*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element= { <Home />} />
      <Route path="/about" element= { <About />} />
      <Route path="/contact" element= { <Contact />} />
      <Route path="/user/:name" element= { <User />} />
      <Route path="/github" element= { <GitHub />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
