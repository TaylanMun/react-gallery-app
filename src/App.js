import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import apiKey from './config';

const App = () => {
  return (
    <div className="container">
      <Switch>
        {/* If we dont select default search value, we can redirect like this
        <Route
          exact
          path="/"
          render={() => <Redirect to={`search/cats`} />}
        /> */}

        <Route exact path="/" render={() => <PhotoContainer apiKey={apiKey}/>} />
        <Route path="/search/:query" render={() => <PhotoContainer apiKey={apiKey}/>} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
