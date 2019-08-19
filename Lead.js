const firebase = require('/Users/Aurea/Documents/Gama Academy/Assigments/ClienteTech/firebase.js');

const create = ({name}) => {
    const leads = firebase.database().ref('Leads');
    const lead = leads.push({name});
    return lead;
};

module.exports = {
    create,
};