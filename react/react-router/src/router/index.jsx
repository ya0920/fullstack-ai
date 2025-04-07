import { BrowserRouter, Routes, Route, useRoutes, redirect } from 'react-router-dom';
import { lazy } from 'react'

// import Layout from '../pages/layout/Layout.jsx';
// import Home from '../pages/home/Home.jsx';
// import NotFound from '../pages/404/Index.jsx';

const Layout = lazy(() => import('../pages/layout/Layout.jsx'))
const Home = lazy(() => import('../pages/home/Home.jsx'))
const NotFound = lazy(() => import('../pages/404/Index.jsx'))


const routesList = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  }
]

function WrapperRoutes() {
  let elememt = useRoutes(routesList)   // <Route path='' element={}></Route>
  return elememt
}

export default WrapperRoutes