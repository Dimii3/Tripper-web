export type LogosBrandT = {
  id: string;
  imgUrl: string;
  brand: string;
};

export const LOGOS_BRAND: LogosBrandT[] = [
  { id: "b1", imgUrl: "/logo-bern.svg", brand: "Bern" },
  { id: "b2", imgUrl: "/logo-cactus.svg", brand: "Cactus" },
  { id: "b3", imgUrl: "/logo-hitech.svg", brand: "hitech" },
  { id: "b4", imgUrl: "/logo-orbitic.svg", brand: "Orbitic" },
];

type QuestionsT = {
  id: number;
  question: string;
  answer: string;
};

export const questions: QuestionsT[] = [
  {
    id: 1,
    question: "What experience do I need to join a Tripper expedition?",
    answer:
      "Most of our trips are designed for all skill levels! Some extreme expeditions require prior experience, but we always provide training and guidance to ensure you're prepared.",
  },
  {
    id: 2,
    question: "What should I pack for an expedition?",
    answer:
      "Each trip has a tailored packing list, but essentials include durable clothing, sturdy boots, a sleeping bag, and a headlamp. We’ll send you a full list before departure!",
  },
  {
    id: 3,
    question: "Is it safe to travel to remote locations?",
    answer:
      "Safety is our top priority! Our expert guides are trained in survival, first aid, and emergency response. We also carry satellite communication and medical kits on every trip.",
  },
  {
    id: 4,
    question: "How big are the expedition groups?",
    answer:
      "Most trips have 6–10 participants to ensure a safe and immersive experience. Private and customized trips are also available!",
  },
  {
    id: 5,
    question: "How do I book a trip?",
    answer:
      "Simply visit our Trips page, select your adventure, and fill out the booking form! Our team will get in touch to finalize the details.",
  },
];
