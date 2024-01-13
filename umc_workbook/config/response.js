// response.js : 어떤 식으로 보여줄 지에 대한 형식 (응답 포맷)

export const response = ({isSuccess, code, message}, result) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result
    }
};