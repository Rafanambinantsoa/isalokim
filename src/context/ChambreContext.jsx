import React, { createContext, useContext, useEffect, useState } from "react";
import { Chambre } from "../service/Chambre";
import { useAdmin } from "./AdminContext";

const ChambreContext = createContext();

export const ChambreProvider = ({ children }) => {
  const [nom, setNom] = useState("chambre");
  const { toast, getPostes } = useAdmin();
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(""); // Type est maintenant une chaîne vide, pas un objet.

  const [listCategorie, setListCategorie] = useState([]);
  const [chambre, setChambre] = useState([]);
  const [errors, setErrors] = useState({ type: "" });
  const [data,setData] =  useState({
    numero_chambre:"",
    id_categorie_chambre:null,
    nombre_lits:null,
    type_lits:"",
    prix_nuitee:null

  })

  const getType = (e) => {
    setType(e.target.value); // Mettez à jour 'type' comme une simple chaîne
  };

  const getNumeroChambre = (e) => {
    setData({ ...data, numero_chambre: e.target.value });
  };

 const getCategorie = (e) => {
    setData({ ...data, id_categorie_chambre: e.target.value });
  };

  const getTypeLit = (e) => {
    setData({ ...data, type_lits: e.target.value });
  };

  const getPrix = (e) => {
    setData({ ...data, prix_nuitee: e.target.value });
  };

  const getNombreLit = (e) => {
    setData({ ...data, nombre_lits: e.target.value });
  };



  const getAllCategorie = () => {
    Chambre.getCategorie()
      .then((res) => {
        setListCategorie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllChambre = () => {
    Chambre.getAllChambre()
      .then((res) => {
        setChambre(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onclose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    if (validateFormCategorie()) {
      Chambre.createCategorie({type:type})
      .then((res) => {
        onclose()
        toast.success("Ajout a été success")
        getAllCategorie();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  const handleSubmitChambre = (e)=>{
    e.preventDefault()
    if (validationChambre()) {
      Chambre.createChambre(data)
      .then((res) => {
        onclose()
        toast.success("Ajout a été success")
        getAllChambre();
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
  }

  const validateFormCategorie = () => {
    let formErrors = { type: "" };
    let isValid = true;

    // Vérifier si 'type' est vide
    if (type === "") {
      formErrors.type = "Le type est vide.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const validationChambre = () => {
    let formErrors = { nombre_lits: null,id_categorie_chambre: null ,prix_nuitee: null ,type_lits: "" ,numero_chambre: ""  };
    let isValid = true;

    // Vérifier si 'type' est vide
    if (data.nombre_lits === null) {
      formErrors.nombre_lits = "Le nombre lit  est vide.";
      isValid = false;
    }
     // Vérifier si 'type' est vide
     if (data.id_categorie_chambre === null) {
      formErrors.id_categorie_chambre = "Le categorie  est vide.";
      isValid = false;
    }
     // Vérifier si 'type' est vide
     if (data.prix_nuitee === null) {
      formErrors.prix_nuitee = "Le prix est vide.";
      isValid = false;
    }
     // Vérifier si 'type' est vide
     if (data.type_lits === "") {
      formErrors.type_lits = "Le type de lits est vide.";
      isValid = false;
    }
     // Vérifier si 'type' est vide
     if (data.numero_chambre === "") {
      formErrors.numero_chambre = "Le type est vide.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };


  useEffect(() => {
    getAllCategorie();
    getAllChambre();
  }, []);

  return (
    <ChambreContext.Provider
      value={{
        listCategorie,
        getAllCategorie,
        chambre,
        getAllChambre,
        nom,
        setNom,
        open,
        setOpen,
        onclose,
        getType,
        errors,
        handleSubmit,
        getNumeroChambre,
        getCategorie,
        getTypeLit,
        getPrix,
        getNombreLit,
        handleSubmitChambre,
        
        
      }}
    >
      {children}
    </ChambreContext.Provider>
  );
};

export const useChambre = () => {
  return useContext(ChambreContext);
};
