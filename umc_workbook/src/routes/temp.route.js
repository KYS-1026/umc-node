// temp.route.js

import express from 'express';

// tempTest를 컨트롤러에서 받아옴 
import { tempTest } from '../controllers/temp.controller.js';
import { tempException } from '../controllers/temp.controller.js';

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

// 에러 핸들링 실습 
tempRouter.get('/exception/:flag',tempException);