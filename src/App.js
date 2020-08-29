import React from 'react';
import {Main} from './pages/main/Main';
import {useSelector} from "react-redux";
import * as _ from 'lodash';
import SimpleBottomNavigation from './components/common/SimpleBottomNavigation';
import Header from './components/common/Header';
import './App.css';

function App() {
  const frcsCustNo = useSelector(state => state.userReducer.frcsCustNo);
  return (
    <div>
      <Header frcsCustNo={frcsCustNo} />
      
      {/* 라우팅처리 */}
      <Main />
      {/* 라우팅처리 */}

      <SimpleBottomNavigation />
    </div>
  );

}

export default (App);
