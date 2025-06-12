import { useState } from "react";
import Header from "./components/Header";
import IdentificationForm from "./components/IdentificationForm";
import QuizQuestion from "./components/QuizQuestion";
import Results from "./components/Results";
import AdminPanel from "./components/AdminPanel";
import ReviewQuestions from "./components/ReviewQuestions";
import type { User, QuizResult } from "./types/quiz";
import { QUIZ_QUESTIONS } from "./types/quiz";

type AppState = "identification" | "quiz" | "results" | "admin" | "review";

function App() {
  const [currentState, setCurrentState] = useState<AppState>("identification");
  const [user, setUser] = useState<User | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [result, setResult] = useState<QuizResult | null>(null);
  const [errorIndices, setErrorIndices] = useState<number[]>([]);

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
    if (currentState === "review") {
      const currentReviewIndex = errorIndices.indexOf(currentQuestionIndex);
      if (currentReviewIndex < errorIndices.length - 1) {
        setCurrentQuestionIndex(errorIndices[currentReviewIndex + 1]);
      } else {
        // Dernière question review -> tente de terminer la revue
        handleFinishReview();
      }
      return;
    }

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calcul du score
      const score = answers.reduce(
        (total: number, answer: number | null, index: number) =>
          answer === QUIZ_QUESTIONS[index].correctAnswer ? total + 1 : total,
        0
      );

      // Collecte des erreurs
      const erreursIndices = answers
        .map((answer, i) =>
          answer !== QUIZ_QUESTIONS[i].correctAnswer ? i : -1
        )
        .filter((i) => i !== -1);

      const quizResult: QuizResult = {
        user: user!,
        answers: answers as number[],
        score,
        passed: score >= 30,
        completedAt: new Date(),
      };

      setResult(quizResult);

      if (erreursIndices.length > 0) {
        setErrorIndices(erreursIndices);
        setCurrentQuestionIndex(erreursIndices[0]);
        setCurrentState("review");
      } else {
        setCurrentState("results");
      }
    }
  };

  const handlePrevious = () => {
    if (currentState === "review") {
      const currentReviewIndex = errorIndices.indexOf(currentQuestionIndex);
      if (currentReviewIndex > 0) {
        setCurrentQuestionIndex(errorIndices[currentReviewIndex - 1]);
      }
      return;
    }

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
    setErrorIndices([]);
  };

  const handleUpdateAnswer = (questionIndex: number, newAnswer: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = newAnswer;
    setAnswers(newAnswers);
  };

  const handleFinishReview = () => {
    const score = answers.reduce(
      (total: number, answer: number | null, index: number) =>
        answer === QUIZ_QUESTIONS[index].correctAnswer ? total + 1 : total,
      0
    );

    if (score >= 30) {
      setResult({
        user: user!,
        answers: answers as number[],
        score,
        passed: true,
        completedAt: new Date(),
      });
      setCurrentState("results");
    } else {
      alert("Vous avez encore des erreurs, veuillez les corriger avant de terminer.");
    }
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
        <IdentificationForm onSubmit={handleUserSubmit} />
      )}

      {(currentState === "quiz" || currentState === "review") &&
        (currentState === "quiz" ? (
          <QuizQuestion
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={QUIZ_QUESTIONS.length}
            selectedAnswer={answers[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoNext={true}
            canGoPrevious={currentQuestionIndex > 0}
          />
        ) : (
          <ReviewQuestions
            errorsIndices={errorIndices}
            answers={answers}
            onAnswerUpdate={handleUpdateAnswer}
            onFinishReview={handleFinishReview}
          />
        ))}

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

      {/* Admin Access Button (Hidden) */}
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
    </div>
  );
}

export default App;
