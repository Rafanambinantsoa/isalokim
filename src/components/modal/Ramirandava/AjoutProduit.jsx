import React, { useState } from "react";
import { useProduit } from "../../../context/ProduitContext";
import Modal from "../Modal";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";
export default function AjoutProduit() {
  const { open, onclose } = useProduit();
  const [produit, setProduit] = useState("");
  const [quantite, setQuantite] = useState("");
  const [panier, setPanier] = useState([]);
  const { stock } = useProduit();
  const handleAddToCart = () => {
    if (produit && quantite) {
      setPanier([...panier, { produit, quantite }]);
      setProduit("");
      setQuantite("");
    }
  };

  const handleRemoveFromCart = (index) => {
    setPanier(panier.filter((_, i) => i !== index));
  };

  const handleValidation = () => {
    // Afficher toutes les données dans la console
    console.log({
      lieu,
      panier,
    });
  };
  return (
    <>
      <Modal open={open} onClose={onclose}>
        <div className="titre flex ">
          <h1 className="text-2xl font-semibold mt-5 border-b border-gray-200 w-fit">
            {stock == "vendu" ? "Paiement" : "Consommation"}
          </h1>
        </div>

        <div className="contenu mt-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex justify-between items-center space-x-10"
          >
            <div className="form-group flex items-center space-x-5">
              <div className="form1">
                <label>
                  Nom du Produit <span className="text-red-500">*</span>
                </label>
                <select
                  value={produit}
                  onChange={(e) => setProduit(e.target.value)}
                  className="form-control w-full"
                >
                  <option value="">Sélectionnez un produit</option>
                  <option value="Vazaha">Vazaha</option>
                  <option value="Gasy">Gasy</option>
                </select>
              </div>
              <div className="form2">
                <label>
                  Quantité <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={quantite}
                  onChange={(e) => setQuantite(e.target.value)}
                  className="form-control w-full"
                  placeholder="Entrer la quantité"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex btn-primary items-center text-sm"
            >
              <ShoppingCartIcon className="w-5" />
              <span className="ml-2">Ajouter au Panier</span>
            </button>
          </form>

          <div className="panier mt-8">
            <h2 className="font-semibold">Panier</h2>
            <div className="contenu-panier border border-gray-300 mt-5">
              <div className="header flex justify-between px-10 py-2 bg-gray-100 font-medium">
                <span className="w-1/2">Produit</span>
                <div className="flex items-center w-1/2 justify-end">
                  <span className="mr-10 text-center">Quantité</span>
                  <span>Action</span>
                </div>
              </div>
              <div className="body overflow-y-scroll max-h-[200px]">
                {panier.length > 0 ? (
                  panier.map((item, index) => (
                    <div
                      key={index}
                      className="list flex justify-between px-10 py-3 border-b border-gray-200"
                    >
                      <span className="w-1/2">{item.produit}</span>
                      <div className="flex items-center w-1/2 justify-end">
                        <span className="mr-10 text-center w-6">
                          {item.quantite}
                        </span>
                        <TrashIcon
                          className="w-4 ml-3 cursor-pointer"
                          onClick={() => handleRemoveFromCart(index)}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-3">
                    Aucun produit dans le panier
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="botton  flex justify-end space-x-10 mt-5">
            {stock == "vendu" ? (
              <div className="form3 ">
                <label htmlFor="">Mode Paiement</label>
                <select name="" className="form-control w-full" id="">
                  <option value="">Mobile</option>
                  <option value="">Bancaire</option>
                </select>
              </div>
            ) : (
              <div className="form3 ">
                <label htmlFor="">Nom  d'Employé</label>
                <select name="" className="form-control w-full" id="">
                  <option value="">Mobile</option>
                  <option value="">Bancaire</option>
                </select>
              </div>
            )}
            <div className="mt-5">
              <button className="btn" onClick={onclose}>
                Annuler
              </button>
              <button className="btn-primary ml-5" onClick={handleValidation}>
                Valider
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
