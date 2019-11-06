import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/Index';
import NotFound from './components/NotFound';
import QuoteList from './components/QuoteList';
import QuoteForm from './components/QuoteForm';

function App () {
  return (
    <div className='App'>
      <Router>
      <h1 className="AppTitle">Quote-harjoitus</h1>
      <Switch>
        <Route path='/' exact component={Index}/>
        <Route path='/quotes' exact component={QuoteList}/>
        <Route path='/form' component={QuoteForm}/>
        <Route component={NotFound}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App
