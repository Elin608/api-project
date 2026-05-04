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

    <button onClick={() => setSeen (seen + 1)}>
      

      Seen
    </button>

    <button onClick={() => setNotSeen (seen + 1)}>
      Not Seen
    </button>

    <button onClick={() => {
      fetch ("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) =>
        setDog (data.message));
      }}>
        New Dog
      </button>

      <p>Seen:{seen}</p>
      <p> notSeen:{notSeen}</p>
      
    
    {dog && <img src={dog} alt ="dog" 
    width="300" />}
     </div>
 );
 }
 export default App;

