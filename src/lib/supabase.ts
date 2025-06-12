import { createClient } from "@supabase/supabase-js";

// 🔐 Variables d'environnement (sécurisées via .env)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// 🧩 Client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 📦 Structure d’un enregistrement de quiz (doit correspondre à la table Supabase)
export interface QuizResultRecord {
  id?: string;
  first_name: string;
  last_name: string;
  training_date: string;
  instructor_name: string;
  score: number;
  passed: boolean;
  answers: number[]; // Index des réponses données
  completed_at: string; // ISO string
  created_at?: string;  // Supabase l’ajoute automatiquement
}

// ✅ Fonction : Enregistrer un résultat
export const saveQuizResult = async (result: QuizResultRecord) => {
  const { data, error } = await supabase
    .from("quiz_results")
    .insert([result])
    .select()
    .single();

  if (error) {
    console.error("❌ Erreur lors de l’enregistrement :", error);
    throw error;
  }

  return data;
};

// ✅ Fonction : Récupérer l’historique des résultats
export const getQuizResults = async () => {
  const { data, error } = await supabase
    .from("quiz_results")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("❌ Erreur lors de la récupération des résultats :", error);
    throw error;
  }

  return data;
};
