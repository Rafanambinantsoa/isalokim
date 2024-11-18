import Axios from "./CallerAxios";

let getEmploye = () => {
    return Axios.get('users')
}

let createEmploye = (data) => {
    return Axios.post('users',data)
}

let infotEmploye = (id) => {
    return Axios.get('users/'+id)
}
let deleteEmploye = (id)=>{
    return Axios.delete('users/'+id)
}
export const Employe = {getEmploye,createEmploye,infotEmploye,deleteEmploye}