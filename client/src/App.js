import React from 'react';
import Home from './pages/Home'
import Navi from './components/Navi'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
			<Container fluid>
				<Navi/>
	    	<Switch>
		    	<Route exact path='/' component={Home}/>	
	    	</Switch>
			</Container>
    </Router>
  );
}

export default App;
