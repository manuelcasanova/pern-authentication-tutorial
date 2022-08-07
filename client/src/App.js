import { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"


//Components

import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';


function App() {
  return (
    <Fragment>
      <Router>
        <Dashboard />
        <Login />
        <Register />
      </Router>
    </Fragment>
  );
}

export default App;
