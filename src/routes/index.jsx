import { Switch, Route } from "react-router-dom";
import Registration from "../pages/Registration";
import Home from "../pages/Home";

const Routes = ({ username, setUsername }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Registration setUsername={setUsername} />
      </Route>
      <Route path="/home/:user">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
