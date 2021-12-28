import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
import Register from './screens/Register'
import Main from './screens/Main'
import TaskForm from './screens/TaskForm'
import SingleTask from './screens/SingleTask'
import RoutesTemporary from './screens/RoutesTemporary';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <div>
     <NavbarComponent />
      <Router>
        <div>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/main">
              <Main />
            </Route>
            <Route exact path="/SingleTask">
              <SingleTask />
            </Route>
            <Route exact path="/TaskForm">
              <TaskForm />
            </Route>
            <Route exact path="/">
              <RoutesTemporary />
            </Route>
            
          </Switch>
        </div>

      </Router>

    </div>
  );
}

export default App;
