import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Home/Home";
import NewSeason from "./pages/NewSeason/NewSeason";
import Seasons from "./pages/Seasons/Seasons";
// import Settings from "./pages/Settings/Settings";
import LogOut from "./pages/LogOut/LogOut";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
import DailyLog from './pages/DailyLog/DailyLog'
import Profile from "./pages/Profile/Profile";
import DailyLogs from './pages/DailyLogs/DailyLogs'
import Landing from './pages/Landing/Landing'
// import StaticForm from './components/StaticForm/StaticForm'
import StaticHeaderPage from './pages/StaticHeaderPage/StaticHeaderPage'
import Images from './pages/Images/Images'
import isAuth from './utils/isAuth.js'
import './styles/main.scss';
import componentQueries from "react-component-queries";
import { MainLayout, LayoutRoute, EmptyLayout } from './components/Layout';

isAuth();

class App extends React.Component {
  render(){

  

  return (
    <Router>
      <Switch>

        <LayoutRoute
          exact path="/"
          layout={EmptyLayout}
          component={props => <Landing {...props} />}
        />
        <LayoutRoute
          exact path="/logout"
          layout={EmptyLayout}
          component={props => <LogOut {...props} />}
        />

        <MainLayout breakpoint={this.props.breakpoint}>

          <div>
            <Route
              exact path="/home"
              render={props => <HomePage {...props} />}
            />
            <Route
              exact path="/newseason"
              render={props => <NewSeason {...props} />}
            />
            <Route
              exact path="/seasons"
              render={props => <Seasons {...props} />}
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
              exact path="/staticheader"
              render={props => <StaticHeaderPage {...props} />}
            />
            <Route
              exact path="/images"
              render={props => <Images {...props} />}
            />
          </div>
        </MainLayout>

      </Switch>
    </Router>
  );
  };
};

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
