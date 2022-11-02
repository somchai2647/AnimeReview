import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeScreen from './pages/HomeScreen'
import Company from './pages/Company'


export default function App() {

  return (
    <Router basename='/'>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/company/:name">
          <Company />
        </Route>
      </Switch>
    </Router>
  )
}
