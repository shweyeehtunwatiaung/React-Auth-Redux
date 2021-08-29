import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { loginWithRedirect, user, logout, isLoading, isAuthenticated } = useAuth0()

  return (
    <div>
      <button onClick={() => loginWithRedirect}>Click</button>
    </div>
  )
}

export default Home
