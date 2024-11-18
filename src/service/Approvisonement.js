import Axios from "./CallerAxios";


let getAllApprovisionement = () => {
    return Axios.get('stockstoiles')
}


let createApprovisionement = (data) => {
    return Axios.post('stockstoiles',data)
}



export const Approvisionement = {createApprovisionement,getAllApprovisionement}