// import { create } from "zustand";
// import { Elements } from "../data/Elements";

// type Answer = "yes" | "no"

// type GameStore = {
//     possible: typeof Elements
//     answers: Record<string, Answer>
//     currentQuestion: string | null
//     guess: string | null

//     answer: (question: string, answer: Answer) => void
//     makeGuess: () => void
//     reset: () => void
// }

// export const useGameStore = create<GameStore>((set) => ({
//     possible: Elements,
//     answers: {},
//     currentQuestion: "Es un metal??",
//     guess: null,

//     answer(question, answer) => set,
// }))