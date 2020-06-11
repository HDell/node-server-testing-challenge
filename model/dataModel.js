const knex = require('knex');
const configOptions = require('../knexfile.js').development;
const db = knex(configOptions);

module.exports = {
    find,
    findBy,
    add,
    remove
};

function find() {
    return db("names");
}

function findBy(name) {
    return db("names")
        .where("name", name)
        .first();
}

function add(name) {
    return db("names")
        .insert(name);
}

function remove(name) {
    return db('names')
        .where("name", name)
        .del();
}