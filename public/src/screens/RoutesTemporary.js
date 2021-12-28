import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function RoutesTemporary() {
  return (
    <div classname="main">
      <Router>
        <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
          <li>
            <Link to="/main">main</Link>
          </li>
          <li>
            <Link to="/SingleTask">SingleTask</Link>
          </li>
          <li>
            <Link to="/TaskForm">TaskForm</Link>
          </li>
          
          
        </ul>

        </div>

      </Router>

    </div>
  );
}

export default RoutesTemporary;
