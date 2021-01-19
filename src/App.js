import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ChatRoom from "./ChatRoom";
<<<<<<< HEAD
import PrivateRoute from "./PrivateRoute";
=======
>>>>>>> 3bce3e3203184b14dec8c97e5563c472cac2d810

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <AuthProvider>
            <Switch>
<<<<<<< HEAD
              <PrivateRoute exact path="/" component={ChatRoom}></PrivateRoute>
              <Route path="/login" component={Login}></Route>
              <Route path="/signup" component={SignUp}></Route>
=======
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/chatroom" component={ChatRoom}></Route>
>>>>>>> 3bce3e3203184b14dec8c97e5563c472cac2d810
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
