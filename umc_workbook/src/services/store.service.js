// store.service.js

// DTO를 가져옴 
import { addStoreResponseDTO, addMissionResponseDTO } from "../dtos/store.response.dto.js";
import { addStore, getStore, addMission, getMission } from "../models/store.dao.js";

// 함수 정의
export const joinStore = async (body) => {
    const joinStoreData = await addStore({
        'name' : body.name,
        'address' : body.address,
        'spec_address' : body.spec_address,
        'score' : body.score
    });

    return addStoreResponseDTO(await getStore(joinStoreData));
} 

export const joinMission = async(body) => {
    const deadline = new Data(body.deadlineYear, body.deadlineMonth, body.deadlineDay);
    console.log(deadline);

    const joinStoreData = await addMission({
        'store_id' : body.store_id,
        'reward' : body.reward,
        'deadline' : body.deadline,
        'content' : body.content
    });
    return addMissionResponseDTO(await getMission(joinStoreData));
}

