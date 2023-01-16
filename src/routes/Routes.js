import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../Home'
import CompanyDetails from '../companies/CompanyDetails';
import Profile from '../Profile'
import Login from '../auth/Login'
import Signup from '../auth/Signup'
import CompanyList from '../companies/CompanyList';
import JobList from '../jobs/JobList';
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