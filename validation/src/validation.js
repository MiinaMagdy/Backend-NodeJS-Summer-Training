/*
1-FULLNAME
2-EMAIL
3-PASSWORD
4-AGE
5-GENDER
*/

const fullNameChecker = (fullname) => {
    return fullname.length >= 6;
};

const emailChecker = (email) => {
    const regex = new RegExp("^[a-z0-9_.]+@((gmail)|(yahoo)).com");
    return regex.test(email);
};

const passwordChecker = (password) => {
    return password.length >= 6;
};

const ageChecker = (age) => {
    return age >= 18;
}

const genderChecker = (gender) => {
    return /(male)|(female)/.test(gender);
}

module.exports = {fullNameChecker, emailChecker, passwordChecker, ageChecker, genderChecker};