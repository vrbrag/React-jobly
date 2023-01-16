import React, { useState, useContext } from 'react'
import JoblyApi from './api';
import UserContext from './auth/UserContext';
import { Card, CardBody } from 'reactstrap'
import Alert from './Alert'
import './Profile.css'

function Profile() {
   const { currentUser, setCurrentUser } = useContext(UserContext)
   console.debug(
      "Profile",
      "currentUser=", currentUser
   )
   const [formData, setFormData] = useState({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      username: currentUser.username,
      password: "",
   })
   const [saveSuccess, setSaveSuccess] = useState(false)
   const [formErrors, setFormErrors] = useState([])
   console.debug(
      "Profile",
      "currentUser=", currentUser,
      "formData=", formData,
      "formErrors=", formErrors,
      "saveSuccess=", saveSuccess
   )

   async function handleChange(e) {
      const { name, value } = e.target
      setFormData(data => ({ ...data, [name]: value }))
      setFormErrors([])
   }

   async function handleSubmit(e) {
      e.preventDefault()
      let profileData = {
         firstName: formData.firstName,
         lastName: formData.lastName,
         email: formData.email,
         password: formData.password
      }

      let username = formData.username;
      let updatedData;
      try {
         updatedData = await JoblyApi.updateProfile(username, profileData)
      } catch (e) {
         setFormErrors(e)
         return
      }

      setFormData(data => ({ ...data, password: "" }))
      setFormErrors([])
      setSaveSuccess(true)
      setCurrentUser(updatedData)
   }

   return (
      <div className="Profile col-md-6 col-lg-4 offset-md-3 offset-lg-4" >
         <h3 className="list-title">Profile</h3>

         <Card className="card">
            <CardBody className="card-body">
               <form>
                  <div className="form-group">
                     <label>Username</label>
                     <p>{formData.username}</p>
                  </div>
                  <div className="form-group">
                     <label>First Name</label>
                     <p>{formData.firstName}</p>
                     <input
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="form-group">
                     <label>Last Name</label>
                     <p>{formData.lastName}</p>
                     <input
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="form-group">
                     <label>Email</label>
                     <p>{formData.email}</p>
                     <input
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                     />
                  </div>
                  <div className="form-group">
                     <label>Confirm password to save changes:</label>
                     <input
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                     />
                  </div>
                  {formErrors.length
                     ? <Alert type="danger" messages={formErrors} />
                     : null}

                  {saveSuccess
                     ?
                     <Alert type="success" messages={["Updated successfully."]} />
                     : null}

                  <button className="btn btn-success font-weight-bold mr-3" onClick={handleSubmit} type="submit">Save Changes</button>
               </form>
            </CardBody>
         </Card>
      </div>
   )
};

export default Profile;