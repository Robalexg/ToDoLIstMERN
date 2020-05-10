import React from 'react';
import Home from './pages/Home'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

const App = () => {
  return (
    <Router>
    	<Route path='/' component={Home}/>
    </Router>
  );
}

export default App;
