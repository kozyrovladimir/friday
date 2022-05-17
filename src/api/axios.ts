import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

export const cardsAPI = {
    getPing: () => {
        return instance.get('ping')
    }
}


