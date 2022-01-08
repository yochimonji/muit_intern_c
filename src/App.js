import { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home, Message, Room, SignIn } from "./page";
import { Header } from "./components";

export const UserContext = createContext();

const App = () => {
  const [currentUserId, setCurrentUserId] = useState("");

  return (
    <UserContext.Provider value={currentUserId}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/message" component={Message} exact />
          <Route path="/room" component={Room} exact />
          <Route path="/signin" exact>
            <SignIn setCurrentUserId={setCurrentUserId} />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
