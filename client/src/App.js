import React, { Component } from 'react';
import './App.css';
import Home from './views/home';
import SignIn from './views/sign_in';
import SignUp from './views/sign_up';
import Users from './views/users';

import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Route exact={true} path='/' render={() => (
                    <div className="App">
                        <Home />
                  </div>
                )}/>
                <Route exact={true} path='/sign_in' render={() => (
                    <div className="App">
                        <SignIn />
                  </div>
                )}/>
                <Route exact={true} path='/sign_up' render={() => (
                    <div className="App">
                        <SignUp />
                  </div>
                )}/>
                <Route exact={true} path='/users' render={() => (
                    <div className="App">
                        <Users />
                  </div>
                )}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
