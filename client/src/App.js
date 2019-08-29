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
// import StaticForm from './components/StaticForm/StaticForm'
// import StaticHeaderPage from './pages/StaticHeaderPage'
import Images from './pages/Images/Images'
// import './utils/interceptors.js'
// import './utils/isAuth.js'
import isAuth from './utils/isAuth.js'
isAuth();

function App() {

  return (
    <Router>
      <div>
        <Route
          exact path="/"
          render={props => <Login {...props} />}
        />
        <Route
          exact path="/home"
          render={props => <HomePage {...props} />}
        />
        <Route
          path="/newseason"
          render={props => <NewSeason {...props} />}
        />
        <Route
          exact path="/seasons"
          render={props => <Seasons {...props} />}
        />
        <Route
          exact path="/settings"
          render={props => <Settings {...props} />}
        />
        <Route
          exact path="/logout"
          render={props => <LogOut {...props} />}
        />
        <Route
          exact path="/register"
          render={props => <Register {...props} />}
        />
        <Route
          exact path="/profile"
          render={props => <Profile {...props} />}
        />
        <Route
          path="/dailylog"
          render={props => <DailyLog {...props}
          />}
        />
        <Route
          exact path="/dailylogs"
          render={props => <DailyLogs {...props} />}
        />
        <Route
          exact path="/images"
          render={props => <Images {...props} />}
        />
      </div>
    </Router>
  );
};

export default App;
