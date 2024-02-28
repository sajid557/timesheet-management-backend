require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;

// Define the whitelist of allowed origins
const whitelist = ["http://localhost:3000", "http://localhost:4000"];

// Configure CORS middleware with whitelist
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Enable CORS with options
app.use(cors(corsOptions));

const usersList = [
  {
    name: "John",
    lastName: "Doe",
    age: 30,
    mobile: "123-456-7890",
    address: "123 Main St",
  },
  {
    name: "Jane",
    lastName: "Smith",
    age: 25,
    mobile: "987-654-3210",
    address: "456 Elm St",
  },
  {
    name: "Alice",
    lastName: "Johnson",
    age: 35,
    mobile: "555-555-5555",
    address: "789 Oak St",
  },
  {
    name: "Bob",
    lastName: "Brown",
    age: 40,
    mobile: "222-333-4444",
    address: "101 Pine St",
  },
  {
    name: "Sarah",
    lastName: "Williams",
    age: 27,
    mobile: "777-888-9999",
    address: "222 Cedar St",
  },
  {
    name: "Mike",
    lastName: "Jones",
    age: 45,
    mobile: "111-222-3333",
    address: "333 Maple St",
  },
  {
    name: "Emily",
    lastName: "Davis",
    age: 32,
    mobile: "666-666-6666",
    address: "444 Birch St",
  },
  {
    name: "David",
    lastName: "Miller",
    age: 28,
    mobile: "999-999-9999",
    address: "555 Willow St",
  },
  {
    name: "Anna",
    lastName: "Wilson",
    age: 50,
    mobile: "333-444-5555",
    address: "666 Oak St",
  },
  {
    name: "Mark",
    lastName: "Taylor",
    age: 22,
    mobile: "888-888-8888",
    address: "777 Pine St",
  },
  {
    name: "Laura",
    lastName: "Anderson",
    age: 37,
    mobile: "444-555-6666",
    address: "888 Cedar St",
  },
  {
    name: "Chris",
    lastName: "Thomas",
    age: 29,
    mobile: "222-111-4444",
    address: "999 Maple St",
  },
  {
    name: "Rachel",
    lastName: "Moore",
    age: 33,
    mobile: "777-666-5555",
    address: "101 Birch St",
  },
  {
    name: "Kevin",
    lastName: "Clark",
    age: 42,
    mobile: "555-333-2222",
    address: "202 Willow St",
  },
  {
    name: "Stephanie",
    lastName: "Lee",
    age: 31,
    mobile: "333-555-7777",
    address: "303 Oak St",
  },
  {
    name: "Patrick",
    lastName: "Baker",
    age: 26,
    mobile: "999-888-7777",
    address: "404 Pine St",
  },
  {
    name: "Julia",
    lastName: "Garcia",
    age: 38,
    mobile: "444-777-9999",
    address: "505 Cedar St",
  },
  {
    name: "Daniel",
    lastName: "Martinez",
    age: 24,
    mobile: "666-333-1111",
    address: "606 Maple St",
  },
  {
    name: "Hannah",
    lastName: "Lopez",
    age: 39,
    mobile: "222-444-6666",
    address: "707 Birch St",
  },
  {
    name: "Edward",
    lastName: "Hernandez",
    age: 23,
    mobile: "888-444-2222",
    address: "808 Willow St",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/get-users", (req, res) => {
  res.send(usersList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
