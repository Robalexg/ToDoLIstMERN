import React from 'react';
import Home from './components/Home'
import Navi from './components/Navi'
import Login from './components/Login'
import Register from './components/Register'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
			<Container fluid>
				<Navi/>
	    	<Switch>
		    	<Route exact path='/user/:id' component={Home}/>	
		    	<Route exact path='/' component={Login}/>	
          <Route exact path='/register' component={Register}/>  

	    	</Switch>
			</Container>
    </Router>
  );
}

export default App;
