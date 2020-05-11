import React from 'react'
import {Row,Col,Form,Button} from 'react-bootstrap'



const CreateToDo = () => {

	const submit = (e) => {
		e.preventDefault()
		console.log(e.target)
	}
	return (
		<Row>
			<Col className='py-3'>
				<h1>Create a New To Do</h1>	
				<Form onSubmit={submit}>
					<Form.Group className='mb-4'>
						<Form.Label>Description:</Form.Label>
						<Form.Control ></Form.Control>
						
					</Form.Group>
					<Form.Group className='mb-4'>
						<Form.Label>Responible:</Form.Label>
						<Form.Control ></Form.Control>
					</Form.Group>

					<fieldset>
						<Form.Check inline type='radio' label='Low' id='low' name='priority'></Form.Check>
						<Form.Check inline type='radio' label='Medium' id='medium' name='priority'></Form.Check>
						<Form.Check inline type='radio' label='High' id='high' name='priority'></Form.Check>
					</fieldset>
					<Form.Group>
						<Button  type ='submit'variant='primary' className='my-4'>Create To Do</Button>
					</Form.Group>
				</Form>

			</Col>
		</Row>
	)
}

export default CreateToDo
