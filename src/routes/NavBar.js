import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from '../auth/UserContext';

function NavBar({ logout }) {
   const { currentUser } = useContext(UserContext)
   console.debug("NavBar", "currentUser=", currentUser)

   function loggedInNav() {
      return (
         <div className="navbar-nav ml-auto">
            <Navbar expand="md">
               <NavLink exact to="/" className="navbar-brand">
                  Jobly
               </NavLink>

               <Nav className="mr-auto" navbar>
                  <NavItem>
                     <NavLink to="/jobs">Jobs</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/companies">Companies</NavLink>
                  </NavItem>
               </Nav>
               <Nav className="ml-auto" navbar>
                  <NavItem>
                     <NavLink to="/profile">Profile</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/" onClick={logout}>Logout {currentUser.first_name || currentUser.username} </NavLink>
                  </NavItem>
               </Nav>
            </Navbar>
         </div>
      )
   }

   function loggedOutNav() {
      return (
         <div className="navbar-nav ml-auto">
            <Navbar expand="md">
               <NavLink exact to="/" className="navbar-brand">
                  Jobly
               </NavLink>

               <Nav className="mr-auto" navbar>
                  <NavItem>
                     <NavLink to="/login">Login</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink to="/signup">Signup</NavLink>
                  </NavItem>
               </Nav>
            </Navbar>
         </div>
      )
   }


   return (
      <nav>
         {currentUser ? loggedInNav() : loggedOutNav()}
      </nav>
   )
};

export default NavBar;