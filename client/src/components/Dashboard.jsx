import { Fragment } from "react"

export default function Dashboard ({setAuth}) {
  return (
    <Fragment>
      <h1>Dashboard</h1>
      <button onClick={() => setAuth(false)}>Logout</button>
    </Fragment>
  )
}