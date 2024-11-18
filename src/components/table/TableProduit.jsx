import React, { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useAdmin } from "../../context/AdminContext";
import { useProduit } from "../../context/ProduitContext";

export default function TableProduit() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(1);
  const itemsPerPage = 5;
  const { setOpenModalDelete, setInfo, listEmploye } = useAdmin();
  const { listProduit } = useProduit();

  // Calculate the total number of pages
  const totalPages = Math.ceil(listProduit.length / itemsPerPage);
  const pagesPerGroup = 3; // Number of pages displayed per group

  // Get current data based on the page
  const currentData = listProduit.slice(
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

  // Function to render page numbers with ellipses
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
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
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
      <table className="text-left w-full ">
        <thead className="">
        <tr className="bg-gray-100  text-gray-700 ">
            <th className="px-4 py-2 ">Nom</th>
            <th className="px-4 py-2">Catégorie</th>
            <th className="px-4 py-2">Prix</th>
            <th className="px-4 py-2">Prix de vente</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, index) => (
            <tr key={index} className="text-gray-700 py-3 hover:bg-gray-200">
              <td className="px-4 py-2 flex items-center">
                <span className="ml-2  font-semibold">{row.nom}</span>
              </td>
              <td className="px-4 py-2">{row.categorie.nom}</td>
             

              <td className="px-4 py-2 text-gray-700">
                {" "}
                {row.prix.toLocaleString("fr-FR")} Ar
              </td>
              <td className="px-4 py-2 text-gray-700">
                {" "}
                {row.prix_vente.toLocaleString("fr-FR")} Ar
              </td>
              <td className="px-4 py-2 flex space-x-2">
                <button
                  className="text-gray-600 hover:text-blue-700 text-sm"
                  onClick={() => console.log(row)}
                >
                  <PencilSquareIcon className="w-5 h-5" />
                </button>
                <button
                  className="text-gray-600 hover:text-red-700"
                  onClick={() => {
                    setOpenModalDelete(true);
                    setInfo(row);
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
          className={`px-4 py-2 ${
            pageGroup === 1 ? "bg-gray-300" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <div className="flex space-x-2">{renderPageNumbers()}</div>
        <button
          onClick={goToNextGroup}
          disabled={pageGroup >= Math.ceil(totalPages / pagesPerGroup)}
          className={`px-4 py-2 ${
            pageGroup >= Math.ceil(totalPages / pagesPerGroup)
              ? "bg-gray-300"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
