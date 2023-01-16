import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import JoblyApi from './api';
import NavBar from './NavBar';
import UserContext from './UserContext'
import jwt from "jsonwebtoken";


export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [applicationIds, setApplicationIds] = useState(new Set([]))
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)

  console.debug(
    "App",
    "currentUser=", currentUser,
    "token=", token,
  );

  useEffect(function getUserInfo() {
    console.log("App getUserInfo", "token=", token)

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token)

          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (e) {
          console.error("App getUserInfo error loading", e);
          setCurrentUser(null);
        }
      }

    }
    getCurrentUser()
  }, [token])

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData)
      setToken(token)
      return { succes: true }
    } catch (e) {
      console.error("signup failed", e)
      return { success: false, e }
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData)
      setToken(token)
      return { success: true }
    } catch (e) {
      return { success: false, e }
    }
  }

  async function logout() {
    setCurrentUser(null)
    setToken(null)
  }

  // Check if job 'id' is in 'applicationIds' state 
  function hasAppliedToJob(id) {
    console.debug("User applicationIds", applicationIds)
    return applicationIds.has(id)
  }
  // API call to apply to job
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
          <div className="App">
            <NavBar logout={logout} />
            <Routes login={login} signup={signup} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
