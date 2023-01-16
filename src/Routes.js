import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './Home'

import CompanyDetails from './CompanyDetails';
import Profile from './Profile'
import Login from './Login'
import Signup from './Signup'
import CompanyList from './CompanyList';
import JobList from './JobList';
import PrivateRoute from './PrivateRoute';

function Routes({ login, signup }) {


   return (


      <div className="main">
         <Route exact path="/">
            <Home />
         </Route>

         <Route exact path="/login">
            <Login login={login} />
         </Route>

         <Route exact path="/signup">
            <Signup signup={signup} />
         </Route>

         <PrivateRoute exact path="/companies">
            <CompanyList />
         </PrivateRoute>

         <PrivateRoute exact path="/jobs">
            <JobList />
         </PrivateRoute>

         <PrivateRoute exact path="/companies/:handle">
            <CompanyDetails />
         </PrivateRoute>

         <PrivateRoute exact path="/profile">
            <Profile />
         </PrivateRoute>

         <Redirect to="/" />
      </div>

   )
};

export default Routes;