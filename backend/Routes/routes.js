import express from 'express'
import { findQue } from './routes_logic.js';
import { createQue } from './routes_logic.js';
import { find_by_que_id } from './routes_logic.js';
// using the mongodb
import PenguinQue from '../MongoDB/schemas.js';

const router = express.Router();

// list all my routes
router.get('/find', findQue)
router.post('/create', createQue)
router.get('/queId', find_by_que_id)


export default router;