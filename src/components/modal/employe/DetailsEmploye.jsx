import React from 'react'
import Modal from '../Modal'
import { useAdmin } from '../../../context/AdminContext'
import test from  '../../../assets/test.jpg'
export default function DetailsEmploye() {
    const {openModalDelete,closeModal,info} =  useAdmin()
  return (
    <>
    <Modal open={openModalDelete} onClose={closeModal}>
        <h1 className='text-center text-lg font-semibold mt-8 mb-8' >Details de l'employé</h1>
        <div className="container grid grid-cols-4 gap-12">
            <div className="image mx-auto">
                <img src={test} alt="" srcset="" className='w-32  h-32'/>
            </div>
            <div className="info">
                <div className="info-text">
                    <p>Employer ID :</p>
                    <span className='text-sm text-gray-400'>{info.matricule}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Poste :</p>
                    <span className='text-sm text-gray-400'>Serveur</span>
                </div>
                <div className="info-text mt-2">
                    <p>Nom :</p>
                    <span className='text-sm text-gray-400'>{info.nom}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Prénom :</p>
                    <span className='text-sm text-gray-400'>{info.prenom}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Date de Naissance :</p>
                    <span className='text-sm text-gray-400'>{info.date_naiss}</span>
                </div>
                <div className="info-text mt-2">
                    <p>N° de CIN :</p>
                    <span className='text-sm text-gray-400'>{info.num_cin}</span>
                </div>
            </div>
            <div className="info">
            <div className="info-text">
                    <p>Email :</p>
                    <span className='text-sm text-gray-400'>{info.email}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Contact :</p>
                    <span className='text-sm text-gray-400'>{info.contact}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Situation Matrimoniale :</p>
                    <span className='text-sm text-gray-400'>{info.situation_mat}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Nombre d'enfant :</p>
                    <span className='text-sm text-gray-400'>{info.nombre_enf}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Date d'embauche  :</p>
                    <span className='text-sm text-gray-400'>{info.date_embauche}</span>
                </div>
            </div>
            <div className="info">
            <div className="info-text">
                    <p>Numéro CNAPS :</p>
                    <span className='text-sm text-gray-400'>{info.numero_cnaps}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Numéro Omsi :</p>
                    <span className='text-sm text-gray-400'>{info.numero_omsi}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Banque :</p>
                    <span className='text-sm text-gray-400'>{info.banque}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Numéro  de compte :</p>
                    <span className='text-sm text-gray-400'>{info.num_compte_bancaire}</span>
                </div>
                <div className="info-text mt-2">
                    <p>Montant Journalier  :</p>
                    <span className='text-sm text-gray-400'>{info.salaires_brut}</span>
                </div>
            </div>
        </div>
    </Modal>
    </>
  )
}
