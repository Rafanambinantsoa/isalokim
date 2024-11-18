import Axios from "./CallerAxios";

let getTypeConge = () => {
    return Axios.get('type_congers')
}
let getAllConge = () => {
    return Axios.get('congers')
}

let createConge = (data) => {
    return Axios.post('congers',data)
}
let deleteconge = (id)=>{
    return Axios.delete('congers/'+id)
}
let updateConge = (id,data)=>{
    return Axios.put('congers/'+id,data)
}

export const Conge = {getTypeConge,createConge,getAllConge,deleteconge,updateConge}