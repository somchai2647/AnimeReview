import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar'
import Company from './pages/Company'
import HomeScreen from './pages/HomeScreen'
import DetailAnime from './pages/DetailAnime'


export default function App() {

  return (
    <Router basename='/'>
      <Navbar />
      <div className='relative'>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/company/:name">
            <Company />
          </Route>
          <Route path="/anime/:name">
            <DetailAnime />
          </Route>
        </Switch>
      </div>

    </Router>
  )
}
