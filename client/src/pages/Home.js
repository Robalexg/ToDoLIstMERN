import React,{useState,useEffect} from 'react'
import {Row,Col,Table,Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import '../css/Home.css'
const Home = () => {
	const [todos,setTodos] = useState([])

	useEffect(() => {
		getTodos()
	},[])


	const getTodos = () => {
		axios.get('http://localhost:4000/todos')
		.then((list) => {
			setTodos(list.data)
		})	
	}

	const onDelete = (e) => {
		const id = e.currentTarget.id
		axios.delete(`http://localhost:4000/todos/delete/${id}`).then(() => {
			getTodos()
		})
	}

	const onEdit = (e) => {
		const id = e.currentTarget.id

	}

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
							return (
								<tr className='text-capitalize'key={i}>
									<td>
										<Form>
											<Form.Control disabled value={todo.todo_description}></Form.Control>
										</Form>
									</td>
									<td>{todo.todo_responsible}</td>
									<td className='d-flex justify-content-between'>
									{todo.todo_priority}
										<span >
										<FontAwesomeIcon id={todo._id} onClick={onEdit} className='editIcon mr-3' icon={faEdit}/>
										<FontAwesomeIcon id={todo._id} onClick={onDelete} className='trashIcon' icon={faTrash}/>
										</span>
									</td>
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