import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignInSide from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Student from "./components/Student/Layout/StudentLayout";
import MenuState from "./context/Menu/MenuState";
function App() {
  return (
    <>
      <MenuState>
        <Router>
          <Switch>
            <Route exact path="/" component={SignInSide} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route exact path="/student" component={Student} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </MenuState>
    </>
  );
}

export default App;
