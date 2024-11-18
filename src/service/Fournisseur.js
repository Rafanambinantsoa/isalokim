import Axios from "./CallerAxios";

let getAllFournisseur = () => {
    return Axios.get('fournisseurs')
}

let createFournisseur = (data) => {
    return Axios.post('fournisseurs',data)
}
let deleteFournisseur = (id)=>{
    return Axios.delete('fournisseurs/'+id)
}
let updateFournisseur = (id,data)=>{
    return Axios.put('fournisseurs/'+id,data)
}

export const Fournisseur = {getAllFournisseur,createFournisseur,deleteFournisseur,updateFournisseur}