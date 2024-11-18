import Axios from "./CallerAxios";

let getCategorie = () => {
    return Axios.get('chambrecategorie')
}

let getAllChambre = () => {
    return Axios.get('chambres')
}

let  createCategorie =  (data)=>{
    return Axios.post('chambrecategorie',data)
}

let  createChambre =  (data)=>{
    return Axios.post('chambres',data)
}



export const Chambre = {getCategorie,getAllChambre,createCategorie,createChambre}