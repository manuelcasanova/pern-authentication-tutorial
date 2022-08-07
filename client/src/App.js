import { Fragment, useState, createContext } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProtectedRoutes from './components/ProtectedRoutes';

//Components

import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';

export const UserContext = createContext()

function App() {

  const [user, setUser] = useState({ loggedIn: false });


  return (
    <UserContext.Provider value={{user, setUser}}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login user={user} setUser={setUser} />} />
              <Route path="/register" element={<Register user={user} setUser={setUser}/>} />
              <Route element={<ProtectedRoutes user={user} setUser={setUser} />}>
                <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser}/>} />
              </Route>
            </Routes>
          </div>
        </Router>
    </UserContext.Provider>

  );
}

export default App;
