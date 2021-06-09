import './styles/App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Application from './components/application';
import './styles/App.css';
import HomePage from "../src/pages/home/home.page";
import RoomPage from "../src/pages/room/room.page";
import GamePage from "../src/pages/game/game.page";
import Account from "../src/pages/account/account.page";
import HowToPlay from "../src/pages/howtoplay/how.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/howtoplay" component={HowToPlay} />
          <Route exact path="/room" component={RoomPage} />
          <Route exact path="/game" component={GamePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
