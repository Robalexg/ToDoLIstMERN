import React from 'react'
import {Row,Col,Card,Form,Button} from 'react-bootstrap'
import '../css/Login.css'



const Login = () => {
	return (
		<Row>
			<Col className='login'>
				<Card>
					<Card.Body>
						<Card.Title className='text-center'>Sign In</Card.Title>
						<Form>
							<Form.Group>
								<Form.Control required autofocus type='email' placeholder='Email Address'></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Control required type='password' placeholder='Password'></Form.Control>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
						    <Form.Check type="checkbox" label="Remember Password" />
						  </Form.Group>
						  <Button>Sign In</Button>
						</Form>
					</Card.Body>
				</Card>				
			</Col>
		</Row>
	)
}

const useForm = () => {

}


export default Login