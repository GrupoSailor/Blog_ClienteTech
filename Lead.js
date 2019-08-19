const firebase = require('/Users/Aurea/Documents/Gama Academy/Assigments/ClienteTech/firebase.js');

const create = ({name}) => {
    const leads = firebase.database().ref('Leads');
    const lead = leads.push({name});
    return lead;
};

const csv = (callback) => {
    const leads = firebase.database().ref('Leads');
    const data = [];
    leads.on('value', (snapshot) => {
        snapshot.forEach((lead)=> {
            const {name} = lead.val();
            data.push([lead.key, name]);
        });
        callback(data);
    });
};

module.exports = {
    create,
    csv,
};