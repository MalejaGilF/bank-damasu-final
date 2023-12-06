import express from 'express';
const router = express.Router();
//import controllers
import { createUser } from '../controllers/user.controller';

//routes
router.route('/createUser').post(createUser);

module.exports = router;
