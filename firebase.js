const firebase = require("firebase-admin");

/*mudar destino quando rodar local*/
const serviceAccount = require("./secrets/firebase-sa.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://clientetech-3ecd8.firebaseio.com"
});

module.exports = firebase;