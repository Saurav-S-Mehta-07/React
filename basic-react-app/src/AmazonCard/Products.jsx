import Card from "./Card";

export default function Products(){
    let styles = {
        display:"flex",
        padding:"5px",
        justifyContent:"space-evenly"
    }
    return(
        <div style={styles}>
          <Card title="Mouse" oldPrice={1200} newPrice={999}/>
          <Card title="Keyboard" oldPrice={1199} newPrice={899}/>
          <Card title="CPU"  oldPrice={799} newPrice={455}/>
          <Card title="iPhone"  oldPrice={9999} newPrice ={7899}/>
        </div>
    )
}