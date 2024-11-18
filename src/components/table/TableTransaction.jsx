import React, { useState } from 'react';
import { EyeIcon, PencilIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function TableTransaction() {
    const data = [
        // Add all your data here
        { name: 'Tanner Finsha', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: '15000000 Ar', requestDate: '12 - 05 - 24', description: 'Malade', status: 'green' },
        { name: 'Emeto Winner', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Mensuel', requestDate: '12 - 05 - 24', description: 'bevohoka n zanako', status: 'red' },
        { name: 'Tassy Omah', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Maternité', requestDate: '12 - 05 - 24', description: 'Technicien', status: 'green' },
        { name: 'James Muriel', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Autres', requestDate: '12 - 05 - 24', description: 'Esthéticien', status: 'orange' },
        { name: 'Tassy Omah', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Mensuel', requestDate: '12 - 05 - 24', description: 'Comptable', status: 'orange' },
        { name: 'Tassy Omah', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Mensuel', requestDate: '12 - 05 - 24', description: 'Comptable', status: 'orange' },
        { name: 'Tassy Omah', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Mensuel', requestDate: '12 - 05 - 24', description: 'Comptable', status: 'orange' },
        { name: 'Tassy Omah', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Mensuel', requestDate: '12 - 05 - 24', description: 'Comptable', status: 'orange' },
        // Add more data items for testing
      ];
    
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;
 
    
      // Calculate the total number of pages
      const totalPages = Math.ceil(data.length / itemsPerPage);
    
      // Get current data based on the page
      const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    
      const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
      return (
        <div className="overflow-x-auto ">
       <table className="min-w-full table-auto text-left">
            <thead>
              <tr className="bg-gray-100 text-sm  ">
                <th className="px-4 py-2 ">Nom de l'employé </th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Montant</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Salaire</th>
                <th className="px-4 py-2">Montant  Mensuel</th>
                <th className="px-4 py-2">Remboursement Reste</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row, index) => (
                <tr key={index} className="border-b ">
                  <td className="px-4 py-2 flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                      <span>{row.name.split(' ')[0].charAt(0)}{row.name.split(' ')[1].charAt(0)}</span>
                    </div>
                    <span className="ml-2 text-sm font-semibold">{row.name}</span>
                  </td>
                  <td className="px-4 py-2 text-sm">{row.startDate}</td>
                  <td className="px-4 py-2 text-sm">{row.endDate}</td>
                  <td className="px-4 py-2 text-sm">{row.days}</td>
                  <td className="px-4 py-2 text-sm">{row.days}</td>
                  <td className="px-4 py-2 text-sm">{row.days}</td>
                  <td className="px-4 py-2 my-3 text-sm  w-fit">{row.type}</td>
                  <td className="px-4 py-2 flex  space-x-2">
                 
                    <button className="text-gray-600 hover:text-blue-700 text-sm" >
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-red-700" >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="flex justify-end items-center mt-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 tet ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Previous
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`px-4 py-2 text-sm ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-sm ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              Next
            </button>
          </div>
        </div>
      );
}
