import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/Index';
import NotFound from './components/NotFound';

function App () {
  return (
    <div className='App'>
      <Router>
      <h1 className="AppTitle">Quote-harjoitus</h1>
      <Switch>
        <Route path='/' exact component={Index}/>

        <Route component={NotFound}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App
