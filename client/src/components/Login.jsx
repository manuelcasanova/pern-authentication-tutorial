import { Fragment } from "react"

export default function Login ({user, setUser}) {

const login = function () {
  console.log("login jsx user", user)
  setUser({ loggedIn: true });
}

  return (
    <Fragment>
    <h1>Login</h1>
    <button onClick={() => login()}>Authenticate</button>
  </Fragment>
  )
}