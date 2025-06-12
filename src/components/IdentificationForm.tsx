import React, { useState } from "react";
import { User as UserIcon, Calendar, UserCheck } from "lucide-react";
import type { User } from "../types/quiz";

interface IdentificationFormProps {
  onSubmit: (user: User) => void;
}

const IdentificationForm: React.FC<IdentificationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<User>({
    firstName: "",
    lastName: "",
    trainingDate: "",
    instructorName: "",
  });

  const handleChange = (field: keyof User, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.trainingDate.trim() &&
    formData.instructorName.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) onSubmit(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md animate-fade-in">
        {/* Titre */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <UserCheck className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Identification</h1>
          <p className="text-gray-600 text-sm">QCM Sensibilisation à la Contamination</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Prénom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <UserIcon className="w-4 h-4 inline mr-1" />
              Prénom
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Votre prénom"
              required
            />
          </div>

          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <UserIcon className="w-4 h-4 inline mr-1" />
              Nom
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Votre nom"
              required
            />
          </div>

          {/* Date formation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <Calendar className="w-4 h-4 inline mr-1" />
              Date de formation
            </label>
            <input
              type="date"
              value={formData.trainingDate}
              onChange={(e) => handleChange("trainingDate", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Formateur */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <UserCheck className="w-4 h-4 inline mr-1" />
              Nom du formateur
            </label>
            <input
              type="text"
              value={formData.instructorName}
              onChange={(e) => handleChange("instructorName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Nom du formateur"
              required
            />
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
              isFormValid
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Commencer le QCM
          </button>
        </form>
      </div>
    </div>
  );
};

export default IdentificationForm;
