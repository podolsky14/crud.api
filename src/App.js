import './App.css';
import CrudApi from './crudapi/CrudApi';
import CrudApiAxios from './crudapiconaxios/CrudApiAxios';
import Crud from './crudnormal/Crud';



export default function App() {
  return (
    <>
<CrudApiAxios/><br/>
<CrudApi/><br/>
<Crud/>
</>

  )
}

