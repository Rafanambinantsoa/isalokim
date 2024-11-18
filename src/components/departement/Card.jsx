import React from 'react'
import  test  from  '../../assets/test.jpg'
export default function 
() {
  return (
    <div className='shadow-lg p-2'>
        <span className='font-semibold'>Departement Informatique</span>
        <p className='mt-2 text-sm text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic sequi quidem necessitatibus cupiditate temporibus! Harum pariatur eveniet id in nulla exer</p>
        <ul className='flex items-center space-x-2 mt-2'>
            <li className='text-xs bg-gray-300 rounded-full px-2 py-1'>DSI</li>
            <li className='text-xs bg-gray-300 rounded-full px-2 py-1'>Développeur</li>
            <li className='text-xs bg-gray-300 rounded-full px-2 py-1'>Product Owner</li>
            <li className='text-xs text-primary font-semibold'>Designer</li>
        </ul>
        <div className="info mt-3 flex items-center space-x-2">
            <div className="photo-user">
                <img src={test} alt=""  className='w-8 h-8 rounded-full '/>
            </div>
            <div className="info-user text-sm">
                <h5 className=''>John Doe</h5>
                <p className='text-gray-500  font-semibold'>Manager Departement</p>
            </div>
        </div>
    </div>
  )
}
