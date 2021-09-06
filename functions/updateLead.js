require('dotenv').config();
const { UPDATE_LEAD } = require('./utils/leadQueries');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');

exports.handler = async (event) => {
    const {
        _id: id,
        enteredBy,
        reviewedBy,
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
        comment,
        booked,
        source,
        archived
    } = JSON.parse(event.body);
    const variables = {
        id,
        enteredBy,
        reviewedBy,
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
        comment,
        booked,
        source,
        archived
    }

    try {
        const { updateLead } = await sendQuery(UPDATE_LEAD, variables);
        return formattedResponse(200, updateLead);
    } catch (err) {
        console.error(err)
        formattedResponse(500, { ERROR: "Can't get there from here" })
    }
}