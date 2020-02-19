const { Router } = require('express');

const DonorController = require('./controllers/DonorController');
const routes = Router();

routes.get("/", DonorController.index);
routes.get("/donor", DonorController.show);
routes.post("/", DonorController.store);

routes.get("/donor/", (req, res) => res.send('donor'))

module.exports = routes;