import React, { useEffect, useState } from 'react'
import Login from './auth/Login'
import Register from './auth/Register'
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Text,
} from '@chakra-ui/react'
import "./App.css"

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoPython,
} from "react-icons/io"
import {
  SiSvelte,
  SiSwift,
  SiFirebase,
  SiVisualstudiocode,
  SiReact,
  SiVueDotJs,
  SiGnubash,
  SiAmazonaws,
  SiJavascript
} from "react-icons/si"

import {auth} from "./firebase-config"
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  })

  const navigate = useNavigate()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser((e) => ({...e, username: user.displayName}))
        setUser((e) => ({...e, email: user.email}))
      } else {setUser("")}
    })
  }, [])

  const logout = () => {
    signOut(auth).then(() => {
      setUser("")
      navigate("/login")
    })
  }
  
  return (
    <div>
      <button onClick={logout}>logout</button> <br />
      {user.email} <br />
      {user.username}
    </div>
  );
}

export default App;
