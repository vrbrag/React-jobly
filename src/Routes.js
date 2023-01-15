import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'

import CompanyDetails from './CompanyDetails';
import Profile from './Profile'
import Login from './Login'
import Signup from './Signup'
import CompanyList from './CompanyList';
import JobList from './JobList';

function Routes({ login, signup }) {


   return (
      <div>

         <div className="main">
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/companies">
               <CompanyList />
            </Route>
            <Route exact path="/jobs">
               <JobList />
            </Route>
            <Route exact path="/companies/:handle">
               <CompanyDetails />
            </Route>
            <Route exact path="/profile">
               <Profile />
            </Route>
            <Route exact path="/login">
               <Login login={login} />
            </Route>
            <Route exact path="/signup">
               <Signup signup={signup} />
            </Route>
         </div>

      </div>
   )
};

export default Routes;