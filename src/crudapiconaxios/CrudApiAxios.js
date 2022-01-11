import axios from 'axios'
import React, { useState, useEffect} from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'


export default function CrudApicopy() {
  const[Db, setDb] = useState([])
  const[dataToEdit, setdataToEdit] = useState(null)

  const url = ("http://localhost:5000/jugadores")

 useEffect(() => {
   axios.get(url)
   .then(res=> setDb(res.data))
  }, [])


  const createData = (data) => {
    axios(url,{
      method: "POST",
      data: JSON.stringify(data),
      headers: {"Content-type" : "application/json"}})
      .then(res=> setDb([...Db, data]))}


  const deleteData = (id) => {
    let isdelete = window.confirm(`Do you want to delete the record with the id number ${id}?`)

    if(isdelete){
      let endpoint = `${url}/${id}`
      let options = {
        method: "DELETE",
        headers: {"Content-type" : "application/json"}}
    axios(endpoint, options).then(res=> {
    let newData = Db.filter((el)=> el.id !== id )
    setDb(newData)
    })} }
    

 

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    let options = {
      method: "PUT",
      data: JSON.stringify(data),
      headers: {"Content-type" : "application/json"}};
    axios(endpoint, options).then(res=>{   let newData = Db.map((el)=> el.id === data.id ? data : el) 
      setDb(newData)} )}


  return (
    <div>
      <h1>CRUD API CON AXIOS</h1>
      <CrudForm createData={createData} setdataToEdit={setdataToEdit} dataToEdit={dataToEdit} updateData={updateData}/> <br/>
      <CrudTable deleteData={deleteData} setdataToEdit={setdataToEdit} data={Db}/>
    </div>
  )
}


