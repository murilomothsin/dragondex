import React from "react"
import { useSelector } from "react-redux"
import Login from "src/pages/Login"

const AuthProvider = ({ component: Component, ...props }) => {
  const { access_token } = useSelector(state => state.user)

  if (!access_token) {
    return <Login />
  }

  return <Component {...props} />
}

export default AuthProvider
