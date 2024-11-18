import React, { useState } from 'react'
import { useChambre } from '../../context/ChambreContext';
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
export default function TableCategorieChambre() {
    const {listCategorie} =  useChambre()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const itemsPerPage = 5;

    // Nombre total de pages
    const totalPages = Math.ceil(listCategorie.length / itemsPerPage);
    const pagesPerGroup = 3; // Nombre de pages visibles par groupe

    // Données pour la page actuelle
    const currentData = listCategorie.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToNextGroup = () => {
        setPageGroup(pageGroup + 1);
    };

    const goToPreviousGroup = () => {
        setPageGroup(pageGroup - 1);
    };

    // Affichage des numéros de pages avec "..." pour les autres groupes
    const renderPageNumbers = () => {
        const startPage = (pageGroup - 1) * pagesPerGroup + 1;
        const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

        const pages = [];

        // Affiche "..." au début si le groupe actuel n'est pas le premier
        if (pageGroup > 1) {
            pages.push(
                <span key="start-ellipsis" className="px-2 text-gray-400">
                    ...
                </span>
            );
        }

        // Ajoute les numéros de pages pour le groupe actuel
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

        // Affiche "..." à la fin si le groupe actuel n'est pas le dernier
        if (pageGroup < Math.ceil(totalPages / pagesPerGroup)) {
            pages.push(
                <span key="end-ellipsis" className="px-2 text-gray-400">
                    ...
                </span>
            );
        }

        return pages;
    };
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full table-auto text-left">
        <thead>
            <tr className="bg-gray-100">
                <th className="px-4 py-2">Nom de l'employé </th>
                <th className="px-4 py-2">Action</th>
            </tr>
        </thead>
        <tbody>
            {currentData.map((row, index) => (
                <tr key={index} className="border-b">
                    <td className="px-4 py-2 ">
                        <span className="ml-2">{row.type}</span>
                    </td>
                    <td className="px-4 py-2 flex space-x-2">
                        <button className="text-gray-600 hover:text-blue-700" >
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
            ))}
        </tbody>
    </table>

    {/* Pagination */}
    <div className="flex justify-end items-center mt-4">
        <button
            onClick={goToPreviousGroup}
            disabled={pageGroup === 1}
            className={`px-4 py-2 ${pageGroup === 1 ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
            Previous
        </button>
        <div className="flex space-x-2">{renderPageNumbers()}</div>
        <button
            onClick={goToNextGroup}
            disabled={pageGroup >= Math.ceil(totalPages / pagesPerGroup)}
            className={`px-4 py-2 ${pageGroup >= Math.ceil(totalPages / pagesPerGroup) ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
            Next
        </button>
    </div>
</div>
  )
}
