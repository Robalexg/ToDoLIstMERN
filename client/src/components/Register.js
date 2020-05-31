import React,{useState} from 'react'
import {Row,Col,Card,Form,Button} from 'react-bootstrap'
import {Link,Redirect,useHistory} from 'react-router-dom'
import axios from 'axios'
import '../css/Login.css'


const Register = () => {
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
    axios.post('http://localhost:4000/user/register',{
      email,
      pass
    })
    .then(res => {
      console.log(res.status)
      if(res.status === 201){
        history.push('/')
      }
    }
    )
    .catch(err => {
      setErr('Email Already Taken')
    })

    setEmail('')
    setPass('')
  }

  return (
    <Row>
      <Col className='login'>
        <Card>
          <Card.Body>
            <Card.Title className='text-center'><Link className='link' to='/'>Sign in </Link>| <span className='otherLink'>Register</span></Card.Title>
            <Form onSubmit={onSub}>
              <Form.Group >
                <Form.Control required autoFocus onChange={onEmailChange} type='email' value={email} placeholder='Email Address'></Form.Control>
                <Form.Text className='text-danger ml-2'>{err}</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Control onChange={onPassChange} required type='password' value={pass} placeholder='Password'></Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password" />
              </Form.Group>
              <Button type='submit'>Register</Button>
            </Form>
          </Card.Body>
        </Card>       
      </Col>
    </Row>
  )
}


export default Register