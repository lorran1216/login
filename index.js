//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import Express from 'express';

var pass, em = "";
const email = "lorran@gmail.com";
const senha = "Lorran";
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = Express();
app.use(bodyParser.urlencoded({extended:true}));

function logger(req, res, next){
    em = req.body["email"];
    pass = req.body["password"]; 
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if(pass === senha && em === email){
        console.log(em);
        console.log(pass);
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        console.log(em);
        console.log(pass);
        res.sendFile(__dirname + "/public/index.html");
    }
})

app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
})