// Mock Data for Bakhul Edu - Modern Class 11 & 12 Prep Platform

export const SUBJECTS_DATA = {
  12: [
    {
      id: 'physics-12',
      name: 'Physics',
      icon: 'Atom',
      code: '042',
      color: 'blue',
      badge: 'High Weightage',
      totalChapters: 14,
      totalMarks: 70,
      description: 'Master electrostatics, current electricity, optics, magnetism, and modern physics with derivation breakdowns.',
      syllabusProgress: 82,
      chapters: [
        { id: 'phy12-1', num: 1, title: 'Electric Charges and Fields', marks: 8, difficulty: 'Medium', pyqCount: 42, notesAvailable: true },
        { id: 'phy12-2', num: 2, title: 'Electrostatic Potential and Capacitance', marks: 8, difficulty: 'Hard', pyqCount: 38, notesAvailable: true },
        { id: 'phy12-3', num: 3, title: 'Current Electricity', marks: 7, difficulty: 'Medium', pyqCount: 51, notesAvailable: true },
        { id: 'phy12-4', num: 4, title: 'Moving Charges and Magnetism', marks: 9, difficulty: 'Hard', pyqCount: 45, notesAvailable: true },
        { id: 'phy12-9', num: 9, title: 'Ray Optics and Optical Instruments', marks: 10, difficulty: 'Hard', pyqCount: 64, notesAvailable: true },
        { id: 'phy12-11', num: 11, title: 'Dual Nature of Radiation & Matter', marks: 6, difficulty: 'Easy', pyqCount: 33, notesAvailable: true },
        { id: 'phy12-14', num: 14, title: 'Semiconductor Electronics: Materials & Devices', marks: 7, difficulty: 'Medium', pyqCount: 49, notesAvailable: true },
      ],
      topDerivations: [
        'Electric field on axial & equatorial line of dipole',
        "Gauss's law applications (Infinite wire, plane sheet)",
        "Lens Maker's Formula & refraction at spherical surface",
        "Bohr's quantization condition & hydrogen spectrum"
      ]
    },
    {
      id: 'chemistry-12',
      name: 'Chemistry',
      icon: 'FlaskConical',
      code: '043',
      color: 'purple',
      badge: 'Score Booster',
      totalChapters: 10,
      totalMarks: 70,
      description: 'Physical, Inorganic & Organic chemistry simplified with named reactions, mechanisms, and numerical step guides.',
      syllabusProgress: 75,
      chapters: [
        { id: 'chem12-1', num: 1, title: 'Solutions', marks: 7, difficulty: 'Medium', pyqCount: 48, notesAvailable: true },
        { id: 'chem12-2', num: 2, title: 'Electrochemistry', marks: 9, difficulty: 'Hard', pyqCount: 56, notesAvailable: true },
        { id: 'chem12-3', num: 3, title: 'Chemical Kinetics', marks: 7, difficulty: 'Medium', pyqCount: 44, notesAvailable: true },
        { id: 'chem12-4', num: 4, title: 'd and f Block Elements', marks: 7, difficulty: 'Medium', pyqCount: 39, notesAvailable: true },
        { id: 'chem12-5', num: 5, title: 'Coordination Compounds', marks: 7, difficulty: 'Hard', pyqCount: 41, notesAvailable: true },
        { id: 'chem12-6', num: 6, title: 'Haloalkanes and Haloarenes', marks: 6, difficulty: 'Medium', pyqCount: 35, notesAvailable: true },
        { id: 'chem12-8', num: 8, title: 'Aldehydes, Ketones & Carboxylic Acids', marks: 8, difficulty: 'Hard', pyqCount: 62, notesAvailable: true },
        { id: 'chem12-10', num: 10, title: 'Biomolecules', marks: 7, difficulty: 'Easy', pyqCount: 30, notesAvailable: true },
      ],
      topDerivations: [
        'Nernst equation derivation and cell EMF calculation',
        'Integrated rate equations for zero and first order reactions',
        'Aldol Condensation & Cannizzaro reaction mechanisms',
        'Crystal Field Splitting in octahedral and tetrahedral complexes'
      ]
    },
    {
      id: 'maths-12',
      name: 'Mathematics',
      icon: 'Calculator',
      code: '041',
      color: 'navy',
      badge: 'Calculus Heavy',
      totalChapters: 13,
      totalMarks: 80,
      description: 'Master Relations & Functions, Calculus (35 Marks weightage), Vectors, 3D Geometry, and Probability with solved proofs.',
      syllabusProgress: 68,
      chapters: [
        { id: 'math12-1', num: 1, title: 'Relations and Functions', marks: 5, difficulty: 'Medium', pyqCount: 34, notesAvailable: true },
        { id: 'math12-3', num: 3, title: 'Matrices and Determinants', marks: 10, difficulty: 'Medium', pyqCount: 52, notesAvailable: true },
        { id: 'math12-5', num: 5, title: 'Continuity and Differentiability', marks: 9, difficulty: 'Hard', pyqCount: 58, notesAvailable: true },
        { id: 'math12-6', num: 6, title: 'Applications of Derivatives (AOD)', marks: 8, difficulty: 'Hard', pyqCount: 47, notesAvailable: true },
        { id: 'math12-7', num: 7, title: 'Integrals (Definite & Indefinite)', marks: 11, difficulty: 'Hard', pyqCount: 71, notesAvailable: true },
        { id: 'math12-10', num: 10, title: 'Vectors and 3-Dimensional Geometry', marks: 14, difficulty: 'Medium', pyqCount: 65, notesAvailable: true },
        { id: 'math12-13', num: 13, title: 'Probability (Bayes Theorem & Distributions)', marks: 8, difficulty: 'Medium', pyqCount: 46, notesAvailable: true },
      ],
      topDerivations: [
        'Bayes Theorem proofs and conditional probability',
        'Shortest distance between two skew lines in 3D',
        'Definite integral properties (King Property)',
        'Area under simple curves using integration'
      ]
    },
    {
      id: 'biology-12',
      name: 'Biology',
      icon: 'Dna',
      code: '044',
      color: 'emerald',
      badge: 'Diagram Intensive',
      totalChapters: 13,
      totalMarks: 70,
      description: 'Comprehensive NCERT line-by-line coverage of Reproduction, Genetics, Evolution, Biotechnology, and Ecology.',
      syllabusProgress: 88,
      chapters: [
        { id: 'bio12-1', num: 1, title: 'Sexual Reproduction in Flowering Plants', marks: 8, difficulty: 'Medium', pyqCount: 45, notesAvailable: true },
        { id: 'bio12-2', num: 2, title: 'Human Reproduction', marks: 8, difficulty: 'Medium', pyqCount: 50, notesAvailable: true },
        { id: 'bio12-4', num: 4, title: 'Principles of Inheritance and Variation', marks: 10, difficulty: 'Hard', pyqCount: 68, notesAvailable: true },
        { id: 'bio12-5', num: 5, title: 'Molecular Basis of Inheritance', marks: 10, difficulty: 'Hard', pyqCount: 74, notesAvailable: true },
        { id: 'bio12-9', num: 9, title: 'Biotechnology: Principles and Processes', marks: 6, difficulty: 'Medium', pyqCount: 39, notesAvailable: true },
        { id: 'bio12-11', num: 11, title: 'Organisms and Populations', marks: 6, difficulty: 'Easy', pyqCount: 32, notesAvailable: true },
        { id: 'bio12-13', num: 13, title: 'Biodiversity and Conservation', marks: 5, difficulty: 'Easy', pyqCount: 28, notesAvailable: true },
      ],
      topDerivations: [
        'DNA replication semiconservative model (Meselson-Stahl)',
        'Lac Operon regulation mechanism diagram & workflow',
        'Spermatogenesis and Oogenesis comparison diagrams',
        'Recombinant DNA technology steps & PCR amplification cycle'
      ]
    }
  ],
  11: [
    {
      id: 'physics-11',
      name: 'Physics',
      icon: 'Atom',
      code: '042',
      color: 'blue',
      badge: 'Foundation',
      totalChapters: 14,
      totalMarks: 70,
      description: 'Build rigorous analytical thinking with Kinematics, Laws of Motion, Work Energy, Gravitation, and Thermodynamics.',
      syllabusProgress: 72,
      chapters: [
        { id: 'phy11-2', num: 2, title: 'Units and Measurements', marks: 4, difficulty: 'Easy', pyqCount: 28, notesAvailable: true },
        { id: 'phy11-3', num: 3, title: 'Motion in a Straight Line', marks: 6, difficulty: 'Medium', pyqCount: 35, notesAvailable: true },
        { id: 'phy11-4', num: 4, title: 'Motion in a Plane (Vectors & Projectile)', marks: 8, difficulty: 'Hard', pyqCount: 42, notesAvailable: true },
        { id: 'phy11-5', num: 5, title: 'Laws of Motion', marks: 7, difficulty: 'Medium', pyqCount: 46, notesAvailable: true },
        { id: 'phy11-6', num: 6, title: 'Work, Energy and Power', marks: 7, difficulty: 'Medium', pyqCount: 40, notesAvailable: true },
        { id: 'phy11-8', num: 8, title: 'Gravitation', marks: 6, difficulty: 'Medium', pyqCount: 36, notesAvailable: true },
        { id: 'phy11-12', num: 12, title: 'Thermodynamics', marks: 9, difficulty: 'Hard', pyqCount: 44, notesAvailable: true },
        { id: 'phy11-14', num: 14, title: 'Oscillations and Waves', marks: 10, difficulty: 'Hard', pyqCount: 48, notesAvailable: true },
      ],
      topDerivations: [
        'Equations of motion by calculus method',
        'Range, maximum height, and time of flight of projectile',
        "Banking of roads with and without friction",
        "Escape velocity and orbital velocity of satellite"
      ]
    },
    {
      id: 'chemistry-11',
      name: 'Chemistry',
      icon: 'FlaskConical',
      code: '043',
      color: 'purple',
      badge: 'Core Principles',
      totalChapters: 9,
      totalMarks: 70,
      description: 'Master Atomic Structure, Chemical Bonding, Thermodynamics, Equilibrium, and Organic Chemistry fundamentals.',
      syllabusProgress: 65,
      chapters: [
        { id: 'chem11-1', num: 1, title: 'Some Basic Concepts of Chemistry (Mole Concept)', marks: 7, difficulty: 'Medium', pyqCount: 38, notesAvailable: true },
        { id: 'chem11-2', num: 2, title: 'Structure of Atom', marks: 9, difficulty: 'Hard', pyqCount: 45, notesAvailable: true },
        { id: 'chem11-3', num: 3, title: 'Classification of Elements & Periodicity', marks: 6, difficulty: 'Easy', pyqCount: 31, notesAvailable: true },
        { id: 'chem11-4', num: 4, title: 'Chemical Bonding and Molecular Structure', marks: 10, difficulty: 'Hard', pyqCount: 54, notesAvailable: true },
        { id: 'chem11-6', num: 6, title: 'Chemical Thermodynamics', marks: 9, difficulty: 'Hard', pyqCount: 49, notesAvailable: true },
        { id: 'chem11-7', num: 7, title: 'Equilibrium (Chemical & Ionic)', marks: 10, difficulty: 'Hard', pyqCount: 55, notesAvailable: true },
        { id: 'chem11-8', num: 8, title: 'Organic Chemistry: Basic Principles & Techniques', marks: 11, difficulty: 'Hard', pyqCount: 60, notesAvailable: true },
      ],
      topDerivations: [
        'Bohr radius & energy equation derivation',
        'Hybridization & VSEPR geometry predictions',
        'Hess Law of constant heat summation calculations',
        'Henderson-Hasselbalch equation for buffer solutions'
      ]
    },
    {
      id: 'maths-11',
      name: 'Mathematics',
      icon: 'Calculator',
      code: '041',
      color: 'navy',
      badge: 'Crucial Base',
      totalChapters: 14,
      totalMarks: 80,
      description: 'Strengthen Trigonometric Functions, Complex Numbers, Permutations & Combinations, Conic Sections, and Limits.',
      syllabusProgress: 70,
      chapters: [
        { id: 'math11-1', num: 1, title: 'Sets and Functions', marks: 8, difficulty: 'Medium', pyqCount: 30, notesAvailable: true },
        { id: 'math11-3', num: 3, title: 'Trigonometric Functions', marks: 12, difficulty: 'Hard', pyqCount: 58, notesAvailable: true },
        { id: 'math11-5', num: 5, title: 'Complex Numbers and Quadratic Equations', marks: 6, difficulty: 'Medium', pyqCount: 34, notesAvailable: true },
        { id: 'math11-7', num: 7, title: 'Permutations and Combinations', marks: 8, difficulty: 'Hard', pyqCount: 42, notesAvailable: true },
        { id: 'math11-9', num: 9, title: 'Straight Lines & Conic Sections', marks: 14, difficulty: 'Hard', pyqCount: 62, notesAvailable: true },
        { id: 'math11-12', num: 12, title: 'Limits and Derivatives (Introduction to Calculus)', marks: 12, difficulty: 'Hard', pyqCount: 56, notesAvailable: true },
      ],
      topDerivations: [
        'Formula for cos(x + y) geometric proof',
        'Distance between two parallel lines derivation',
        'Standard equations of parabola, ellipse and hyperbola',
        'First principle of derivative definition and proofs'
      ]
    },
    {
      id: 'biology-11',
      name: 'Biology',
      icon: 'Dna',
      code: '044',
      color: 'emerald',
      badge: 'Living Systems',
      totalChapters: 19,
      totalMarks: 70,
      description: 'Detailed exploration of Biological Classification, Plant & Animal Kingdom, Cell Biology, Biomolecules, and Human Physiology.',
      syllabusProgress: 80,
      chapters: [
        { id: 'bio11-1', num: 1, title: 'The Living World & Biological Classification', marks: 6, difficulty: 'Easy', pyqCount: 26, notesAvailable: true },
        { id: 'bio11-3', num: 3, title: 'Plant Kingdom & Animal Kingdom', marks: 10, difficulty: 'Hard', pyqCount: 48, notesAvailable: true },
        { id: 'bio11-8', num: 8, title: 'Cell: The Unit of Life & Cell Cycle', marks: 12, difficulty: 'Medium', pyqCount: 54, notesAvailable: true },
        { id: 'bio11-9', num: 9, title: 'Biomolecules', marks: 7, difficulty: 'Medium', pyqCount: 38, notesAvailable: true },
        { id: 'bio11-13', num: 13, title: 'Photosynthesis in Higher Plants', marks: 8, difficulty: 'Hard', pyqCount: 44, notesAvailable: true },
        { id: 'bio11-17', num: 17, title: 'Human Physiology: Neural Control & Chemical Coordination', marks: 14, difficulty: 'Hard', pyqCount: 60, notesAvailable: true },
      ],
      topDerivations: [
        'Stages of Mitosis and Meiosis diagrammatic progression',
        'Z-scheme of light reaction and Calvin Cycle',
        'Generation and conduction of nerve impulse',
        'Sliding filament theory of muscle contraction'
      ]
    }
  ]
};

export const STUDY_MATERIALS = [
  {
    id: 'mat-1',
    title: 'Ray Optics & Optical Instruments - Complete Board Derivation Booklet',
    subject: 'Physics',
    classLevel: 12,
    type: 'Notes',
    badge: 'Topper Verified',
    pages: 28,
    fileSize: '3.4 MB',
    rating: 4.9,
    downloads: '24.5k',
    verifiedBy: '100/100 Toppers Review',
    summary: 'Line-by-line breakdown of Lens Maker Formula, Prism Minimum Deviation, Compound Microscope, and Astronomical Telescope with step-by-step marking scheme pointers.',
    contentSnippet: `Key Derivations Covered:
1. Refraction at Spherical Surfaces:
   Using Snell's Law and paraxial ray approximation: n2/v - n1/u = (n2 - n1)/R.
2. Lens Maker's Formula:
   1/f = (n2/n1 - 1) * (1/R1 - 1/R2).
3. Prism Minimum Deviation Formula:
   n = sin((A + Dm)/2) / sin(A/2).
Board Marking Scheme Tip:
Always draw neat labeled diagrams showing arrows indicating light direction. 1 mark is deducted if arrowheads are missing!`
  },
  {
    id: 'mat-2',
    title: 'Electrochemistry - NCERT In-Text & Exercise Solutions with Marking Scheme',
    subject: 'Chemistry',
    classLevel: 12,
    type: 'NCERT Solutions',
    badge: '100% Solved',
    pages: 36,
    fileSize: '4.1 MB',
    rating: 4.8,
    downloads: '18.9k',
    verifiedBy: 'Senior Board Evaluators',
    summary: 'Complete step-by-step numerical calculations for Nernst equation, Kohlrausch law, conductance, and molar conductivity with standard units.',
    contentSnippet: `Important Model Question:
Q: Calculate the emf of the cell: Mg(s) | Mg2+(0.001 M) || Cu2+(0.0001 M) | Cu(s). (E°cell = 2.71 V).
Solution:
Cell reaction: Mg(s) + Cu2+(aq) -> Mg2+(aq) + Cu(s) [n = 2]
E_cell = E°cell - (0.0591 / n) * log([Mg2+] / [Cu2+])
E_cell = 2.71 - (0.0591 / 2) * log(10^-3 / 10^-4)
E_cell = 2.71 - 0.02955 * log(10)
E_cell = 2.71 - 0.02955 = 2.68 V.
Marking Scheme: Formula = 1 mark, Substitution = 1 mark, Final value with unit (V) = 1 mark.`
  },
  {
    id: 'mat-3',
    title: 'Top 60 High-Yield Calculus Questions (Definite Integrals & AOD)',
    subject: 'Mathematics',
    classLevel: 12,
    type: 'Important Questions',
    badge: 'Exam Hotspot',
    pages: 42,
    fileSize: '5.2 MB',
    rating: 4.9,
    downloads: '31.2k',
    verifiedBy: 'Chief Board Examiner Panel',
    summary: 'Curated 4-mark and 6-mark questions based on the last 15 years board exam trends, including properties of definite integrals and maxima-minima real-world problems.',
    contentSnippet: `Standard 5-Mark Question:
Evaluate: Integral from 0 to pi of (x * sin(x)) / (1 + cos^2(x)) dx.
Method:
Apply King's Property: I = integral 0 to pi of ((pi - x) * sin(pi - x)) / (1 + cos^2(pi - x)) dx
Add (1) and (2) to eliminate 'x'.
2I = pi * integral 0 to pi of sin(x)/(1 + cos^2(x)) dx
Substitute cos(x) = t, dt = -sin(x) dx.
Final Result: I = pi^2 / 4.
Examiner Warning: Do not forget to change the integration limits when substituting variables.`
  },
  {
    id: 'mat-4',
    title: '10-Year Solved Board Papers (2015 - 2024) All Sets with Official Keys',
    subject: 'Physics',
    classLevel: 12,
    type: 'Previous Year Papers',
    badge: 'Past 10 Years',
    pages: 112,
    fileSize: '12.8 MB',
    rating: 5.0,
    downloads: '45.1k',
    verifiedBy: 'Board Scrutiny Panel',
    summary: 'Year-wise solved papers with Delhi and All India sets, highlighting repeated questions and common student errors flagged in examiner reports.',
    contentSnippet: `Key Trend Analysis (2015-2024):
- Gauss's Law derivations appeared in 8 out of 10 years.
- Galvanometer conversion to Ammeter/Voltmeter appeared in 7 years.
- Lens Maker's formula numericals appeared in every single session since 2018.
- Assertion-Reason questions require reading both statements independently first to test veracity before checking explanation relation.`
  },
  {
    id: 'mat-5',
    title: 'Molecular Basis of Inheritance - High-Score Visual Concept Maps',
    subject: 'Biology',
    classLevel: 12,
    type: 'Notes',
    badge: 'Topper Verified',
    pages: 32,
    fileSize: '6.4 MB',
    rating: 4.9,
    downloads: '21.0k',
    verifiedBy: 'Medical & Board Toppers',
    summary: 'Full diagrammatic representation of DNA double helix, Meselson-Stahl experiment, Transcription unit, Genetic code dictionary, and Lac Operon regulation.',
    contentSnippet: `Lac Operon Mechanism Summary:
1. In Absence of Inducer (Lactose):
   i-gene produces repressor protein -> binds to operator region (O) -> RNA polymerase cannot transcribe structural genes (z, y, a). Operon is SWITCHED OFF.
2. In Presence of Inducer (Lactose):
   Inducer binds to repressor -> Repressor becomes inactivated -> Operator free -> RNA polymerase transcribes z (beta-galactosidase), y (permease), a (transacetylase). Operon is SWITCHED ON!`
  },
  {
    id: 'mat-6',
    title: 'Class 11 Kinematics & Projectile Motion - Master Problem Bank',
    subject: 'Physics',
    classLevel: 11,
    type: 'Important Questions',
    badge: 'Foundation Plus',
    pages: 30,
    fileSize: '3.9 MB',
    rating: 4.8,
    downloads: '16.4k',
    verifiedBy: 'Senior Physics Faculty',
    summary: 'Conceptual problems bridging Class 11 school exams with entrance fundamentals, including relative velocity in 2D and trajectory parabola proofs.',
    contentSnippet: `Projectile Motion Derivations:
- Equation of Trajectory: y = x*tan(theta) - (g * x^2) / (2 * u^2 * cos^2(theta)) [Parabolic path]
- Time of flight: T = 2*u*sin(theta)/g
- Maximum Height: H = (u^2 * sin^2(theta)) / (2*g)
- Horizontal Range: R = (u^2 * sin(2*theta)) / g
Key Concept: Range is identical for complementary angles of projection: theta and (90 - theta).`
  },
  {
    id: 'mat-7',
    title: 'Class 11 Chemical Bonding & Molecular Structure - NCERT Complete Guide',
    subject: 'Chemistry',
    classLevel: 11,
    type: 'NCERT Solutions',
    badge: 'Fundamental',
    pages: 38,
    fileSize: '4.5 MB',
    rating: 4.7,
    downloads: '14.2k',
    verifiedBy: 'Chemistry Experts',
    summary: 'Exhaustive explanations of VSEPR theory, sp3, sp2, sp hybridisation examples, Molecular Orbital Theory (MOT) energy level diagrams for O2, N2, and Dipole Moments.',
    contentSnippet: `Molecular Orbital Configuration for O2 (16 electrons):
sigma 1s^2, sigma* 1s^2, sigma 2s^2, sigma* 2s^2, sigma 2pz^2, (pi 2px^2 = pi 2py^2), (pi* 2px^1 = pi* 2py^1).
Bond Order = (Nb - Na) / 2 = (10 - 6) / 2 = 2.
Magnetic Character: Paramagnetic due to presence of 2 unpaired electrons in antibonding pi* orbitals.`
  },
  {
    id: 'mat-8',
    title: 'Class 11 Trigonometric Identities & General Solutions - Formula Cheat Sheet',
    subject: 'Mathematics',
    classLevel: 11,
    type: 'Notes',
    badge: 'Quick Revision',
    pages: 18,
    fileSize: '2.1 MB',
    rating: 4.9,
    downloads: '27.8k',
    verifiedBy: 'Math Mentors',
    summary: 'Ultra-compact memory sheet with transformation formulas, double/triple angle identities, and standard graphs of all six trigonometric functions.',
    contentSnippet: `Essential Formulas:
- sin(A + B) = sin A cos B + cos A sin B
- cos(A + B) = cos A cos B - sin A sin B
- tan(2A) = 2 tan A / (1 - tan^2 A)
- cos(2A) = cos^2 A - sin^2 A = 2 cos^2 A - 1 = 1 - 2 sin^2 A
- sin C + sin D = 2 sin((C+D)/2) * cos((C-D)/2)`
  }
];

export const MOCK_TESTS = [
  {
    id: 'mock-1',
    title: 'Class 12 Physics - All India Pre-Board Full Mock 1',
    subject: 'Physics',
    classLevel: 12,
    durationMinutes: 180,
    totalMarks: 70,
    totalQuestions: 33,
    sections: ['Section A (MCQs & A-R)', 'Section B (Short Answer 2M)', 'Section C (Short Answer 3M)', 'Section D (Case Study)', 'Section E (Long Answer 5M)'],
    difficulty: 'Board Standard',
    attempts: 14820,
    avgScore: '51.4 / 70',
    topPercentile: '67.5 / 70',
    description: 'Accurate simulation of the official question paper structure with negative marking simulation, step-marking breakdown, and automated evaluation.',
    sampleQuestions: [
      {
        id: 'q1',
        section: 'Section A (MCQ)',
        question: 'An electric dipole of moment p is placed parallel to a uniform electric field E. The work done in rotating the dipole through 180° is:',
        options: ['zero', 'pE', '2pE', '-2pE'],
        correctIndex: 2,
        explanation: 'Work done W = -pE(cos theta2 - cos theta1). Here theta1 = 0°, theta2 = 180°. W = -pE(cos 180° - cos 0°) = -pE(-1 - 1) = 2pE.'
      },
      {
        id: 'q2',
        section: 'Section A (Assertion-Reason)',
        question: 'Assertion (A): The magnetic field lines inside a current-carrying long solenoid are parallel straight lines.\nReason (R): The magnetic field inside a long solenoid is uniform at all points along its axis.',
        options: [
          'Both A and R are true and R is the correct explanation of A',
          'Both A and R are true but R is not the correct explanation of A',
          'A is true but R is false',
          'A is false but R is true'
        ],
        correctIndex: 0,
        explanation: 'Inside a long solenoid, the magnetic field is uniform and given by B = mu_0 * n * I. Uniform magnetic fields are represented by equidistant parallel straight lines. Hence, both A and R are true and R correctly explains A.'
      },
      {
        id: 'q3',
        section: 'Section A (MCQ)',
        question: 'The ratio of resolving power of a telescope when using light of wavelength 400 nm to that when using light of wavelength 600 nm is:',
        options: ['2 : 3', '3 : 2', '4 : 9', '9 : 4'],
        correctIndex: 1,
        explanation: 'Resolving Power (RP) of a telescope = D / (1.22 * lambda). Therefore, RP is inversely proportional to wavelength. RP1 / RP2 = lambda2 / lambda1 = 600 nm / 400 nm = 3 / 2.'
      },
      {
        id: 'q4',
        section: 'Section B (Numerical Concept)',
        question: 'In Young\'s double slit experiment, if the distance between slits is doubled and the distance between slits and screen is halved, the fringe width becomes:',
        options: ['4 times', '2 times', 'one-fourth', 'halved'],
        correctIndex: 2,
        explanation: 'Fringe width beta = (lambda * D) / d. If d becomes 2d and D becomes D/2, new beta\' = lambda * (D/2) / (2d) = (lambda * D) / (4d) = beta / 4. It becomes one-fourth.'
      },
      {
        id: 'q5',
        section: 'Section A (MCQ)',
        question: 'A wire of resistance R is stretched to double its original length keeping volume constant. Its new resistance will be:',
        options: ['2R', '4R', 'R/2', 'R/4'],
        correctIndex: 1,
        explanation: 'When stretched, volume V = A * L remains constant. If L\' = 2L, then A\' = A/2. New resistance R\' = rho * (2L) / (A/2) = 4 * (rho * L / A) = 4R.'
      }
    ]
  },
  {
    id: 'mock-2',
    title: 'Class 12 Chemistry - Board Blueprint Diagnostic Test',
    subject: 'Chemistry',
    classLevel: 12,
    durationMinutes: 60,
    totalMarks: 35,
    totalQuestions: 15,
    sections: ['Physical Chemistry', 'Inorganic Chemistry', 'Organic Chemistry'],
    difficulty: 'Moderate',
    attempts: 11290,
    avgScore: '26.8 / 35',
    topPercentile: '34.0 / 35',
    description: 'Quick speed-check focusing on Organic conversions, electrochemistry cell equations, and coordination IUPAC nomenclature.',
    sampleQuestions: [
      {
        id: 'chem-q1',
        section: 'Physical Chemistry',
        question: 'The unit of rate constant for a zero order chemical reaction is:',
        options: ['s^-1', 'mol L^-1 s^-1', 'L mol^-1 s^-1', 'L^2 mol^-2 s^-1'],
        correctIndex: 1,
        explanation: 'Rate = k * [A]^0 = k. Unit of rate is mol L^-1 s^-1, hence unit of k for zero order is mol L^-1 s^-1.'
      },
      {
        id: 'chem-q2',
        section: 'Organic Chemistry',
        question: 'Which of the following undergoes Cannizzaro reaction on treatment with 50% aqueous KOH?',
        options: ['Acetaldehyde (CH3CHO)', 'Formaldehyde (HCHO)', 'Acetone (CH3COCH3)', 'Propanal (CH3CH2CHO)'],
        correctIndex: 1,
        explanation: 'Cannizzaro reaction is given by aldehydes that do NOT have any alpha-hydrogen atoms. Formaldehyde (HCHO) lacks an alpha-hydrogen and disproportionates into methanol and potassium formate.'
      },
      {
        id: 'chem-q3',
        section: 'Inorganic Chemistry',
        question: 'The IUPAC name of the complex [Co(NH3)5(CO3)]Cl is:',
        options: [
          'Pentaamminecarbonatocobalt(III) chloride',
          'Carbonatopentaamminecobalt(II) chloride',
          'Pentaamminecarbonicobalt(III) chloride',
          'Cobaltpentaammine carbonate chloride'
        ],
        correctIndex: 0,
        explanation: 'Ligands are named alphabetically: ammine before carbonato. Oxidation state of Co: x + 5(0) + (-2) + (-1) = 0 => x = +3. Hence, Pentaamminecarbonatocobalt(III) chloride.'
      }
    ]
  },
  {
    id: 'mock-3',
    title: 'Class 12 Mathematics - Calculus & Vectors Speed Sprint',
    subject: 'Mathematics',
    classLevel: 12,
    durationMinutes: 90,
    totalMarks: 40,
    totalQuestions: 18,
    sections: ['MCQs & A-R', 'Short Answer', 'Long Answer'],
    difficulty: 'Tough',
    attempts: 9840,
    avgScore: '28.1 / 40',
    topPercentile: '39.0 / 40',
    description: 'High-focus test concentrating on Definite Integrals, Maxima-Minima Word Problems, Shortest Distance in 3D, and Bayes Probability.',
    sampleQuestions: [
      {
        id: 'math-q1',
        section: 'Vectors & 3D',
        question: 'If a vector makes angles 45° and 60° with positive x and y axes respectively, what angle does it make with the z-axis?',
        options: ['30° or 150°', '60° or 120°', '45° or 135°', '90°'],
        correctIndex: 1,
        explanation: 'Direction cosines satisfy cos^2 alpha + cos^2 beta + cos^2 gamma = 1. cos^2(45°) + cos^2(60°) + cos^2 gamma = 1 => (1/sqrt(2))^2 + (1/2)^2 + cos^2 gamma = 1 => 1/2 + 1/4 + cos^2 gamma = 1 => cos^2 gamma = 1/4 => cos gamma = ±1/2 => gamma = 60° or 120°.'
      },
      {
        id: 'math-q2',
        section: 'Calculus',
        question: 'The derivative of sin^-1(2x * sqrt(1 - x^2)) with respect to x for |x| < 1/sqrt(2) is:',
        options: ['1 / sqrt(1 - x^2)', '2 / sqrt(1 - x^2)', '-2 / sqrt(1 - x^2)', '2x / (1 - x^2)'],
        correctIndex: 1,
        explanation: 'Let x = sin theta. Then 2x*sqrt(1 - x^2) = 2 sin theta cos theta = sin(2 theta). Thus sin^-1(sin 2 theta) = 2 theta = 2 sin^-1(x). Differentiating gives 2 / sqrt(1 - x^2).'
      }
    ]
  },
  {
    id: 'mock-4',
    title: 'Class 11 Physics - Mechanics & Kinematics Pre-Exam',
    subject: 'Physics',
    classLevel: 11,
    durationMinutes: 120,
    totalMarks: 50,
    totalQuestions: 22,
    sections: ['Kinematics', 'Laws of Motion', 'Work Energy Power'],
    difficulty: 'Moderate',
    attempts: 8430,
    avgScore: '36.2 / 50',
    topPercentile: '48.0 / 50',
    description: 'Foundation check for Class 11 students before final annual exams. Tests graphical analysis, free body diagrams, and conservation laws.',
    sampleQuestions: [
      {
        id: 'phy11-q1',
        section: 'Kinematics',
        question: 'A ball is thrown vertically upwards with velocity u. At what height above ground is its kinetic energy equal to its potential energy? (Take ground as reference)',
        options: ['u^2 / (2g)', 'u^2 / (4g)', 'u^2 / g', '2u^2 / g'],
        correctIndex: 1,
        explanation: 'Total mechanical energy E = 1/2 m u^2. When KE = PE, each must equal E/2 = 1/4 m u^2. Potential energy m g h = 1/4 m u^2 => h = u^2 / (4g).'
      }
    ]
  }
];

export const TOPPER_TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    score: '99.2%',
    stream: 'Science (PCMB)',
    school: 'Delhi Public School, R.K. Puram, New Delhi',
    rank: 'Board All-India Rank 4',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    quote: 'Bakhul Edu’s 10-Year Solved PYQ breakdowns and step-wise marking schemes were the game changer for my Board preparation. Knowing exactly how examiners award marks in 5-mark derivations saved me countless hours.'
  },
  {
    name: 'Rohan Verma',
    score: '98.8%',
    stream: 'Science (PCM)',
    school: 'DAV Public School, Chandigarh',
    rank: 'State Rank 1st',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    quote: 'The Mock Test interface feels identical to the actual exam setup. The weak area diagnosis pointed out that I was losing 3-4 marks in Assertion-Reason questions in Chemistry, which I rectified in time!'
  },
  {
    name: 'Priya Nair',
    score: '99.0%',
    stream: 'Science (PCB)',
    school: 'Kendriya Vidyalaya, Bangalore',
    rank: 'State 1st & Topper',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    quote: 'The Biology line-by-line NCERT solutions and labelled diagram notes are unmatched. It completely eliminated the confusion of reading multiple heavy reference guides.'
  },
  {
    name: 'Kabir Mehta',
    score: '98.4%',
    stream: 'Science (PCM)',
    school: "The Mother's International School, New Delhi",
    rank: 'Maths 100/100 Perfect Score',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    quote: 'The calculus problem sheets have the exact blend of NCERT exemplar and past year questions. The formula cheat sheets are always open on my tablet during revisions.'
  }
];

export const RECENT_UPLOADS = [
  {
    id: 'up-1',
    title: 'Official Additional Practice Questions with Answer Keys (All 4 Subjects)',
    tag: 'Board Official',
    date: 'Updated 2 days ago',
    type: 'PDF',
    size: '8.4 MB'
  },
  {
    id: 'up-2',
    title: 'Organic Chemistry Roadmap: All Named Reactions & Reagents for Quick Recall',
    tag: 'Quick Revision',
    date: 'Updated 4 days ago',
    type: 'Cheatsheet',
    size: '2.8 MB'
  },
  {
    id: 'up-3',
    title: 'Physics Practical Exam Viva Voce Guide & Experiment Observation Tables',
    tag: 'Practicals (30 Marks)',
    date: 'Updated 1 week ago',
    type: 'Guide',
    size: '5.1 MB'
  },
  {
    id: 'up-4',
    title: 'Mathematics Chapter-wise Marks Blueprint & Weightage Analysis',
    tag: 'Strategy',
    date: 'Updated 1 week ago',
    type: 'Blueprint',
    size: '1.9 MB'
  }
];

export const FAQ_DATA = [
  {
    question: 'How closely do Bakhul Edu mock tests match the actual board exam format?',
    answer: 'Our mock papers strictly adhere to the latest examination blueprint: 20% MCQs / Assertion-Reason, 30% Short Answer Questions, 30% Long Answer Derivations/Theorems, and 20% Case-Based Competency Questions.'
  },
  {
    question: 'Are all study materials and NCERT solutions compliant with the rationalized syllabus?',
    answer: 'Yes! All deleted topics and excised portions specified by NCERT for the current academic year have been clearly updated so you never waste time studying obsolete portions.'
  },
  {
    question: 'How does the performance tracking system identify weak areas?',
    answer: 'Every mock test tracks question category tags (e.g. "Optics Derivations", "Organic Mechanisms", "Calculus Integrals"). If your accuracy in a specific chapter falls below 70%, the dashboard automatically flags it and recommends high-yield notes.'
  },
  {
    question: 'Can Class 11 students use this platform to prepare alongside competitive exams?',
    answer: 'Absolutely. Class 11 content includes foundation sections that reinforce NCERT fundamentals while providing numerical depth required for national competitive exams.'
  }
];
