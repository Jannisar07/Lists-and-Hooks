import { useState } from "react";
import { Fragment } from "react";
function List(){
    var data = [
        {
            "id": 1,
            "name":"jannisar",
            "age": 23
        },
        {
            "id": 2,
            "name":"Nischal",
            "age": 24
        },
        {
            "id": 3,
            "name":"Nikhil",
            "age": 22
        },
        {
            "id": 4,
            "name":"Partik",
            "age": 23
        },
        {
            "id": 5,
            "name":"yuvraj",
            "age": 23
        }
    ]
    return(
        <div className="listmain">
            <h1>Data Insert</h1>

            <table border>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            {
                data.map((val)=>
                    <>

                <tr>
                    <td>{val.name}</td>
                    <td>{val.age}</td>

                </tr>


                    </>
                )

                
            }
            </table>

        </div>
    )
}
export default List;