
import React from "react";
import { useEffect, useState } from "react";

function LocalStorage(){
const[userName, setUsername]= useState(" ");
const[password, setPassword]= useState(" ");


const addStorage= () =>{

const savedUser=localStorage.getItem("userName")
const savedPassword=localStorage.getItem("passWord")

if (userName ===savedUser && password ===savedPassword){
    alert("Login succesfull!");
}else { alert("Wrong username or password")
}
setUsername(" ")
setPassword(" ")
};

return(
<div>
<input 
type="text" 
value={userName}
onChange={(e)=>
    setUsername(e.target.value)}
    />
<input type="password" 
value={password}
    onChange={(e)=>
        setPassword(e.target.value)}
        />

    <button onClick={addStorage}
    >Login</button>
    </div>
    
);
}
export default LocalStorage;


