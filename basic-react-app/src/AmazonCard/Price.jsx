export default function Pirce({oldPrice,newPrice}){
    let styles = {
        display: "flex",
        backgroundColor:"#eed47fff",
        borderBottomLeftRadius:"16px",
        borderBottomRightRadius:"16px",
        justifyContent:"center",
        color:"black"
    }
    let oldPriceStyle={
        textDecoration:"line-through"
    }

    return(
        <div style={styles}>
          <p style={oldPriceStyle}>{oldPrice}</p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <p>{newPrice}</p>
        </div>
    )

}