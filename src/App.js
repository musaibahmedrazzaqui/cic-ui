import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/signin";
import {
  CertificationsPage1,
  CertificationsPage2,
  CertificationsPage3,
  CertificationsPage4,
  CertificationsPage5,
  CertificationsPage6,
  CertificationsPage7,
  CertificationsPage8,
  CertificationsPage9,
  CertificationsPage10,
} from "./pages/certifications";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />

        <Route path="/signup/student" component={SignupPage} exact />

        <Route
          path="/certifications/iso90012015"
          component={CertificationsPage1}
          exact
        />
        <Route
          path="/certifications/iso140012015"
          component={CertificationsPage2}
          exact
        />
        <Route
          path="/certifications/iso450012018"
          component={CertificationsPage3}
          exact
        />
        <Route
          path="/certifications/iso270012022"
          component={CertificationsPage4}
          exact
        />

        <Route
          path="/certifications/iso223012019"
          component={CertificationsPage5}
          exact
        />

        <Route
          path="/certifications/iso134852016"
          component={CertificationsPage6}
          exact
        />

        <Route
          path="/certifications/iso310002018"
          component={CertificationsPage7}
          exact
        />
        <Route
          path="/certifications/iso220002018"
          component={CertificationsPage8}
          exact
        />
        <Route
          path="/certifications/fssc22000"
          component={CertificationsPage9}
          exact
        />
        <Route
          path="/certifications/haccp"
          component={CertificationsPage10}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
