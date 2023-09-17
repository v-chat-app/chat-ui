import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AdminLandingPage from './Pages/AdminLandingPage';
import AppLanding from './Pages/AppLandingPage';
import './App.css';

const App = () => {
  return (
    <Router>
        <div className="App">
        <Routes>
                <Route exact path='/' element={< AppLanding />}></Route>
                <Route exact path='/manage' element={< AdminLandingPage />}></Route>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
