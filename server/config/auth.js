const jwt = require('jsonwebtoken')


const auth = {
  genToken: (user  =>jwt.sign(user,process.env.JSON_TOKEN)),
  genReToken: (user => jwt.sign(user,process.env.REFRESH_TOKEN)) 

}


module.exports = auth


