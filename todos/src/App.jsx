// import { useState } from 'react'
import './App.css'
// import Home from './Home'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Formpage from './Formpage';


function App() {

  return (
    <Router>
    <Switch>
        <Route path="/" exact component={Create} />
        <Route path="/form" component={Formpage} />
    </Switch>
</Router>
  )
}

export default App
