import { Switch, Redirect } from "react-router-dom";
import AppRoute from "./hoc/appRoute";

// layouts
import LandingLayout from "./layouts/landing";

// pages
import { HomePage } from "./pages/home";
import { ResultPage } from "./pages/result";

function App() {
  return (
    <>
      <Switch>
        <AppRoute exact path='/' component={HomePage} layout={LandingLayout} />
        <AppRoute
          exact
          path='/result/:id'
          component={ResultPage}
          layout={LandingLayout}
        />

        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
