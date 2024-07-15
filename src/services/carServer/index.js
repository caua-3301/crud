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
    },

    setOneCar: (modelo, placa) => {
        return new Promise((resolve, reject) => {
            database.query(`INSERT INTO cars (modelo, placa) VALUES (?, ?)`, [modelo, placa], (error, results) => {
                if (error) {
                    reject(error);
                }
                resolve(results.insertId);
            })
        })
    },

    updateModelCar: (modelo, id_car) => {
        return new Promise((resolve, reject) => {
            database.query('UPDATE cars SET modelo = ? WHERE id = ?', [modelo, id_car], (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    },

    updatePlcaCar: (placa, id_car) => {
        return new Promise((resolve, reject) => {
            database.query(`UPDATE cars SET placa = ? WHERE id = ?`, [placa, id_car], (error, response) => {
                if (error) {
                    reject(error);
                }
                resolve(response);
            })
        })
    },
    
    deleteCar: (id_car) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM cars WHERE id = ?`, [id_car], (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }
};