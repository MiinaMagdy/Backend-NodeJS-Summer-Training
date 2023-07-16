const axios = require('axios');

async function getSports() {
    try {
        const response = await axios.get("https://api.squiggle.com.au/?q=teams");
        return response.data;
    } catch (error) {
        return error;
    }
}

module.exports = { getSports };