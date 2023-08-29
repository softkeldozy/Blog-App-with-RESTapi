import React from 'react';
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/Write/Write";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* if user is present go to home else login page */}
        <Route path='/login' element={user ? <Home /> : <Login />} />
        {/* if user is present go to home else register page */}
        <Route path='/register' element={user ? <Home /> : <Register />} />
        {/* if user is present go to settings page else register page */}
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        {/* if user is present go to write else register page */}
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/post/:postid' element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
