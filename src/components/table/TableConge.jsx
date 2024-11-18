import React, { useState } from 'react';
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useConge } from '../../context/CongeContext';
import { useAdmin } from '../../context/AdminContext';

const TableConge = () => {
    const { setOpenPosteDelete, setId } = useAdmin();
    const { listeConge, ShowEdit, setEdit, setOpen } = useConge();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const itemsPerPage = 5;
    const pagesPerGroup = 3;

    // Total de pages
    const totalPages = Math.ceil(listeConge.length / itemsPerPage);

    // Données à afficher pour la page actuelle
    const currentData = listeConge.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Naviguer vers une page spécifique
    const goToPage = (pageNumber) => setCurrentPage(pageNumber);

    // Changer de groupe de pages
    const changePageGroup = (direction) => setPageGroup(pageGroup + direction);

    // Générer les numéros de pages avec "..." pour les groupes
    const renderPageNumbers = () => {
        const startPage = (pageGroup - 1) * pagesPerGroup + 1;
        const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
        const pages = [];

        if (pageGroup > 1) pages.push(<span key="start-ellipsis" className="px-2 text-gray-400">...</span>);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-4 py-2 ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    {i}
                </button>
            );
        }

        if (pageGroup < Math.ceil(totalPages / pagesPerGroup)) {
            pages.push(<span key="end-ellipsis" className="px-2 text-gray-400">...</span>);
        }

        return pages;
    };

    return (
        <div className="overflow-x-auto mt-5">
            <table className="min-w-full table-auto text-left">
                <thead>
                <tr className="bg-gray-100  text-gray-700 ">
                        <th className="px-4 py-2">Nom de l'employé</th>
                        <th className="px-4 py-2">Date début</th>
                        <th className="px-4 py-2">Date Fin</th>
                        <th className="px-4 py-2">Nombre de Jours</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.length ? (
                        currentData.map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2 flex items-center">
                                    <span className="ml-2">{row.user.nom}</span>
                                </td>
                                <td className="px-4 py-2">{row.date_debut}</td>
                                <td className="px-4 py-2">{row.date_fin}</td>
                                <td className="px-4 py-2">{row.nombre_jours}</td>
                                <td className="px-4 py-2">{row.statut}</td>
                                <td className="px-4 py-2">{row.motif}</td>
                                <td className="px-4 py-2 flex space-x-2">
                                    <button 
                                        className="text-gray-600 hover:text-blue-700" 
                                        onClick={() => {
                                            setOpen(true);
                                            setEdit(row.id);
                                            ShowEdit(row);
                                        }}
                                    >
                                        <PencilSquareIcon className="w-5 h-5" />
                                    </button>
                                    <button
                                        className="text-gray-600 hover:text-red-700"
                                        onClick={() => {
                                            setOpenPosteDelete(true);
                                            setId(row.id);
                                        }}
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center px-4 py-2 text-gray-500">Aucun congé trouvé</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-end items-center mt-4">
                <button
                    onClick={() => changePageGroup(-1)}
                    disabled={pageGroup === 1}
                    className={`px-4 py-2 ${pageGroup === 1 ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    Précédent
                </button>
                <div className="flex space-x-2">{renderPageNumbers()}</div>
                <button
                    onClick={() => changePageGroup(1)}
                    disabled={pageGroup >= Math.ceil(totalPages / pagesPerGroup)}
                    className={`px-4 py-2 ${pageGroup >= Math.ceil(totalPages / pagesPerGroup) ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    Suivant
                </button>
            </div>
        </div>
    );
};

export default TableConge;
