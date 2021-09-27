import { Switch, Route } from "react-router-dom";
import Registration from "../pages/Registration";
import Home from "../pages/Home";

const Routes = ({ name, setName }) => {
  return (
    <Switch>
      <Route path="/">
        <Registration setName={setName} />
      </Route>
      <Route exact path="/home/:user">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
