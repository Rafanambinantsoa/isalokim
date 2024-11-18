import React, { useState } from 'react';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
const Table = () => {
    const data = [
      // Add all your data here
      { name: 'Tanner Finsha', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Autres', requestDate: '12 - 05 - 24', description: 'Malade', status: 'green' },
      { name: 'Emeto Winner', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Mensuel', requestDate: '12 - 05 - 24', description: 'bevohoka n zanako', status: 'red' },
      { name: 'Tassy Omah', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Maternité', requestDate: '12 - 05 - 24', description: 'Technicien', status: 'green' },
      { name: 'James Muriel', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Autres', requestDate: '12 - 05 - 24', description: 'Esthéticien', status: 'orange' },
      { name: 'Tassy Omah', startDate: '12 - 05 - 24', endDate: '12 - 05 - 24', days: 30, type: 'Mensuel', requestDate: '12 - 05 - 24', description: 'Comptable', status: 'orange' },
      // Add more data items for testing
    ];
   
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    // Get current data based on the page
    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    const goToPage = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  
  
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Nom de l'employé</th>
              <th className="px-4 py-2">Date début</th>
              <th className="px-4 py-2">Date Fin</th>
              <th className="px-4 py-2">Nombre de Jours</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Date de Demande</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
                    <span>{row.name.split(' ')[0].charAt(0)}{row.name.split(' ')[1].charAt(0)}</span>
                  </div>
                  <span className="ml-2">{row.name}</span>
                </td>
                <td className="px-4 py-2">{row.startDate}</td>
                <td className="px-4 py-2">{row.endDate}</td>
                <td className="px-4 py-2">{row.days}</td>
                <td className="px-4 py-2">{row.type}</td>
                <td className="px-4 py-2">{row.requestDate}</td>
                <td className="px-4 py-2">{row.description}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Previous
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default Table;
