const  http  = require( 'http');


const port =3000;

const server = http.createServer((req,res) => {

    //setting the port and header type 
    res.statusCode = 200;
        //This is a method of the response object (res) used to set the value of a specific HTTP header. In this case, it is setting the "Content-Type" header to the value "text/plain".
    res.setHeader( "Content-Type" , "text/plain");

    res.end("Hello World")
}).listen(port);





console.log('Server running at http://127.0.0.1:8081/');


/* 
what will happen if we don't set the header 

If you don't set the "Content-Type" header in your HTTP response, the behavior depends on the client (e.g., a web browser) that is receiving the response. Setting the "Content-Type" header is a good practice because it helps the client understand how to interpret and display the content correctly.
*/

// //server.listen(port,hostname, () => {
//     console.log(`Server running at //${hostname} and port ${port}`)
// })

