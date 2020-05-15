import React,{useState,useEffect} from 'react'
import axios from 'axios'


import {Row,Col,Table} from 'react-bootstrap'
const Home = () => {
	const [todos,setTodos] = useState([])

	useEffect(() => {
		const getTodos = () => {
			axios.get('http://localhost:4000/todos')
			.then((list) => {
				setTodos(list.data)
			})	

		}
		getTodos()
	},[])

	return (
		<Row className='my-2'>
			<Col>
				<Table striped bordered hover >
					<thead>
						<tr>
							<th>Description</th>
							<th>Responible</th>
							<th>Priority</th>
						</tr>
					</thead>
					<tbody>
					{
						todos.map((todo,i) => {
							return (<tr className='text-capitalize'key={i}>
								<td>{todo.todo_description}</td>
								<td>{todo.todo_responsible}</td>
								<td>{todo.todo_priority}</td>
							</tr>)
						})
					}
						
					</tbody>
				</Table>
			</Col>
		</Row>
	)
}

export default Home