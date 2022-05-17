import React, {useState} from 'react';
import {cardsAPI} from "../api/axios";

export interface LoginData {
    email: string,
    password: string,
    rememberMe: boolean
}

const LogIn = () => {
     const [loginData, setLoginData] = useState<LoginData>({
        email: "",
        password: "",
        rememberMe: false
    })

    const loginOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            email: e.currentTarget.value
        })
    }

    const passwordOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            password: e.currentTarget.value
        })
    }

    const logInPressHandler = () => {
        cardsAPI.authMe(loginData).then(response => {
            console.log (response.data);
        }).catch(error => {
            console.log(error.response.data);
        })
    }
    return (
        <div>
            <span>LogIn</span>
            <div>
                <input onChange={loginOnChangeHandler} type="text" placeholder="email"/>
            </div>
            <div>
                <input onChange={passwordOnChangeHandler} type="text" placeholder="password"/>
            </div>
            <div>
                <button onClick={logInPressHandler}>log in</button>
            </div>
        </div>
    );
};

export default LogIn;
