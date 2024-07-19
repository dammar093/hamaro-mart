import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { Home, Login, Search, Signup, Cart, Categories, Category, Shop, About, Contact, Product, Profile, PageNotFund, Orders } from "./pages"
import store from './store/store.js'
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
          element: <Categories />
        },
        {
          path: "category/:category",
          element: <Category />
        },

        {
          path: "products",
          element: <Shop />
        },
        {
          path: "product/:id",
          element: <Product />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
