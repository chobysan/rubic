const router = require('express').Router();
const cubeService = require('../services/cubeService');

router.get('/', (req, res) => {
	let { search, from, to } = req.query;
	const cubes = cubeService.getAll(search, from, to);
	res.render('index', { cubes });
});

router.get('/about', (req, res) => res.render('about'));

router.post('/pesho', (req, res) => {
	res.send('successful form submission');
});

module.exports = router;
