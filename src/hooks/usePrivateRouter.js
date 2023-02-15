import React, {useState}from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRouter({children,isUser}) {
  const [stateUser, setStateUser] = useState(false);
  return (
    stateUser?{children}:<Navigate to="/login"/>
  )
}

export default PrivateRouter