import React, { useState, useEffect} from 'react'
import MessageError from '../MessageError'
import Form from './CrudForm'
import Table from './CrudTable'


export default function CrudApi() {
  const[Db, setDb] = useState(null)
  const[dataToEdit, setdataToEdit] = useState(null)
const [error, seterror] = useState(false)


  const url = ("http://localhost:5000/jugadores")

useEffect(() => {
  fetch(url).then(res=>{
    if(res.ok)
    return res.json()
    else
    throw (res)
  })
  .then(res=>{
    setDb(res)
    seterror(false)
  })
  .catch(res=>{
    setDb(null)
    seterror(true)
  })
}, [])


const createData = (data) => {
fetch(url,{
  method: "POST",
  body: JSON.stringify(data),
  headers: {"Content-type" : "application/json"}})
  .then(res=> setDb([...Db, data]))}

  const deleteData = (id) => {
    let Delete = window.confirm(`Estas seguro de queres borrar el usuario con el id numero "${id}"? `)
    if (Delete){
let endpoint = `${url}/${id}`
let options = {
  method: "DELETE",
  headers: {"Content-type" : "application/json"}};
  fetch(endpoint, options).then(res=> {
let newData = Db.filter((el)=> el.id !== id)
setDb(newData)})}}

  const updateData = (data) => {
  let endpoint = `${url}/${data.id}`
  let options = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {"Content-type" : "application/json"}};
  fetch(endpoint, options).then(res=>{
    let newData = Db.map((el)=> el.id === data.id ? data : el)
setDb(newData)})}

  return (
    <div>
      <h1>CRUD API CON FETCH</h1>
      <Form createData={createData} setdataToEdit={setdataToEdit} dataToEdit={dataToEdit} updateData={updateData}/> <br/>
      {error && <MessageError/>}
      {Db && (
      <Table deleteData={deleteData} setdataToEdit={setdataToEdit} data={Db}/>
      )}
    </div>
  )
}


