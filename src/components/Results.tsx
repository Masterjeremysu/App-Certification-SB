import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Download,
  Database,
} from "lucide-react";
import type { QuizResult } from "../types/quiz";
import { generateCertificate } from "../lib/certificate";
import { saveQuizResult } from "../lib/supabase";

interface ResultsProps {
  result: QuizResult;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, onRestart }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const { user, score, passed } = result;
  const total = 36;
  const percentage = Math.round((score / total) * 100);

  const handleSaveResult = async () => {
    setIsSaving(true);
    try {
      await saveQuizResult({
        first_name: user.firstName,
        last_name: user.lastName,
        training_date: user.trainingDate,
        instructor_name: user.instructorName,
        score,
        passed,
        answers: result.answers,
        completed_at: result.completedAt.toISOString(),
      });
      setSaveStatus("success");
    } catch (error) {
      console.error("Erreur de sauvegarde :", error);
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownloadCertificate = () => {
    generateCertificate(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center animate-fade-in">
        {/* Status Icon */}
        <div className="mb-6">
          <div
            className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${
              passed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {passed ? (
              <CheckCircle className="w-12 h-12 text-green-600" />
            ) : (
              <XCircle className="w-12 h-12 text-red-600" />
            )}
          </div>
          <h2
            className={`text-2xl font-bold mt-4 ${
              passed ? "text-green-700" : "text-red-700"
            }`}
          >
            {passed ? "🎉 Bravo, vous avez réussi !" : "❌ Score insuffisant"}
          </h2>
          <p className="text-sm text-gray-600">
            {passed
              ? "Formation validée avec succès"
              : "Vous pouvez recommencer le QCM"}
          </p>
        </div>

        {/* Score */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
          <div className="text-4xl font-extrabold mb-2 text-blue-800">
            {score} / {total}
          </div>
          <div className="text-lg text-blue-600 font-medium">
            {percentage}%
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Seuil de validation : 30 / 36 (83%)
          </div>
        </div>

        {/* Infos Candidat */}
        <div className="text-left bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <h3 className="text-blue-900 font-semibold mb-2 text-sm uppercase tracking-wide">
            Informations Candidat
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>
              👤 <strong>{user.firstName} {user.lastName}</strong>
            </li>
            <li>
              📅 Formation :{" "}
              {new Date(user.trainingDate).toLocaleDateString("fr-FR")}
            </li>
            <li>👨‍🏫 Formateur : {user.instructorName}</li>
            <li>
              🕒 Terminé :{" "}
              {result.completedAt.toLocaleDateString("fr-FR")} à{" "}
              {result.completedAt.toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </li>
          </ul>
        </div>

        {/* Alerts */}
        {saveStatus === "success" && (
          <p className="mb-4 text-sm text-green-700 bg-green-100 border border-green-200 rounded px-3 py-2">
            ✅ Résultat sauvegardé avec succès
          </p>
        )}
        {saveStatus === "error" && (
          <p className="mb-4 text-sm text-red-700 bg-red-100 border border-red-200 rounded px-3 py-2">
            ❌ Une erreur est survenue lors de la sauvegarde
          </p>
        )}

        {/* Actions */}
        <div className="flex flex-col space-y-3">
          {saveStatus !== "success" && (
            <button
              onClick={handleSaveResult}
              disabled={isSaving}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-medium flex items-center justify-center transition"
            >
              <Database className="w-4 h-4 mr-2" />
              {isSaving ? "Sauvegarde..." : "Sauvegarder le résultat"}
            </button>
          )}

          {passed && (
            <button
              onClick={handleDownloadCertificate}
              className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium flex items-center justify-center transition"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger l’attestation
            </button>
          )}

          <button
            onClick={onRestart}
            className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium flex items-center justify-center transition"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {passed ? "Refaire un QCM" : "Recommencer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
