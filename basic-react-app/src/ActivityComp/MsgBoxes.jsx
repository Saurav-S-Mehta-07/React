import MsgBox from "./MsgBox";
import "./MsgBoxes.css"

function MsgBoxes(){
    return(
        <div className="MsgBoxes">
          <MsgBox username="saurav" color="blue"/>
          <MsgBox  username="gaurav" color="red"/>
          <MsgBox  username="shivam" color="yellow"/>
          <MsgBox  username="harry" color="green"/>
        </div>
    )
}

export default MsgBoxes;