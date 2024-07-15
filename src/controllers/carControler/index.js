const carService = require('../../services/carServer/index.js');

module.exports = {
    getAll: async (req, res) => {
        let content_response = {error: '', result: []};
        //get cars in db_api_car with service carService
        let cars_db_content = await carService.getAllCars();

        //para todos os dados retornados do get em serviços, coloque em content > results, no formato json
        for (let item_in_database in cars_db_content) {
            content_response.result.push({
                id: cars_db_content[item_in_database].id,
                modelo: cars_db_content[item_in_database].modelo,
                placa: cars_db_content[item_in_database].placa
            })
        }

        res.json(content_response);
    },

    getOne: async (req, res) => {
        let content_response = {error: '', result: []};
        let id_car = req.params.id;
        let car_selected = await carService.getOneCar(id_car);

        content_response.result.push(car_selected);

        res.json(content_response);
    }
}