// ============================================================
// BLOGS-DATA.JS — Centrale bloglijst
// N8N voegt hier automatisch nieuwe blogs aan toe (bovenaan).
// Volgorde: nieuwste blog bovenaan in de array.
// ============================================================

const BLOGS_DATA = [
  {
    slug: "onze-eerlijke-mening-over-de-garmin-forerunner-165",
    title: "Onze eerlijke mening over de Garmin Forerunner 165: loont 'ie de moeite?",
    excerpt: "De Garmin Forerunner 165 is een slimme hardloophorloge met nuttige functies, maar is het de prijs waard? Wij zijn kritisch en eerlijk.",
    category: "Tech",
    categoryLabel: "Overig",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/onze-eerlijke-mening-over-de-garmin-forerunner-165.jpg"
  },
  {
    slug: "onze-eerlijke-meting-over-de-wahoo-kickr-core-2",
    title: "Onze eerlijke meting over de Wahoo Kickr Core 2: is 'ie zijn prijs waard?",
    excerpt: "We testten de Wahoo Kickr Core 2 uitgebreid en geven je een no-nonsense oordeel over prestaties, gebruiksgemak en of 'ie zijn geld waard is.",
    category: "Tech",
    categoryLabel: "Overig",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/onze-eerlijke-meting-over-de-wahoo-kickr-core-2.jpg"
  },
  {
    slug: "waarom-apart-slapen-juist-werkt-voor-je-relatie",
    title: "Waarom apart slapen juist werkt voor je relatie",
    excerpt: "Apart slapen heeft meer voordelen dan je denkt. Beter slapen, minder ruzie en zelfs betere intimiteit. Lees waarom het werkt.",
    category: "relatie",
    categoryLabel: "Relatie",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/waarom-apart-slapen-juist-werkt-voor-je-relatie.jpg"
  },
  {
    slug: "relatieproblemen-door-slaaptekort-wat-je-moet-weten",
    title: "Relatieproblemen door slaaptekort: waarom je opstaan soms ruzie wordt",
    excerpt: "Slaaptekort zorgt niet alleen voor een grijze blik, maar ook voor ruzie met je partner. Check waarom dat gebeurt en hoe je het voorkomt.",
    category: "relatie",
    categoryLabel: "Relatie",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "8 min lezen",
    image: "/images/blog/relatieproblemen-door-slaaptekort-wat-je-moet-weten.jpg"
  },
  {
    slug: "date-nights-met-een-baby-bestaat-dat-nog",
    title: "Date nights met een baby: bestaat dat nog?",
    excerpt: "Date nights met een baby lijken onmogelijk, maar met wat creativiteit en planning is het toch mogelijk om samen op te laden.",
    category: "relatie",
    categoryLabel: "Relatie",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "8 min lezen",
    image: "/images/blog/date-nights-met-een-baby-bestaat-dat-nog.jpg"
  },
  {
    slug: "hoe-verandert-een-baby-je-relatie",
    title: "Hoe verandert een baby je relatie? Spoiler: het is een achtbaan, maar dan wel samen",
    excerpt: "Een baby verandert je relatie compleet. Van romantiek tot slaapgebrek: zo houd je het samen sterk en leuk.",
    category: "relatie",
    categoryLabel: "Relatie",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/hoe-verandert-een-baby-je-relatie.jpg"
  },
  {
    slug: "zelf-loaded-fries-maken-zo-pak-je-het-perfect-aan",
    title: "Zelf loaded fries maken: zo pak je het perfect aan",
    excerpt: "Zelf loaded fries maken is makkelijker dan je denkt. Met deze tips zet je zo een berg friet neer waar iedereen van smult.",
    category: "koken",
    categoryLabel: "Koken",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/zelf-loaded-fries-maken-zo-pak-je-het-perfect-aan.jpg"
  },
  {
    slug: "beste-eten-na-padel-wat-gooi-je-erin-als-je-honger-hebt-na-het-veld",
    title: "Beste eten na padel: wat gooi je erin als je honger hebt na het veld",
    excerpt: "Check hier wat het beste eten is na padel om je energie snel terug te krijgen en je spieren soepel te houden.",
    category: "koken",
    categoryLabel: "Koken",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/beste-eten-na-padel-wat-gooi-je-erin-als-je-honger-hebt-na-het-veld.jpg"
  },
  {
    slug: "beste-snacks-voor-wk-2026",
    title: "De beste snacks voor WK 2026: zo scoor je in de keuken én op de bank",
    excerpt: "Snack slim tijdens WK 2026 met deze ultieme borrelhapjes. Makkelijk, snel en bomvol smaak voor grote en kleine supporters.",
    category: "koken",
    categoryLabel: "Koken",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/beste-snacks-voor-wk-2026.jpg"
  },
  {
    slug: "wat-zijn-de-lekkerste-tosti-combinaties",
    title: "Wat zijn de lekkerste tosti combinaties? Probeer deze smakelijke klassiekers en verrassingen!",
    excerpt: "Welke tosti combinaties zijn écht de moeite waard? Van tijdloze klassiekers tot verrassende smaakmakers, wij zetten de beste opties voor je op een rij.",
    category: "koken",
    categoryLabel: "Koken",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/wat-zijn-de-lekkerste-tosti-combinaties.jpg"
  },
  {
    slug: "hoe-kun-je-je-het-best-voorbereiden-op-een-jaargesprek",
    title: "Hoe kun je je het best voorbereiden op een jaargesprek? Slimme tips die écht werken",
    excerpt: "Tip: een jaargesprek overleef je en win je alleen met een goede voorbereiding. Zo pak je het aan en haal je het beste uit dat gesprek.",
    category: "carriere",
    categoryLabel: "Carrière",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/hoe-kun-je-je-het-best-voorbereiden-op-een-jaargesprek.jpg"
  },
  {
    slug: "hoe-kun-je-je-het-best-voorbereiden-op-een-sollicitatiegesprek",
    title: "Hoe kun je je het best voorbereiden op een sollicitatiegesprek?",
    excerpt: "Wil je je sollicitatiegesprek rocken? Bereid je voor met deze praktische tips, zodat je zelfverzekerd en scherp overkomt.",
    category: "carriere",
    categoryLabel: "Carrière",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/hoe-kun-je-je-het-best-voorbereiden-op-een-sollicitatiegesprek.jpg"
  },
  {
    slug: "wat-zijn-de-beste-smartwatches-van-2026",
    title: "Wat zijn de beste smartwatches van 2026? Hier moet je op letten",
    excerpt: "Smartwatch kopen in 2026? Check deze beste modellen en tips om te kiezen uit het brede aanbod.",
    category: "tech",
    categoryLabel: "Tech",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "8 min lezen",
    image: "/images/blog/wat-zijn-de-beste-smartwatches-van-2026.jpg"
  },
  {
    slug: "hoe-train-je-het-best-voor-de-nijmeegse-4-daagse",
    title: "Hoe train je het best voor de Nijmeegse 4-daagse: zo loop jij 'm uit!",
    excerpt: "Wil jij de Nijmeegse 4-daagse volbrengen zonder kramp of klachten? Ontdek hoe je het best traint om die 4 dagen vol te houden.",
    category: "outdoor",
    categoryLabel: "Overig",
    date: "2026-05-18",
    dateFormatted: "18 mei 2026",
    readTime: "8 min lezen",
    image: "/images/blog/hoe-train-je-het-best-voor-de-nijmeegse-4-daagse.jpg"
  },
  {
    slug: "hoe-zorg-je-voor-meer-zelfvertrouwen",
    title: "Hoe zorg je voor meer zelfvertrouwen? Een no-nonsense aanpak die werkt",
    excerpt: "Wil je meer zelfvertrouwen? Dit is hoe je het écht voor elkaar krijgt, zonder zweverige tips of dikke praat.",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "2026-05-17",
    dateFormatted: "17 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/hoe-zorg-je-voor-meer-zelfvertrouwen.jpg"
  },
  {
    slug: "wat-zijn-de-beste-datingapps-in-2026",
    title: "Wat zijn de beste datingapps in 2026? Dit zijn jouw winners!",
    excerpt: "Wil je weten wat de beste datingapps in 2026 zijn? We bespreken de apps die je écht verder helpen, zonder gedoe.",
    category: "lifestyle",
    categoryLabel: "Lifestyle",
    date: "2026-05-17",
    dateFormatted: "17 mei 2026",
    readTime: "8 min lezen",
    image: "/images/blog/wat-zijn-de-beste-datingapps-in-2026.jpg"
  },
  {
    slug: "beste-positie-rechtshandige-speler-padel",
    title: "Wat is de beste positie voor een rechtshandige speler met Padel?",
    excerpt: "Welke positie past het beste bij jou als rechtshandige padelspeler? Check handige tips en tactiek om meer te scoren op de baan.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-17",
    dateFormatted: "17 mei 2026",
    readTime: "6 min lezen",
    image: "/images/blog/beste-positie-rechtshandige-speler-padel.jpg"
  },
  {
    slug: "beste-positie-linkshandige-speler-padel",
    title: "Wat is de beste positie voor een linkshandige speler met Padel?",
    excerpt: "Linkshandig en padel spelen? Dit is de beste positie om optimaal te profiteren van je unieke slag en je tegenstanders te verrassen.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-17",
    dateFormatted: "17 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/beste-positie-linkshandige-speler-padel.jpg"
  },
  {
    slug: "wat-zijn-de-spelregels-van-padel",
    title: "Wat zijn de spelregels van Padel? Alles wat je moet weten om te starten",
    excerpt: "Benieuwd naar wat de spelregels van padel zijn? We leggen overzichtelijk uit hoe je scoort, serveert en het potje wint.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-17",
    dateFormatted: "17 mei 2026",
    readTime: "6 min lezen",
    image: "/images/blog/wat-zijn-de-spelregels-van-padel.jpg"
  },
  {
    slug: "wat-is-verschil-rond-padelracket-diamond-shape-padelracket",
    title: "Wat is het verschil tussen een rond padelracket en een diamond shape padelracket?",
    excerpt: "Rond of diamond shape padelracket? Leer de verschillen en vind jouw ideale racket voor meer power of controle op de baan.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-17",
    dateFormatted: "17 mei 2026",
    readTime: "7 min lezen",
    image: "/images/blog/wat-is-verschil-rond-padelracket-diamond-shape-padelracket.jpg"
  },
  {
    slug: "wat-is-het-verschil-tussen-een-tennisbal-en-een-padelbal",
    title: "Wat is het verschil tussen een tennisbal en een padelbal?",
    excerpt: "Tennisbal of padelbal, ze lijken op elkaar maar verschillen behoorlijk. Wat maakt ze anders? Hier leg ik het je simpel uit.",
    category: "sporten",
    categoryLabel: "Sporten",
    date: "2026-05-17",
    dateFormatted: "17 mei 2026",
    readTime: "6 min lezen",
    image: "/images/blog/wat-is-het-verschil-tussen-een-tennisbal-en-een-padelbal.jpg"
  },
];
