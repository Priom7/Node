const http = require('http')

const server = http.createServer((request, response)=>{
    console.log('Incoming Request')
    console.log(request.method, request.url)

    if(request.method === 'POST'){
        let body = ''
        request.on('end', ()=>{
            const user_Name = body.split('=')[1]
            response.end('<h1>'+user_Name+'</h1>')
        })

        request.on('data', (chunk)=>{
            body += chunk
        })

    } else {
        response.setHeader('Content-Type', 'text/html')
        response.end('<form method="POST"><input type="text" name="user_name"><button type="submit">Create User</button></input></form>')
    }


})

server.listen('5000')