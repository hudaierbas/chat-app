import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ChatRoom from "./ChatRoom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/chatroom" component={ChatRoom}></Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
