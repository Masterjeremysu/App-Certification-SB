import { useState } from "react";
import type { Question } from "../types/quiz";
import { QUIZ_QUESTIONS } from "../types/quiz";

interface ReviewQuestionsProps {
  errorsIndices: number[];
  answers: (number | null)[];
  onAnswerUpdate: (questionIndex: number, newAnswer: number) => void;
  onFinishReview: () => void;
}

const ReviewQuestions: React.FC<ReviewQuestionsProps> = ({
  errorsIndices,
  answers,
  onAnswerUpdate,
  onFinishReview,
}) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const questionIndex = errorsIndices[currentReviewIndex];
  const question: Question = QUIZ_QUESTIONS[questionIndex];
  const selectedAnswer = answers[questionIndex];

  const handleNext = () => {
    if (currentReviewIndex < errorsIndices.length - 1) {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentReviewIndex > 0) {
      setCurrentReviewIndex(currentReviewIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4">
          Revue des questions ratées ({currentReviewIndex + 1}/
          {errorsIndices.length})
        </h2>

        <div className="mb-8">
          <p className="text-lg font-semibold mb-4">{question.question}</p>
          <div className="space-y-3">
            {question.options.map((option, idx) => {
              const isCorrect = idx === question.correctAnswer;
              const isSelected = idx === selectedAnswer;
              return (
                <button
                  key={idx}
                  onClick={() => onAnswerUpdate(questionIndex, idx)}
                  className={`w-full p-3 rounded-lg border-2 font-medium transition-colors
                    ${
                      isCorrect
                        ? "bg-green-100 border-green-600 text-green-900"
                        : isSelected
                        ? "bg-red-100 border-red-600 text-red-900"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentReviewIndex === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentReviewIndex === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
            }`}
          >
            Précédent
          </button>

          <button
            onClick={handleNext}
            disabled={currentReviewIndex === errorsIndices.length - 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentReviewIndex === errorsIndices.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
            }`}
          >
            Suivant
          </button>
        </div>

        <button
          onClick={onFinishReview}
          className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
        >
          Terminer la revue
        </button>
      </div>
    </div>
  );
};

export default ReviewQuestions;
