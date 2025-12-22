function MsgBox({username,color}){
    let styles = {color:color};
    return(
        <>
          <h1 style={styles}>Hello! {username}</h1>
        </>
    )
}

export default MsgBox;