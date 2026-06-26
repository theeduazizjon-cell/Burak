export enum HttpCode {
    OK = 200, 
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500, 
}

export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong",
    NO_DATA_FOUND = "No data found",
    CREATE_FAILED = "Create failed",
    UPDATE_FAILED = "Update failed",
    DELETE_FAILED = "Delete failed",

    NO_MEMBER_NICK = "No member with that nickname!", 
    LOGIN_FAILED = "Login failed!", 
    BLOCKED_USER = "You have been blocked, contact restaurant", 
    USED_NICK_PHONE = "Nickname or phone number aready used!", 
    WRONG_PASSWORD = "Wrong password!", 
    NOT_AUTHENTICATED = "You are not authenticated, please login first",
}

class Errors extends Error {
    public code: HttpCode; 
    public message: Message; 

    static standard = {
        code: HttpCode.INTERNAL_SERVER_ERROR, 
        message: Message.SOMETHING_WENT_WRONG,
    }

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
        }
}

export default Errors;