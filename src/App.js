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
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID)
  // const [infoLoaded, setInfoLoaded] = useState(false);
  console.debug(
    "App",
    // "infoLoaded=", infoLoaded,
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
          let currentUser = await JoblyApi.getCurrentUser(username)
          setCurrentUser(currentUser)
        } catch (e) {
          console.error("App getUserInfo error loading", e)
          setCurrentUser(null)
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

  return (
    <div>
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
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
