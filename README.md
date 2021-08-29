yarn add react-router-dom react-redux redux redux-thunk node-sass styled-components @material-ui/core @material-ui/icons axios crypto-js react-hook-form redux-logger
@auth0/auth0-react

src
router
pages
store (redux)
components
service
utils
styles

Authenication - Auth0
https://manage.auth0.com/dashboard/us/dev-1hm8be00

1. Create application

2. Application setting > Application URIs >> Application Login URI ကို localhost အတွက်ထည့်စရာမလိုပါ

modified: src/components/Layout/Header.jsx
modified: src/pages/home/index.jsx
modified: src/router/route.config.jsx

        src/pages/profile/
        src/service/

modified Header, Route.config
Changes - Header (useAuth0) - const { loginWithRedirect, user, logout, isLoading, isAuthenticated } = useAuth0()
New - Header ( set localStorage ) - Profile, Service

// Auth Logout
  const handleLogout = () => {
    AuthStore.removeAuth()
    handleMenuClose()
    logout()
  }


<MenuItem onClick={handleMenuClose}>
  <NavLink to='/profile' className={classes.navLink}>My Profile</NavLink>
</MenuItem>
