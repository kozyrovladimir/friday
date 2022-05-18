import React from 'react';
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigation = useNavigate();
    const NavOnClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigation(`/friday/${e.currentTarget.value}`)
    }
    return (
        <div>
            <button value='' onClick={NavOnClickHandler}>Home</button>
            <button value='profile' onClick={NavOnClickHandler}>Profile</button>
            <button value='login' onClick={NavOnClickHandler}>Login</button>
            <button value='sign-in' onClick={NavOnClickHandler}>Sign In</button>
            <button value='restore-password' onClick={NavOnClickHandler}>Restore Password</button>
            <button value='new-password' onClick={NavOnClickHandler}>New Password</button>
            <button value='test-page' onClick={NavOnClickHandler}>Test Page</button>
        </div>
    );
};

export default Navigation;
