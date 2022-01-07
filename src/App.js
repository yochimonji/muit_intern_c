import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home, Message, Room, SignIn } from "./page";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/message" component={Message} exact />
        <Route path="/room" component={Room} exact />
        <Route path="/signin" component={SignIn} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
