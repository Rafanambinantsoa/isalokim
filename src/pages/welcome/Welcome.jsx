import React from "react";
import logo from "../../assets/logo.png";
import isalo from "../../assets/isalo.png";
import { useAdmin } from "../../context/AdminContext";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const {setApp} =  useAdmin()
  const navigate =  useNavigate()
  
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center  rounded-lg">
      <div className="h-[350px] w-[350px] bg-white grid grid-cols-1 shadow-lg">
        <div className="ramirandava flex items-center justify-center hover:bg-primary hover:text-white duration-200 border-b border-gray-300" onClick={()=>{setApp("ramirandava");navigate('/admin')}}>
        <div className="button text-4xl">Ramirandava </div>
        </div>
        <div className="toil flex items-center justify-center hover:bg-primary hover:text-white duration-200" onClick={()=>{setApp("toils");navigate('/admin')}}>
        <div className="button text-4xl">Toils d'isalo  </div>
        </div>
      </div>
    </div>
  );
}
