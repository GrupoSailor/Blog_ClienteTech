const express = require ('express');
const bodyParser = require('body-parser');
/*mudar destino quando rodar local*/
const Lead = require('/Users/Aurea/Documents/Gama Academy/Assigments/ClienteTech/Lead.js');

/* -- TRATATIVA PARA ENCONTRAR ERRO NO DIRETORIO:
try{
    const Lead = require('/Users/Aurea/Documents/Gama Academy/Assigments/ClienteTech/Lead.js');
  }catch(e){
    console.log(e.stack)
  }*/

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req,res) => {
    res.sendfile('index.html');
});

app.post('/leads', (req,res) => {
    const {name} = req.body;
    const lead = Lead.create({name});
    res.send(lead);
});

app.listen(3000);