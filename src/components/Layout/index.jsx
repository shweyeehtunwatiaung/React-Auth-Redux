import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PagesRoute from '../../router/router'

const Layout = () => {
  return (
    <BrowserRouter>
      <Header />
        <main>
          <PagesRoute />
        </main>
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
