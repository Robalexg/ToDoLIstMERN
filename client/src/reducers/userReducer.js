const userReducer = (state ={}, {type,payload}) => {
  console.log('type',payload)
  switch(type){
    case 'SET_USER':
      return  {...state,user:payload}
    default:
      return state
  }
} 


export default userReducer