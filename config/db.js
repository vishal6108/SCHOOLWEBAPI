const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "student_db",
    charset : "utf8"
  },
});

module.exports.knex = knex
