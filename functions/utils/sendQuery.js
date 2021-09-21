const axios = require('axios');
require('dotenv').config();

module.exports = async (query, variables) => {
    console.log("running the sendquery function");
    const {
        data: { data, errors },
    } = await axios({
        url: 'https://graphql.us.fauna.com/graphql',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
        },
        data: {
            query,
            variables,
        }
    });

    if (errors) {
        console.error(errors);
        throw new Error('Something went wrong in the send query function');
    }

    return data
}