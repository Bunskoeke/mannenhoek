// ============================================================
// BLOGS-DATA.JS — Centrale bloglijst
// N8N voegt hier automatisch nieuwe blogs aan toe (bovenaan).
// Volgorde: nieuwste blog bovenaan in de array.
// ============================================================

const BLOGS_DATA = [
  {
    slug: "beste-positie-rechtshandige-speler-padel",
    title: "Wat is de beste positie voor een rechtshandige speler met Padel?",
    excerpt: "Benieuwd welke positie het beste past bij rechtshandige padelspelers? Spoiler: rechterkant is vaak je vriend, maar er is meer dan dat.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-16",
    dateFormatted: "16 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/beste-positie-rechtshandige-speler-padel.jpg"
  },
  {
    slug: "beste-positie-linkshandige-speler-padel",
    title: "Wat is de beste positie voor een linkshandige speler met Padel?",
    excerpt: "Linkshandige spelers hebben een unieke troef in padel. Welke positie past het best bij jouw linkerhand? Je leest het hier.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-16",
    dateFormatted: "16 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/beste-positie-linkshandige-speler-padel.jpg"
  },
  {
    slug: "wat-zijn-de-spelregels-van-padel",
    title: "Wat zijn de spelregels van Padel? Alles wat je moet weten om te scoren",
    excerpt: "Padel is populair en makkelijk te leren. Met deze spelregels weet jij precies hoe het werkt, van serve tot punt scoren.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-16",
    dateFormatted: "16 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/wat-zijn-de-spelregels-van-padel.jpg"
  },
  {
    slug: "wat-is-het-verschil-tussen-een-rond-padelracket-en-een-diamond-shape-padelracket",
    title: "Wat is het verschil tussen een rond padelracket en een diamond shape padelracket?",
    excerpt: "Rond of diamond shape padelracket? Ontdek wat het verschil is en welk racket beter past bij jouw stijl en niveau.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-16",
    dateFormatted: "16 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/wat-is-het-verschil-tussen-een-rond-padelracket-en-een-diamond-shape-padelracket.jpg"
  },
  {
    slug: "wat-is-het-verschil-tussen-een-tennisbal-en-een-padelbal",
    title: "Wat is het verschil tussen een tennisbal en een padelbal?",
    excerpt: "Tennis- en padelballen lijken op elkaar, maar ze verschillen op belangrijke punten als druk, maat en speeleigenschappen. Wat maakt ze uniek?",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-16",
    dateFormatted: "16 mei 2026",
    readTime: "6 min lezen",
    image: "/images/blog/wat-is-het-verschil-tussen-een-tennisbal-en-een-padelbal.jpg"
  },
  {
    slug: "grotere-biceps-zo-bouw-jij-echt-omvang-en-kracht-op",
    title: "Grotere biceps: Zo bouw jij echt omvang en kracht op",
    excerpt: "Wil jij grotere biceps? Lees hier de beste oefeningen, voedingstips en trainingsstrategieën voor explosieve groei en meer kracht.",
    category: "fitness-sport",
    categoryLabel: "Fitness & Sport",
    date: "2026-05-16",
    dateFormatted: "16 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/grotere-biceps-zo-bouw-jij-echt-omvang-en-kracht-op.jpg"
  },
  {
    slug: "grotere-biceps-krijgen-zo-train-je-efficient-en-resultaatgericht",
    title: "Grotere Biceps Krijgen? Zo Train Je Efficiënt en Resultaatgericht",
    excerpt: "Wil je grotere biceps? Lees onze praktische gids met effectieve oefeningen, trainingsadviezen en voedingstips voor meer spiermassa en kracht.",
    category: "fitness-sport",
    categoryLabel: "Fitness & Sport",
    date: "2026-05-16",
    dateFormatted: "16 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/grotere-biceps-krijgen-zo-train-je-efficient-en-resultaatgericht.jpg"
  },
  {
    slug: "zwarte-overhemden-must-have-basics-voor-elke-man",
    title: "Zwarte Overhemden: De Must-Have Basics voor Elke Man",
    excerpt: "Zwarte overhemden zijn een tijdloze klassieker in de herengarderobe. Lees hoe je ze draagt en combineert voor een moderne, veelzijdige look.",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "2026-05-13",
    dateFormatted: "13 mei 2026",
    readTime: "6 min lezen",
    image: "https://picsum.photos/800/400?random=955"
  },
  {
    slug: "grotere-biceps-krijgen-zo-bouw-je-sneller-spiermassa-op",
    title: "Grotere Biceps Krijgen? Zo Bouw Je Sneller Spiermassa op",
    excerpt: "Ontdek hoe je met gerichte oefeningen en voeding snel grotere biceps kunt bouwen. Praktische tips voor optimale spiergroei en kracht.",
    category: "fitness-sport",
    categoryLabel: "Fitness & Sport",
    date: "2026-05-13",
    dateFormatted: "13 mei 2026",
    readTime: "6 min lezen",
    image: "https://picsum.photos/800/400?random=434"
  },
  {
    slug: "5-onmisbare-fitness-tips-voor-de-moderne-nederlandse-man",
    title: "5 Onmisbare Fitness Tips Voor De Moderne Nederlandse Man",
    excerpt: "Maak je fitnessroutine effectiever met deze 5 praktische tips speciaal voor de moderne Nederlandse man.",
    category: "fitness-sport",
    categoryLabel: "Fitness & Sport",
    date: "2026-05-13",
    dateFormatted: "13 mei 2026",
    readTime: "6 min lezen",
    image: "https://picsum.photos/800/400?random=173"
  },
  {
    slug: "ochtendritueel",
    title: "Hoe Bouw Je een Sterk Ochtendritueel op in 30 Dagen",
    excerpt: "Je ochtend bepaalt je dag. Ontdek hoe je een routine opbouwt die je productiviteit en energie door het dak jaagt — zonder een uur eerder op te hoeven staan.",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "2026-05-10",
    dateFormatted: "10 mei 2026",
    readTime: "4 min lezen",
    image: "https://picsum.photos/800/400?random=11"
  },
  {
    slug: "5-trainingen",
    title: "5 Trainingen Die Je Dit Jaar Absoluut Moet Proberen",
    excerpt: "Of je nu een beginner bent of al jaren traint, deze vijf workouts gaan je fysiek en mentaal naar een hoger niveau tillen. Van HIIT tot zware krachttraining.",
    category: "fitness-sport",
    categoryLabel: "Fitness & Sport",
    date: "2026-05-12",
    dateFormatted: "12 mei 2026",
    readTime: "5 min lezen",
    image: "https://picsum.photos/800/400?random=10"
  }
];
