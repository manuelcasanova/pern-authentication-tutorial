import { Fragment, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom"


//Components

import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';


function App() {

const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
