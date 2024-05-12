export interface IAccountApiResponse {
    userName: string;
    token: string;
}

export interface IAccountLoginApiRequest {
    username: string;
    password: string;
}

export const USER_BEARER_TOKEN_LOCAL_STORAGE_KEY: string = "userBearerToken";
export const USER_NAME_LOCAL_STORAGE_KEY: string = "userName";
export const USER_ID_LOCAL_STORAGE_KEY: string = "userId";