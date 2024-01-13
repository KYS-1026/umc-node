// store.route.js
// 특정 지역에 가게 추가하기 9-1

import express from 'express';
import asyncHandler from 'express-async-handler';

// storeAdd와 missionAdd를 컨트롤러에서 받아옴 
import { storeAdd, missionAdd } from '../controllers/store.controller.js';

export const storeRouter = express.Router();

storeRouter.post('/add', asyncHandler(storeAdd));
storeRouter.post('/mission', asyncHandler(missionAdd));