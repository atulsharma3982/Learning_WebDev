

// Select the database to use.
use('SigmaDataBase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "price": 20000,
      "instructor": "harry"
    },
    {
      "name": "Python",
      "price": 18000,
      "instructor": "alice"
    },
    {
      "name": "C++",
      "price": 22000,
      "instructor": "robert"
    },
    {
      "name": "JavaScript",
      "price": 15000,
      "instructor": "mike"
    },
    {
      "name": "Data Structures",
      "price": 25000,
      "instructor": "susan"
    },
    {
      "name": "Machine Learning",
      "price": 30000,
      "instructor": "david"
    },
    {
      "name": "Web Development",
      "price": 20000,
      "instructor": "emma"
    },
    {
      "name": "Cyber Security",
      "price": 27000,
      "instructor": "john"
    }
  ]
);

// Print a message to the output window.
console.log(`Done Inserting Data`);

