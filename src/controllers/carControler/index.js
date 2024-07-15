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
        
        res.json(content_response.result);
    },

    getOne: async (req, res) => {
        let content_response = {error: '', result: []};
        let id_car = req.params.id;
        let car_selected = await carService.getOneCar(id_car);

        content_response.result.push(car_selected);

        res.json(content_response.result);
    },

    setOne: async (req, res) => {
        let content_response = {error: '', result:[]};
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        console.log(`${req.body}`);

        if (modelo && placa) {
            let car_added = await carService.setOneCar(modelo, placa);
            content_response.result.push({
                id: car_added,
                modelo: modelo,
                placa: placa
            });
        }
        else {
            content_response.error = 'Problema nos campos';
        }
        
        res.json(`Item adicionado com sucesso ${(content_response)}`);
    },

    updateModelCar: async (req, res) => {
        let content_response = {error: '', result:[]};
        let id_car = req.params.id;
        let modelo = req.body.modelo;

        if (id_car && modelo) {
            let result_update = await carService.updateModelCar(modelo, id_car);
            content_response.result.push(result_update);
        }
        else {
            result.error = "Problema ao atualizar tupla";
        }

        res.json(content_response);
    },

    updatePlacaCar: async(req, res) => {
        let content_response = {error: '', result:[]}

        let id_car = req.params.id;
        let placa = req.body.placa;

        if (id_car && placa) {
            let result_update = await carService.updatePlcaCar(placa, id_car);
            content_response.result.push(result_update);
        }
        else {
            content_response.error = "Falha ao atualizar tupla"
        }
        
        res.json(content_response);
    },

    deletCar: async (req, res) => {
        let content_response = {error: '', results:[]};

        let id_car = req.params.id;

        if (id_car) {
            let result_delete = await carService.deleteCar(id_car);
            content_response.results.push(result_delete);
        } 
        else {
            content_response.error = "Erro ao deletar item";
        }

        res.json(content_response);
    }
}