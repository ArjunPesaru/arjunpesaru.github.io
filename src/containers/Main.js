import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Splash from "../pages/splash/Splash";
import SinglePage from "../pages/singlePage/SinglePage";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <SinglePage {...props} theme={this.props.theme} />
              )
            }
          />
          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}
          <Route
            path="*"
            render={(props) => (
              <SinglePage {...props} theme={this.props.theme} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
