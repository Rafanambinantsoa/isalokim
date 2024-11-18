import Axios from "./CallerAxios"

const login = (data) => {
    return Axios.post('login',data)
}


const isLoggin = () => {
    let token = JSON.stringify(localStorage.getItem('user'))
    return !!token
}

const getToken = () => {
    
    return  JSON.parse(localStorage.getItem('user'))
}

export const serviceCount = {getToken,isLoggin,login}