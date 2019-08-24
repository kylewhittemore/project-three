import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Home/Home";
import NewSeason from "./pages/NewSeason/NewSeason";
import Seasons from "./pages/Seasons/Seasons";
import Settings from "./pages/Settings/Settings";
import LogOut from "./pages/LogOut/LogOut";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DailyLog from './pages/DailyLog/DailyLog'
import Profile from "./pages/Profile/Profile";
import DailyLogs from './pages/DailyLogs/DailyLogs'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/newseason" component={NewSeason} />
        <Route exact path="/seasons" component={Seasons} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/logout" component={LogOut} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dailylog" component={DailyLog} />
        <Route exact path="/dailylogs" component={DailyLogs} />
      </div>
    </Router>
  );
};

export default App;
