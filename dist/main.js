"use strict";
const personNumber = document.getElementById("phone");
const personName = document.getElementById("name");
const personJob = document.getElementById("job");
const personEmail = document.getElementById("email");
const Person1 = {
    Number: Number(personNumber),
    Name: personName.value,
    Job: personJob.value,
    Email: personEmail.value,
};
console.log(Person1);
