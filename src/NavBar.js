import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
   return (
      <div>
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
                  <NavLink to="/user">User</NavLink>
               </NavItem>
               {/* <NavItem>
                  <NavLink to="/logout">Logout</NavLink>
               </NavItem>
               <NavItem>
                  <NavLink to="/login">Login</NavLink>
               </NavItem> 
               <NavItem>
                  <NavLink to="/signup">Signup</NavLink>
               </NavItem>  */}
            </Nav>
         </Navbar>
      </div>
   );
};

export default NavBar;