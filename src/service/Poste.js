import Axios from "./CallerAxios";

let getPoste = () => {
    return Axios.get('postes')
}
let deletePoste = (id) => {
    return Axios.delete('postes/' + id)
}
let createPoste = (data) => {
    return Axios.post('postes', data)
}

let updatePoste =  (id,data)=>{
    return Axios.put('postes/' + id,data)
}

export const Poste = { getPoste, deletePoste, createPoste,updatePoste }