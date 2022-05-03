const router = require('express').Router();
const postController = require('../controllers/postController')

router.get('/', async (req, res) => {
    res.send("post page");
});

router.post('/create', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.delete);
router.put('/:id/like', postController.likePost);
router.get('/:id', postController.get);
router.get('/timeline/:userId', postController.timeline);


module.exports = router;