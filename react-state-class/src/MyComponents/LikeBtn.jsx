import { useState } from "react";
import "./LikeBtn.css";

export default function LikeBtn(){

    let [isLike,setIsLike] = useState(true);
    let [click,setClick] = useState(0);

    let handleLike = ()=>{
        setIsLike(!isLike);
        setClick(click+1);
    };

    let styles = {color:"red"};

    return (
        <>
        <h1>Click: {click}</h1>
        {
           isLike===false
            ?
           <i className="fa-solid fa-heart" style={styles} onClick={handleLike}></i>
           :
           <i className="fa-regular fa-heart"  onClick={handleLike}></i>
        }
        </>
    )
}