import React from 'react';
import {
    Routes,
    Route, BrowserRouter, useNavigate,
} from "react-router-dom";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import RestorePassword from "./components/RestorePassword";
import NewPassword from "./components/NewPassword";
import TestPage from "./components/TestPage";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>
                <Routes>
                    <Route path='friday/' element={<Home/>}/>
                    <Route path="friday/profile" element={<Profile/>}/>
                    <Route path="friday/login" element={<LogIn/>}/>
                    <Route path="friday/sign-in" element={<SignIn/>}/>
                    <Route path="friday/restore-password" element={<RestorePassword/>}/>
                    <Route path="friday/new-password" element={<NewPassword/>}/>
                    <Route path="friday/test-page" element={<TestPage/>}/>
                    <Route path="friday/*" element={<NotFound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
