// models/store.dao.js
import { pool } from "../../config/db.connect.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { getStoreId, insertStoreSql, getMissionID, insertMissionSql } from "./store.sql.js";
import { getMissionByMissionId, getMissionByMissionIdAtFirst } from "../models/store.sql.js";

// store data : 데이터베이스에 새로운 가게 정보를 추가
export const addStore = async(data) => {
    // 데이터베이스 연결 풀에서 새로운 연결을 가져옴
    const conn = await pool.getConnection(); 
    // 프리페어 스타일로 SQL을 실행하여 가게 정보를 데이터베이스에 추가합니다.
    const result = await pool.query(insertStoreSql, [data.name, data.address, data.spec_address, data.score]);
    // 연결을 반환하여 다른 요청에서 사용할 수 있도록 함
    conn.release();
    //삽입된 데이터의 ID를 반환
    return result[0].insertId;  
}


// 가게 정보 얻기 : 특정 가게 ID에 해당하는 가게 정보를 가져옴
export const getStore = async(storeId) => {
    try {
        // 데이터베이스 연결 풀에서 새로운 연결을 가져옴
        const conn = await pool.getConnection();
        // 프리페어 스타일로 SQL을 실행하여 특정 가게 ID에 해당하는 가게 정보를 가져옴
        const [store] = await pool.query(getStoreId, storeId);

        // 가져온 가게 정보가 없으면 -1 반환
        if (store.length == 0) {
            return -1;
        }

        // 연결을 반환하여 다른 요청에서 사용할 수 있도록 함
        conn.release();
        // 특정 가게 ID에 해당하는 가게 정보를 반환
        return store;

    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}

// 미션 데이터 : DB에 새로운 미션 정보 추가 
export const addMission = async(data) => {
    try { 
        const conn = await pool.getConnection();
        const result = await pool.query(insertMissionSql, [data.store_id, data.reward, data.deadline, data.content]);
        
        conn.release();
        return result[0].insertId;

    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 미션 정보 얻기 : 특정 미션에 해당하는 정보를 가져옴 
export const getMission = async(missionID) => {
    try {
        const conn = await pool.getConnection();
        const [mission] = await pool.query(getMissionID, missionId);

        // 가져온 미션 정보가 없으면 -1을 반환
        if (missionID.length == 0) {
            return -1;
        }

        conn.release();
        return mission;

    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

}

// 특정 가게 미션 목록 조회
export const getPreviewMission = async(cursorId, size, storeId) => {
    const conn = await pool.getConnection();
    if (cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null) {
        // const [missions] : 배열에서 첫번째 원소를 추출하여 missions라는 변수에 할당.
        const [missions] = await pool.query(getMissionByMissionIdAtFirst, [parseInt(storeId), parseInt(size)]);
        conn.release();
        return missions;
    }
    else {
        const [missions] = await pool.query(getMissionByMissionId, [parseInt(storeId), parseInt(size)]);
        conn.release();
        return missions;
    }
}