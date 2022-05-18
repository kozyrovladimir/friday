import React, {useState} from 'react';
import {cardsAPI} from "../api/axios";

const Home = () => {
    const [info, setInfo] = useState<number | string>('');

    const onClickHandlerGet = () => {
        setInfo('wait');
        cardsAPI.getPing().then(response => {
            console.log(response.data);
            setInfo(response.data.ping);
        }).catch(error => {
            console.log(error)
        })
    }

    const onClickHandlerPost = () => {
        setInfo('wait');
        cardsAPI.getPingPost().then(response => {
            console.log(response.data);
            setInfo(response.data.ping);
        }).catch(error => {
            console.log(error)
        });
    }
    return (
        <div>
            <span>Home</span>
            <div>
                <span>{'Ping information: '}</span>
                <span>{info ? info + '.' : 'no information.'}</span>
            </div>
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
