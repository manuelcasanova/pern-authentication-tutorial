import { Fragment, useState, createContext } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Redirect, UNSAFE_RouteContext } from "react-router-dom"
import ProtectedRoutes from './components/ProtectedRoutes';

//Components

import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

export const UserContext = createContext()

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const useAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <UserContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <Fragment>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login useAuth = {useAuth} />} />
              <Route path="/register" element={<Register useAuth = {useAuth}/>} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard useAuth = {useAuth}/>} />
              </Route>
            </Routes>
          </div>
        </Router>
      </Fragment>
    </UserContext.Provider>

  );
}

export default App;
