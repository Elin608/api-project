import { useEffect, useState }
    from "react";
import confetti from "canvas-confetti";

function App() {
    const [feedback, setFeedback] =
        useState("");
    const [dog, setDog] = useState("");
    const [seen, setSeen] = useState(0);
    const [notSeen, setNotSeen] = useState(0);

    const getDog = async () => {
        const res = await
            fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();
        console.log(data);
        setDog(data.message);
    };



    useEffect(() => {
        getDog();
    }, []);



    return (
        <div className="game">
            <h1>Dog Game</h1>

            <button onClick={() => {
                setSeen(seen + 1);

                confetti({
                    particleCount: 80,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                getDog();
            }}>
                Seen
            </button>

            <button onClick={() => {
                setNotSeen(notSeen + 1);
                getDog();
            }}>

                Not seen
            </button>



            <button onClick={() => {
                setSeen(0);
                setNotSeen(0);
            }}>Reset</button>

            <p>{feedback}</p>




            <p>Seen: {seen}</p>
            <p>Not seen: {notSeen}</p>

            {dog && <img src={dog} alt="dog" widht="500" />}
        </div>
    );
}

export default App;

