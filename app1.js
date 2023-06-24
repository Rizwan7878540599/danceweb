const express = require("express")
const path = require("path");
const fs = require("fs")
const app = express();
const port = 80;


// EXPRESS SPECIFIC SETUP
app.use('/static',express.static('static'))//for serving the static files
app.use(express.urlencoded())

// pug specific setup
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


// END POINTS 
app.get('/', (req,res)=>{
    const con ="this is the best content on the internet so far so use it wisely"
    const params={'title': 'pubg is the best gaming plateform',content:con};
    res.status(200).render('index.pug',params);
})

app.post('/',(req,res)=>{
    // console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
 
    let outputtowrite =`the name of the client is ${name},he/she is ${age} years old his/her gender is ${gender} resideing at the adderss${address}`
    
    fs.writeFileSync('output.txt',outputtowrite);
    const params={'message': 'your fourm has been submitted successfully'};
    res.status(200).render('index.pug',params);
    
})

// START THE FUNCTION:-
app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`);
});