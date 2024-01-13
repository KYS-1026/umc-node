// models/store.sql.js -> 쿼리문을 작성해서 필요한 데이터를 외부 모듈화 

// ?는 실제 값으로 대체될 매개 변수를 나타냄 
export const getStoreId = "INSERT INTO store (name, address, spec_address, score) VALUES (?, ?, ?, ?);";

export const insertStoreSql = "SELECT * FROM store WHERE id = ?;";

export const getMissionID = "INSERT INTO mission (store_id, reward, deadline, content) vALUES (?, ?, ?, ?);";

export const insertMissionSql = "SELECT * ROM mission WHERE id = ?;";

// 특정 가게 미션 목록 조회 
export const getMissionByMissionId = "SELECT st.name, m.id, m.reward, m.deadline, m.mission_spec, m.created_at"
 "FROM mission m JOIN store st on m.store_id = st.id"
 "WHERE m.store_id = ? AND m.id < ? "
 "ORDER BY m.id DESC LIMIT ?;"

export const getMissionByMissionIdAtFirst = "SELECT st.name, m.id, m.reward, m.deadline, m.mission_spec, m.created_at "
    "FROM mission m JOIN store st on m.store_id = st.id "
    "WHERE m.store_id = ? "
    "ORDER BY m.id DESC LIMIT ? ;"