import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from './NavBar';
import Home from './Home'
import Companies from './Companies';
import Jobs from './Jobs';
import User from './User';

function Routes() {

   return (
      <div>
         <NavBar />
         <div className="main">
            <Route exact path="/">
               <Home />
            </Route>
            <Route exact path="/companies">
               <Companies />
            </Route>
            <Route exact path="/jobs">
               <Jobs />
            </Route>
            <Route exact path="/user">
               <User />
            </Route>
         </div>

      </div>
   )
};

export default Routes;