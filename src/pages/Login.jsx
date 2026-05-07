
import React from "react";
import {useState } from "react";
import ApiPage from "./ApiPage.jsx";

function LocalStorage() {
    const [userName, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [loggedIn, setLoggedIn] = useState(false);

    const addStorage = () => {

        const savedUser = localStorage.getItem("userName")
        const savedPassword = localStorage.getItem("passWord")

        if (userName === savedUser && password === savedPassword) {
            setLoggedIn(true);
        } else {
            alert("Wrong username or password")
        }
        setUsername(" ")
        setPassword(" ")
    };
    
    if (loggedIn) {
        return <ApiPage />;
    }
    return (
        <div>
            <input
                type="text"
                value={userName}
                onChange={(e) =>
                    setUsername(e.target.value)}
            />
            <input type="password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)}
            />

            <button onClick={addStorage}
            >Login</button>
        </div>

    );
}
export default LocalStorage;


