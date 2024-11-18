import React, { useState } from "react";
import {
  HomeIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import {
    Home,
    Users,
    FileText,
    Truck,
    Building2,
    Settings,
    ChevronDown,
    ChevronRight,
  } from "lucide-react";


import { NavLink } from "react-router-dom";

const MenuItem = ({ to, icon: Icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      ` ${
        isActive ? "bg-primary text-white" : ""
      } hover:bg-primary hover:text-white`
    }
  >
    <button className="w-full flex items-center px-4 py-2 rounded-lg mt-1">
    <Icon size={20} className="mr-2" />
      <span>{label}</span>
    </button>
  </NavLink>
);

const Submenu = ({ isOpen, toggle, icon: Icon, label, links }) => (
  <>
    <div
      className="flex items-center p-2 rounded-full cursor-pointer hover:bg-gray-200"
      onClick={toggle}
    >
      <Icon className="w-5 mr-2" />
      <span>{label}</span>
      <ArrowLeftIcon
        className={`w-5 ml-auto transform ${isOpen ? "rotate-90" : ""}`}
      />
    </div>
    {isOpen && (
      <ul className="pl-8 space-y-1">
        {links.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center text-sm ${
                  isActive ? "text-primary font-semibold" : "text-gray-500"
                } hover:text-primary`
              }
            >
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    )}
  </>
);

export default function Bar() {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [submenuState, setSubmenuState] = useState({
    employes: false,
    ramirandava: false,
  });
  const [text,setText] =  useState("")

  const toggleProfile = () => setIsOpenProfile((prev) => !prev);
  const toggleSubmenu = (key) =>
    setSubmenuState((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="flex flex-col p-4">
      {/* Profile Section */}
      <div className="relative w-48 mx-auto mb-4">
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={toggleProfile}
        >
          <img
            src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
            alt="Profile"
            className="rounded-full w-16 h-16 border-2 border-gray-300"
          />
          <ChevronDownIcon
            className={`w-5 h-5 ml-2 transition-transform ${
              isOpenProfile ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpenProfile && (
          <div className="absolute top-20 left-0 bg-white shadow-lg rounded-lg p-4 w-full">
            <div className="flex flex-col items-center">
              <img
                src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                alt="Profile"
                className="rounded-full w-24 h-24 border-2 border-gray-300 mb-3"
              />
              <p className="font-semibold">Project Isalo</p>
              <div className="mt-3 flex flex-col items-center space-y-2">
                <div className="flex items-center text-gray-700 cursor-pointer">
                  <UserIcon className="w-5 h-5 mr-2" />
                  <span>Profile</span>
                </div>
                <div className="flex items-center text-gray-700 cursor-pointer">
                  <Cog6ToothIcon className="w-5 h-5 mr-2" />
                  <span>Configuration</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-b-2 border-gray-300 mb-2"></div>
      <div className="px-2">
        <ul className="space-y-2">
          <li>
            <MenuItem to="home" icon={Home} label="Dashboard" />
          </li>

          <li>
            <Submenu
              isOpen={submenuState.employes}
              toggle={() => toggleSubmenu("employes")}
              icon={UserGroupIcon}
              label="Employées"
              links={[
                { to: "list", label: "Listes" },
                { to: "poste", label: "Postes" },
                { to: "conge", label: "Congé" },
              ]}
            />
          </li>

          <li>
            <MenuItem
              to="fournisseur"
              icon={BriefcaseIcon}
              label="Fournisseur"
            />
          </li>

          <li>
            <Submenu
              isOpen={submenuState.ramirandava}
              toggle={() => toggleSubmenu("ramirandava")}
              icon={UserGroupIcon}
              label="Ramirandava"
              links={[
                { to: "produit", label: "Stocks" },
                { to: "approvisement", label: "Approvisionnement" },
                { to: "vente-fournisseur", label: "Produit Sortant" },
              ]}
            />
          </li>

          <li>
            <Submenu
              isOpen={submenuState.ramirandava}
              toggle={() => toggleSubmenu("ramirandava")}
              icon={UserGroupIcon}
              label="Toils d'Isalo"
              links={[
                { to: "produit", label: "Stocks" },
                { to: "approvisement", label: "Approvisionnement" },
                { to: "vente-fournisseur", label: "Produit Sortant" },
                { to: "chambres", label: "Chambres" },
                { to: "vente-fournisseur", label: "Reservation" },
                { to: "vente-fournisseur", label: "Sejours" },
              ]}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
