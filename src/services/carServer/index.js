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
    },

    getOneCar: (id_car) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM cars WHERE id = ${id_car}`, (error, results) => {
                if (error) {
                    reject(`Ocorreu um erro`);
                }
                resolve(results);
            })
        })
    }
};