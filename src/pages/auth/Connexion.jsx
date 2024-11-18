import React, { useState } from "react";
import isaloImage from "../../assets/isalo.png";
import logo from "../../assets/logo.png";
import ModalForgout from "../../components/modal/ModalForgout";
import PassordForgot from "./PassordForgot";
import { EyeIcon, EyeSlashIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { serviceCount } from "../../service/Service";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useAdmin } from "../../context/AdminContext";

export default function Connexion() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false); // État pour la visibilité du mot de passe
  const navigate = useNavigate();
  const {setUser} =  useAuth()
  const {toast} = useAdmin()

  const validateForm = () => {
    let formErrors = { email: "", password: "" };
    let isValid = true;

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formErrors.email = "Veuillez entrer une adresse email valide.";
      isValid = false;
    }

    // Vérifier la longueur du mot de passe
    if (password.length < 4) {
      formErrors.password =
        "Le mot de passe doit comporter au moins 4 caractères.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setErrors({ email: "", password: "" });
  
      serviceCount
        .login({ email: email, password: password })
        .then((res) => {
          if (res.status === 200) {
            const user = res.data.user
            localStorage.setItem("user",JSON.stringify(user))
            setUser(user)
            navigate('/welcome')
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 422) {
            toast.error("Email ou mot de passe incorrect")
          } else {
            console.log("An unexpected error occurred:", error.message);
          }
        });
    }
  };
  

  return (
    <>
      <div
        className="h-screen relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${isaloImage})` }}
      >
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black bg-opacity-15"></div>

        <div className="relative flex justify-center items-center pt-10">
          {/* Background gradient with blur added */}
          <div className="card-form w-[380px] shadow-2xl bg-gradient-to-b from-white to-white/35 border border-white/80 rounded-lg px-5">
            <div className="logo flex justify-center items-center pt-8">
              <img src={logo} alt="logo" />
            </div>
            <div className="form py-2">
              <div className="text-center">
                <h1 className="text-4xl font-medium text-primary">
                  Toiles d'Isalo
                </h1>
              </div>
              <form onSubmit={handleSubmit} className="px-5">
                <div className="form-group mt-5">
                  <label
                    htmlFor="email"
                    className="text-secondary font-semibold"
                  >
                    E-mail
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Entrez votre email"
                      className={`form-control w-full rounded-md bg-transparent placeholder:text-sm placeholder:text-secondary ${
                        errors.email && "border-red-600"
                      }`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">
                      <EnvelopeIcon className="h-5 w-5 text-secondary" />
                    </span>
                  </div>
                  {/* Message d'erreur pour l'email */}
                  {errors.email && (
                    <p className="text-red-600 mt-2 text-sm">{errors.email}</p>
                  )}
                </div>

                <div className="form-group mt-5">
                  <label
                    htmlFor="password"
                    className="text-secondary font-semibold"
                  >
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Entrez votre mot de passe"
                      className={`form-control w-full rounded-md bg-transparent placeholder:text-sm placeholder:text-secondary ${
                        errors.password && "border-red-600"
                      }`}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="absolute inset-y-0 right-3 flex items-center top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <EyeIcon className="h-5 w-5 text-secondary" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5 text-secondary" />
                      )}
                    </span>
                  </div>
                  {/* Message d'erreur pour le mot de passe */}
                  {errors.password && (
                    <p className="text-red-600 mt-2 text-sm">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="mx-10 mt-5">
                  <button
                    type="submit"
                    className="btn-primary w-full font-semibold rounded-full px-4 "
                  >
                    Connexion
                  </button>
                </div>
                <p
                  className="pt-2 text-center cursor-pointer text-sm text-secondary"
                  onClick={() => setOpen(true)}
                >
                  Mot de passe oublié ?
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ModalForgout open={open} onClose={() => setOpen(false)}>
        <PassordForgot />
      </ModalForgout>
    </>
  );
}
