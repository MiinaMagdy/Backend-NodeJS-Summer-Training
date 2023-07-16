const axios = require('axios');

async function getRandomUser() {
    try {
        const response = await axios.get("https://randomuser.me/api/");
        return response.data;
    } catch (error) {
        return error;
    }
}

module.exports = { getRandomUser };