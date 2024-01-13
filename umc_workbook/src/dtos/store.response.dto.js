// dtos/store.response.dto.js

// sign in response DTO
export const addStoreResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const addMissionResponseDTO = (mission) => {

    return {"reward" : mission[0].reward, "content" : mission[0].content };
}


// 특정 가게 미션 목록 조회 
export const previewMissionResponseDTO = (data) => {
    const missions = [];

    for (let i =0; i < data.length; i++) {
        missions.push({
            "reward" : data[i].reward,
            "deadline" : data[i].deadline,
            "mission_spec" : data[i].mission_spec,
            "creat_at" : formatDate(data[i].creat_at)
        })
    }
    return {"MissionData": missions, "cursorId" : data[data.length-1].id};
}