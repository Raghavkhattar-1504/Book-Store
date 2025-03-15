import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './pages/Homepage'
import ForgotPassword from './components/ForgotPassword'
import BookDetail from './components/BookDetail'
import OrderPlaced from './components/OrderPlaced'
import LoggedOut from './components/LoggedOut'
import Wishlist from './components/Wishlist'
import MyOrders from './components/MyOrders'
import MyCart from './components/MyCart'
const RouterModule = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/home',
      element: <Homepage />,
    },
    {
      path: '/forgotpassword',
      element: <ForgotPassword />
    },
    {
      path: '/bookdetail',
      element: <BookDetail />
    },
    {
      path: '/orderplaced',
      element: <OrderPlaced />
    },
    {
      path: '/loggedout',
      element: <LoggedOut />
    },
    {
      path: '/wishlist',
      element: <Wishlist />
    },
    {
      path: '/myorders',
      element: <MyOrders />
    },
    {
      path: '/mycart',
      element: <MyCart />
    }

  ])



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default RouterModule
