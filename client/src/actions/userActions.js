import axios from 'axios'



export const loginAction = (email,pass) => 
  dispatch => axios
  .post('http://localhost:4000/user/login',{
    email,
    pass
  })
  .then(res => dispatch({
      type:'SET_USER',
      payload:res.data
    })
  )
  .catch(err => false)
 

