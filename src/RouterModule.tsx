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
import MyCartPage from './pages/MyCartPage'
import WishlistPage from './pages/WishlistPage'
import BookDetailPage from './pages/BookDetailPage'
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
      path: '/bookdetails/:bookId',
      element: <BookDetailPage />
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
      element: <WishlistPage />
    },
    {
      path: '/myorders',
      element: <MyOrders />
    },
    {
      path: '/mycart',
      element: <MyCartPage />
    }

  ])



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default RouterModule
