import Axios from "./CallerAxios";

let getAllCategory = () => {
    return Axios.get('categorie')
}

let getAllProduct = () => {
    return Axios.get('produits')
}

let createProduct =  (data)=>{
    return Axios.post('produits',data)
}

export const Produit = {getAllCategory,getAllProduct,createProduct}