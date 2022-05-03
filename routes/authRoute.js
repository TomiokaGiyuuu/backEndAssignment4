const router = require('express').Router();
const authController = require('../controllers/authController')

router.get('/', async (req, res) => {
    res.send("nothing");
});

//REGISTER
router.post('/register', authController.registration);
router.post('/login', authController.login);

module.exports = router;