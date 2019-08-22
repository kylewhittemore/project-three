// import React from 'react';

// export default function App() {
    
//     return (
//         <>
//             <Test />
//         </>
//     )
// }
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './pages/UserSignup/UserSignup';
import HomePage from "./pages/Home/Home";
import NewSeason from "./pages/NewSeason/NewSeason";
import Seasons from "./pages/Seasons/Seasons";
import Settings from "./pages/Settings/Settings";
import LogOut from "./pages/LogOut/LogOut";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/test" component={Test} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/newseason" component={NewSeason} />
        <Route exact path="/seasons" component={Seasons} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/logout" component={LogOut} />
      </div>
    </Router>
  );
};

export default App;