let person = {
  name: "John Doe",
  age: 25,
  job: "Developer",
};

for (let index in person) {
  console.log(`${index}: ${person[index]}`);
}
