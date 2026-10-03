/* ==========================================================================
   Portfolio – Ghofrane Ben Moussa
   1. Translations (FR / EN)   2. Language switching   3. Navigation
   4. Scroll animations        5. Contact form
   ========================================================================== */


/* ── 1. TRANSLATIONS ─────────────────────────────────────────────────────── */
/*
  Each key matches a data-i18n="key" attribute in index.html.
  To translate a new element: add data-i18n="my.key" in the HTML,
  then add { fr: "...", en: "..." } under that key here.
  Values are inserted with innerHTML, so entities like &amp; are allowed.
*/
const i18n = {
  // Navigation
  "nav.about":          { fr: "À propos",    en: "About" },
  "nav.skills":         { fr: "Compétences", en: "Skills" },
  "nav.experience":     { fr: "Expérience",  en: "Experience" },
  "nav.certifications": { fr: "Certifs",     en: "Certificates" },
  "nav.contact":        { fr: "Contact",     en: "Contact" },

  // Hero
  "hero.eyebrow":     { fr: "Développeuse Web &amp; Mobile", en: "Web &amp; Mobile Developer" },
  "hero.location":    { fr: "Djerba, Tunisie",               en: "Djerba, Tunisia" },
  "hero.downloadBtn": { fr: "Télécharger mon CV ↓",          en: "Download my CV ↓" },
  "hero.contactBtn":  { fr: "Me contacter →",                en: "Contact me →" },
  "hero.scroll":      { fr: "Défiler",                       en: "Scroll" },

  // About
  "about.label": { fr: "À propos", en: "About" },
  "about.title": { fr: "Passionnée par le code &amp; le design", en: "Passionate about code &amp; design" },
  "about.p1": {
    fr: "Diplômée d'une Licence en Technologie de l'Informatique Multimédia et Développement Web (ISET Djerba), je conçois des applications web et mobiles modernes qui allient rigueur technique et sens du design.",
    en: "A graduate with a Bachelor's degree in Multimedia IT and Web Development Technology (ISET Djerba), I design modern web and mobile applications that combine technical rigor with an eye for design."
  },
  "about.p2": {
    fr: "Polyvalente et curieuse, je maîtrise le développement backend avec Laravel, le mobile avec Flutter et la création de sites WordPress professionnels. J'accorde une attention particulière à l'expérience utilisateur et à la qualité du code.",
    en: "Versatile and curious, I'm comfortable with backend development in Laravel, mobile development in Flutter, and building professional WordPress sites. I pay close attention to user experience and code quality."
  },
  "about.stat.internships": { fr: "Stages",  en: "Internships" },
  "about.stat.certs":       { fr: "Certifs", en: "Certificates" },
  "about.stat.langs":       { fr: "Langues", en: "Languages" },

  // Skills
  "skills.label":    { fr: "Compétences",                   en: "Skills" },
  "skills.title":    { fr: "Stack technique",               en: "Technical Stack" },
  "skills.frontend": { fr: "Frontend &amp; Mobile",         en: "Frontend &amp; Mobile" },
  "skills.backend":  { fr: "Backend &amp; Base de données", en: "Backend &amp; Databases" },
  "skills.langs":    { fr: "Langages de programmation",     en: "Programming Languages" },
  "skills.design":   { fr: "Design &amp; Outils créatifs",  en: "Design &amp; Creative Tools" },
  "skills.data":     { fr: "Formats de données",            en: "Data Formats" },

  // Experience – internships
  "experience.label": { fr: "Parcours",                      en: "Journey" },
  "experience.title": { fr: "Expériences professionnelles",  en: "Professional Experience" },

  "exp1.kind": { fr: "Stage PFE", en: "Final-Year Internship (PFE)" },
  "exp1.role": { fr: "Développeuse Full-Stack &amp; Mobile", en: "Full-Stack &amp; Mobile Developer" },
  "exp1.desc": {
    fr: "Développement d'une application mobile collaborative intégrant messagerie (Twilio), stockage décentralisé (StorJ), base de données temps réel et authentification sécurisée (Firebase), ainsi qu'un panneau administratif via Filament.",
    en: "Built a collaborative mobile application integrating in-app messaging (Twilio), decentralized file storage (StorJ), a real-time database, secure authentication (Firebase), and an administrative back-office panel via Filament."
  },

  "exp2.kind": { fr: "Stage d'été", en: "Summer Internship" },
  "exp2.role": { fr: "Développeuse WordPress", en: "WordPress Developer" },
  "exp2.desc": {
    fr: "Création d'un site web professionnel pour un centre de ventouse avec gestion des produits, vente en ligne et envoi d'emails automatisés.",
    en: "Built a professional website for a cupping therapy center, including product management, online sales, and automated transactional emails."
  },

  "exp3.kind": { fr: "Stage de Perfectionnement", en: "Advanced Training Internship" },
  "exp3.role": { fr: "Développeuse Web Laravel", en: "Laravel Web Developer" },
  "exp3.desc": {
    fr: "Développement d'un site web de gestion d'abonnements en ligne avec architecture MVC sous Laravel.",
    en: "Built an online subscription management website with an MVC architecture in Laravel."
  },

  "exp4.kind": { fr: "Stage d'Initiation", en: "Introductory Internship" },
  "exp4.role": { fr: "Développeuse Front-End", en: "Front-End Developer" },
  "exp4.desc": {
    fr: "Réalisation d'un site e-commerce de vêtements responsive avec ReactJS pour une expérience utilisateur moderne.",
    en: "Built a responsive clothing e-commerce website with ReactJS for a modern user experience."
  },

  // Experience – summer jobs
  "summer.label": { fr: "Emplois d'été", en: "Summer Jobs" },

  "exp5.kind": { fr: "Emploi d'été", en: "Summer Job" },
  "exp5.co":   { fr: "Hôtel Djerba Beach, Djerba", en: "Djerba Beach Hotel, Djerba" },
  "exp5.role": { fr: "Commis de Cuisine – Garde Manger", en: "Kitchen Staff – Garde Manger" },
  "exp5.desc": {
    fr: "Préparation de plats froids, entrées et salades au poste de garde-manger d'une cuisine d'hôtel durant la haute saison touristique. Inspirée par cette expérience, j'ai développé en autonomie « AI Plating Assistant », une application mobile qui utilise l'IA pour suggérer des idées de dressage et de présentation des plats.",
    en: "Prepared cold dishes, appetizers, and salads in the garde manger section of a hotel kitchen during peak tourist season. Inspired by this experience, I independently built \"AI Plating Assistant,\" a mobile app that uses AI to suggest plating and food presentation ideas."
  },

  "exp6.kind": { fr: "Emploi d'été", en: "Summer Job" },
  "exp6.co":   { fr: "Supermarché Arij, Djerba", en: "Arij Supermarket, Djerba" },
  "exp6.role": { fr: "Caissière", en: "Cashier" },
  "exp6.desc": {
    fr: "Gestion des transactions clients, de la caisse et des opérations d'encaissement dans un environnement de vente à rythme soutenu.",
    en: "Handled customer transactions, cash handling, and checkout operations in a fast-paced retail environment."
  },

  // Projects
  "projects.label": { fr: "Projet",          en: "Project" },
  "projects.title": { fr: "Projet personnel", en: "Personal Project" },
  "proj1.badge": { fr: "Idée née d'un job d'été", en: "Idea born from a summer job" },
  "proj1.desc": {
    fr: "Inspirée par mon emploi d'été au poste de garde-manger dans une cuisine d'hôtel, j'ai conçu cette application mobile qui utilise l'IA pour suggérer des idées de dressage et de présentation des plats, à destination des cuisiniers amateurs comme professionnels.",
    en: "Inspired by my summer job in the garde manger section of a hotel kitchen, I built this mobile app that uses AI to suggest plating and food presentation ideas for both home cooks and professionals."
  },
  "proj2.badge": { fr: "Application mobile", en: "Mobile app" },
  "proj2.desc": {
    fr: "Application mobile de suivi de pas au quotidien, développée avec Flutter, permettant de suivre son activité physique de façon simple et intuitive.",
    en: "A daily step-tracking mobile app built with Flutter, letting users monitor their physical activity in a simple and intuitive way."
  },
  "proj2.link": { fr: "Voir le code →", en: "View code →" }, // shared by both project cards

  // Education
  "education.label": { fr: "Formation",           en: "Education" },
  "education.title": { fr: "Parcours académique", en: "Academic Background" },

  "edu0.yrs":    { fr: "2026 – Aujourd'hui", en: "2026 – Present" },
  "edu0.degree": { fr: "Master de recherche en informatique", en: "Research Master's Degree in Computer Science" },
  "edu0.school": {
    fr: "École Nationale des Sciences de l'Informatique (ENSI), Manouba",
    en: "National School of Computer Science (ENSI), Manouba"
  },

  "edu1.degree": { fr: "Licence en Technologie de l'Informatique Multimédia et Développement Web", en: "Bachelor's Degree in Multimedia IT and Web Development Technology" },
  "edu1.school": { fr: "Institut Supérieur des Études Technologiques de Djerba", en: "Higher Institute of Technological Studies of Djerba" },
  "edu2.degree": { fr: "Baccalauréat Informatique", en: "Computer Science Baccalaureate" },
  "edu2.school": { fr: "Lycée Erriadh, Djerba · Mention : Assez bien", en: "Lycée Erriadh, Djerba · Grade: Good" },

  // Certifications (only the entries with translatable text; the others are the same in both languages)
  "certifications.label": { fr: "Certifications",          en: "Certifications" },
  "certifications.title": { fr: "Formations certifiantes", en: "Certified Courses" },
  "cert1.title": { fr: "La pensée critique à l'ère de l'IA", en: "Critical Thinking in the Age of AI" },
  "cert1.tag1":  { fr: "IA",              en: "AI" },
  "cert1.tag2":  { fr: "Pensée critique", en: "Critical Thinking" },
  "cert1.tag3":  { fr: "Analyse",         en: "Analysis" },
  "cert4.title": { fr: "Réseautage professionnel pour l'évolution de carrière", en: "Professional Networking for Career Growth" },
  "cert4.tag2":  { fr: "Personal Branding", en: "Personal Branding" },
  "cert4.tag3":  { fr: "Réseautage",        en: "Networking" },
  "cert5.badge": { fr: "Secourisme",       en: "First Aid" },
  "cert5.dt":    { fr: "Nov. 2025",        en: "Nov. 2025" },
  "cert5.title": { fr: "Secourisme Niveau 1", en: "First Aid Level 1" },
  "cert5.tag1":  { fr: "RCP",              en: "CPR" },
  "cert5.tag2":  { fr: "Premiers secours", en: "First Aid" },
  "cert5.tag3":  { fr: "Urgences",         en: "Emergencies" },

  // Contact, languages and form
  "contact.label":      { fr: "Contact",              en: "Contact" },
  "contact.title":      { fr: "Travaillons ensemble", en: "Let's work together" },
  "contact.downloadCv": { fr: "Télécharger mon CV (.pdf)", en: "Download my CV (.pdf)" },
  "contact.formNote": {
    fr: "Disponible pour des missions freelance, des opportunités professionnelles ou des collaborations.",
    en: "Available for freelance work, professional opportunities, or collaborations."
  },

  "lang.arabic":     { fr: "Arabe",         en: "Arabic" },
  "lang.arabic.lv":  { fr: "Maternelle",    en: "Native" },
  "lang.french":     { fr: "Français",      en: "French" },
  "lang.french.lv":  { fr: "Professionnel", en: "Professional" },
  "lang.english":    { fr: "Anglais",       en: "English" },
  "lang.english.lv": { fr: "Professionnel", en: "Professional" },

  "form.name":      { fr: "Nom",            en: "Name" },
  "form.namePh":    { fr: "Votre nom",      en: "Your name" },
  "form.email":     { fr: "Email",          en: "Email" },
  "form.message":   { fr: "Message",        en: "Message" },
  "form.messagePh": { fr: "Votre message...", en: "Your message..." },
  "form.send":      { fr: "Envoyer →",      en: "Send →" },

  // Footer
  "footer.txt": { fr: "© 2026 Ghofrane Ben Moussa — Djerba, Tunisie", en: "© 2026 Ghofrane Ben Moussa — Djerba, Tunisia" }
};


/* ── 2. LANGUAGE SWITCHING ───────────────────────────────────────────────── */

const DEFAULT_LANG = 'fr';
let currentLang = DEFAULT_LANG;

// One CV per language. Update these paths if you rename or move the PDFs.
const cvFiles = {
  fr: "cv/Ghofrane_Ben_Moussa_CV_FR.pdf",
  en: "cv/Ghofrane_Ben_Moussa_CV_EN.pdf"
};

// Point both CV download links (hero button + contact section) at the right PDF
function updateCvLinks(lang) {
  const file = cvFiles[lang] || cvFiles[DEFAULT_LANG];
  const filename = file.split('/').pop();
  document.querySelectorAll('#cv-btn, #cv-clink').forEach(el => {
    el.setAttribute('href', file);
    el.setAttribute('download', filename);
  });
}

// Translate every [data-i18n] text and [data-i18n-ph] placeholder, then refresh buttons and CV links
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const entry = i18n[el.getAttribute('data-i18n')];
    if (entry && entry[lang] !== undefined) el.innerHTML = entry[lang];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const entry = i18n[el.getAttribute('data-i18n-ph')];
    if (entry && entry[lang] !== undefined) el.setAttribute('placeholder', entry[lang]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  updateCvLinks(lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
});

applyLang(DEFAULT_LANG);


/* ── 3. NAVIGATION ───────────────────────────────────────────────────────── */

const nav      = document.getElementById('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

// On scroll: add the blurred background to the nav and highlight the link of the section in view
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id; // 130px offset = nav height + margin
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
});

// Mobile menu: the burger shows/hides the links dropdown
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});


/* ── 4. SCROLL ANIMATIONS ────────────────────────────────────────────────── */

// Fade-in elements (.rv) the first time they enter the viewport, slightly staggered
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), i * 75);
      revealObserver.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

// Animate the language level bars when the contact section becomes visible
const contactSection = document.getElementById('contact');
const langBarObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    document.querySelectorAll('.lang-fill').forEach(bar => {
      bar.style.width = bar.dataset.w; // target width stored in data-w
    });
    langBarObserver.unobserve(contactSection);
  }
}, { threshold: 0.25 });

langBarObserver.observe(contactSection);


/* ── 5. CONTACT FORM ─────────────────────────────────────────────────────── */

// No backend: validates the fields, then opens the visitor's mail client with the message prefilled
function sendMsg() {
  const name    = document.getElementById('fn').value.trim();
  const email   = document.getElementById('fe').value.trim();
  const message = document.getElementById('fm').value.trim();

  const isFr       = currentLang === 'fr';
  const missingMsg = isFr ? 'Veuillez remplir tous les champs.' : 'Please fill in all fields.';
  const subject    = (isFr ? 'Portfolio – Message de ' : 'Portfolio – Message from ') + name;
  const emailLabel = isFr ? 'Email de contact : ' : 'Contact email: ';

  if (!name || !email || !message) { alert(missingMsg); return; }

  window.location.href =
    'mailto:ghofranebenmoussa6@gmail.com'
    + '?subject=' + encodeURIComponent(subject)
    + '&body='    + encodeURIComponent(message + '\n\n' + emailLabel + email);
}

document.getElementById('send-btn').addEventListener('click', sendMsg);
