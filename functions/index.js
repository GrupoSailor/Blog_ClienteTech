const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const express = require ('express');
const bodyParser = require('body-parser');
/*mudar destino quando rodar local*/
const Lead = require('./Lead.js');

/* -- TRATATIVA PARA ENCONTRAR ERRO NO DIRETORIO:
try{
    const Lead = require('/Users/Aurea/Documents/Gama Academy/Assigments/ClienteTech/Lead.js');
  }catch(e){
    console.log(e.stack)
  }*/

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

/*app.get('/', (req,res) => {
    res.sendfile('./public/index.html');
});*/

app.post('/leads', (req,res) => {
    const {name} = req.body;
    const lead = Lead.create({name});
    res.send('Obrigado!' + lead);
});

app.get('./leads.csv', (req, res) => {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=\'' + 'meusleads.csv\'');
    
    Lead.csv((data) => {
        res.send(data);
    });
});

exports.api = functions.https.onRequest(app);

//app.listen(3000);