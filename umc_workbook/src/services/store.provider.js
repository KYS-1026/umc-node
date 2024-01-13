import { previewMissionResponseDTO } from "../dtos/store.response.dto.js";
import { getPreviewMission} from "../models/store.dao.js";

// 특정 가게의 미션 목록 조회
export const getMission = async (storeId, query) => {
    const { mmisionId, size = 3 } = query;
    return previewMissionResponseDTO(await getPreviewMission(missionId, size, storeId));
}