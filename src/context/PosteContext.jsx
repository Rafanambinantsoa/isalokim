import React, { createContext, useContext, useEffect, useState } from "react";
import { Conge } from "../service/Conge";
import { Poste } from "../service/Poste";
import { useAdmin } from "./AdminContext";

const PosteContext = createContext();

export const PosteProvider = ({ children }) => {
const {toast,getPostes} = useAdmin()
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [data, setData] = useState({
    nom: "",
    libelle: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    nom: "",
    libelle: "",
    description: "",
  });

  const getNom = (e) => {
    setData({ ...data, nom: e.target.value });
  };

  const getLibelle = (e) => {
    setData({ ...data, libelle: e.target.value });
  };

  const getDescription = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
     if(edit){
        Poste.updatePoste(edit,{
            nom: data.nom,
            libelle: data.libelle,
            description: data.description,
          })
            .then((res) => {
              onclose();
              toast.success("Le poste a été modifié !");
              getPostes()
            })
            .catch((error) => console.log(error));
     }else{
        Poste.createPoste({
            nom: data.nom,
            libelle: data.libelle,
            description: data.description,
          })
            .then((res) => {
              onclose();
              toast.success("Le poste a été enregistré !");
              getPostes()
            })
            .catch((error) => console.log(error));
     }
    
    }
  };

  const validateForm = () => {
    let formErrors = { nom: "", libelle: "", description: "" };
    let isValid = true;

    // Vérifier   si  nom  vide
    if (data.nom == "") {
      formErrors.nom = "Le nom est vide .";
      isValid = false;
    }

    // Vérifier   si  libelle  vide
    if (data.libelle == "") {
      formErrors.libelle = "Libelle est vide .";
      isValid = false;
    }
    // Vérifier   si  description  vide
    if (data.description == "") {
      formErrors.description = "Le Déscription est vide .";
      isValid = false;
    }
    setErrors(formErrors);
    return isValid;
  };

  const ShowEdit = (data) => {
    setData({ ...data, nom: data.nom });
    setData({ ...data, libelle: data.libelle });
    setData({ ...data, description: data.description });
  };
  const onclose = () => {
    setOpen(false);
    setEdit(null);
    resetForm();
  };
  const resetForm = () => {
    setData({
      nom: "",
      libelle: "",
      description: "",
    });
    setErrors({
      nom: "",
      libelle: "",
      description: "",
    });
  };

  return (
    <PosteContext.Provider
      value={{
        getDescription,
        getLibelle,
        getNom,
        data,
        open,
        setOpen,
        setEdit,
        handleSubmit,
        onclose,
        edit,
        ShowEdit,
        errors,
      }}
    >
      {children}
    </PosteContext.Provider>
  );
};

export const usePoste = () => {
  return useContext(PosteContext);
};
