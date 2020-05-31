import React,{useState} from 'react'
import {Row,Col,Card,Form,Button} from 'react-bootstrap'
import axios from 'axios'
import '../css/Login.css'
import {Link,useHistory} from 'react-router-dom'



const Login = (props) => {
  const history = useHistory()
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const [err,setErr] = useState('')
  const onEmailChange =  (e) => {
    setEmail(e.target.value)
  }

  const onPassChange =  (e) => {
    setPass(e.target.value)
  }

  const onSub = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/user/login',{
      email,
      pass
    }) 
    .then(res => {
      if(res.status === 200){
        history.push(`/user/${res.data.id}`)
      }
    })
    .catch(err => {
      setErr("Email or Password are invalid")
    })
    setEmail('')
    setPass('')
  }

	return (
		<Row>
			<Col className='login'>
				<Card>
					<Card.Body>
						<Card.Title className='text-center'><span className='otherLink'>Sign In</span> | <Link className='link' to='/register'>Register</Link></Card.Title>
						<Form onSubmit={onSub}>
							<Form.Group>
								<Form.Control required autoFocus value={email} onChange={onEmailChange} type='email' placeholder='Email Address'></Form.Control>
                <Form.Text className='text-danger ml-2'>{err}</Form.Text>

							</Form.Group>
							<Form.Group>
								<Form.Control required type='password' value={pass} onChange={onPassChange} placeholder='Password'></Form.Control>
                <Form.Text className='text-danger ml-2'>{err}</Form.Text>

							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
						    <Form.Check type="checkbox" label="Remember Password" />
						  </Form.Group>
						  <Button type='submit'>Sign In</Button>
						</Form>
					</Card.Body>
				</Card>				
			</Col>
		</Row>
	)
}




export default Login