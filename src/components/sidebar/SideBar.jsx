import React, { useState } from "react";
import {
  Home,
  Users,
  FileText,
  Truck,
  Building2,
  Settings,
  ChevronDown,
  ChevronRight,
  ChevronDownIcon,
  ChevronUpIcon,
  BoxIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useAdmin } from "../../context/AdminContext";

const SidebarItem = ({
  icon: Icon,
  label,
  isActive,
  hasChildren,
  isOpen,
  onClick,
  indent = false,
  to,
}) => (
  <Link to={to}>
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2 rounded-lg mt-1  ${
        isActive
          ? "bg-primary text-white"
          : "text-gray-700 hover:bg-primary hover:text-white"
      } ${indent ? "pl-8 text-sm" : "text-base"}`}
    >
      {Icon ? (
        <Icon size={20} className="mr-2" />
      ) : (
        <div
          className={`w-2 h-2 mr-2 rounded-full ${
            isActive ? "bg-white" : "bg-gray-500"
          }`}
        ></div>
      )}
      <span>{label}</span>
      {hasChildren && (
        <span className="ml-auto">
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      )}
    </button>
  </Link>
);

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({
    employes: false,
    toils: false,
    ramirandava: false,
  });
  const [activeItem, setActiveItem] = useState("chambres");
  const [open, setOpen] = useState(true);
  const { app, setApp } = useAdmin();

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleItemClick = (item, menu = null) => {
    setActiveItem(item);
    if (menu) toggleMenu(menu);
  };

  const changeApp = (data) => {
    if (data == "toils") {
      setApp("toils");
      setOpen(true);
    } else if (data == "ramirandava") {
      setApp("ramirandava");
      setOpen(true);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-lg relative">
      {/* Profile Section */}
      <div className="p-4 flex items-center space-x-3 border-b shadow-sm relative">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-300 ">
          <img src={logo} alt="Profile" className="w-full h-full " />
        </div>
        <div>
          <h2 className="font-semibold text-primary duration-200">
            {app == "toils" ? "Toils d'Isalo " : "Ramirandava "}
          </h2>
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <ChevronDownIcon className="absolute right-1 text-gray-700" />
            ) : (
              <ChevronUpIcon className="absolute right-1 text-gray-700" />
            )}
          </span>
        </div>
      </div>
      {/* popup */}
      <div
        className={`w-full rounded-md shadow-lg absolute h-28 bg-gray-100 px-2 py-2 top-20 duration-200 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {app == "toils" ? (
          <button
            className="mt-5 w-full flex items-center px-2  py-2 rounded-md hover:bg-primary hover:text-white"
            onClick={() => changeApp("ramirandava")}
          >
            <Building2 size={20} className="mr-2" />
            <span> Ramirandava</span>
          </button>
        ) : (
          <button
            className="mt-5 w-full flex items-center px-2  py-2 rounded-md hover:bg-primary hover:text-white"
            onClick={() => changeApp("toils")}
          >
            <Building2 size={20} className="mr-2" />
            <span> Toils d'Isalo</span>
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-4 px-3 pb-5  overflow-y-auto h-[450px]">
        <SidebarItem
          icon={Home}
          label="Dashboard"
          to="home"
          isActive={activeItem === "dashboard"}
          onClick={() => handleItemClick("dashboard")}
        />
        {/* Emplois Section */}
        <SidebarItem
          icon={Users}
          label="Employees"
          hasChildren={true}
          isOpen={openMenus.employes}
          onClick={() => toggleMenu("employes")}
        />
        {openMenus.employes && (
          <div className="pl-6">
            <SidebarItem
              to="poste"
              label="Postes"
              indent={true}
              isActive={activeItem === "postes"}
              onClick={() => handleItemClick("postes")}
            />
            <SidebarItem
              to="list"
              label="Listes"
              indent={true}
              isActive={activeItem === "listes"}
              onClick={() => handleItemClick("listes")}
            />
            <SidebarItem
              to="conge"
              label="Congé"
              indent={true}
              isActive={activeItem === "conge"}
              onClick={() => handleItemClick("conge")}
            />
          </div>
        )}

        <SidebarItem
          icon={FileText}
          label="Transactions"
          isActive={activeItem === "transactions"}
          onClick={() => handleItemClick("transactions")}
        />
          <SidebarItem
           to="produit"
          icon={BoxIcon}
          label="Produits"
          isActive={activeItem === "produits"}
          onClick={() => handleItemClick("produits")}
        />

        <SidebarItem
          to={"fournisseur"}
          icon={Truck}
          label="Fournisseurs"
          isActive={activeItem === "fournisseurs"}
          onClick={() => handleItemClick("fournisseurs")}
        />
        {app == "toils" ? (
          <>
            <SidebarItem
              icon={Building2}
              label="Toils de l'Isalo"
              hasChildren={true}
              isOpen={openMenus.toils}
              onClick={() => toggleMenu("toils")}
            />
          </>
        ) : (
          <>
            <SidebarItem
              icon={Building2}
              label="Ramirandava"
              hasChildren={true}
              isOpen={openMenus.ramirandava}
              onClick={() => toggleMenu("ramirandava")}
            />
          </>
        )}
        {/* Ramirandava   Section */}
        {openMenus.ramirandava && (
          <div className="pl-6">
            <SidebarItem
              to="produit"
              label="Stocks"
              indent={true}
              isActive={activeItem === "stocks"}
              onClick={() => handleItemClick("stocks")}
            />
            <SidebarItem
              to="approvisement"
              label="Approvisionnement"
              indent={true}
              isActive={activeItem === "approvisionnement"}
              onClick={() => handleItemClick("approvisionnement")}
            />
            <SidebarItem
              to={"produit-vendu"}
              label="Produits sortant"
              indent={true}
              isActive={activeItem === "produits"}
              onClick={() => handleItemClick("produits")}
            />
          </div>
        )}

        {/* Toils de l'Isalo Section */}
        {openMenus.toils && (
          <div className="pl-6">
            <SidebarItem
              to="stock-toil"
              label="Stocks"
              indent={true}
              isActive={activeItem === "stock-toil"}
              onClick={() => handleItemClick("stock-toil")}
            />
            <SidebarItem
              to="approvisement-isalo"
              label="Approvisionnement"
              indent={true}
              isActive={activeItem === "Approvisionnement-isalo"}
              onClick={() => handleItemClick("Approvisionnement-isalo")}
            />
            <SidebarItem
              to={"produit-vendu"}
              label="Produits sortant"
              indent={true}
              isActive={activeItem === "produits"}
              onClick={() => handleItemClick("produits")}
            />
            <SidebarItem
              to={"chambres"}
              label="Chambres"
              indent={true}
              isActive={activeItem === "chambres"}
              onClick={() => handleItemClick("chambres")}
            />
            <SidebarItem
              to={"reservation"}
              label="Réservations"
              indent={true}
              isActive={activeItem === "reservations"}
              onClick={() => handleItemClick("reservations")}
            />
            <SidebarItem
              label="Séjours"
              indent={true}
              isActive={activeItem === "sejours"}
              onClick={() => handleItemClick("sejours")}
            />
          </div>
        )}

        {/* Settings */}
        <SidebarItem
          icon={Settings}
          label="Configurations"
          isActive={activeItem === "configurations"}
          onClick={() => handleItemClick("configurations")}
          className="mt-auto"
        />
      </nav>
    </div>
  );
};

export default Sidebar;
