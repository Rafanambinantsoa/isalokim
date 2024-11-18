import React, { useState } from 'react';
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useAdmin } from '../../context/AdminContext';
import { usePoste } from '../../context/PosteContext';
import ClipLoader from "react-spinners/ClipLoader";

export default function TablePoste() {
    const { setOpenPosteDelete, poste, setId, setInfo, setOpenPoste, loading } = useAdmin();
    const { setEdit, setOpen, ShowEdit } = usePoste();
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const itemsPerPage = 5;
    const pagesPerGroup = 3;

    // Calculate total pages
    const totalPages = Math.ceil(poste.length / itemsPerPage);

    // Get data for the current page
    const currentData = poste.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Change to a specific page
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Next and previous page groups
    const goToNextGroup = () => {
        setPageGroup(pageGroup + 1);
    };

    const goToPreviousGroup = () => {
        setPageGroup(pageGroup - 1);
    };

    // Generate pagination buttons in groups
    const renderPageNumbers = () => {
        const startPage = (pageGroup - 1) * pagesPerGroup + 1;
        const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);
        const pages = [];

        if (pageGroup > 1) {
            pages.push(
                <span key="start-ellipsis" className="px-2 text-gray-400">...</span>
            );
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`px-4 py-2 text-sm ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                    {i}
                </button>
            );
        }

        if (pageGroup < Math.ceil(totalPages / pagesPerGroup)) {
            pages.push(
                <span key="end-ellipsis" className="px-2 text-gray-400">...</span>
            );
        }

        return pages;
    };

    return (
        <div className="overflow-x-auto mt-5">
            {loading ? (
                <div className="flex justify-center items-center h-32">
                    <ClipLoader size={35} color={"#123abc"} loading={loading} />
                </div>
            ) : (
                <div>
                    <table className="text-left w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100  text-gray-700 ">
                                <th className="px-4 py-2">Nom</th>
                                <th className="px-4 py-2">Libellé</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2 text-sm">{row.nom}</td>
                                    <td className="px-4 py-2 text-sm">{row.libelle}</td>
                                    <td className="px-4 py-2 text-sm">{row.description}</td>
                                    <td className="px-4 py-2 flex space-x-2">
                                        <button
                                            className="text-gray-600 hover:text-blue-700 text-sm p-1"
                                            onClick={() => {
                                                setOpen(true);
                                                setEdit(row.id);
                                                ShowEdit(row);
                                            }}
                                        >
                                            <PencilSquareIcon className="w-5 h-5" />
                                        </button>
                                        <button
                                            className="text-gray-600 hover:text-red-700 p-1"
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
                    <div className="flex justify-end items-center mt-4 space-x-2">
                        <button
                            onClick={goToPreviousGroup}
                            disabled={pageGroup === 1}
                            className={`px-4 py-2 ${pageGroup === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            Précédent
                        </button>
                        <div className="flex space-x-2">{renderPageNumbers()}</div>
                        <button
                            onClick={goToNextGroup}
                            disabled={pageGroup >= Math.ceil(totalPages / pagesPerGroup)}
                            className={`px-4 py-2 ${pageGroup >= Math.ceil(totalPages / pagesPerGroup) ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'}`}
                        >
                            Suivant
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
