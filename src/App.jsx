import { useEffect, useState }
 from "react";

function App() {
  const[dog,setDog] =  useState ("");
  const [seen, setSeen] =useState(0);
  const [notSeen, setNotSeen] =useState(0);

 
  useEffect (() => {
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setDog(data.message);

 });
 }, []);
 

 return (
  <div>
    <h1>Dog Game</h1>
  <button onClick={() =>
  setSeen(seen + 1)}>Seen</button>

  <button onClick={() =>
  setNotSeen(notSeen + 1)}>Not seen</button>

  <button onClick={() =>{
    fetch ("https://dog.ceo/api/breeds/image/random")
    .then((res)=>res.json())
    .then((data)=>
      setDog(data.message));
    }}>New Dog</button>

    <button onClick={() => {
      setSeen(0);
      setNotSeen(0);
      }}>Reset</button>





    <p>Seen: {seen}</p>
    <p>Not seen: {notSeen}</p>

    {dog && <img src={dog} alt ="dog" widht ="500" />}
    </div>
 );
 }

export default App;

      