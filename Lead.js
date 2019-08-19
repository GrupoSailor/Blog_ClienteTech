const firebase = require('/Users/Aurea/Documents/Gama Academy/Assigments/ClienteTech/firebase.js');
const stringify = require('csv-stringify');



const create = ({name}) => {
    const leads = firebase.database().ref('leads');
    const lead = leads.push({name});
    return lead;
};

const csv = (callback) => {
    const leads = firebase.database().ref('leads');
    const data =[['id', 'name']];
    leads.on('value', (snapshot) => {
        snapshot.forEach((lead)=> {
            const {name} = lead.val();
            data.push([lead.key, name]);
        });
            stringify(data, (err, output) => {
            callback(output);
        });
    });
};

module.exports = {
    create,
    csv,
};