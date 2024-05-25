import { useState } from "react"

function Increment(){

    var [data,updateData] = useState(0);
    
    return(
        <div className="main">
            <h1>React Web</h1>
            <p>{data}</p>
            <button onClick={()=>updateData(data+1)}>Increment</button>
            <button onClick={()=>updateData(data-1)}>Decrement</button>
            <button onClick={()=>updateData(data-data)}>Reset </button>
        </div>
    )

}
export default Increment;