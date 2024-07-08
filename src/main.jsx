import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Recycle from './components/Recycle/Recycle.jsx';
import Login from './components/Login/login.jsx';
import Register from './components/Register/register.jsx';
import Details from './components/Detail/detail.jsx';
import Footer from './components/Footer/index.jsx';
import CartToBuy from './components/CartToBuy/cart.jsx';
import Cart from './components/Cart/cart.jsx';
import Admin from './components/Admin/admin.jsx';
import Item from './components/Item/item.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/recycle",
    element: <Recycle/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/detail",
    element: <Details/>
  },
  {
    path: "/cart",
    element: <CartToBuy/>
  },
  {
    path: "/cart2",
    element: <Cart/>
  },
  {
    path: "/admin",
    element: <Admin/>
  },
  {
    path: "/item",
    element: <Item/>
  },
  {
    path: "/footer",
    element: <Footer/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
