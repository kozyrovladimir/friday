import React from 'react';
import {cardsAPI} from "../api/axios";
import {Simulate} from "react-dom/test-utils";

const Home = () => {
    const onClickHandlerGet = () => {
        cardsAPI.getPing().then(response => {
            console.log(response.data);
        }).catch(error=> {console.log(error)})}

    const onClickHandlerPost = () => {
        cardsAPI.getPingPost().then(response => {
            console.log(response.data);
        })
    }

    return (
        <div>
            <span>Home</span>
            <div>
                <button onClick={onClickHandlerGet}>
                    get ping
                </button>

                <button onClick={onClickHandlerPost}>
                    get ping post
                </button>
            </div>
        </div>
    );
};

export default Home;
