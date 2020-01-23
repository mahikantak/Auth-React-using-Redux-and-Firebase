import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import registration from './containers/Auth/register';
import login from './containers/Auth/login';
import loggedSuccess from './components/loggedSuccess';
import regSuccess from './components/regSuccess';
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Switch>
            <Route path="/" exact component={registration} />
            <Route path="/register" component={registration} />
            <Route path="/login" component={login} />
            <Route path="/loggedSuccess" component={loggedSuccess} />
            <Route path="/regSuccess" component={regSuccess} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
