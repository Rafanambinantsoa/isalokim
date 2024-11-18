import axios from "axios"

const  Axios  = axios.create({
   // baseURL : 'https://isalo.shop/api'
    baseURL : 'http://localhost:8000/api'
})


export default Axios