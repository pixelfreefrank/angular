var faker = require('faker');

var database = { employees: []};

for (var i = 1; i<= 10; i++) {
  database.employees.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    city: faker.address.city(),
    zipCode: faker.address.zipCode(),
    grade: faker.name.jobTitle()
  });
}

console.log(JSON.stringify(database));
