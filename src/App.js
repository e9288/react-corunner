import React from 'react';
import {Main} from './pages/main/Main';
import {useSelector} from "react-redux";
import * as _ from 'lodash';
import { Nav } from './components/common/Nav';
import { Header } from './components/common/Header';
import './App.css';
import './css'
import './js'

function App() {
  const frcsCustNo = useSelector(state => state.userReducer.frcsCustNo);
  return (
    <div>
      <Header frcsCustNo={frcsCustNo} />
      
      {/* 라우팅처리 */}
      <Main />
      {/* 라우팅처리 */}

      <Nav />
    </div>
  );

}

export default (App);
