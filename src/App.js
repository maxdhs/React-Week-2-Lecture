import React from "react";
import Sports from "./Sports";
import SportDetails from "./SportDetails";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    sports: [
      { id: 1, name: "Soccer", description: "Score a goal" },
      { id: 2, name: "Boxing", description: "punch a guy, KO" },
      { id: 3, name: "Wrestling", description: "pin a guy" }
    ]
  };
  render() {
    return (
      <>
        <Route
          path="/sports"
          render={() => <Sports sports={this.state.sports} />}
        />
        <Route
          path="/sports/:id"
          render={props => (
            <SportDetails sports={this.state.sports} {...props} />
          )}
        />
        <Redirect to="/sports" />
      </>
    );
  }
}

export default App;
