import React from "react";
import { Building2 } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center space-x-4 animate-fade-in">
        <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-md">
          <Building2 className="w-7 h-7 text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-extrabold text-gray-900 leading-tight">
            GT LOGISTICS
          </h1>
          <span className="text-sm text-blue-600 tracking-wide">
            Formation Salle Propre
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
