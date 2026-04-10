/* ═══════════════════════════════════════════════════════
   AcademIQ — app.js
   All site logic: Auth, Notes, Quiz, Leaderboard
═══════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */

// --- Notes Data ---
const NOTES_DATA = [
  {
    id: 'n1', title: 'Algebra & Functions',
    subject: 'math', type: 'txt',
    pages: '24 pages', date: 'Mar 2026',
    tags: ['algebra', 'functions', 'equations'],
    content: `ALGEBRA & FUNCTIONS — Study Notes
════════════════════════════════

1. LINEAR EQUATIONS
━━━━━━━━━━━━━━━━━━
A linear equation has the form: ax + b = c
• To solve, isolate the variable x
• Example: 2x + 4 = 10 → x = 3

KEY FORMULAS:
• Slope-intercept: y = mx + b
• Standard form: ax + by = c
• Point-slope: y - y₁ = m(x - x₁)

2. QUADRATIC EQUATIONS
━━━━━━━━━━━━━━━━━━━━━
Standard form: ax² + bx + c = 0
• Quadratic Formula: x = (-b ± √(b²-4ac)) / 2a
• Discriminant: Δ = b² - 4ac
  - Δ > 0: two real solutions
  - Δ = 0: one real solution
  - Δ < 0: no real solutions

3. FUNCTIONS
━━━━━━━━━━━━
• Domain: all valid inputs (x values)
• Range: all valid outputs (y values)
• f(x) notation means output when x is input
• Composition: (f∘g)(x) = f(g(x))

4. SYSTEMS OF EQUATIONS
━━━━━━━━━━━━━━━━━━━━━━
Substitution Method:
• Solve one equation for one variable
• Substitute into the other equation

Elimination Method:
• Add/subtract equations to eliminate a variable
• Solve for the remaining variable

PRACTICE PROBLEMS:
1. Solve: 3x - 7 = 11
2. Find roots of: x² - 5x + 6 = 0
3. Solve the system: 2x + y = 8, x - y = 1
`
  },
  {
    id: 'n2', title: 'Calculus — Differentiation',
    subject: 'math', type: 'pdf',
    pages: '36 pages', date: 'Feb 2026',
    tags: ['calculus', 'derivatives', 'limits'],
    content: `CALCULUS: DIFFERENTIATION
══════════════════════════

LIMITS
━━━━━━
• lim(x→a) f(x) = L means as x approaches a, f(x) approaches L
• L'Hôpital's Rule: for 0/0 or ∞/∞ forms: lim f/g = lim f'/g'

DERIVATIVES — BASIC RULES
━━━━━━━━━━━━━━━━━━━━━━━━━
• Constant Rule: d/dx[c] = 0
• Power Rule: d/dx[xⁿ] = nxⁿ⁻¹
• Sum Rule: d/dx[f+g] = f' + g'
• Product Rule: d/dx[fg] = f'g + fg'
• Quotient Rule: d/dx[f/g] = (f'g - fg') / g²
• Chain Rule: d/dx[f(g(x))] = f'(g(x))·g'(x)

COMMON DERIVATIVES
━━━━━━━━━━━━━━━━━
• d/dx[sin x] = cos x
• d/dx[cos x] = -sin x
• d/dx[eˣ] = eˣ
• d/dx[ln x] = 1/x
`
  },
  {
    id: 'n3', title: 'Newton\'s Laws of Motion',
    subject: 'science', type: 'txt',
    pages: '18 pages', date: 'Jan 2026',
    tags: ['physics', 'mechanics', 'forces'],
    content: `NEWTON'S LAWS OF MOTION
════════════════════════

FIRST LAW — Law of Inertia
━━━━━━━━━━━━━━━━━━━━━━━━━
An object remains at rest or in uniform motion unless acted upon by a net external force.
• Inertia is the tendency of objects to resist changes in motion.
• Mass is the measure of inertia.

SECOND LAW — F = ma
━━━━━━━━━━━━━━━━━━
The net force on an object equals its mass times acceleration.
• F = ma (Force = mass × acceleration)
• Units: Newtons (N) = kg·m/s²
• Greater mass → greater force needed for same acceleration

THIRD LAW — Action-Reaction
━━━━━━━━━━━━━━━━━━━━━━━━━━
For every action, there is an equal and opposite reaction.
• Forces always come in pairs
• Rocket propulsion: gas pushed down → rocket pushed up

APPLICATIONS
━━━━━━━━━━━━
• Free body diagrams help visualize forces
• Friction: f = μN (μ = coefficient of friction, N = normal force)
• Weight: W = mg (g ≈ 9.8 m/s² on Earth)
`
  },
  {
    id: 'n4', title: 'Organic Chemistry Basics',
    subject: 'science', type: 'pdf',
    pages: '42 pages', date: 'Mar 2026',
    tags: ['chemistry', 'organic', 'carbon'],
    content: `ORGANIC CHEMISTRY — Introduction
══════════════════════════════════

CARBON COMPOUNDS
━━━━━━━━━━━━━━
• Organic chemistry is the study of carbon-based compounds
• Carbon forms 4 covalent bonds (tetravalent)
• Can form chains, rings, and branched structures

FUNCTIONAL GROUPS
━━━━━━━━━━━━━━━━
• Alkane: C-C single bonds (-ane suffix)
• Alkene: C=C double bond (-ene suffix)
• Alkyne: C≡C triple bond (-yne suffix)
• Alcohol: -OH group
• Carboxylic acid: -COOH group
• Amine: -NH₂ group

ISOMERS
━━━━━━━
• Structural isomers: same molecular formula, different structures
• Stereoisomers: same connectivity, different spatial arrangement
• Enantiomers: mirror images that are non-superimposable

REACTIONS
━━━━━━━━━
• Substitution (SN1, SN2)
• Addition reactions (to alkenes/alkynes)
• Elimination reactions
• Condensation reactions
`
  },
  {
    id: 'n5', title: 'World War II — Key Events',
    subject: 'history', type: 'txt',
    pages: '28 pages', date: 'Feb 2026',
    tags: ['wwii', 'europe', 'global conflict'],
    content: `WORLD WAR II — Key Events & Timeline
══════════════════════════════════════

CAUSES
━━━━━━
• Treaty of Versailles (1919) created resentment in Germany
• Rise of fascism in Germany, Italy, and Japan
• Policy of appeasement by Western powers
• German invasion of Poland (Sept 1, 1939) triggers war

MAJOR EVENTS TIMELINE
━━━━━━━━━━━━━━━━━━━━
1939: Germany invades Poland; Britain & France declare war
1940: Dunkirk evacuation; Battle of Britain
1941: Operation Barbarossa (Germany invades USSR)
      Japan attacks Pearl Harbor; USA enters war
1942: Battle of Stalingrad; Battle of Midway
1943: Allied invasion of Sicily; Italy surrenders
1944: D-Day landings at Normandy (June 6)
1945: Germany surrenders (May 8 — V-E Day)
      Atomic bombs on Hiroshima & Nagasaki
      Japan surrenders (Sept 2 — V-J Day)

KEY FIGURES
━━━━━━━━━━
• Allied: Churchill (UK), Roosevelt/Truman (USA), Stalin (USSR)
• Axis: Hitler (Germany), Mussolini (Italy), Tojo (Japan)

CONSEQUENCES
━━━━━━━━━━━
• ~70 million deaths (deadliest conflict in history)
• Holocaust: systematic murder of 6 million Jews
• Formation of United Nations (1945)
• Start of Cold War between USA and USSR
`
  },
  {
    id: 'n6', title: 'Data Structures & Algorithms',
    subject: 'cs', type: 'txt',
    pages: '55 pages', date: 'Apr 2026',
    tags: ['dsa', 'sorting', 'complexity'],
    content: `DATA STRUCTURES & ALGORITHMS
═════════════════════════════

TIME COMPLEXITY — Big O Notation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• O(1)      — Constant time
• O(log n)  — Logarithmic (Binary search)
• O(n)      — Linear (Linear search)
• O(n log n)— Linearithmic (Merge sort)
• O(n²)     — Quadratic (Bubble sort)
• O(2ⁿ)     — Exponential

ARRAYS
━━━━━━
• Fixed size, indexed, O(1) access
• Insertion/deletion: O(n)

LINKED LISTS
━━━━━━━━━━━
• Dynamic size, sequential access O(n)
• Head → Node → Node → null
• Types: singly, doubly, circular

STACKS & QUEUES
━━━━━━━━━━━━━━
• Stack: LIFO — push/pop — O(1)
• Queue: FIFO — enqueue/dequeue — O(1)

TREES
━━━━━
• Binary Tree: each node ≤ 2 children
• BST: left < root < right
• Traversals: in-order, pre-order, post-order

SORTING ALGORITHMS
━━━━━━━━━━━━━━━━━
• Bubble Sort: O(n²) — simple, slow
• Merge Sort: O(n log n) — divide & conquer
• Quick Sort: O(n log n) avg — pivot-based
• Heap Sort: O(n log n) — uses heap structure
`
  },
  {
    id: 'n7', title: 'Ancient Civilizations',
    subject: 'history', type: 'pdf',
    pages: '33 pages', date: 'Jan 2026',
    tags: ['ancient', 'egypt', 'mesopotamia'],
    content: `ANCIENT CIVILIZATIONS
══════════════════════

MESOPOTAMIA (3500–500 BCE)
━━━━━━━━━━━━━━━━━━━━━━━━━
• Located between Tigris & Euphrates rivers (modern Iraq)
• First writing system: Cuneiform (Sumerians)
• Code of Hammurabi: one of earliest law codes
• Major empires: Sumerian, Akkadian, Babylonian, Assyrian

ANCIENT EGYPT (3100–30 BCE)
━━━━━━━━━━━━━━━━━━━━━━━━━━
• Nile River central to civilization
• Hieroglyphic writing system
• Pharaohs ruled as god-kings
• Pyramids: tombs for pharaohs
• Major periods: Old Kingdom, Middle Kingdom, New Kingdom

ANCIENT GREECE (800–146 BCE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• City-states (poleis): Athens, Sparta, Corinth
• Democracy born in Athens (~507 BCE)
• Olympic Games began 776 BCE
• Major philosophers: Socrates, Plato, Aristotle

ANCIENT ROME (753 BCE–476 CE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Founded 753 BCE (legendary); Republic 509 BCE
• Julius Caesar: pivotal figure, assassinated 44 BCE
• Roman Empire: 27 BCE–476 CE
• Contributions: law, engineering, language (Latin)
`
  },
  {
    id: 'n8', title: 'Web Development Fundamentals',
    subject: 'cs', type: 'txt',
    pages: '40 pages', date: 'Mar 2026',
    tags: ['html', 'css', 'javascript'],
    content: `WEB DEVELOPMENT FUNDAMENTALS
═════════════════════════════

HTML — Structure
━━━━━━━━━━━━━━━
• HyperText Markup Language
• Tags define page structure: <html>, <head>, <body>
• Block elements: <div>, <p>, <h1>-<h6>, <section>
• Inline elements: <span>, <a>, <strong>, <em>
• Forms: <form>, <input>, <button>, <select>
• Semantic HTML5: <header>, <nav>, <main>, <article>, <footer>

CSS — Styling
━━━━━━━━━━━━
• Cascading Style Sheets — controls appearance
• Selectors: element, .class, #id, [attribute]
• Box Model: content → padding → border → margin
• Flexbox: one-dimensional layout
• CSS Grid: two-dimensional layout
• Responsive: @media queries, rem/em units
• Variables: --custom-prop: value; var(--custom-prop)

JAVASCRIPT — Behavior
━━━━━━━━━━━━━━━━━━━━
• Dynamic, interpreted scripting language
• DOM manipulation: document.querySelector()
• Events: addEventListener('click', handler)
• Fetch API: async HTTP requests
• ES6+: let/const, arrow functions, template literals
• localStorage: client-side data persistence

COMMON FRAMEWORKS
━━━━━━━━━━━━━━━━
• React: component-based UI (Meta)
• Vue: progressive framework
• Angular: full MVC framework (Google)
• Node.js: server-side JavaScript
`
  }
];

// --- Quiz Data ---
const QUIZ_DATA = [
  {
    id: 'q-math',
    title: 'Mathematics',
    icon: '📐',
    color: '#f59e0b',
    desc: '10 questions covering algebra, calculus & geometry',
    questions: [
      { q: 'What is the derivative of x²?', opts: ['x', '2x', '2x²', 'x/2'], ans: 1 },
      { q: 'Solve for x: 2x + 6 = 18', opts: ['3', '6', '12', '9'], ans: 1 },
      { q: 'What is the value of π (pi) approximately?', opts: ['2.14', '3.14', '3.41', '1.73'], ans: 1 },
      { q: 'The quadratic formula solves equations of which form?', opts: ['ax + b = 0', 'ax² + bx + c = 0', 'ax³ + b = 0', 'a/x + b = 0'], ans: 1 },
      { q: 'What is the integral of cos(x)?', opts: ['-sin(x)', 'sin(x)', 'cos(x)', '-cos(x)'], ans: 1 },
      { q: 'If f(x) = 3x + 2, what is f(4)?', opts: ['10', '12', '14', '16'], ans: 2 },
      { q: 'What is the slope of the line y = 5x - 3?', opts: ['-3', '5', '3', '-5'], ans: 1 },
      { q: 'The area of a circle with radius r is:', opts: ['πr', '2πr', 'πr²', '2πr²'], ans: 2 },
      { q: 'What is the sum of angles in a triangle?', opts: ['90°', '180°', '270°', '360°'], ans: 1 },
      { q: 'log₁₀(100) equals:', opts: ['1', '2', '10', '20'], ans: 1 }
    ]
  },
  {
    id: 'q-sci',
    title: 'Science',
    icon: '⚗️',
    color: '#0ea5e9',
    desc: '10 questions on physics, chemistry & biology',
    questions: [
      { q: 'What is Newton\'s Second Law of Motion?', opts: ['F = mv', 'F = ma', 'E = mc²', 'P = mv'], ans: 1 },
      { q: 'What is the chemical symbol for Gold?', opts: ['Go', 'Gd', 'Au', 'Ag'], ans: 2 },
      { q: 'The speed of light is approximately:', opts: ['3×10⁶ m/s', '3×10⁸ m/s', '3×10¹⁰ m/s', '3×10⁴ m/s'], ans: 1 },
      { q: 'DNA stands for:', opts: ['Dioxyribose Nucleic Acid', 'Deoxyribonucleic Acid', 'Di-nucleic Acid', 'Dynamic Nucleic Array'], ans: 1 },
      { q: 'What is the pH of pure water?', opts: ['0', '5', '7', '14'], ans: 2 },
      { q: 'Which planet is closest to the Sun?', opts: ['Venus', 'Earth', 'Mercury', 'Mars'], ans: 2 },
      { q: 'Photosynthesis converts CO₂ + H₂O + light into:', opts: ['ATP and CO₂', 'Glucose and O₂', 'Starch and CO₂', 'Water and Nitrogen'], ans: 1 },
      { q: 'The atomic number of Carbon is:', opts: ['4', '6', '8', '12'], ans: 1 },
      { q: 'Which law states: energy cannot be created or destroyed?', opts: ['Newton\'s First Law', 'Ohm\'s Law', 'First Law of Thermodynamics', 'Boyle\'s Law'], ans: 2 },
      { q: 'What is the powerhouse of the cell?', opts: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'], ans: 2 }
    ]
  },
  {
    id: 'q-hist',
    title: 'History',
    icon: '🏛️',
    color: '#10b981',
    desc: '10 questions spanning ancient to modern history',
    questions: [
      { q: 'When did World War II end?', opts: ['1943', '1944', '1945', '1946'], ans: 2 },
      { q: 'The French Revolution began in which year?', opts: ['1769', '1779', '1789', '1799'], ans: 2 },
      { q: 'Who wrote the "I Have a Dream" speech?', opts: ['Malcolm X', 'Martin Luther King Jr.', 'Barack Obama', 'Abraham Lincoln'], ans: 1 },
      { q: 'The ancient wonder: Great Pyramid is located in:', opts: ['Iraq', 'Greece', 'Egypt', 'Turkey'], ans: 2 },
      { q: 'The Cold War was primarily between which two nations?', opts: ['UK and Germany', 'USA and China', 'USA and USSR', 'France and Russia'], ans: 2 },
      { q: 'Cuneiform writing was developed by which civilization?', opts: ['Egyptians', 'Greeks', 'Sumerians', 'Romans'], ans: 2 },
      { q: 'D-Day (Normandy landings) occurred in:', opts: ['1942', '1943', '1944', '1945'], ans: 2 },
      { q: 'Julius Caesar was assassinated in:', opts: ['55 BCE', '44 BCE', '33 BCE', '27 BCE'], ans: 1 },
      { q: 'The United Nations was founded after which war?', opts: ['WWI', 'WWII', 'Korean War', 'Vietnam War'], ans: 1 },
      { q: 'Democracy originated in which ancient city-state?', opts: ['Rome', 'Sparta', 'Athens', 'Carthage'], ans: 2 }
    ]
  }
];

// --- Seed Leaderboard ---
const SEED_SCORES = [
  { username: 'Sarah K.', subject: 'Mathematics', score: 9, total: 10 },
  { username: 'James L.', subject: 'Science', score: 10, total: 10 },
  { username: 'Priya M.', subject: 'History', score: 8, total: 10 },
  { username: 'Daniel O.', subject: 'Mathematics', score: 7, total: 10 },
  { username: 'Ling C.', subject: 'Science', score: 9, total: 10 },
  { username: 'Sofia R.', subject: 'History', score: 10, total: 10 },
  { username: 'Ethan B.', subject: 'Mathematics', score: 8, total: 10 },
  { username: 'Amara N.', subject: 'Science', score: 7, total: 10 },
  { username: 'Lucas P.', subject: 'History', score: 6, total: 10 },
];

/* ══════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════ */
let currentUser = null;
let currentSection = 'home';
let currentQuiz = null;
let currentQuestionI = 0;
let userAnswers = [];
let answeredCurrent = false;
let uploadedNotes = [];

/* ══════════════════════════════════════════════════════
   AUTH
══════════════════════════════════════════════════════ */
function handleLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const errorEl = document.getElementById('loginError');

  if (!username || !password) {
    errorEl.textContent = 'Please enter username & password';
    errorEl.classList.remove('hidden');
    return;
  }

  // 🔥 Firebase Login Call (AA STEP 2 chhe)
  firebaseLogin(username, password).then(success => {

    if (success) {
      errorEl.classList.add('hidden');

      currentUser = username;
      localStorage.setItem('iq_user', username);

      document.getElementById('loginOverlay').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      document.getElementById('headerUsername').textContent = '👤 ' + username;

      initApp();
    } else {
      errorEl.textContent = 'Login failed (Firebase)';
      errorEl.classList.remove('hidden');
    }

  });
}

function handleLogout() {
  localStorage.removeItem('iq_user');
  currentUser = null;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('loginOverlay').classList.remove('hidden');
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
}

// Enter key on password field
document.getElementById('loginPassword').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});
document.getElementById('loginUsername').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleLogin();
});

/* ══════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════ */
function initApp() {
  // Check saved session
  const saved = localStorage.getItem('iq_user');
  if (saved) {
    currentUser = saved;
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('headerUsername').textContent = '👤 ' + saved;
  }

  seedLeaderboard();
  renderNotes();
  renderQuizSubjects();
  renderLeaderboard('all');
  updateHomeScore();
  setupDragDrop();
}

/* ══════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════ */
function navTo(sectionId) {
  // Hide all
  document.querySelectorAll('.section').forEach(s => {
    s.classList.add('hidden');
    s.classList.remove('active');
  });
  // Show target
  const el = document.getElementById(sectionId);
  if (el) {
    el.classList.remove('hidden');
    el.classList.add('active');
  }
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.section === sectionId);
  });
  currentSection = sectionId;
  // Close mobile menu
  document.getElementById('mobileMenu').classList.add('hidden');
  // Scroll top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navTo(link.dataset.section);
  });
});

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('hidden');
}

/* ══════════════════════════════════════════════════════
   NOTES
══════════════════════════════════════════════════════ */
function renderNotes(filter = 'all') {
  const grid = document.getElementById('notesGrid');
  grid.innerHTML = '';

  const allNotes = [...NOTES_DATA, ...uploadedNotes];
  const filtered = filter === 'all' ? allNotes : allNotes.filter(n => n.subject === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-dim);font-size:.9rem;grid-column:1/-1">No notes found for this filter.</p>`;
    return;
  }

  filtered.forEach(note => {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
      <div class="note-card-top">
        <div class="note-type-icon ${note.type || 'txt'}">
          ${note.type === 'pdf' ? '📄' : note.isUserUpload ? '📝' : '📃'}
        </div>
        <div>
          <div class="note-title">${note.title}</div>
          <div class="note-meta">${note.pages} · ${note.date}</div>
        </div>
      </div>
      <div class="note-tags">
        ${(note.tags || []).map(t => `<span class="note-tag">${t}</span>`).join('')}
      </div>
      <div class="note-actions">
        <button class="note-btn view" onclick="viewNote('${note.id}')">👁 View</button>
        <button class="note-btn download" onclick="downloadNote('${note.id}')">⬇ Download</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterNotes(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderNotes(filter);
}

function viewNote(id) {
  const note = [...NOTES_DATA, ...uploadedNotes].find(n => n.id === id);
  if (!note) return;
  document.getElementById('modalTitle').textContent = note.title;
  document.getElementById('modalBody').textContent = note.content || '[No preview available for this file type]';
  document.getElementById('noteModal').classList.remove('hidden');
}

function downloadNote(id) {
  const note = [...NOTES_DATA, ...uploadedNotes].find(n => n.id === id);
  if (!note) return;
  const blob = new Blob([note.content || note.title], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = note.title.replace(/\s+/g, '_') + '.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}

function closeNoteModal(e) {
  if (e.target === document.getElementById('noteModal')) {
    document.getElementById('noteModal').classList.add('hidden');
  }
}
function closeNoteModalBtn() {
  document.getElementById('noteModal').classList.add('hidden');
}

/* ── File Upload ────────────────────────────────────── */
function setupDragDrop() {
  const zone = document.getElementById('uploadZone');
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const files = e.dataTransfer.files;
    if (files.length > 0) processFile(files[0]);
  });
}

function handleFileUpload(e) {
  const file = e.target.files[0];
  if (file) processFile(file);
}

function processFile(file) {
  const statusEl = document.getElementById('uploadStatus');
  const maxSize = 10 * 1024 * 1024;

  if (!['application/pdf', 'text/plain'].includes(file.type)) {
    showUploadStatus('Only PDF and TXT files are supported.', 'error');
    return;
  }
  if (file.size > maxSize) {
    showUploadStatus('File exceeds 10 MB limit.', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = (ev) => {
    const newNote = {
      id: 'u_' + Date.now(),
      title: file.name.replace(/\.[^.]+$/, ''),
      subject: 'cs', // default category
      type: file.type === 'application/pdf' ? 'pdf' : 'txt',
      pages: (Math.round(file.size / 2000)) + ' est. pages',
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      tags: ['uploaded', 'custom'],
      content: file.type === 'text/plain' ? ev.target.result : '[PDF Preview — download to view full content]',
      isUserUpload: true
    };
    uploadedNotes.unshift(newNote);
    renderNotes('all');
    // Reset filter
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.filter-btn').classList.add('active');
    showUploadStatus(`✓ "${newNote.title}" uploaded successfully!`, 'success');
  };

  if (file.type === 'text/plain') {
    reader.readAsText(file);
  } else {
    reader.readAsDataURL(file);
  }
}

function showUploadStatus(msg, type) {
  const el = document.getElementById('uploadStatus');
  el.textContent = msg;
  el.className = `upload-status ${type}`;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 4000);
}

/* ══════════════════════════════════════════════════════
   QUIZ
══════════════════════════════════════════════════════ */
function renderQuizSubjects() {
  const grid = document.getElementById('quizSubjectGrid');
  grid.innerHTML = '';
  QUIZ_DATA.forEach(quiz => {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="subject-card-icon">${quiz.icon}</div>
      <h3>${quiz.title}</h3>
      <p>${quiz.desc}</p>
      <span class="subject-count">${quiz.questions.length} Questions</span>
    `;
    card.style.setProperty('--accent', quiz.color);
    card.addEventListener('click', () => startQuiz(quiz.id));
    grid.appendChild(card);
  });
}

function startQuiz(quizId) {
  currentQuiz = QUIZ_DATA.find(q => q.id === quizId);
  currentQuestionI = 0;
  userAnswers = [];
  answeredCurrent = false;

  document.getElementById('quizHome').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizPlayer').classList.remove('hidden');

  document.getElementById('quizSubjectLabel').textContent = currentQuiz.title;
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuiz.questions[currentQuestionI];
  const tot = currentQuiz.questions.length;

  document.getElementById('questionNum').textContent = `Question ${currentQuestionI + 1} of ${tot}`;
  document.getElementById('questionText').textContent = q.q;
  document.getElementById('quizProgressLabel').textContent = `${currentQuestionI + 1} / ${tot}`;
  document.getElementById('quizProgressFill').style.width = `${((currentQuestionI) / tot) * 100}%`;

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = currentQuestionI === tot - 1 ? 'Finish ✓' : 'Next →';
  nextBtn.disabled = true;
  answeredCurrent = false;

  const optsGrid = document.getElementById('optionsGrid');
  optsGrid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span> ${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    optsGrid.appendChild(btn);
  });
}

function selectAnswer(optIdx) {
  if (answeredCurrent) return;
  answeredCurrent = true;

  const q = currentQuiz.questions[currentQuestionI];
  const correct = q.ans;
  userAnswers.push({ selected: optIdx, correct });

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.classList.add('correct');
    else if (i === optIdx && i !== correct) btn.classList.add('wrong');
    else if (i === optIdx) btn.classList.add('selected');
  });

  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  if (!answeredCurrent) return;
  currentQuestionI++;
  if (currentQuestionI >= currentQuiz.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  document.getElementById('quizPlayer').classList.add('hidden');
  document.getElementById('quizResults').classList.remove('hidden');

  const score = userAnswers.filter(a => a.selected === a.correct).length;
  const total = currentQuiz.questions.length;
  const pct = Math.round((score / total) * 100);

  // Emoji + title
  let icon, title;
  if (pct >= 90) { icon = '🏆'; title = 'Outstanding!'; }
  else if (pct >= 70) { icon = '🎉'; title = 'Great Job!'; }
  else if (pct >= 50) { icon = '📚'; title = 'Keep Studying!'; }
  else { icon = '💪'; title = 'Don\'t Give Up!'; }

  document.getElementById('resultsIcon').textContent = icon;
  document.getElementById('resultsTitle').textContent = title;
  document.getElementById('scoreBig').textContent = score;
  document.getElementById('scoreDenom').textContent = `/ ${total}`;
  document.getElementById('scorePercent').textContent = `${pct}% Correct`;

  // Breakdown
  const breakdown = document.getElementById('resultsBreakdown');
  breakdown.innerHTML = '';
  userAnswers.forEach((a, i) => {
    const q = currentQuiz.questions[i];
    const ok = a.selected === a.correct;
    const item = document.createElement('div');
    item.className = `breakdown-item ${ok ? 'correct' : 'wrong'}`;
    item.innerHTML = `
      <span class="breakdown-icon">${ok ? '✓' : '✗'}</span>
      <div>
        <div class="breakdown-q">${q.q}</div>
        <div class="breakdown-a">
          ${ok
        ? `Correct: ${q.opts[a.correct]}`
        : `Your answer: ${q.opts[a.selected]} · Correct: ${q.opts[a.correct]}`}
        </div>
      </div>
    `;
    breakdown.appendChild(item);
  });

  // Save score
  saveScore(score, total);
  updateHomeScore();
  renderLeaderboard('all');
}

function retryQuiz() {
  startQuiz(currentQuiz.id);
}

function exitQuiz() {
  document.getElementById('quizPlayer').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizHome').classList.remove('hidden');
}

/* ══════════════════════════════════════════════════════
   LEADERBOARD & SCORES
══════════════════════════════════════════════════════ */
function seedLeaderboard() {
  const existing = JSON.parse(localStorage.getItem('iq_scores') || '[]');
  if (existing.length === 0) {
    localStorage.setItem('iq_scores', JSON.stringify(SEED_SCORES));
  }
}

function saveScore(score, total) {
  if (!currentUser) return;

  // 🔥 Firebase ma save
  saveScoreFirebase(currentQuiz.title, score, total);

  // (Optional) local backup
  const scores = JSON.parse(localStorage.getItem('iq_scores') || '[]');
  scores.push({
    username: currentUser,
    subject: currentQuiz.title,
    score,
    total,
    date: new Date().toLocaleDateString()
  });
  localStorage.setItem('iq_scores', JSON.stringify(scores));
}


function updateHomeScore() {
  if (!currentUser) return;
  const scores = JSON.parse(localStorage.getItem('iq_scores') || '[]');
  const mine = scores.filter(s => s.username === currentUser);
  if (mine.length === 0) {
    document.getElementById('homeUserScore').textContent = '—';
    return;
  }
  const best = Math.max(...mine.map(s => Math.round((s.score / s.total) * 100)));
  document.getElementById('homeUserScore').textContent = best + '%';
}

async function renderLeaderboard(filter, btn) {

  if (btn) {
    document.querySelectorAll('.filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  let entries = await window.getLeaderboard(); // 🔥 Firebase data

  if (filter !== 'all') {
    entries = entries.filter(e => e.subject === filter);
  }

  // Sort
  entries.sort((a, b) => b.percentage - a.percentage);

  // Podium
  const podiumRow = document.getElementById('podiumRow');
  podiumRow.innerHTML = '';

  const medals = ['🥇', '🥈', '🥉'];
  entries.slice(0, 3).forEach((e, i) => {
    const card = document.createElement('div');
    card.className = `podium-card`;
    card.innerHTML = `
      <div class="podium-medal">${medals[i]}</div>
      <div class="podium-name">${e.name}</div>
      <div class="podium-score">${e.score}/${e.total}</div>
      <div class="podium-subject">${e.subject}</div>
    `;
    podiumRow.appendChild(card);
  });

  // Table
  const tbody = document.getElementById('leaderboardBody');
  tbody.innerHTML = '';

  entries.forEach((e, i) => {
    const row = `
      <tr>
        <td>${i + 1}</td>
        <td>${e.name}</td>
        <td>${e.subject}</td>
        <td>${e.score}/${e.total}</td>
        <td>${e.percentage}%</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

/* ══════════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('iq_user');
  if (saved) {
    currentUser = saved;
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('headerUsername').textContent = '👤 ' + saved;
    initApp();
  } else {
    seedLeaderboard(); // seed even before login
  }
});
