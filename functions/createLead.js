require('dotenv').config();
const { CREATE_LEAD } = require('./utils/leadQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const {
        name,
        description,
        phoneNumber,
        emailAddress,
        streetAddress,
        city,
        state,
        zipcode,
        preferedContactMethod,
        region,
        mobile,
        source } = JSON.parse(event.body);
    const variables = {
        enteredBy: "Lead Tracker",
        name,
        description,
        phoneNumber,
        emailAddress,
        streetAddress,
        city,
        state,
        zipcode,
        preferedContactMethod,
        region,
        mobile,
        source,
        archived: false
    }

    try {
        const { createLead: newLead } = await sendQuery(CREATE_LEAD, variables);
        return formattedResponse(200, newLead);
    } catch (err) {
        console.error(err)
        formattedResponse(500, { ERROR: "Can't get there from here" })
    }
}