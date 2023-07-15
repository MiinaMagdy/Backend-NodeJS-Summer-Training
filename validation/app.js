const validator = require("./src/validation");

const person1 = {
    "fullname": "Mina Magdy",
    "email": "mina.magdy.takawey@gmail.com",
    "password": "200404505",
    "age": 18,
    "gender": "male"
};

const objGenerator = function* (obj) {
    for (let key in obj) {
        yield key;
    }
};
const it1 = objGenerator(person1);
const it2 = objGenerator(validator);
for (let i = 0; i < Object.keys(person1).length; i++) {
    const fieldType = it1.next().value;
    const fieldChecker = it2.next().value;
    const isValid = validator[fieldChecker](person1[fieldType]);
    if (isValid) {
        console.log("Yes, it's valid", fieldType);
    }
    else {
        console.log("No, it's NOT valid", fieldType);
    }
}