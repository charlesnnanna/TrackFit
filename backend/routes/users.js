const router = require('express').Router();
const checkAuth = require('../middlewares/check-auth');
const UserController = require('../controllers/user');

router.get('/', UserController.get_all_user)

router.get('/:userId', checkAuth, UserController.get_single_user)

router.post('/register', UserController.add_new_user)

router.post('/login', UserController.login_user)

router.delete('/:userId',checkAuth, UserController.delete_user)

module.exports = router;