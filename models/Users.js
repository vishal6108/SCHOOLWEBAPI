const knex = require('../config/db').knex
const bookshelf = require('bookshelf')(knex)

const Users = bookshelf.Model.extend({
    tableName : 'user'
})

module.exports = Users