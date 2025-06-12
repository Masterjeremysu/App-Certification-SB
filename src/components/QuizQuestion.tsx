import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Question } from "../types/quiz";


interface QuizQuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}) => {
  const percentage = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl animate-fade-in">
        {/* Barre de progression */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion} / {totalQuestions}</span>
            <span className="text-blue-600">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Intitulé de la question */}
        <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
          {question.question}
        </h2>

        {/* Réponses */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            return (
              <button
                key={index}
                onClick={() => onAnswerSelect(index)}
                className={`w-full p-4 rounded-lg border-2 text-left font-medium transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-50 border-blue-500 text-blue-900"
                    : "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-25 text-gray-700"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Boutons navigation */}
        <div className="flex justify-between">
          <button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              canGoPrevious
                ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                : "bg-gray-50 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Précédent
          </button>

          <button
            onClick={onNext}
            disabled={!canGoNext || selectedAnswer === null}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              canGoNext && selectedAnswer !== null
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentQuestion === totalQuestions ? "Terminer" : "Suivant"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
