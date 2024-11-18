import {
  CloudArrowDownIcon,
  CloudArrowUpIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import TableEmploye from "../../components/table/TableEmploye";
import Modal from "../../components/modal/Modal";
import test from "../../assets/test.jpg";
import upload from "../../assets/upload.png";
import DetailsEmploye from "../../components/modal/employe/DetailsEmploye";
import { useAdmin } from "../../context/AdminContext";
import { Employe } from "../../service/Employe";

export default function List() {
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [matricule, setmatricule] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date_naiss, setDate_naiss] = useState("");
  const [num_cin, setNum_cin] = useState("");
  const [poste_id, setPoste_id] = useState(null);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [situation_mat, setSituation_mat] = useState("celibataire");
  const [nombre_enf, setNombre_enf] = useState(0);
  const [date_embauche, setDate_embauche] = useState("");
  const [numero_cnaps, setNumero_cnaps] = useState("");
  const [numero_omsi, setNumero_omsi] = useState("");
  const [banque, setBanque] = useState("");
  const [num_compte_bancaire, setNum_compte_bancaire] = useState("");
  const [salaires_brut, setSalaires_brut] = useState(null);
  const [image, setImage] = useState(null);
  const [files, setFiles] = useState(null);
  const [errors, setErrors] = useState([]);

  const {
    poste,
    searchQuery,
    setSearchQuery,
    getAllEmploye,
    listEmploye,
    info,
    toast,
  } = useAdmin();

  const onClose = () => {
    setOpen(false);
    setOpenDelete(false);
  };

  const showModalDelete = (data) => {
    setOpenDelete(data);
  };

  const validateForm = () => {
    let formErrors = {
      matricule: "",
      email: "",
      nom: "",
      prenom: "",
      date_naiss: "",
      num_cin: "",
      poste_id: "",
      contact:"",
      situation_mat:"",
      date_embauche:"",
      files:"",
      numero_cnaps:"",
      numero_omsi:"",
      banque:"",
      num_compte_bancaire:"",
      salaires_brut:null
    };
    let isValid = true;

    // Vérifier   si  maricule  vide
    if (matricule == "") {
      formErrors.matricule = "Veuillez remplir le champ  ";
      isValid = false;
    }
    // Vérifier   si  nom  vide
    if (nom == "") {
      formErrors.nom = "Veuillez remplir le champ  ";
      isValid = false;
    }
    // Vérifier   si  nom  vide
    if (prenom == "") {
      formErrors.prenom = "Veuillez remplir le champ  ";
      isValid = false;
    }

    // Vérifier   si  nom  vide
    if (date_naiss == "") {
      formErrors.date_naiss = "Veuillez remplir le champ  ";
      isValid = false;
    }

    // Vérifier   si  nom  vide
    if (num_cin == "") {
      formErrors.num_cin = "Veuillez remplir le champ  ";
      isValid = false;
    }

    // Vérifier   si  nom  vide
    if (poste_id == "") {
      formErrors.poste_id = "Veuillez remplir le champ  ";
      isValid = false;
    }
     // Vérifier le format de l'email
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(email)) {
       formErrors.email = "Veuillez entrer une adresse email valide.";
       isValid = false;
     }
      // Vérifier   si  nom  vide
    if (contact == "") {
      formErrors.contact = "Veuillez remplir le champ  ";
      isValid = false;
    }

       // Vérifier   si  nom  vide
       if (situation_mat == "") {
        formErrors.situation_mat = "Veuillez remplir le champ  ";
        isValid = false;
      }
         // Vérifier   si  nom  vide
    if (date_embauche == "") {
      formErrors.date_embauche = "Veuillez remplir le champ  ";
      isValid = false;
    }

       // Vérifier   si  nom  vide
       if (files == "") {
        formErrors.files = "Veuillez remplir le champ  ";
        isValid = false;
      }
  
    // Vérifier   si  nom  vide
    if (numero_cnaps == "") {
      formErrors.numero_cnaps = "Veuillez remplir le champ  ";
      isValid = false;
    }
  // Vérifier   si  nom  vide
  if (numero_omsi == "") {
    formErrors.numero_omsi = "Veuillez remplir le champ  ";
    isValid = false;
  }
    // Vérifier   si  nom  vide
    if (banque == "") {
      formErrors.banque = "Veuillez remplir le champ  ";
      isValid = false;
    }

      // Vérifier   si  nom  vide
      if (num_compte_bancaire == "") {
        formErrors.num_compte_bancaire = "Veuillez remplir le champ  ";
        isValid = false;
      }
  
        // Vérifier   si  nom  vide
        if (salaires_brut == null) {
          formErrors.salaires_brut = "Veuillez remplir le champ  ";
          isValid = false;
        }
    




    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData();
      formData.append("matricule", matricule);
      formData.append("nom", nom);
      formData.append("prenom", prenom);
      formData.append("date_naiss", date_naiss);
      formData.append("num_cin", num_cin);
      formData.append("email", email);
      formData.append("contact", contact);
      formData.append("situation_mat", situation_mat);
      formData.append("nombre_enf", nombre_enf);
      formData.append("date_embauche", date_embauche);
      formData.append("numero_cnaps", numero_cnaps);
      formData.append("numero_omsi", numero_omsi);
      formData.append("banque", banque);
      formData.append("num_compte_bancaire", num_compte_bancaire);
      formData.append("salaires_brut", salaires_brut);
      formData.append("photo", image);
      formData.append("files", files);
      formData.append("poste_id", poste_id);
      Employe.createEmploye(formData)
        .then((res) => {
          getAllEmploye();
          onClose();
        })
        .catch((error) => console.log(error));
    }
  };

  const deleteUser = (id) => {
    
    Employe.deleteEmploye(id)
      .then((res) => {
        onClose();
        toast.success("Le poste a été supprimé !");
        getAllEmploye();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <div className="flex items-center ">
          <span className="text-secondary text-gray-700 text-4xl ">
            Employées
          </span>
          <div className="nombre ml-2 w-5 h-5 bg-gray-200 rounded-full flex justify-center items-center mt-2">
            <span className="text-xs text-primary font-semibold">
              {5}
            </span>
          </div>
        </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="search flex items-center">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Rechercher"
            className="pl-2 outline-none flex-grow text-secondary text-md placeholder:text-secondary placeholder:text-sm placeholder:font-semibold"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
        <div className="add_employe">
          <button
            className="flex items-center btn-primary"
            onClick={() => setOpen(true)}
          >
            <PlusCircleIcon className="w-5 h-5 text-white" />
            <span className="text-xs pl-1">Ajouter Employée</span>
          </button>
        </div>
      </div>
      <div className=" mt-5">
        <TableEmploye showModalDelete={showModalDelete} />
      </div>
      <Modal open={open} onClose={onClose}>
        <div className="titre mt-8 text-secondary font-semibold text-2xl text-center">
          Création employé
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="card-form mt-5  ">
            <div className="form flex ">
              <div className="photo border-separate ">
                <div className="w-48 h-48 flex justify-center items-center border-2 border-gray-700 relative cursor-pointer border-dashed">
                  <input
                    type="file"
                    id="coverImage"
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setImage(file);
                    }}
                  />
                  <label htmlFor="coverImage" className="cursor-pointer">
                    <div className="flex justify-center items-center ">
                      {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Image de couverture"
                          className="w-full h-full object-cover absolute"
                        />
                      ) : (
                        <img src={upload} alt="" srcset="" />
                      )}
                    </div>
                    {!image && <p>Insérez l'image</p>}
                  </label>
                </div>
              </div>
              <div className="formulaire flex ml-10">
                <div className="form1">
                  <div className="form-group">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Matricule{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-full h-10 ${
                        errors.matricule && "border-red-600"
                      }`}
                      placeholder="Entrez le Matricule "
                      onChange={(e) => setmatricule(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2 ">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Nom <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-full h-10 ${
                        errors.nom && "border-red-600"
                      }`}
                      placeholder="Entrez le Nom"
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Prénom{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-full h-10 ${
                        errors.prenom && "border-red-600"
                      }`}
                      placeholder="Entrez le Prénom"
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Date de Naissance{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="date"
                      className={`form-control w-full h-10 ${
                        errors.date_naiss && "border-red-600"
                      }`}
                      placeholder="Entrez le Nom"
                      onChange={(e) => setDate_naiss(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      N° de CIN{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-full h-10 ${
                        errors.num_cin && "border-red-600"
                      }`}
                      placeholder="Entrez le CIN"
                      onChange={(e) => setNum_cin(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Poste{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <select
                      name=""
                      id=""
                      className={`form-control w-full h-10 ${
                        errors.poste_id && "border-red-600"
                      }`}
                      onChange={(e) => setPoste_id(e.target.value)}
                    >
                      <option value="" >
                        Selectionnez le poste
                      </option>
                      {poste.map((row, index) => (
                        <option key={index} value={row.id}>{row.nom}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form2 ml-8">
                  <div className="form-group">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Email{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-full h-10 ${
                        errors.email && "border-red-600"
                      }`}
                      placeholder="Entrez Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Contact{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-full h-10 ${
                        errors.contact && "border-red-600"
                      }`}
                      placeholder="Entrez le Contact"
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Situation Matrimoniale{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <select
                      name=""
                      id=""
                      className={`form-control w-full h-10 ${
                        errors.situation_mat && "border-red-600"
                      }`}
                      onChange={(e) => setSituation_mat(e.target.value)}
                    >
                      <option value="">Selectionnez</option>
                      <option value="Celibataire">Célibataire</option>
                      <option value="Marie">Marié</option>
                    </select>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Nombre d'enfant
                    </label>
                    <input
                      type="number"
                      value={nombre_enf}
                      className="form-control w-full h-10"
                      placeholder="Entrez le nombre d'enfant"
                      onChange={(e) => setNombre_enf(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Date d'embauche{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="date"
                      className={`form-control w-full h-10 ${
                        errors.date_embauche && "border-red-600"
                      }`}
                      placeholder="Entrez le Nom"
                      onChange={(e) => setDate_embauche(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Document{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="file"
                      className={`form-control w-full h-10 ${
                        errors.files && "border-red-600"
                      }`}
                      placeholder="Entrez le Nom"
                      onChange={(e) => {
                        setFiles(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
                <div className="form3 ml-8">
                  <div className="form-group">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Numéro CNAPS{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-[80%] h-10 ${
                        errors.numero_cnaps && "border-red-600"
                      }`}
                      placeholder="Entrez le Numéro  CNAPS"
                      onChange={(e) => setNumero_cnaps(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Numéro Omsi{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-[80%] h-10 ${
                        errors.numero_omsi && "border-red-600"
                      }`}
                      placeholder="Entrez le Numéro Omsi"
                      onChange={(e) => setNumero_omsi(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2 ">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Banque{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <div className="">
                      <input
                        type="text"
                        className={`form-control w-[80%] h-10 ${
                          errors.banque && "border-red-600"
                        }`}
                        placeholder="Entrez le Banque"
                        onChange={(e) => setBanque(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Numéro du compte{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control w-[80%] h-10 ${
                        errors.num_compte_bancaire && "border-red-600"
                      }`}
                      placeholder="Entrez le numéro du compte"
                      onChange={(e) => setNum_compte_bancaire(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="" className="text-sm text-gray-700">
                      Salaire Brute{" "}
                      <span className="text-red-500 font-semibold">*</span>
                    </label>
                    <input
                      type="number"
                      className={`form-control w-[80%] h-10 ${
                        errors.salaires_brut && "border-red-600"
                      }`}
                      placeholder="Entrez le salaire"
                      onChange={(e) => setSalaires_brut(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="boutton flex justify-end mt-5">
              <button className="btn">Annuler</button>
              <button className="btn-primary px-5 ml-5" type="submit">
                Ajouter
              </button>
            </div>
          </div>
        </form>
      </Modal>
      {/****************************Modal  for  delete employe ********************************** */}
      <Modal open={openDelete} onClose={onClose}>
        <div className="modal-content mt-5 ">
          <div className="image flex justify-center">
            <img src={test} alt="" className="w-28 h-28" />
          </div>
          <div className="w-96">
            <p className="text-center font-semibold text-lg ">
              Êtes-vous sûr de vouloir supprimer <br /> [{info.nom}]
            </p>
          </div>
          <div className="boutton text-center mt-3">
            <button className="btn">Annuler</button>
            <button
              className="btn-danger ml-3"
              onClick={() => deleteUser(info.id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      </Modal>
      {/****************************Modal  for  view employe ********************************** */}
      <DetailsEmploye />
    </>
  );
}
