var express = require('express');
var router = express.Router();

router.get('/', function(req, res , next){
    res.render('alunosnew',{ title: 'Novo Aluno', alunos:{} });
})

router.post('/', function(req, res, next){
    var id = req.body.id;
    var nome = req.body.nome;
    var idade = req.body.idade;
    var db = require("../db");
    if(id != ""){
        db.updateAlunos(id, {nome , idade}, function(err,result){
            if(err) return console.log(err);
            res.redirect('/alunos/all');
        })   
    }else{
        db.insertAlunos({nome,idade}, function(err,result){
        if(err) return console.log(err);
        res.redirect('/alunos/all');
        })       
    }
})

module.exports = router;
