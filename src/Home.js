import React, { useContext } from 'react'
import UserContext from './auth/UserContext';
import { Link } from 'react-router-dom'

function Home() {
   const { currentUser } = useContext(UserContext)

   console.debug("Homepage", "currentUser=", currentUser)

   return (
      <div>
         <div>
            <h1>Jobly</h1>
            <p>Let your job search begin here!</p>
            {currentUser ?
               <h2>Welcome Back, {currentUser.firstName || currentUser.username}! </h2>
               : (
                  <p>
                     <Link className="btn btn-primary font-weight-bold mr-3" to="/login">Log in
                     </Link>
                     <Link className="btn btn-primary font-weight-bold mr-3" to="/signup">Sign up
                     </Link>
                  </p>
               )
            }
         </div>
      </div>
   )
};

export default Home;