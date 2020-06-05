import React,{useState,useEffect} from 'react'
import {Row,Col,Table,Button,Dropdown} from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import '../css/Home.css'
const Home = (props) => {
	const [todos,setTodos] = useState([])
	const [isEdit,setIsEdit] = useState(false)

	useEffect(() => {
		getTodos()
	},[])


	const getTodos = () => {
    const userID = props.match.params.id
		axios.get(`http://localhost:4000/todos/${userID}`)
		.then((list) => {
      console.log('list',list)
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
		setIsEdit(true)
		const tag = [...document.getElementsByTagName('td')]

		tag.map(element => element.id !== 'priority' ? element.setAttribute('contenteditable','true'): '')

	}

	const onSave = (e) => {
		setIsEdit(false)
		const tag = [...document.getElementsByTagName('td')]
		tag.map(element => element.setAttribute('contenteditable','false'))
	}

	const onAdd = (e) => {
    const userID = props.match.params.id
		const newTodo = {
			description: '',
			responsible: '',
			priority:'low',
      userID: userID
		}

		axios
		.post('http://localhost:4000/todos/add',newTodo)
		.then((res) => {
			getTodos()
		})
	}

	const onChange = (e) => {
    const userID = props.match.params.id
		const todoID = e.target.parentNode.id
		const title = e.target.id
		const contents = e.target.textContent
		axios.post(`http://localhost:4000/todos/update/${todoID}`,{
			title,
			contents,
      userID
		}).then((res) => {
			const list = todos.map(x => {
				if(x._id === todoID){
					if(res.data.title === 'priority'){
						x.priority = res.data.contents
					}
				}
				return x 
			})
			
			setTodos(list)

		})

	}

  const onSignOut = (e) => {
    console.log("onSignOut")
  }

	return (
		<div>
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
										<tr onKeyUp={onChange} id={todo._id} className='text-capitalize'  key={i}>
											<td id='description'>{todo.description}</td>
											<td id='responsible'>{todo.responsible}</td>
											<td id='priority'>
												<span className='d-flex'>
													<Dropdown id='dropdown'>
												  <Dropdown.Toggle id="dropButton" >
												  	{todo.priority}
												  </Dropdown.Toggle>
												  <Dropdown.Menu  id={todo._id} onClick={onChange}>
												    <Dropdown.Item id='priority'>High</Dropdown.Item>
												    <Dropdown.Item id='priority'>Medium</Dropdown.Item>
												    <Dropdown.Item id='priority'>Low</Dropdown.Item>
												  </Dropdown.Menu>
												</Dropdown>
													<FontAwesomeIcon id={todo._id} className='align-self-center trashIcon' onClick={onDelete} icon={faTrash}/>
												</span>
											</td>
									</tr>)
								})
							}
								
							</tbody>
						</Table>

						
				</Col>
			</Row>
			<Row >
				<Col className='d-flex justify-content-between'>
					{
						isEdit ? <Button variant='success' onClick={onSave} >Save</Button> : <Button onClick={onEdit} >Edit</Button>
					}

          <span>
            <Button onClick={onSignOut} variant='danger'>Log Out</Button>`
          </span>

					<span className='align-self-center addIcon' >
						<FontAwesomeIcon  onClick={onAdd} icon={faPlusSquare}/>
					</span>

				</Col>
			</Row>
		</div>
	)
}

export default Home