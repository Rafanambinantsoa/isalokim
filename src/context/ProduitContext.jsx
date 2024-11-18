// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { Produit } from "../service/Produit";
import { useAdmin } from "./AdminContext";

const ProduitContext = createContext();
export const ProduitProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    nom: "",
    categorie_id: null,
    prix: null,
    prix_vente:null,

  });
  const [errors, setErrors] = useState({
    nom: "",
    categorie_id: null,
    prix: null,
    prix_vente:null
  });
  const [stock, setStock] = useState("vendu"); // État pour le lieu sélectionné

  const {toast} =  useAdmin()

  const [listProduit, setListProduit] = useState([]);
  const getNom = (e) => {
    setData({ ...data, nom: e.target.value });
  };

  const getCategory = (e) => {
    setData({ ...data, categorie_id: e.target.value });
  };

  const getPrivVente = (e) => {
    setData({ ...data, prix_vente: e.target.value });
  };

  const getPrix = (e) => {
    setData({ ...data, prix: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      Produit.createProduct({nom:data.nom,categorie_id:data.categorie_id,prix:data.prix,prix_vente:data.prix_vente,quantite:5}).then((res)=>{
        onclose();
        getAllProduct()
        toast.success("Le produit a été ajouté avec succès !");
        console.log("zaza");
      }).catch(error=>console.log(error))
    }
  };

  const resertForm = () => {
    setData({
      nom: "",
      categorie_id: "",
      quantite: null,
      prix: null,
      fournisseur_id: null,
    });
  };

  const validateForm = () => {
    let formErrors = {
      nom: "",
      categorie_id: null,
      prix_vente: null,
      prix: null,
  
    };
    let isValid = true;

    // Vérifier   si  nom  vide
    if (data.nom == "") {
      formErrors.nom = "Le nom est vide .";
      isValid = false;
    }

    // Vérifier   si  nom  vide
    if (data.categorie_id == null) {
      formErrors.categorie_id = "Selectionnez le catégorie";
      isValid = false;
    }
    // Vérifier   si  date de transaction  vide
    if (data.prix_vente ==null) {
      formErrors.prix_vente = "Veuillez saisir le prix de vente    .";
      isValid = false;
    }
    // Vérifier   si  nom  vide
    if (data.prix == null) {
      formErrors.prix = "Veuillez saisir le prix  .";
      isValid = false;
    }


    setErrors(formErrors);
    return isValid;
  };

  const onclose = () => {
    resertForm();
    setOpen(false);
  };

  const getAllProduct = () => {
    Produit.getAllProduct()
      .then((res) => {
        setListProduit(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <ProduitContext.Provider
      value={{
        open,
        setOpen,
        getNom,
        getCategory,
        getPrix,
        getPrivVente,
        handleSubmit,
        onclose,
        errors,
        resertForm,
        data,
        getAllProduct,
        listProduit,
        stock,
        setStock
      }}
    >
      {children}
    </ProduitContext.Provider>
  );
};

export const useProduit = () => {
  return useContext(ProduitContext);
};
