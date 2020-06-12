const router = require('express').Router();
const checkAuth = require('../middlewares/check-auth');
const ExerciseController = require('../controllers/exercise');


router.get('/',checkAuth, ExerciseController.get_all_exercise)

router.get('/:exerciseId', checkAuth, ExerciseController.get_single_exercise)

router.post('/add', checkAuth, ExerciseController.add_new_exercise)

router.patch('/:exerciseId', checkAuth , ExerciseController.update_existing_exercise)

router.delete('/:exerciseId',checkAuth, ExerciseController.delete_exercise)

module.exports = router;