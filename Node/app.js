const express = require('express')
const body_Parser = require('body-parser')
const { request, response } = require('express')
const app = express()

app.use(body_Parser.urlencoded({
    extended : false
}))

app.post('/user',(request, response, next)=>{
    response.send('<h1>User : '+ request.body.user_name +'</h1>')
})

app.get('/',(request, response, next)=>{

    response.send('<form action = "/user" method="POST"><input type="text" name="user_name"><button type="submit">Create User</button></input></form>')

})

app.listen(5000)