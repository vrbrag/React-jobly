import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import List from './List';
import CompanyDetails from './CompanyDetails';
import Profile from './Profile'
import Login from './Login'
import Signup from './Signup'

function Routes() {

   return (
      <div>
         <NavBar />
         <div className="main">
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/companies">
               <List type="companies" />
            </Route>
            <Route exact path="/jobs">
               <List type="jobs" />
            </Route>
            <Route exact path="/companies/:handle">
               <CompanyDetails />
            </Route>
            <Route exact path="/profile">
               <Profile />
            </Route>
            <Route exact path="/login">
               <Login />
            </Route>
            <Route exact path="/signup">
               <Signup />
            </Route>
         </div>

      </div>
   )
};

export default Routes;