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

