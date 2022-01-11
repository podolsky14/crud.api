import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

const initialDb = [
  {
    id: 1,
    name: "Maradona",
    position: "Advanced midfielder"

  },
  {
    id: 2,
    name: "Pele",
    position: "Forward"

  },
  {
    id: 3,
    name: "Messi",
    position: "Forward"

  },
  {
    id: 4,
    name: "Cruyff",
    position: "Advanced Midfielder"

  },
  {
    id: 5,
    name: "Beckenbauer",
    position: "Central defender"}
]
export default function Crud() {
  const[Db, setDb] = useState(initialDb)
  const[dataToEdit, setdataToEdit] = useState(null)

  //vas a actualizar la bd. A la base de datos, le agregaras la data que recibes del formulario.
  const createData = (data) => {
    data.id = Date.now();
    setDb([...Db, data])}

  //de la Db, filtraras todos los "el" cuyos id sean distintos del id q recibes. Luego, actualizaras la Bd con la nueva data.  
  const deleteData = (id) => {
    let Delete = window.confirm(`Estas seguro de queres borrar el usuario con el id numero "${id}"? `)
    if (Delete){
let newData = Db.filter((el)=> el.id !== id)
setDb(newData) }}

//De la Bd, seleccionarás todos los "el" cuyo id, sean = al id q recibes. Si hay alguno igual, renderizaras la nueva data,
// sino entonces dejaras los "el" como están
  const updateData = (data) => {
let newData = Db.map((el)=> el.id === data.id ? data : el)
setDb(newData)
  }

  return (
    <div>
      <h1>CRUD CON API FALSA</h1>
      <Form createData={createData} setdataToEdit={setdataToEdit} dataToEdit={dataToEdit} updateData={updateData}/> <br/>
      <Table deleteData={deleteData} setdataToEdit={setdataToEdit} data={Db}/>
      
    </div>
  )
}
