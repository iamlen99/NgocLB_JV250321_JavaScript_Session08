let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

car.color = "red";
car.year = 2022;

for (let Index in car) {
  console.log(`${Index}: ${car[Index]}`);
}
