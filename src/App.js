import Login from './components/login/login';
import Menu from './components/menu/menu';
import Home from './components/home/home';
import 'remixicon/fonts/remixicon.css';


import User from './components/main/user/user';
import Notification from './components/main/notification/notification';
import MarketPlace from './components/marketplace/marketplace';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MarketSide from './components/marketside/marketside';
import WatchSideBar from './components/marketside/watchsidebar';
import Watch from './components/watch/watch';



function App() {
  return (
    <Route>
      <div>


        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route>
            <Menu />
            <Route exact path="/marketplace">

              <div className='market_container'>
                <div><MarketSide /></div>
                <div><MarketPlace /></div>
              </div>
            </Route>
            <Route exact path="/watch">

              <div className='market_container'>
                <div><WatchSideBar /></div>
                <div><Watch /></div>
              </div>
            </Route>
            <Route path="/home">
              <div className='main_container'>
                <div><User /></div>
                <div><Home /></div>
                <div><Notification /></div>
              </div>
            </Route>
    
          </Route>
        </Switch>







      </div>
    </Route>
  );
}

export default App;
