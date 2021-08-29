import React, { Suspense } from 'react'
import { Route, Switch } from "react-router-dom"
import RouteConfig from './route.config'

const ProtectedRoute = (props) => {
  // <Route {...props} />
  // console.log("protected")
}

const RouteList = () => (
  <Switch>
    {RouteConfig.map((route, key) => (
      route.protect ? (
        <ProtectedRoute path={route.path} component={route.component} key={key} />
      ) : (
        <Route exact path={route.path} component={route.component} key={key} />
      )
    ))}
  </Switch>
)

const Router = () => {
  return (
    <Suspense fallback='Loading ...'>
      <RouteList />
    </Suspense>
  )
}

export default Router
