import React, { useState } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useAdmin } from "../../context/AdminContext";
import { useFournisseur } from "../../context/FournisseurContext";
import { data } from "autoprefixer";

export default function TableFournisseur() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const itemsPerPage = 5;
  const { listFournisseurs,setOpenPosteDelete,setId } = useAdmin();
  const {setEdit,setOpen,ShowEdit} =  useFournisseur()

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(listFournisseurs.length / itemsPerPage);
  const pagesPerGroup = 3; // Nombre de pages affichées par groupe

  // Obtenir les données actuelles en fonction de la page
  const currentData = listFournisseurs.slice(
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

  // Fonction pour rendre les numéros de page avec ellipses
  const renderPageNumbers = () => {
    const startPage = (pageGroup - 1) * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const pages = [];

    if (pageGroup > 1) {
      pages.push(
        <span key="start-ellipsis" className="px-2 text-gray-400">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`px-4 py-2 text-sm ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

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
    <div className="">
      <table className="text-left w-full rounded-md  shadow-lg">
        <thead className="">
        <tr className="bg-gray-100  text-gray-700 ">
            <th className="px-4 py-2 ">Nom</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Adresse</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index} className="border-b ">
              <td className="px-4 py-2 flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                  <span>{row.nom.split(" ")[0].charAt(0)}</span>
                </div>
                <span className="ml-2  font-semibold text-gray-700">{row.nom}</span>
              </td>
              <td className="px-4 py-2 text-gray-700">{row.contact}</td>
              <td className="px-4 py-2 text-gray-700">{row.adresse}</td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  className="text-gray-600 hover:text-blue-700 text-sm"
                  onClick={()=>{
                    setOpen(true);
                    setEdit(row.id);
                    ShowEdit(row)
                }}
                >
                  <PencilSquareIcon className="w-6 h-6" />
                </button>
                <button
                  className="text-gray-600 hover:text-red-700"
                  onClick={() => {
                    setOpenPosteDelete(true);
                    setId(row.id);
                }}
                >
                  <TrashIcon className="w-6 h-6" />
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
          className={`px-4 py-2 ${pageGroup === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {renderPageNumbers()}
        </div>
        <button
          onClick={goToNextGroup}
          disabled={pageGroup >= Math.ceil(totalPages / pagesPerGroup)}
          className={`px-4 py-2 ${pageGroup >= Math.ceil(totalPages / pagesPerGroup) ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
