export default function Comments({comments}){
      let styles = {
       border : "1px solid pink",
       borderRadius : "20px",
       margin : "20px",
       padding: "20px"
    }
    return (
        <>
        <h5>Comments</h5>
        <div >
            {
                comments.map((remark,idx)=>
                 <div key={idx} style={styles}>
                    <span>o&nbsp; &nbsp;{idx+1}&nbsp; &nbsp;-</span> &nbsp; &nbsp;
                    <span>{remark.username}</span>&nbsp; -: &nbsp;
                    <span>{remark.comment}</span>&nbsp;
                    -: &nbsp;
                    <span>{remark.rating}</span>
                 </div>
                )
            }
         </div>
         </>
    )
}