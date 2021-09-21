require('dotenv').config();
const { GET_LEADS } = require('./utils/leadQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    console.log('running getLeads');
    try {
        const res = await sendQuery(GET_LEADS);
        const data = res.allLeads.data;
        return formattedResponse(200, data);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { ERROR: 'Something went bad dude with getLeads' })
    }
}

