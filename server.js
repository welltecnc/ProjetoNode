const express =require("express")

const app =express();

app.get("/login",(req,res)=>{
    res.send("Bem vindo ao Login")
});

app.get("/sistema",(req,res)=>{
    res.send("Acessando o sistema ")
})



//EXECUTANDO O SERVIDOR NA PORTA 3000
app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000")
})