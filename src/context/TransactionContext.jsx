// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    nom: "",
    payement: "",
    montant: "",
    dateTrans: "",
  });
  const [errors, setErrors] = useState({ nom: "", payement: "", montant: "",dateTrans:"" });

  const getNom = (e) => {
    setData({...data, nom: e.target.value });
  };

  const getPayement = (e) => {
    setData({...data, payement: e.target.value });
  };

  const getMontant = (e) => {
    setData({ ...data,montant: e.target.value });
  };

  const getDateTrans = (e) => {
    setData({ ...data,dateTrans: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onclose();
      console.log(data.nom);
      console.log(data.dateTrans);
      console.log(data.montant);
      console.log(data.payement);
    }
  };

  const resertForm = () => {
    setData({ nom: "", payement: "", montant: "", dateTrans:"" });
  };

  const validateForm = () => {
    let formErrors = { nom: "", payement: "", montant: "",dateTrans:"" };
    let isValid = true;

    // Vérifier   si  nom  vide
    if (data.nom == "") {
      formErrors.nom = "Le nom est vide .";
      isValid = false;
    }

    // Vérifier   si  nom  vide
    if (data.payement == "") {
      formErrors.payement = "Selectionnez le payement";
      isValid = false;
    }
    // Vérifier   si  date de transaction  vide
    if (data.dateTrans == "") {
      formErrors.dateTrans = "Veuillez saisir le date   .";
      isValid = false;
    }
    // Vérifier   si  nom  vide
    if (data.montant == "") {
      formErrors.montant = "Veuillez saisir le montant  .";
      isValid = false;
    }
    setErrors(formErrors);
    return isValid;
  };

  const onclose = () => {
    resertForm();
    setOpen(false);
  };

  return (
    <TransactionContext.Provider
      value={{
        open,
        setOpen,
        getNom,
        getDateTrans,
        getMontant,
        getPayement,
        handleSubmit,
        onclose,
        errors,
        resertForm,
        data
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  return useContext(TransactionContext);
};
