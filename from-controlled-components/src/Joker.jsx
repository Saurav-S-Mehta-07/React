import { useEffect, useState } from "react";


export default function Joker(){

    const url = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
      let res =  await fetch(url);
      let jsonRes = await res.json();
      setJoke(()=>{
        return jsonRes;
      })
    }

    useEffect(()=>{async function getFirstJoke(){
         let res =  await fetch(url);
         let jsonRes = await res.json();
         setJoke(()=>{
           return jsonRes;
         })
        }
        getFirstJoke();
    },[]);

    let [joke,setJoke] = useState(getNewJoke);


    let styles = {
        border : "2px solid white",
        borderRadius : "20px",
        padding: "20px",
        margin : "20px"
    }

    return(
        <div>
            <h1>Joke - API fetching jokes</h1>

            <h2 style={styles}>{joke.setup}</h2>
            <h2 style={ styles}>{joke.punchline}</h2>

            <button onClick={getNewJoke}>Get new Joke</button>
        </div>
    )
}