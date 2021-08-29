import Home from '../pages/home'
import About from '../pages/about'
import NotFound from '../pages/result/notFound'

const Routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '*',
    component: NotFound
  },
]

export default Routes