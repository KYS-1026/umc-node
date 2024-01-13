// store.controller.js : 통신 요청 시 응답을 받기 위한 코드 
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

import { joinStore } from '../services/store.service.js';
import { joinMission } from '../services/store.service.js';


export const storeAdd = async(req, res, next) => { // 이 tempTest를 route로 넘겨줌 
    const store_add = req.body;
    console.log("가게 추가를 요청하였습니다");
    console.log("body:", store_add);

    res.send(response(status.SUCCESS, await joinStore(store_add))); 
};


export const missionAdd = async(req, res, next) => {
    const mission_add = req.body;
    console.log("미션 추가를 요청하였습니다");
    console.log("body:", mission_add);
    
    return res.send(response(status.SUCCESS, await joinMission(mission_add)));
};