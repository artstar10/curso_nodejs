const express = require('express')

const app = express();

app.use(express.json());

app.get("/",(re,res)=> {
   return res.json({titulo: "Como criar API"});
})

app.listen(8080,() =>{
    console.log("Servidor iniciado na porta 8080: no endereço http://localhots:8080/");
});