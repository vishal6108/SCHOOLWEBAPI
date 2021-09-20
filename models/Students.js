const knex = require("../config/db").knex;
const bookshelf = require("bookshelf")(knex);

const Students = bookshelf.Model.extend({
  tableName: "studentDetail",
});

module.exports = Students;
