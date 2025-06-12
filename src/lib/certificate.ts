import jsPDF from "jspdf";
import type { QuizResult } from "../types/quiz";

export const generateCertificate = (result: QuizResult) => {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  // Couleurs
  const blue = "#1E3A8A";
  const grayDark = "#374151";
  const grayLight = "#6B7280";

  // Police
  pdf.setFont("helvetica");

  // En-tête graphique
  pdf.setFillColor(30, 58, 138);
  pdf.rect(0, 0, 297, 25, "F");

  pdf.setFontSize(20);
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.text("GT LOGISTICS", 20, 16);

  pdf.setFontSize(11);
  pdf.setFont("helvetica", "normal");
  pdf.text("Formation Salle Propre", 200, 16);

  // Titre
  pdf.setFontSize(28);
  pdf.setTextColor(blue);
  pdf.setFont("helvetica", "bold");
  pdf.text("ATTESTATION DE FORMATION", 148.5, 50, { align: "center" });

  // Sous-titre
  pdf.setFontSize(15);
  pdf.setTextColor(grayDark);
  pdf.setFont("helvetica", "normal");
  pdf.text("Sensibilisation à la contamination en salle propre", 148.5, 63, {
    align: "center",
  });

  // Séparateur
  pdf.setDrawColor(30, 58, 138);
  pdf.setLineWidth(1);
  pdf.line(40, 72, 257, 72);

  // Introduction
  pdf.setFontSize(13);
  pdf.setTextColor(grayDark);
  pdf.setFont("helvetica", "normal");
  pdf.text("Je soussigné(e), certifie que :", 148.5, 90, { align: "center" });

  // Nom en évidence
  const fullName = `${result.user.firstName} ${result.user.lastName}`;
  pdf.setFontSize(20);
  pdf.setTextColor(blue);
  pdf.setFont("helvetica", "bold");
  pdf.text(fullName, 148.5, 105, { align: "center" });

  // Corps principal
  const percent = Math.round((result.score / 36) * 100);
  const text = `a suivi avec succès la formation de sensibilisation à la contamination en salle propre,\n
a obtenu un score de ${result.score}/36 (${percent}%) et a validé les compétences requises.`;

  pdf.setFontSize(13);
  pdf.setTextColor(grayDark);
  pdf.setFont("helvetica", "normal");
  const splitText = pdf.splitTextToSize(text, 220);
  pdf.text(splitText, 148.5, 120, { align: "center" });

  // Informations complémentaires
  pdf.setFontSize(11);
  pdf.setTextColor(grayLight);
  const trainingDate = new Date(result.user.trainingDate).toLocaleDateString("fr-FR");
  const completedDate = result.completedAt.toLocaleDateString("fr-FR");

  pdf.text(`Date de formation : ${trainingDate}`, 40, 160);
  pdf.text(`Formateur : ${result.user.instructorName}`, 40, 170);
  pdf.text(`Évaluation réalisée le : ${completedDate}`, 40, 180);

  // Signature
  pdf.setDrawColor(grayLight);
  pdf.setLineWidth(0.5);
  pdf.rect(180, 155, 75, 35); // cadre

  pdf.setFontSize(10);
  pdf.setTextColor(grayLight);
  pdf.text("Signature et cachet", 217.5, 165, { align: "center" });
  pdf.text("de l'organisme de formation", 217.5, 172, { align: "center" });

  // Pied de page
  pdf.setFontSize(9);
  pdf.setTextColor(grayLight);
  const now = new Date();
  pdf.text(
    `Document généré automatiquement le ${now.toLocaleDateString("fr-FR")} à ${now.toLocaleTimeString("fr-FR")}`,
    148.5,
    200,
    { align: "center" },
  );

  // Téléchargement
  const fileName = `Attestation_${result.user.firstName}_${result.user.lastName}_${completedDate.replace(/[/]/g, "-")}.pdf`;
  pdf.save(fileName);
};
