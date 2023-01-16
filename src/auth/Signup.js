import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Alert from '../Alert'
import './Signup.css'

function Signup({ signup }) {
   const [formData, setFormData] = useState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
   })
   const [formErrors, setFormErrors] = useState([]);

   const history = useHistory()

   console.debug(
      "SignupForm",
      "signup=", typeof signup,
      "formData=", formData
   )

   async function handleSubmit(evt) {
      evt.preventDefault();
      let result = await signup(formData);
      if (result.success) {
         history.push("/companies");
      } else {
         setFormErrors(result.errors)
      }

   }

   function handleChange(e) {
      const { name, value } = e.target
      setFormData(field => ({ ...field, [name]: value }))
   }
   return (
      <div className="Signup">
         <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <h4>Signup</h4>
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
                     <div className="form-group">
                        <label>First Name</label>
                        <input
                           className="form-control"
                           id="firstName"
                           type="text"
                           name="firstName"
                           placeholder="first name"
                           value={formData.firstName}
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label>Last Name</label>
                        <input
                           className="form-control"
                           id="lastName"
                           type="text"
                           name="lastName"
                           placeholder="last name"
                           value={formData.lastName}
                           onChange={handleChange}
                           required
                        />
                     </div>
                     <div className="form-group">
                        <label>Email</label>
                        <input
                           className="form-control"
                           id="email"
                           type="text"
                           name="email"
                           placeholder="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                        />
                     </div>

                     {formErrors.length
                        ? <Alert type="danger" messages={formErrors} />
                        : null
                     }
                     <button className="btn btn-success font-weight-bold mr-3" type="submit">Signup</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
};

export default Signup;