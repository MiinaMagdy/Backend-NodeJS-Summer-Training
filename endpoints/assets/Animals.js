const axios = require('axios');

async function getCatFact() {
    try {
        const response = await axios.get("https://catfact.ninja/fact/");
        return response.data;
    } catch (error) {
        return error;
    }
}

module.exports = { getCatFact };