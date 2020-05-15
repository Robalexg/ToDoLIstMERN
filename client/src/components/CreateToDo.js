import React,{useState} from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'
import axios from 'axios'


const CreateToDo = () => {

	const [desc,setDesc] = useState('');
	const [resp,setResp] = useState('');
	const [pri,setPri] = useState('');

	const onDescChange = (e) => {
		setDesc(e.target.value)
	}

	const onRespChange = (e) => {
		setResp(e.target.value)
	}

	const onPriChange = (e) => {
		setPri(e.target.value)
	}


	const onSubmit = (e) => {
		e.preventDefault()		
		axios.post('http://localhost:4000/todos/add',{
			todo_description: desc,
			todo_responsible: resp,
			todo_priority: pri
		})
		setDesc('')
		setResp('')
		setPri('')
	}
	return (
		<Row>
			<Col className='py-3'>
				<h1>Create a New To Do</h1>	
				<Form onSubmit={onSubmit}>
					<Form.Group className='mb-4'>
						<Form.Label>Description:</Form.Label>
						<Form.Control value ={desc} onChange={onDescChange}></Form.Control>
						
					</Form.Group>
					<Form.Group className='mb-4'>
						<Form.Label>Responible:</Form.Label>
						<Form.Control value ={resp} onChange={onRespChange} ></Form.Control>
					</Form.Group>

					<fieldset>
						<Form.Check onChange={onPriChange} checked={pri === 'low'} value='low' inline type='radio' label='Low' id='low' name='low'></Form.Check>
						<Form.Check onChange={onPriChange} checked={pri === 'medium'} value='medium' inline type='radio' label='Medium' id='medium' name='medium'></Form.Check>
						<Form.Check onChange={onPriChange} checked={pri === 'high'} value='high' inline type='radio' label='High' id='high' name='high'></Form.Check>
					</fieldset>
					<Form.Group>
						<Button type ='submit'variant='primary' className='my-4'>Create To Do</Button>
					</Form.Group>
				</Form>

			</Col>
		</Row>
	)
}

export default CreateToDo
