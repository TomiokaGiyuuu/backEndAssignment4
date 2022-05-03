const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/', (req, res) => {
    res.send("Welcome user!")
})

router.put('/:id', userController.check);
router.delete('/:id', userController.delete);
router.get('/:id', userController.get);
router.put('/:id/follow', userController.follow);
router.put('/:id/unfollow', userController.unfollow);

module.exports = router;