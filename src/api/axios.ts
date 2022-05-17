import axios from "axios";
import {LoginData} from "../components/LogIn";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

interface GetPingPostType {
    ping: number,
    backTime: number,
    frontTime: number,
    info: string
}

interface AuthResponseDataType {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number,
    created: number,
    updated: number,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    error?: string,
}

export const cardsAPI = {
    getPing: () => {
        return instance.get('ping');
    },
    getPingPost: () => {
        return instance.post<GetPingPostType>('ping', {frontTime: Date.now()});
    },
    authMe: (authData: LoginData) => {
        return instance.post<AuthResponseDataType>('auth/login', {...authData})
    }
}

