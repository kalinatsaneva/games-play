import { useState, createElement } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GameCatalog/GameCatalog"
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />
          <Route path="/games/:gameId" component={GameDetails} />
          <Route path="/games" exact component={GameCatalog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" render={(props) => {
            console.log('logged out');

            return <Redirect to="/"/>
          }} />
        </ Switch>
      </main>


    </div>
  );
}

export default App;
