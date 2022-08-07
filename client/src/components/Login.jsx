import { Fragment } from "react"

export default function Login ({useAuth}) {
  return (
    <Fragment>
    <h1>Login</h1>
    <button onClick={() => useAuth(true)}>Authenticate</button>
  </Fragment>
  )
}