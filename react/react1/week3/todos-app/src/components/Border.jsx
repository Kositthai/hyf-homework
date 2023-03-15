export default function Border(props) {
    return ( 
        <div style={{border: "solid", margin: "1em", padding:"1em"}}>
            {props.children}
        </div>
     );
}
