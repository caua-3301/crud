const database = require("../../data/db.js");

module.exports = {
    getAllCars: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM cars', (error, results) => {
                if (error) {
                    reject(`Ocorreu um erro`);
                }
                resolve(results);
            })
        })
    }
};