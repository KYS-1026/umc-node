// temp.controller.js : 통신 요청 시 응답을 받기 위한 코드 
import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';

import { getTempData } from '../services/temp.service.js';
import { CheckFlag } from '../services/temp.service.js';


export const tempTest = (req, res, next) => { // 이 tempTest를 route로 넘겨줌 
    // status 중 SUCCESS에 해당되는 응답내용이 응답 포맷에 넣어져 전송 
    res.send(response(status.SUCCESS, getTempData())); // getTempData()를 통해 추가적으로 전달해야할 데이터(json) 전송
    // service -> DTO를 통해 클라이언트에게 전달하고자 하는 형태와 내용으로 제작
};


// 에러 핸들링 실습 
export const tempException = (req, res, next) => {
    console.log("/temp/exception/"+req.params.flag);
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
}