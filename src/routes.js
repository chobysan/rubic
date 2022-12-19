const homeController = require('./controllers/homeController');
const router = require('express').Router();

router.get('/', homeController.index);
//module.exports = (app) => app.get('/', homeController.index);

module.exports = router;
