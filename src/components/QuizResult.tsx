import React from "react";
import { CheckCircle, XCircle, Clock, CalendarCheck, User2 } from "lucide-react";
import type { QuizResult } from "../types/quiz";

interface QuizResultProps {
  result: QuizResult;
}

const QuizResult: React.FC<QuizResultProps> = ({ result }) => {
  const { user, score, passed, completedAt } = result;

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition-all duration-300 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          {passed ? (
            <CheckCircle className="text-green-600 w-6 h-6" />
          ) : (
            <XCircle className="text-red-600 w-6 h-6" />
          )}
          <h3 className="text-lg font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h3>
        </div>
        <span
          className={`text-sm px-3 py-1 rounded-full font-medium ${
            passed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {passed ? "Réussi" : "Échoué"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-blue-500" />
          <span>Date de formation :</span>
          <span className="font-medium">{new Date(user.trainingDate).toLocaleDateString("fr-FR")}</span>
        </div>

        <div className="flex items-center gap-2">
          <User2 className="w-4 h-4 text-purple-500" />
          <span>Formateur :</span>
          <span className="font-medium">{user.instructorName}</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-500" />
          <span>Terminé le :</span>
          <span className="font-medium">
            {new Date(completedAt).toLocaleDateString("fr-FR")} à{" "}
            {new Date(completedAt).toLocaleTimeString("fr-FR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">Score :</span>
          <span
            className={`font-bold ${
              passed ? "text-green-600" : "text-red-600"
            }`}
          >
            {score}/36
          </span>
          <span className="text-gray-500 ml-2">({Math.round((score / 36) * 100)}%)</span>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
