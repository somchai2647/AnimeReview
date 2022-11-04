import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Company from './pages/Company'
import HomeScreen from './pages/HomeScreen'
import DetailAnime from './pages/DetailAnime'
import About from './pages/About'


export default function App() {

  return (
    <Router basename='/~sec2assign1'>
      <Navbar />
      <div className='relative'>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/company/:name">
            <Company />
          </Route>
          <Route path="/anime/:name">
            <DetailAnime />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
