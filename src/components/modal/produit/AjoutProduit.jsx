import React from 'react'
import { useProduit } from '../../../context/ProduitContext'
import Modal from '../Modal'
import { useAdmin } from '../../../context/AdminContext'

export default function AjoutProduit() {

  const {listCategorie,listFournisseurs} =  useAdmin()
  const{open,onclose,getNom,getCategory,getPrix,getPrivVente,errors,data,handleSubmit} =  useProduit()
  return (
    <>
      <Modal open={open} onClose={onclose}>
        <div className="header">
         <h1 className="text-lg font-semibold  my-5 border-b border-gray-200 w-fit">Création Produits</h1>
         <form action="" onSubmit={handleSubmit}>
            <div className="form grid grid-cols-2 gap-10">
               <div className="form1">
               <div className="form-group">
                    <label htmlFor="">Nom du produit<span className='text-red-600 ml-2'>*</span></label>
                    <input type="text" value={data.nom} className={`form-control w-full ${ errors.nom && "border-red-600"}`} placeholder='Entrer le nom du produit' onChange={getNom}/>
                    {/* Message d'erreur pour le nom */}
                    {errors.nom && (
                    <p className="text-red-600 mt-1 text-sm">{errors.nom}</p>
                  )}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="">Prix d'achat <span className='text-red-600 ml-2'>*</span></label>
                    <input type="number" value={data.prix_vente} className={`form-control w-full  ${ errors.prix_vente && "border-red-600"}`} placeholder="Prix d'achat " onChange={getPrivVente}/>
                     {/* Message d'erreur pour l'adresse */}
                     {errors.prix_vente && (
                    <p className="text-red-600 mt-1 text-sm">{errors.prix_vente}</p>
                  )}
                </div>
               
               </div>
               <div className="form1">
               <div className="form-group">
               <label htmlFor="">Categorie <span className='text-red-600 ml-2'>*</span></label>
                   <select name="" id="" className={`form-control w-full  ${ errors.categorie_id && "border-red-600"}`} onChange={getCategory}>
                    <option value="" disabled>Selectionnez catégorie </option>
                    {
                      listCategorie.map((row,index)=>(
                        <option value={row.id} >{row.nom} </option>
                      ))
                    }
                   </select>
                     {/* Message d'erreur pour l'adresse */}
                     {errors.categorie_id && (
                    <p className="text-red-600 mt-1 text-sm">{errors.categorie_id}</p>
                  )}
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="">Prix de vente  <span className='text-red-600 ml-2'>*</span></label>
                    <input type="number" value={data.prix} className={`form-control w-full  ${ errors.prix && "border-red-600"}`} placeholder="Prix de vente " onChange={getPrix}/>
                     {/* Message d'erreur pour l'adresse */}
                     {errors.prix && (
                    <p className="text-red-600 mt-1 text-sm">{errors.prix}</p>
                  )}
                </div>
               </div>
            </div>
            <div className="border-t border-gray-200 my-5"></div>
            <div className="button text-right ">
                <button className='btn' type='button'>Annuler</button>
                <button className='btn-primary ml-2' type='submit'>Ajouter</button>
            </div>
         </form>
        </div>
    </Modal></>
  )
}
