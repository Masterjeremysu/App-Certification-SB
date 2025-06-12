import { useState } from "react";
import Header from "./components/Header";
import IdentificationForm from "./components/IdentificationForm";
import QuizQuestion from "./components/QuizQuestion";
import Results from "./components/Results";
import AdminPanel from "./components/AdminPanel";
import { QUIZ_QUESTIONS } from "./types/quiz";
import type { User, QuizResult } from "./types/quiz"; // ✅ Corrigé ici

type AppState = "identification" | "quiz" | "results" | "admin";

function App() {
  const [currentState, setCurrentState] = useState<AppState>("identification");
  const [user, setUser] = useState<User | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleUserSubmit = (userData: User) => {
    setUser(userData);
    setCurrentState("quiz");
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = answers.reduce(
        (total: number, answer: number | null, index: number) => {
          return answer === QUIZ_QUESTIONS[index].correctAnswer
            ? total + 1
            : total;
        },
        0
      );

      const quizResult: QuizResult = {
        user: user!,
        answers: answers as number[],
        score,
        passed: score >= 30,
        completedAt: new Date(),
      };

      setResult(quizResult);
      setCurrentState("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentState("identification");
    setUser(null);
    setCurrentQuestionIndex(0);
    setAnswers(new Array(QUIZ_QUESTIONS.length).fill(null));
    setResult(null);
  };

  const handleAdminAccess = () => {
    setCurrentState("admin");
  };

  const handleBackToQuiz = () => {
    setCurrentState("identification");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentState !== "identification" && currentState !== "admin" && (
        <Header />
      )}

      {currentState === "identification" && (
        <div className="fixed top-4 right-4">
          <button
            onClick={handleAdminAccess}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
            title="Accès Admin"
          >
            Admin
          </button>
        </div>
      )}

      {currentState === "identification" && (
        <IdentificationForm onSubmit={handleUserSubmit} />
      )}

      {currentState === "quiz" && (
        <QuizQuestion
          question={QUIZ_QUESTIONS[currentQuestionIndex]}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={QUIZ_QUESTIONS.length}
          selectedAnswer={answers[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoNext={answers[currentQuestionIndex] !== null}

          canGoPrevious={currentQuestionIndex > 0}
        />
      )}

      {currentState === "results" && result && (
        <Results result={result} onRestart={handleRestart} />
      )}

      {currentState === "admin" && (
        <div>
          <div className="bg-white shadow-sm border-b border-gray-200 mb-8">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <button
                onClick={handleBackToQuiz}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Retour au QCM
              </button>
            </div>
          </div>
          <AdminPanel />
        </div>
      )}
    </div>
  );
}

export default App;
