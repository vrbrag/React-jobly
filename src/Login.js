import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login({ login }) {
   const [formData, setFormData] = useState({
      username: "",
      password: ""
   })
   const history = useHistory()

   async function handleSubmit(e) {
      e.preventDefault()
      let result = await login(formData)
      if (result.success) {
         history.push("/companies")
      }
   }

   function handleChange(e) {
      const { name, value } = e.target
      setFormData(field => ({ ...field, [name]: value }))
   }

   return (
      <div className="Login">
         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h4>Login</h4>
            <div className="card">
               <div className="card-body">
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label>Username</label>
                        <input
                           className="form-control"
                           id="username"
                           type="text"
                           name="username"
                           placeholder="username"
                           value={formData.username}
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input
                           className="form-control"
                           id="password"
                           type="text"
                           name="password"
                           placeholder="password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                        />
                     </div>


                     <button type="submit">Login</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Login;