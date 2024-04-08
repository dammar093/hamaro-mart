import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Search from './pages/Search.jsx'
import Category from './pages/Category.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from "./pages/Profile.jsx"
import Orders from './pages/Orders.jsx'
import PageNotFund from './PageNotFound.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "signup",
          element: <Signup />
        },
        {
          path: "search/:q",
          element: <Search />
        },
        ,
        {
          path: "categories",
          element: <Category />
        },
        {
          path: "categories/:category",
          element: <Category />
        },

        {
          path: "products",
          element: <Shop />
        },
        {
          path: "products/:id",
          element: <Shop />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "order",
          element: <Orders />
        },
        {
          path: "*",
          element: <PageNotFund />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
