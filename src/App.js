import React from 'react';
import {useSelector} from "react-redux";
import {Route, Switch, Link, NavLink, useParams} from 'react-router-dom';
import * as _ from 'lodash';

import './App.css';

import SimpleBottomNavigation from './components/common/SimpleBottomNavigation';
import Header from './components/common/Header';

import Main from './pages/main/Main';
import Mypage from './pages/user/Mypage';

function App() {
  const frcsCustNo = useSelector(state => state.userReducer.frcsCustNo);
  return (
    <div className='app'>
      <Header frcsCustNo={frcsCustNo} />
      
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/mypage"><Mypage /></Route>
        <Route path="/">SRY<br />404</Route>
      </Switch>
      

      <SimpleBottomNavigation />
    </div>
  );

}

export default (App);
