
import React from "react";
import { useEffect, useState } from "react";

function LocalStorage(){
const[userName, setUsername]= useState(" ");
const[password, setPassword]= useState(" ");


const addStorage= () =>{

    localStorage.setItem ("userName",userName);
    localStorage.setItem ("passWord",password);
    setUsername(" ");
    setPassword(" ");
};

return(
    <div>
        <h1>Login</h1>

        <input type="text" value= {userName} onChange={(e)=>setUsername(e.target.value)}
        />
        <input type="text" value= {password} onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={addStorage}
        >Save</button>
    </div>
);
}
export default LocalStorage;


