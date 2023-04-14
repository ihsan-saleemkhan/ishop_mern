import bcript from "bcryptjs";

const users = [
  {
    name: "admin",
    email: "admin@iteqsolution.com",
    password: bcript.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "ihsan",
    email: "ihsan@iteqsolution.com",
    password: bcript.hashSync("123456", 10),
  },
  {
    name: "rifka",
    email: "rifka@iteqsolution.com",
    password: bcript.hashSync("123456", 10),
  },
];

export default users;
