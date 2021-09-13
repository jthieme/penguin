import express from 'express'
import { findQue } from './routes_logic.js';
import { createQue } from './routes_logic.js';
import { find_by_que_id } from './routes_logic.js';
import { today_que } from './routes_logic.js';
import { register } from './routes_logic.js';
// import { delete_queue } from './routes_logic.js';
import { ownerUrl } from './routes_logic.js';
// using the mongodb
import PenguinQue from '../MongoDB/schemas.js';

const router = express.Router();

// list all my routes
// get Request
router.get('/find', findQue)
router.get('/queue=:queId', find_by_que_id)
router.get('/today', today_que)

router.get('/owner=:ownerId', ownerUrl)

// post request
router.post('/create', createQue)
router.post('/register', register)

// delete Request
// router.delete('/delete=:queId', delete_queue)





export default router;