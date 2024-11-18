import React, { createContext, useContext, useEffect, useState } from "react";
import { Conge } from "../service/Conge";
import { useAdmin } from "./AdminContext";

const CongeContext = createContext();

export const CongeProvider = ({ children }) => {
  const {toast}  =  useAdmin()
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);
  const [data, setData] = useState({
    user_id: "",
    type_conger_id: "",
    date_debut: new Date().toISOString().split("T")[0],
    date_fin: "",
    motif: "",
  });

  const [errors, setErrors] = useState({
    user_id: "",
    type_conger_id: "",
    motif: "",
    date_debut: "",
    date_fin: "",
  });

  const [listeConge, setListeConge] = useState([]);

  const getUser = (e) => {
    setData({ ...data, user_id: e.target.value });
  };

  const getTypeConge = (e) => {
    setData({ ...data, type_conger_id: e.target.value });
  };

  const getMotif = (e) => {
    setData({ ...data, motif: e.target.value });
  };

  const getDateDeb = (e) => {
    const selectedDate = e.target.value;
    setData({ ...data, date_debut: selectedDate });
    // Ajustez également la date de fin si elle est inférieure à la date de début
    if (dateFin < selectedDate) {
      setData({ ...data, date_fin: selectedDate });
    }
  };

  const getDateFin = (e) => {
    setData({ ...data, date_fin: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (edit) {
        Conge.updateConge(edit, {
          user_id: data.user_id,
          type_conger_id: data.type_conger_id,
          date_debut: data.date_debut,
          date_fin: data.date_fin,
          motif: data.motif,
        })
          .then((res) => {
            toast.success("Le congé a été modifié !");
            getAllConge()
            resetForm();
          })
          .catch((error) => console.log(error));
      } else {
        Conge.createConge( {
          user_id: data.user_id,
          type_conger_id: data.type_conger_id,
          date_debut: data.date_debut,
          date_fin: data.date_fin,
          motif: data.motif,
        })
          .then((res) => {
            toast.success("Le congé a été enregistré !");
            getAllConge()
            resetForm();
          })
          .catch((error) => console.log(error));
      }
    }
  };

  const validateForm = () => {
    let formErrors = {
      user_id: "",
      type_conger_id: "",
      date_debut: "",
      date_fin: "",
    };
    let isValid = true;

    // Vérifier   si  nom  vide
    if (data.user_id == "") {
      formErrors.user_id = "Veuillez selectionnez le nom !";
      isValid = false;
    }

    // Vérifier   si  type de conge   vide
    if (data.type_conger_id == "") {
      formErrors.type_conger_id = "Veuillez selectionnez le type de congé !";
      isValid = false;
    }
  
    // Vérifier   si  date de debut   vide
    if (data.date_debut == "") {
      formErrors.date_debut = "Veuillez selectionnez le date ";
      isValid = false;
    }

    // Vérifier   si  date de fin   vide
    if (data.date_fin == "") {
      formErrors.date_fin = "Veuillez selectionnez le date ";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const getAllConge = () => {
    Conge.getAllConge()
      .then((res) => {
        setListeConge(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetForm = () => {
    setData({
      user_id: "",
      type_conger_id: "",
      date_debut: new Date().toISOString().split("T")[0],
      date_fin: "",
      motif: "",
    });
    setOpen(false)
  };

  const ShowEdit = (data) => {
    setData({ ...data, user_id: data.user_id });
    setData({ ...data, type_conger_id: data.type_conger_id });
    setData({ ...data, date_debut: data.date_debut });
    setData({ ...data, date_fin: data.date_fin });
    setData({ ...data, motif: data.motif });
  };

  const onclose = () => {
    setOpen(false);
    setEdit(null);
    resetForm();
    setErrors({
      user_id: "",
      type_conger_id: "",
      date_debut: "",
      date_fin: "",
      motif: "",
    });
  };

  useEffect(() => {
    getAllConge();
  }, []);

  return (
    <CongeContext.Provider
      value={{
        listeConge,
        getAllConge,
        getUser,
        getTypeConge,
        getMotif,
        getDateDeb,
        getDateFin,
        open,
        setOpen,
        edit,
        setEdit,
        data,
        onclose,
        errors,
        handleSubmit,
        ShowEdit,
        setListeConge
      }}
    >
      {children}
    </CongeContext.Provider>
  );
};

export const useConge = () => {
  return useContext(CongeContext);
};
