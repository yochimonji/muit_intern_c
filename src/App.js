import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home, Message, Room, SignIn } from "./page";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>
            <li>
              <Link to="/message">Message</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/message" component={Message} exact />
          <Route path="/room" component={Room} exact />
          <Route path="/signin" component={SignIn} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
