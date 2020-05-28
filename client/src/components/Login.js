import React,{useState} from 'react'
import {Row,Col,Card,Form,Button} from 'react-bootstrap'
import axios from 'axios'
import '../css/Login.css'



const Login = () => {
  const [user,setUser] = useState('')
  const [pass,setPass] = useState('')

  const onUserChange =  (e) => {
    setUser(e.target.value)
  }

  const onPassChange =  (e) => {
    setPass(e.target.value)
  }

  const onSub = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/user/login',{
      user,
      pass
    })
    .then(data => {
      console.log(data)
    })
    console.log('submitted to the server')
  }

	return (
		<Row>
			<Col className='login'>
				<Card>
					<Card.Body>
						<Card.Title className='text-center'>Sign In</Card.Title>
						<Form onSubmit={onSub}>
							<Form.Group>
								<Form.Control required autoFocus onChange={onUserChange} type='email' placeholder='Email Address'></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Control required type='password' onChange={onPassChange} placeholder='Password'></Form.Control>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
						    <Form.Check type="checkbox" label="Remember Password" />
						  </Form.Group>
						  <Button type='submit' onSubmit={onSub}>Sign In</Button>
						</Form>
					</Card.Body>
				</Card>				
			</Col>
		</Row>
	)
}




export default Login