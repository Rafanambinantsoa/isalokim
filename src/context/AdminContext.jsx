// context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { Poste } from "../service/Poste";
import { Employe } from "../service/Employe";
import { toast } from "react-toastify";
import { Conge } from "../service/Conge";
import { Fournisseur } from "../service/Fournisseur";
import { Produit } from "../service/Produit";
import ClipLoader from "react-spinners/ClipLoader"; // Import spinner component
const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openPoste, setOpenPoste] = useState(false);
  const [openPosteDelete, setOpenPosteDelete] = useState(false);
  const [poste, setPoste] = useState([]);
  const [id, setId] = useState(null);
  const [info, setInfo] = useState([]);
  const [listEmploye, setListEmploye] = useState([]);
  const [typeConge, setTypeConge] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [listFournisseurs, setListFournisseur] = useState([]);
  const [listCategorie, setListCategorie] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state
  const [app,setApp] = useState("toils")

  const closeModal = () => {
    setOpenModalDelete(false);
    setOpenPoste(false);
    setOpenPosteDelete(false);
  };

  const getPostes = () => {
    Poste.getPoste()
      .then((res) => {
        setPoste(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };
  // liste employe
  const getAllEmploye = () => {
    Employe.getEmploye()
      .then((res) => {
        setListEmploye(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //liste type de conge
  const getTypeConge = () => {
    Conge.getTypeConge()
      .then((res) => {
        setTypeConge(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Ensure search is case-insensitive
  const filteredCourses = listEmploye.filter((data) => {
    const query = searchQuery.toLowerCase();
    return (
      data.nom.toLowerCase().includes(query) ||
      data.email.toLowerCase().includes(query) ||
      //data.prix.toString().includes(query) ||
      new Date(data.date_naiss).toLocaleDateString("fr-FR").includes(query)
    );
  });

  // liste Fournisseur
  const getAllFournisseur = () => {
    Fournisseur.getAllFournisseur()
      .then((res) => {
        setListFournisseur(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // liste categorie
  const getAllCategorie = () => {
    Produit.getAllCategory()
      .then((res) => {
        setListCategorie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPostes();
    getAllEmploye();
    getTypeConge();
    getAllFournisseur();
    getAllCategorie();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        openModalDelete,
        setOpenModalDelete,
        closeModal,
        openPoste,
        setOpenPoste,
        openPosteDelete,
        setOpenPosteDelete,
        getPostes,
        id,
        setId,
        info,
        setInfo,
        listEmploye,
        getAllEmploye,
        searchQuery,
        setSearchQuery,
        toast,
        typeConge,
        listFournisseurs,
        getAllFournisseur,
        poste,
        listCategorie,
        isEditing,
        setIsEditing,
        loading,
        app,
        setApp,
        setPoste,
        setListFournisseur
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  return useContext(AdminContext);
};
