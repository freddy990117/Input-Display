interface Person {
  Number: number;
  Name: string;
  Job: string;
  Email: string;
}
const personNumber = document.getElementById("phone") as HTMLInputElement;
const personName = document.getElementById("name") as HTMLInputElement;
const personJob = document.getElementById("job") as HTMLInputElement;
const personEmail = document.getElementById("email") as HTMLInputElement;

const Person1: Person = {
  Number: Number(personNumber),
  Name: personName.value,
  Job: personJob.value,
  Email: personEmail.value,
};

console.log(Person1);
