
import React, { useState, useEffect } from 'react'

const initialForm = {
  name: "",
  position: "",
  id : null
}

export default function Form({createData, setdataToEdit, dataToEdit, updateData}) {
  const [form, setForm] = useState (initialForm)

  useEffect(() => {
   if(dataToEdit){
     setForm(dataToEdit)
    } else  {
      setForm(initialForm)}
  }, [dataToEdit])

 const handleChange = (e) => {
setForm({
  ...form,
  [e.target.name]: e.target.value
  
})
console.log(e.target.value)
  console.log(e.target.name)
 }

 const handleSubmit = (e) => {
   e.preventDefault()
   if(!form.name || !form.position) {
     alert("please, complete the data")
     return; }

     if(form.id === null) {
     createData(form)
    } else {
      updateData(form) 
    }

      handleReset()
 }

 const handleReset = (e) => {
  setForm(initialForm);
  setdataToEdit(null);
 }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" placeholder='Name' value={form.name  || ""} onChange={handleChange} />
      <input type="text" id="position" name="position" placeholder='Position' value={form.position  || ""} onChange={handleChange} />
      <input type="submit" value="submit"/>
      <input type="reset" value="reset" onClick={handleReset}/>
      </form>
    </div>
  )
}

