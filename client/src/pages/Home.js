import React,{useState,useEffect} from 'react'
import {Row,Col,Table,Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
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
		const tag = [...document.getElementsByTagName('td')]


		tag.map((element) => {			
			element.setAttribute('contenteditable','true')
		})

	}

	return (
		<Row className='my-2'>
			<Col>
					<Table striped bordered hover className='table-editable' >
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
										<td  >{todo.todo_description}</td>
										<td >{todo.todo_responsible}</td>
										<td>
											<span className='d-flex'>
												{todo.todo_priority}
												<FontAwesomeIcon id={todo._id} className='trashIcon' onClick={onDelete} icon={faTrash}/>
											</span>
										</td>
								</tr>)
							})
						}
							
						</tbody>
					</Table>
					<Button onClick={onEdit} >Edit</Button>
			</Col>
		</Row>
	)
}

export default Home