import React from 'react'
import {Table} from 'react-bootstrap'
const ToDoList = (props) => {
 	return (
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
				props.todos.map((todo,i) => {
					return (<tr key={i}>
						<td>{todo.todo_description}</td>
						<td>{todo.todo_responsible}</td>
						<td>{todo.todo_priority}</td>
					</tr>)
				})
			}
				
			</tbody>
		</Table>
	)
}


export default ToDoList