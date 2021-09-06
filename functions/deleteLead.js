require('dotenv').config();
const { DELETE_LEAD } = require('./utils/leadQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const { id } = JSON.parse(event.body);
    const variables = { id }

    try {
        const { deleteLead } = await sendQuery(DELETE_LEAD, variables);
        return formattedResponse(200, deleteLead);
    } catch (err) {
        console.error(err)
        formattedResponse(500, { ERROR: "Can't get there from here" })
    }
}