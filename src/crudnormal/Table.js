import React from 'react'

export default function Table({data, deleteData, setdataToEdit}) {
    return (
        <div>
            <table>
<thead>
<tr>
    <th>NAME&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </th>
    <th>POSITION&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</th>
    <th>ACTIONS</th>
</tr>
</thead>

{(data.map((el)=> 
<tbody key={el.id}>
<tr>
<td>{el.name}</td>
<td>{el.position}</td>
<td><button onClick={()=> setdataToEdit(el)}>EDIT</button> 
<button onClick={()=> deleteData(el.id)}>DELETE</button></td>
</tr>

</tbody>
))}

            </table>
        </div>
    )
}

