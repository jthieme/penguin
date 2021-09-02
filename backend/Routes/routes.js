
import express from 'express'
import { findQue } from './routes_logic.js';
import { createQue } from './routes_logic.js';
import { find_by_que_id } from './routes_logic.js';
import { today_que } from './routes_logic.js';
import { register } from './routes_logic.js';
// using the mongodb
import PenguinQue from '../MongoDB/schemas.js';

const router = express.Router();

// list all my routes
// get Request
router.get('/find', findQue)
router.get('/queue=:queId', find_by_que_id)
router.get('/today', today_que)

// post request
router.post('/create', createQue)
router.post('/register', register)





export default router;