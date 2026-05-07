import { useEffect, useState } from "react";

function Register() {

    const [userName, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");
    const registerUser = () => {

        localStorage.setItem("userName", userName);
        localStorage.setItem("passWord", password);
        alert("User saved!");
        setUsername(" ");
        setPassword(" ");
    };
    return (
        <div>
            <h1>Register</h1>
            <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={registerUser}
            >Save</button>
        </div>
    );
}
export default Register;