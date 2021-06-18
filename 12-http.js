const http = require('http')

const server = http.createServer((req,res) => {
   if (req.url === '/'){
       res.end('Hello Lauren!  This is NODEJS!')
   }
   if (req.url ==='/about'){
       res.end('Just watching a show')
   }
   
   res.end(`
   <h1>Oops!</h1>
   <p> We can't seem to find the page you are looing for </p>
   <a href="/">back home</a>
   `)
})

server.listen(5000)