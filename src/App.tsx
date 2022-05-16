import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Profile from "./components/Profile";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import RestorePassword from "./components/RestorePassword";
import NewPassword from "./components/NewPassword";
import TestPage from "./components/TestPage";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="login" element={<LogIn/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="restore-password" element={<RestorePassword/>}/>
                    <Route path="new-password" element={<NewPassword/>}/>
                    <Route path="test-page" element={<TestPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
