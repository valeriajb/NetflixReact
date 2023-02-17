import React, {useState,useContext}from 'react'
import {LoginContext} from '../context/contextLogin';
import { Navigate } from 'react-router-dom'

function PrivateRouter({children}) {
  const {isPermission}=useContext(LoginContext)
  return (
    isPermission?children:<Navigate to="/login"/>
  )
}

export default PrivateRouter