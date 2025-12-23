import { useState } from "react";
import "./LikeBtn.css";



export default function LikeBtn(){

    let [isLike,setIsLike] = useState(true);

    let handleLike = ()=>{
        if(isLike==true){
            setIsLike(false);
        }else{
            setIsLike(true);
        }
    };

    let styles = {color:"red"};

    return (
        <>
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