import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navi = () => {
	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand>ToDoApp</Navbar.Brand>
			<Nav> 
				<Link to="/" className='nav-link'>To Do's</Link>
				<Link to='/create' className='nav-link'>Create a To Do</Link>
			</Nav>
		</Navbar>
	)
}	


export default Navi