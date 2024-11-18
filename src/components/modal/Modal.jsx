import React from "react";

export default function Modal({ open, onClose, children , width,height}) {
  return (
    <div
      onClick={onClose}
      className={`fixed opacity-100 inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/50 opacity-100" : "invisible"
      }`}
    >
      <div
      onClick={(e)=>e.stopPropagation()}
        style={{ width: width , height:height}}
        className={`bg-white  shadow px-6 py-2 rounded-lg transition-all ${
          open ? "scale-100" : "scale-125 opacity-0"
        }`}
      >
        <button className="absolute top-2 right-2 p-1 rounded-lg text-2xl text-gray-500 hover:text-red-600" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}
