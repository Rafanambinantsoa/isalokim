// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { Fournisseur } from "../service/Fournisseur";
import { useAdmin } from "./AdminContext";
import { Approvisionement } from "../service/Approvisonement";

const FournisseurContext = createContext();
export const FournisseurProvider = ({ children }) => {
  const {getAllFournisseur,toast} =  useAdmin()
  const [open, setOpen] = useState(false);
  const [edit,setEdit] =  useState(null)
  const [listAppro , setListappro]  =  useState([])
  const [data, setData] = useState({
    nom: "",
    contact: "",
    adresse: "",
  });
  const [lieu, setLieu] = useState(""); // État pour le lieu sélectionné
  const [errors, setErrors] = useState({ nom: "", adresse: "", contact: "" });

  const getNom = (e) => {
    setData({...data, nom: e.target.value });
  };

  const getAdresse = (e) => {
    setData({...data, adresse: e.target.value });
  };

  const getContact = (e) => {
    setData({ ...data,contact: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (edit) {
        Fournisseur.updateFournisseur(edit,{nom:data.nom,contact:data.contact,adresse:data.adresse}).then((res)=>{
          onclose();
          toast.success("Le fournisseur a été modifié !");
          getAllFournisseur()

        }).catch(error=>console.log(error))
      } else {
        Fournisseur.createFournisseur({nom:data.nom,contact:data.contact,adresse:data.adresse}).then((res)=>{
          onclose();
          toast.success("Le fournisseur a été enregistré !");
          getAllFournisseur()
        }).catch(error=>console.log(error))
      }
      
    }
  };

  const resertForm = () => {
    setData({ nom: "", contact: "", adresse: "" });
  };

  const validateForm = () => {
    let formErrors = { nom: "", adresse: "", contact: "" };
    let isValid = true;

    // Vérifier si le nom est vide
    if (data.nom == "") {
      formErrors.nom = "Le nom ne peut pas être vide.";
      isValid = false;
    }

    // Vérifier si l'adresse est vide
    if (data.adresse == "") {
      formErrors.adresse = "L'adresse ne peut pas être vide.";
      isValid = false;
    }

    // Vérifier si le contact est vide et correspond au format (+261 xx xxx xx)
    if (data.contact == "") {
      formErrors.contact = "Le contact ne peut pas être vide.";
      isValid = false;
    } else if (!/^\+261\s\d{2}\s\d{3}\s\d{2}$/.test(data.contact)) {
      formErrors.contact = "Le numéro de contact doit commencer par +261 suivi de 9 chiffres.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
};

  const onclose = () => {
    resertForm();
    setOpen(false);
    setEdit(null)
  };

  const ShowEdit = (data) => {
    setData({ ...data, nom: data.nom });
    setData({ ...data, contact: data.libelle });
    setData({ ...data, adresse: data.adresse });
  };

  const getAllApprovisionement =  ()=>{
    Approvisionement.getAllApprovisionement().then((res)=>{
      console.log(res.data.approvisionnements);
      setListappro(res.data.approvisionnements)
    }).catch(error=>console.log(error))
  }

  useEffect(()=>{
    getAllApprovisionement()
  },[])

  return (
    <FournisseurContext.Provider
      value={{
        open,
        setOpen,
        getNom,
        getAdresse,
        getContact,
        handleSubmit,
        onclose,
        errors,
        resertForm,
        data,
        ShowEdit,
        setEdit,
        edit,
        listAppro,
        getAllApprovisionement,
        lieu,
        setLieu

      }}
    >
      {children}
    </FournisseurContext.Provider>
  );
};

export const useFournisseur = () => {
  return useContext(FournisseurContext);
};
