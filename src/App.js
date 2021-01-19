import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ChatRoom from "./ChatRoom";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={ChatRoom}></PrivateRoute>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
