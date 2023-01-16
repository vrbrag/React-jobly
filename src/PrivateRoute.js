import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import UserContext from './auth/UserContext'

function PrivateRoute({ exact, path, children }) {

   const { currentUser } = useContext(UserContext)
   console.debug(
      "PrivateRoute",
      "exact=", exact,
      "path=", path,
      "currentUser=", currentUser
   )

   // if no user auth, redirect to /login
   if (!currentUser) {
      return <Redirect to="/login" />
   }

   return (
      <Route exact={exact} path={path}>
         {children}
      </Route>
   )
}

export default PrivateRoute;