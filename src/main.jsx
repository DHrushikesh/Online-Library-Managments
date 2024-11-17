import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import HomePage from './Component/HomePage.jsx'
import './index.css'
import App from './App.jsx'
import BrowseBooks from './Component/BrowseBooks.jsx'
import AddBooks from './Component/AddBooks.jsx'
import CatergorisedBooks from './Component/CategorisedBooks.jsx'
import ErrorTemplete from './Component/ErrorTemplete.jsx'
import BookDetails from './Component/BookDetails.jsx'

export const route = createBrowserRouter(
[
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element : <HomePage/>,
      },
      {
        path: "/BrowseBooks",
        element:<BrowseBooks/>
      },
      {
        path:"/AddBooks",
        element:<AddBooks/>
      },
      {
        path:"/Genre/:categories",
        element: <CatergorisedBooks/>
      },
      {
        path:"/Books/:id",
        element:<BookDetails/>
      }
    ],
    errorElement:<ErrorTemplete/>
  }
]
)

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
