export interface Project {
  id: string;
  number: string;
  title: string;
  category: 'AI / ML' | 'DATA SCIENCE' | 'COMPUTER VISION' | 'WEB' | 'APPIAN' | 'NLP';
  status?: string;
  tags: string[];
  shortDescription: string;
  purpose?: string;
  myRole?: string;
  myContribution: string[];
  technologies: string[];
  workflow?: string[];
  factors?: string[];
  algorithmsExplored?: string[];
  whatILearned: string[];
  problem: string;
  solution: string;
  specialConcept?: string;
  // Central links placeholder system - URLs can be added here anytime
  projectLink: string;
  githubLink: string;
  demoLink: string;
}

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  skillArea: string;
  year?: string;
  grade?: string;
  // Central certificate links placeholder
  certificateLink: string;
  highlights: string[];
}

export interface Internship {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: string;
  statusLabel?: 'Completed' | 'Opportunity / Offer';
  description: string;
  tools: string[];
  experiencePoints: string[];
  learnings: string[];
}

export interface SkillItem {
  name: string;
  category: string;
  status: 'LEARNING' | 'PRACTICING' | 'HANDS-ON' | 'WORKING KNOWLEDGE' | 'EXPLORING';
  description: string;
  relatedProjects: string[];
  relatedTools: string[];
  accentColor: string;
}

export const PERSONAL_INFO = {
  name: 'BORAPUREDDY MOUNIKA',
  brand: 'MOUNIKA.AI',
  tagline: 'TURNING DATA INTO INTELLIGENT SOLUTIONS',
  secondaryTagline: 'LEARN • BUILD • SOLVE • IMPROVE',
  currentStatus: 'CURRENTLY BUILDING',
  role: 'AI & Data Science Student',
  institution: 'Satya Institute of Technology and Management',
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  graduationYear: 'Final Year (2023 – Present)',
  cgpa: '8.19',
  bio: 'I am a final-year Artificial Intelligence and Data Science student at Satya Institute of Technology and Management. I enjoy learning how data, machine learning and software can be transformed into practical solutions. Through internships, academic projects and hands-on experiments, I have explored Python, Machine Learning, Data Analysis, Computer Vision, SQL, Appian and web technologies.',
  email: 'bmounikareddy321@gmail.com',
  linkedin: 'https://linkedin.com/in/borapureddy-mounika',
  linkedinDisplay: 'linkedin.com/in/borapureddy-mounika',
  github: 'https://github.com/Mounika-reddy321',
  githubDisplay: 'github.com/Mounika-reddy321',
  // Central resume placeholder - upload PDF path or link here
  resumeFile: '',
};

export const QUICK_STATS = [
  { value: '8.19', label: 'B.Tech CGPA', detail: 'Satya Institute of Tech & Mgmt' },
  { value: '901', label: 'Intermediate Marks', detail: 'Vidwan Junior College (MPC)' },
  { value: '93%', label: '10th Result', detail: 'Zilla Parishad High School' },
  { value: '4', label: 'Featured Projects', detail: 'AI, ML, Appian & Vision' },
  { value: 'Multiple', label: 'Internships & Labs', detail: 'Hands-on practice & training' },
];

export const EDUCATION_DATA = [
  {
    level: 'B.TECH',
    degree: 'B.Tech – Artificial Intelligence and Data Science',
    institution: 'Satya Institute of Technology and Management',
    timeline: '2023 – Present',
    score: 'CGPA: 8.19',
    description: 'In-depth coursework in Artificial Intelligence, Machine Learning algorithms, Data Structures, Relational Database Management Systems, Deep Learning fundamentals, and Computer Vision.',
    highlights: ['Specialization in AI & Data Science', 'Academic projects in ML & Vision', 'Technical student symposium participant'],
    accent: 'from-blue-500 to-cyan-500'
  },
  {
    level: 'INTERMEDIATE',
    degree: 'Board of Intermediate Education (MPC)',
    institution: 'Vidwan Junior College',
    timeline: '2021 – 2023',
    score: '901 Marks',
    description: 'Completed Higher Secondary Education majoring in Mathematics, Physics, and Chemistry with academic distinction.',
    highlights: ['Strong analytical & mathematical foundation', 'Calculus, Statistics & Physics'],
    accent: 'from-cyan-500 to-teal-500'
  },
  {
    level: '10TH SSC',
    degree: 'Secondary School Certificate',
    institution: 'Zilla Parishad High School',
    timeline: '2021',
    score: '93%',
    description: 'Graduated secondary school with 93% aggregate, building strong problem-solving and scientific fundamentals.',
    highlights: ['Distinction aggregate: 93%', 'Foundation in science & mathematics'],
    accent: 'from-purple-500 to-pink-500'
  }
];

export const JOURNEY_TIMELINE = [
  {
    year: '2023',
    title: 'B.Tech in Artificial Intelligence & Data Science',
    subtitle: 'Satya Institute of Technology and Management',
    description: 'Started the academic journey focusing on programming foundations, linear algebra, discrete math, and computational problem solving.',
    badge: 'Foundation'
  },
  {
    year: '2025',
    title: 'Corizo Edutech — AI Internship',
    subtitle: 'Artificial Intelligence Intern (Virtual)',
    description: 'Completed 4 weeks of hands-on work with NumPy, Pandas, Scikit-learn, and neural network foundations.',
    badge: 'Practical AI'
  },
  {
    year: '2025',
    title: 'Cardiovascular & ML Research Projects',
    subtitle: 'Academic & Learning Experiences',
    description: 'Developed classification workflows, evaluated multiple algorithms, and built data exploration pipelines in Google Colab.',
    badge: 'Machine Learning'
  },
  {
    year: '2026',
    title: 'Axcentra — Python Programming Internship',
    subtitle: 'Python Developer Intern',
    description: 'Built data analysis scripts, automated real-world workflows, and generated visual summaries using Matplotlib and Pandas.',
    badge: 'Python & Data'
  },
  {
    year: '2026',
    title: 'Hospital Management System (Appian)',
    subtitle: 'Low-Code Enterprise Solution',
    description: 'Engineered responsive Appian interfaces, record structures, appointment flows, and database connections.',
    badge: 'Low-Code'
  },
  {
    year: '2026',
    title: 'CCTV / RTSP Automated Attendance System',
    subtitle: 'Final-Year Project (Ongoing)',
    description: 'Leading frontend dashboard and reporting interfaces using HTML, CSS, and JavaScript for real-time camera stream attendance.',
    badge: 'Final-Year Project'
  },
  {
    year: 'PRESENT',
    title: 'Continuous Learning & Growth',
    subtitle: 'Deepening Machine Learning, Python & Data Systems',
    description: 'Deepening hands-on skills in machine learning algorithms, clean architecture, and scalable data problem-solving.',
    badge: 'Active Exploration'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'student-placement-predictor',
    number: '01',
    title: 'Student Placement Predictor',
    category: 'AI / ML',
    tags: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
    shortDescription: 'Built an interactive student placement prediction application where students input academic credentials, skill sets, and internship records to evaluate placement readiness.',
    purpose: 'Helps students understand their placement readiness and identify specific academic and skill areas for improvement before attending placement drives.',
    myRole: 'End-to-End Application & ML Pipeline',
    myContribution: [
      'Engineered structured dataset features combining academic records, 10th/12th marks, and skill metrics',
      'Implemented data preprocessing, normalization, and label encoding using Pandas and Scikit-learn',
      'Trained machine learning classification models to predict placement eligibility categories',
      'Designed a Personalized Learning Roadmap concept that suggests improvement paths for at-risk factors'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    workflow: [
      'STUDENT DATA INPUT',
      'DATA PREPROCESSING & ENCODING',
      'MACHINE LEARNING CLASSIFIER',
      'PREDICTION OUTPUT',
      'PLACEMENT READINESS & LEARNING ROADMAP'
    ],
    factors: [
      'Academic performance (B.Tech CGPA)',
      '10th standard percentage',
      'Intermediate marks',
      'Technical programming skills',
      'Internship and practical experience',
      'Communication abilities'
    ],
    whatILearned: [
      'How feature weighting significantly impacts classification boundaries in student assessment',
      'Techniques for handling missing student records and non-numeric skill ratings',
      'The importance of explaining model outputs through actionable recommendations rather than raw numbers'
    ],
    problem: 'College students often enter final-year placement drives without a clear understanding of whether their current academic and technical profiles meet industry recruitment benchmarks.',
    solution: 'An automated prediction tool that evaluates multifaceted student indicators and produces a diagnostic placement readiness score alongside an actionable personalized learning roadmap.',
    specialConcept: 'Personalized Learning Roadmap for actionable skill improvement',
    projectLink: 'https://github.com/Mounika-reddy321/Student-Placement-Predictor',
    githubLink: 'https://github.com/Mounika-reddy321/Student-Placement-Predictor',
    demoLink: ''
  },
  {
    id: 'cctv-rtsp-attendance-system',
    number: '02',
    title: 'CCTV / RTSP-Based Automated Attendance Monitoring System',
    category: 'COMPUTER VISION',
    status: 'ONGOING · FINAL-YEAR PROJECT',
    tags: ['Python', 'Computer Vision', 'Deep Learning', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    shortDescription: 'Developing an automated attendance monitoring system utilizing CCTV and RTSP camera streams with facial recognition to identify students and record periodic classroom attendance.',
    purpose: 'Eliminates repetitive manual attendance roll-calls, reduces proxy records, and delivers automated real-time dashboards to faculty and administrators.',
    myRole: 'Frontend & Dashboard Development',
    myContribution: [
      'Designed and engineered the complete Faculty & Administrator Dashboard interface',
      'Built period-wise and department-wise attendance summary tables with responsive controls',
      'Constructed responsive attendance reporting screens using HTML, CSS, and JavaScript',
      'Developed student verification and camera feed status viewing UI components',
      'Collaborated on backend data integration connecting the student dashboard and MySQL database'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'MySQL Database', 'Responsive UI'],
    workflow: [
      'CCTV / RTSP CAMERA STREAM',
      'FRAME EXTRACTION & BUFFERING',
      'FACE DETECTION (HAAR / DL)',
      'FACE RECOGNITION & EMBEDDINGS',
      'STUDENT IDENTIFICATION',
      'ATTENDANCE VALIDATION & DEDUPLICATION',
      'MYSQL DATABASE STORAGE',
      'FACULTY DASHBOARD & REPORT GENERATION',
      'PARENT / STUDENT NOTIFICATION CONCEPT'
    ],
    whatILearned: [
      'How to build lightweight, fast-loading dashboard frontends that display live camera streams and high-frequency attendance logs',
      'Effective team collaboration between computer vision engineers and frontend UI developers',
      'Designing intuitive user flows for attendance disputes, absent lists, and period-by-period filters'
    ],
    problem: 'Manual attendance taking in university lecture halls consumes 10–15 minutes per class, is prone to human error and proxies, and leaves no consolidated live record for administration.',
    solution: 'A camera-stream-driven facial recognition pipeline connected to an intuitive faculty dashboard that automatically records, verifies, and reports student presence in real time.',
    projectLink: 'https://github.com/Mounika-reddy321',
    githubLink: 'https://github.com/Mounika-reddy321',
    demoLink: ''
  },
  {
    id: 'hospital-management-system',
    number: '03',
    title: 'Hospital Management System',
    category: 'APPIAN',
    tags: ['Appian Platform', 'Appian Records', 'Relational Database', 'Process Modeling'],
    shortDescription: 'Developed an enterprise low-code Hospital Management System on the Appian platform with responsive interfaces for managing patients, doctor schedules, and clinical appointments.',
    purpose: 'Streamlines healthcare administrative workflows by replacing disparate paper records with centralized Appian Records and role-tailored digital portals.',
    myRole: 'Low-Code Application Developer (Appian & Records)',
    myContribution: [
      'Designed user-friendly Appian interfaces for Patient Registration and Medical History',
      'Configured Doctor Information and Specialist Availability scheduling views',
      'Built multi-step Appointment Booking processes with dynamic date/slot validation',
      'Created Appian Record Types linked to relational database tables with related actions',
      'Implemented responsive design patterns ensuring accessibility across desktop and mobile devices'
    ],
    technologies: ['Appian Low-Code Platform', 'Appian Records', 'Relational Database', 'Process Modeler'],
    workflow: [
      'USER (PATIENT / RECEPTIONIST)',
      'RESPONSIVE APPIAN INTERFACE',
      'APPIAN RECORDS DATA LAYER',
      'RELATIONAL DATABASE',
      'INTEGRATED HOSPITAL MANAGEMENT'
    ],
    whatILearned: [
      'How low-code enterprise platforms like Appian accelerate the transition from business requirements to operational software',
      'Structuring Appian Records and relationships to reflect real-world relational database foreign keys',
      'Designing accessible, error-tolerant medical forms that minimize data entry mistakes'
    ],
    problem: 'Hospitals struggle with fragmented records, overlapping appointment schedules, and slow patient check-in times when relying on legacy manual tracking.',
    solution: 'A cohesive Appian solution integrating patient intake, doctor roster schedules, and real-time appointment booking within unified Appian interfaces.',
    projectLink: '',
    githubLink: '',
    demoLink: ''
  },
  {
    id: 'cardiovascular-disease-prediction',
    number: '04',
    title: 'Cardiovascular Disease Prediction',
    category: 'AI / ML',
    tags: ['Python', 'Google Colab', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    shortDescription: 'Comprehensive exploratory data analysis and comparative machine learning study on cardiovascular patient indicators conducted inside Google Colab.',
    purpose: 'Investigates how patient biometric measurements (blood pressure, cholesterol, glucose, age, lifestyle) correlate with cardiovascular disease risk and compares algorithm behaviors.',
    myRole: 'Data Analysis & Model Exploration',
    myContribution: [
      'Performed data cleaning, outlier detection, and missing value imputation across clinical records',
      'Created exploratory visualizations including correlation heatmaps, box plots, and feature distributions',
      'Trained and comparatively evaluated 5 distinct classification algorithms using identical test partitions',
      'Analyzed precision, recall, and confusion matrices to understand medical false-negative impacts'
    ],
    technologies: ['Python', 'Google Colab', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    algorithmsExplored: [
      'Logistic Regression',
      'Decision Tree Classifier',
      'Random Forest Classifier',
      'K-Nearest Neighbors (KNN)',
      'Support Vector Machine (SVM)'
    ],
    whatILearned: [
      'Why minimizing false negatives in medical diagnostics is more critical than raw overall accuracy',
      'How non-linear algorithms handle correlated biometric markers compared to linear baselines',
      'The importance of feature scaling when deploying distance-sensitive algorithms like KNN and SVM'
    ],
    problem: 'Cardiovascular illnesses often develop silently without overt symptoms, requiring multi-parameter clinical analysis to assess underlying cardiac risk.',
    solution: 'A structured exploratory analysis and multi-model benchmark pipeline identifying primary biometric risk contributors and comparing model prediction behaviors.',
    projectLink: '',
    githubLink: '',
    demoLink: ''
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    status: 'HANDS-ON',
    description: 'Core programming language for machine learning, data exploration, scripting, and backend API integration.',
    relatedProjects: ['Student Placement Predictor', 'Cardiovascular Disease Prediction', 'CCTV Attendance System'],
    relatedTools: ['VS Code', 'Google Colab', 'Jupyter'],
    accentColor: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Java',
    category: 'Programming',
    status: 'WORKING KNOWLEDGE',
    description: 'Object-oriented programming, data structures, and core backend logic; certified via NPTEL Elite Certification.',
    relatedProjects: ['NPTEL Elite Certification in Java', 'Object Oriented Programming Labs'],
    relatedTools: ['Eclipse', 'JDK', 'VS Code'],
    accentColor: 'from-orange-500 to-red-500'
  },

  // Web
  {
    name: 'HTML5 & CSS3',
    category: 'Web',
    status: 'HANDS-ON',
    description: 'Modern semantic markup, responsive flexbox and grid layouts, animations, and accessible styling.',
    relatedProjects: ['CCTV Attendance System Frontend', 'Pinnacle Labs Internship'],
    relatedTools: ['VS Code', 'Chrome DevTools'],
    accentColor: 'from-pink-500 to-rose-500'
  },
  {
    name: 'JavaScript',
    category: 'Web',
    status: 'HANDS-ON',
    description: 'DOM manipulation, asynchronous fetch APIs, event listeners, dynamic UI rendering, and TTS integration.',
    relatedProjects: ['CCTV Attendance Dashboard', 'Pinnacle Labs Project'],
    relatedTools: ['ES6+', 'Chrome DevTools'],
    accentColor: 'from-amber-400 to-yellow-600'
  },

  // Database
  {
    name: 'MySQL & SQL',
    category: 'Database',
    status: 'HANDS-ON',
    description: 'Relational database schema design, queries, table joins, indexing, and persistent attendance logs.',
    relatedProjects: ['CCTV Attendance Monitoring System', 'Database Engineering Labs'],
    relatedTools: ['MySQL Workbench', 'phpMyAdmin'],
    accentColor: 'from-sky-500 to-blue-600'
  },

  // AI & ML
  {
    name: 'Machine Learning',
    category: 'AI / Machine Learning',
    status: 'HANDS-ON',
    description: 'Supervised learning, classification, regression, model evaluation metrics, and hyperparameter tuning.',
    relatedProjects: ['Student Placement Predictor', 'Cardiovascular Disease Prediction', 'Corizo AI Internship'],
    relatedTools: ['Scikit-learn', 'Google Colab'],
    accentColor: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Deep Learning Concepts',
    category: 'AI / Machine Learning',
    status: 'LEARNING',
    description: 'Feedforward neural networks, activation functions, loss optimization, and image representation.',
    relatedProjects: ['Infosys Springboard AI/DL', 'Corizo Edutech AI Labs'],
    relatedTools: ['Neural Networks', 'Keras'],
    accentColor: 'from-violet-500 to-purple-600'
  },
  {
    name: 'Scikit-learn',
    category: 'AI / Machine Learning',
    status: 'HANDS-ON',
    description: 'Pipeline building, train-test splitting, cross-validation, Random Forest, Logistic Regression, and SVM.',
    relatedProjects: ['Student Placement Predictor', 'Cardiovascular Prediction', 'Corizo Internship'],
    relatedTools: ['Python', 'NumPy'],
    accentColor: 'from-blue-500 to-teal-500'
  },

  // Data Science
  {
    name: 'Pandas',
    category: 'Data Science',
    status: 'HANDS-ON',
    description: 'DataFrame filtering, grouping, aggregation, missing data handling, and tabular feature engineering.',
    relatedProjects: ['Cardiovascular Disease Study', 'Placement Predictor', 'Axcentra Python Internship'],
    relatedTools: ['Jupyter', 'Colab'],
    accentColor: 'from-indigo-500 to-cyan-500'
  },
  {
    name: 'NumPy',
    category: 'Data Science',
    status: 'HANDS-ON',
    description: 'N-dimensional array manipulations, vectorized mathematical operations, matrix computations, and slicing.',
    relatedProjects: ['Corizo AI Internship', 'Axcentra Internship', 'Placement Predictor'],
    relatedTools: ['Python', 'IPython'],
    accentColor: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'Matplotlib',
    category: 'Data Science',
    status: 'HANDS-ON',
    description: 'Data visualization, scatter plots, correlation heatmaps, feature histograms, and exploratory figures.',
    relatedProjects: ['Cardiovascular Disease EDA', 'Axcentra Python Visuals'],
    relatedTools: ['Pyplot', 'Seaborn'],
    accentColor: 'from-teal-500 to-cyan-600'
  },

  // Tools
  {
    name: 'Git & GitHub',
    category: 'Tools',
    status: 'HANDS-ON',
    description: 'Version control, commit hygiene, branch navigation, and open-source project repository tracking.',
    relatedProjects: ['Mounika-reddy321 GitHub Profile', 'Collaborative Team Repositories'],
    relatedTools: ['Git CLI', 'GitHub Desktop'],
    accentColor: 'from-slate-600 to-slate-900'
  },
  {
    name: 'Visual Studio Code',
    category: 'Tools',
    status: 'HANDS-ON',
    description: 'Primary local integrated development environment for Python, web frontend, and debugging.',
    relatedProjects: ['All personal and academic development workflows'],
    relatedTools: ['VS Code Extensions', 'Integrated Terminal'],
    accentColor: 'from-blue-500 to-sky-600'
  },
  {
    name: 'Google Colab',
    category: 'Tools',
    status: 'HANDS-ON',
    description: 'Cloud Jupyter notebook environment for rapid data exploration, model prototyping, and GPU computation.',
    relatedProjects: ['Cardiovascular Disease Prediction', 'Corizo AI Labs'],
    relatedTools: ['Google Drive', 'Cloud Runtime'],
    accentColor: 'from-amber-500 to-orange-600'
  },
  {
    name: 'Google AI Studio',
    category: 'Tools',
    status: 'PRACTICING',
    description: 'Cloud workspace for prototyping intelligent algorithms, model testing, and developer experimentation.',
    relatedProjects: ['AI Prototyping Experiments', 'Machine Learning Models'],
    relatedTools: ['AI Studio Workbench'],
    accentColor: 'from-purple-500 to-indigo-600'
  },

  // Low Code
  {
    name: 'Appian',
    category: 'Low Code',
    status: 'PRACTICING',
    description: 'Enterprise low-code platform for rapid business process management, records, and digital workflows.',
    relatedProjects: ['Hospital Management System', 'Appian Academic Practice'],
    relatedTools: ['Appian Designer', 'Cloud Environment'],
    accentColor: 'from-violet-600 to-fuchsia-600'
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: 'corizo-edutech',
    company: 'Corizo Edutech',
    role: 'Artificial Intelligence Intern',
    duration: 'July 2025 – August 2025',
    type: 'Virtual Internship',
    statusLabel: 'Completed',
    description: 'Completed a 4-week virtual internship focused on Artificial Intelligence using Python, covering exploratory data manipulation and core machine learning classifiers.',
    tools: ['NumPy', 'Pandas', 'Scikit-learn', 'Python'],
    experiencePoints: [
      'Performed exploratory data analysis and structured data cleaning on sample business datasets',
      'Built and evaluated baseline machine learning models for predictive classification',
      'Practiced neural network concepts and basic layer configurations using modern deep learning libraries',
      'Participated in weekly code reviews and project submission assessments'
    ],
    learnings: [
      'Translating raw datasets into preprocessed training matrices suitable for ML algorithms',
      'Distinguishing when to deploy traditional linear classifiers versus neural architectures',
      'Working under set project deadlines within a structured virtual cohort'
    ]
  },
  {
    id: 'axcentra',
    company: 'Axcentra',
    role: 'Python Programming Intern',
    duration: 'January 2026 – March 2026',
    type: 'Practical Developer Internship',
    statusLabel: 'Completed',
    description: 'Developed Python programs to solve practical computational problems and automate repetitive data handling tasks.',
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Automation Scripts'],
    experiencePoints: [
      'Engineered automated Python scripts for structured CSV data extraction, cleaning, and transformation',
      'Generated visual metric reports and exploratory charts utilizing Matplotlib and Pandas',
      'Wrote modular, reusable Python functions following clean code standards and exception handling',
      'Demonstrated data automation pipelines solving assigned real-world operational problems'
    ],
    learnings: [
      'Automating manual tabular workflows through robust Python scripting',
      'Creating clear, non-misleading visual data representations for technical and non-technical viewers',
      'Writing testable, defensive Python code with proper exception management'
    ]
  },
  {
    id: 'pinnacle-labs',
    company: 'Pinnacle Labs',
    role: 'Web Development Intern',
    duration: 'Hands-on Technical Internship',
    type: 'Frontend Engineering Internship',
    statusLabel: 'Completed',
    description: 'Worked on a web development project using HTML, CSS and JavaScript and gained practical experience in modern frontend development and responsive interfaces.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git'],
    experiencePoints: [
      'Developed responsive multi-page web interfaces using semantic HTML5 and custom CSS3',
      'Implemented client-side interactivity and event-driven DOM manipulations with vanilla JavaScript',
      'Optimized layout responsiveness across mobile, tablet, and desktop viewports',
      'Practiced collaborative code versioning using Git branching workflows'
    ],
    learnings: [
      'Fundamental principles of clean semantic web markup and CSS flexbox/grid layout engines',
      'Event-driven programming patterns in browser-native JavaScript',
      'Cross-browser visual verification and debugging with browser developer tools'
    ]
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'nptel-java',
    name: 'Programming in Java',
    organization: 'NPTEL (IIT Kharagpur)',
    skillArea: 'Object Oriented Programming & Java',
    grade: 'Elite Certification',
    year: '2024',
    certificateLink: '',
    highlights: ['Rigorous 12-week computer science course', 'Proctored national examination', 'Elite grade distinction']
  },
  {
    id: 'corizo-ai-web',
    name: 'Artificial Intelligence and Web Development',
    organization: 'Corizo Edutech',
    skillArea: 'AI & Full Stack Concepts',
    year: '2025',
    certificateLink: '',
    highlights: ['Machine learning workflow training', 'Frontend web development integration', 'Hands-on project delivery']
  },
  {
    id: 'linux-nodejs',
    name: 'Introduction to Node.js',
    organization: 'The Linux Foundation',
    skillArea: 'Backend & JavaScript Runtimes',
    year: '2025',
    certificateLink: '',
    highlights: ['Server-side JavaScript mechanics', 'Asynchronous event loops and package ecosystems']
  },
  {
    id: 'cisco-python',
    name: 'Python Essentials',
    organization: 'Cisco Networking Academy',
    skillArea: 'Python Fundamentals & Data Structures',
    year: '2024',
    certificateLink: '',
    highlights: ['Control flow, data structures, and functions', 'Algorithmic problem-solving in Python']
  },
  {
    id: 'infosys-ai-suite',
    name: 'AI, Machine Learning & Deep Learning Suite',
    organization: 'Infosys Springboard',
    skillArea: 'Artificial Intelligence & Machine Learning',
    year: '2025',
    certificateLink: '',
    highlights: ['Comprehensive multi-module AI curriculum', 'Deep Learning & Neural Network Fundamentals', 'Data Preprocessing & Classification Workflows']
  },
  {
    id: 'axcentra-python',
    name: 'Python Programming (AICTE Approved)',
    organization: 'Axcentra (AICTE)',
    skillArea: 'Practical Python Development & Data Analysis',
    year: '2026',
    certificateLink: '',
    highlights: ['AICTE recognized certification', 'Real-world data manipulation with Pandas & NumPy']
  },
  {
    id: 'aim-fullstack-python',
    name: 'Full Stack Python Development',
    organization: 'AIM Upskill Technology',
    skillArea: 'Full Stack Python & Web Architectures',
    year: '2025',
    certificateLink: '',
    highlights: ['Python backend mechanics with web views', 'Database connectivity fundamentals']
  },
  {
    id: 'simplilearn-ai',
    name: 'Introduction to Artificial Intelligence',
    organization: 'Simplilearn',
    skillArea: 'AI Foundations & Modern Paradigms',
    year: '2024',
    certificateLink: '',
    highlights: ['Search algorithms, heuristics, and machine learning overviews']
  },
  {
    id: 'google-cloud-badges',
    name: 'Google Cloud Learning Badges & Labs',
    organization: 'Google Cloud',
    skillArea: 'Cloud Computing & Infrastructure',
    year: '2024 - 2025',
    certificateLink: '',
    highlights: ['Hands-on Qwiklabs completion', 'Cloud console navigation and service architectures']
  },
  {
    id: 'aws-workshop',
    name: 'AWS Cloud Fundamentals Workshop',
    organization: 'Amazon Web Services (AWS)',
    skillArea: 'Cloud Services & Compute',
    year: '2024',
    certificateLink: '',
    highlights: ['Hands-on workshop covering S3, EC2, and cloud hosting architecture']
  },
  {
    id: 'web-dev-cert',
    name: 'Web Development Certificate of Completion',
    organization: 'Technical Training Academy',
    skillArea: 'Frontend Engineering',
    year: '2025',
    certificateLink: '',
    highlights: ['HTML5, CSS3, JavaScript, and responsive layout design']
  }
];

export const ATTENDANCE_ARCHITECTURE_STEPS = [
  {
    step: '01',
    name: 'RTSP / CCTV Stream',
    short: 'Video Input Source',
    description: 'High-definition video feed captured continuously from ceiling-mounted classroom CCTV cameras over RTSP protocol.',
    details: 'Streams continuous H.264/H.265 encoded frames via local network stream URLs.'
  },
  {
    step: '02',
    name: 'Frame Extraction & Buffer',
    short: 'Preprocessing',
    description: 'Video frames extracted at controlled intervals, scaled, normalized, and buffered to manage compute bandwidth.',
    details: 'Decimates redundant frames to reduce GPU/CPU load while ensuring student detection window coverage.'
  },
  {
    step: '03',
    name: 'Face Detection',
    short: 'Computer Vision',
    description: 'Locates facial bounding boxes across multiple students simultaneously within each processed classroom frame.',
    details: 'Identifies all candidate student faces regardless of slight head tilts or distance variations.'
  },
  {
    step: '04',
    name: 'Face Recognition',
    short: 'Deep Learning',
    description: 'Extracts 128-dimensional facial embedding vectors and compares cosine distances against registered student encodings.',
    details: 'Calculates high-dimensional vector similarities against the pre-enrolled student database.'
  },
  {
    step: '05',
    name: 'Student ID Resolution',
    short: 'Identifier Matching',
    description: 'Maps verified embedding matches to registered university student roll numbers and classroom enrollments.',
    details: 'Associates the physical face with student profile, registered branch, section, and semester.'
  },
  {
    step: '06',
    name: 'Attendance Validation',
    short: 'Business Logic',
    description: 'Validates detection timestamps against university timetable schedules, class hours, and deduplicates repeated matches.',
    details: 'Enforces minimum dwell thresholds to prevent false positives from transient doorway passes.'
  },
  {
    step: '07',
    name: 'MySQL Database',
    short: 'Persistent Storage',
    description: 'Records verified attendance status, date, period number, camera ID, and timestamps in structured SQL tables.',
    details: 'Enforces referential integrity between students, faculty schedules, and daily attendance logs.'
  },
  {
    step: '08',
    name: 'Faculty Dashboard (My Role)',
    short: 'Responsive UI & Reports',
    description: 'My primary contribution: built the responsive dashboard displaying live student presence, period stats, and absent alerts.',
    details: 'Delivers clear visual tables, search filters, and exportable logs built with HTML, CSS, and JavaScript.'
  },
  {
    step: '09',
    name: 'Reports & Notifications',
    short: 'Alerts & Records',
    description: 'Generates automated daily/weekly attendance percentage summaries and triggers absent alert notification concepts.',
    details: 'Allows professors to download formal attendance rosters and review discrepancy disputes.'
  }
];

export const PROBLEM_TO_SOLUTION_CARDS = [
  {
    id: 'problem-1',
    number: '01',
    domain: 'Placement Analytics',
    problemTitle: 'Uncertain Placement Readiness',
    problemDescription: 'Students approaching campus placement drives frequently have no structured feedback on whether their CGPA, coding skills, and internship profile meet target recruitment criteria.',
    solutionTitle: 'Student Placement Predictor',
    solutionDescription: 'An intelligent ML classification system that evaluates multiple academic and skill factors to predict readiness and outputs an actionable Personalized Learning Roadmap.',
    projectRef: 'student-placement-predictor',
    accent: 'from-blue-600 to-cyan-500'
  },
  {
    id: 'problem-2',
    number: '02',
    domain: 'Campus Automation',
    problemTitle: 'Time-Consuming Manual Attendance',
    problemDescription: 'Calling out student names every single lecture hour consumes valuable class time, permits student proxies, and creates paper records that are hard to audit.',
    solutionTitle: 'CCTV / RTSP Attendance System',
    solutionDescription: 'Automated camera stream face recognition coupled with an intuitive, responsive faculty dashboard (my contribution) for seamless real-time attendance logging.',
    projectRef: 'cctv-rtsp-attendance-system',
    accent: 'from-purple-600 to-indigo-500'
  },
  {
    id: 'problem-3',
    number: '03',
    domain: 'Healthcare Operations',
    problemTitle: 'Fragmented Hospital Administrative Processes',
    problemDescription: 'Paper-based records and disconnected scheduling systems lead to overlapping doctor appointments, delayed patient intake, and missing medical logs.',
    solutionTitle: 'Appian Hospital Management System',
    solutionDescription: 'A rapid low-code enterprise solution with responsive Appian interfaces uniting patient registration, doctor schedules, and appointment management into cohesive records.',
    projectRef: 'hospital-management-system',
    accent: 'from-violet-600 to-pink-500'
  },
  {
    id: 'problem-4',
    number: '04',
    domain: 'Preventive Healthcare',
    problemTitle: 'Hidden Cardiovascular Risk Factors',
    problemDescription: 'High blood pressure and subtle cholesterol variations often go unnoticed without consolidated multi-factor analysis across demographic and biometric markers.',
    solutionTitle: 'Cardiovascular Risk Modeling',
    solutionDescription: 'A rigorous exploratory data analysis and multi-model benchmark in Google Colab evaluating algorithms to uncover the strongest biometric predictors.',
    projectRef: 'cardiovascular-disease-prediction',
    accent: 'from-teal-600 to-cyan-500'
  }
];

export const MY_CONTRIBUTIONS_BREAKDOWN = [
  {
    area: 'Frontend & Dashboard Development',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    focus: 'Building clean, fast, accessible dashboards, real-time student monitoring interfaces, period tables, and interactive data forms.',
    featuredIn: 'CCTV Attendance System Dashboard, Pinnacle Labs Projects'
  },
  {
    area: 'AI & Machine Learning Foundations',
    tools: ['Python', 'Scikit-learn', 'Machine Learning', 'Classification Algorithms'],
    focus: 'Data preprocessing, feature encoding, training classification models, evaluating confusion matrices, and model comparison.',
    featuredIn: 'Placement Predictor, Cardiovascular Disease Study, Corizo Internship'
  },
  {
    area: 'Data Analysis & Manipulation',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Exploratory Data Analysis'],
    focus: 'Dataset hygiene, tabular aggregations, missing value handling, correlation matrix generation, and automated scripts.',
    featuredIn: 'Axcentra Python Internship, Colab Research Notebooks'
  },
  {
    area: 'Low-Code Enterprise Development',
    tools: ['Appian Platform', 'Appian Interfaces', 'Appian Records', 'Relational DB'],
    focus: 'Configuring enterprise business interfaces, medical appointment workflows, record relationships, and low-code integrations.',
    featuredIn: 'Hospital Management System on Appian'
  },
  {
    area: 'Computer Vision & Database Integration',
    tools: ['Computer Vision Streams', 'MySQL', 'Relational Schema', 'UI Integration'],
    focus: 'Understanding video frame streams, face bounding boxes, relational table schemas, and connecting frontends to backend endpoints.',
    featuredIn: 'CCTV Attendance Monitoring System'
  }
];

export const AI_THINKING_APPROACH = [
  {
    step: '01',
    phase: 'UNDERSTAND',
    title: 'Deconstruct the Real Problem',
    description: 'Identify the exact human or operational challenge before writing any code. Clarify objectives, constraints, and success measures.'
  },
  {
    step: '02',
    phase: 'COLLECT DATA',
    title: 'Gather & Inspect Data Sources',
    description: 'Determine what features, camera feeds, or user inputs are necessary. Check for missing fields, biases, and schema consistency.'
  },
  {
    step: '03',
    phase: 'ANALYZE',
    title: 'Exploratory Analysis & Relationships',
    description: 'Visualize correlations, examine distributions with Pandas and Matplotlib, and isolate key predictors that drive outcomes.'
  },
  {
    step: '04',
    phase: 'BUILD',
    title: 'Construct Models & User Interfaces',
    description: 'Train machine learning baselines or craft responsive frontend dashboards tailored to the end user who needs the information.'
  },
  {
    step: '05',
    phase: 'TEST',
    title: 'Validate Against Real Scenarios',
    description: 'Evaluate confusion matrices, test edge cases in responsive views, verify database operations, and validate error messages.'
  },
  {
    step: '06',
    phase: 'IMPROVE',
    title: 'Refine, Optimize & Iterate',
    description: 'Gather feedback, refine user workflows, document architecture decisions, and plan future technical enhancements.'
  }
];

export const LEARNING_LAB_AREAS = [
  { name: 'Python & Algorithms', status: 'HANDS-ON', focus: 'Automation scripts, algorithm optimization, and clean modular code' },
  { name: 'Machine Learning Pipelines', status: 'PRACTICING', focus: 'Feature engineering, model tuning, and evaluation metrics' },
  { name: 'SQL & Database Design', status: 'HANDS-ON', focus: 'Relational table normalization, complex queries, and data integrity' },
  { name: 'Data Visualization & EDA', status: 'HANDS-ON', focus: 'Visualizing patterns, distribution checks, and correlation matrices' },
  { name: 'Appian Low-Code Platform', status: 'PRACTICING', focus: 'Application form building, record relationships, and enterprise workflows' },
  { name: 'Frontend Web Engineering', status: 'HANDS-ON', focus: 'Responsive layouts, interactive UI states, and accessibility standards' }
];

export const TECH_ECOSYSTEM_NODES = [
  { id: 'python', label: 'Python', category: 'Language', related: ['student-placement-predictor', 'cardiovascular-disease-prediction', 'cctv-rtsp-attendance-system', 'corizo-edutech', 'axcentra'] },
  { id: 'ml', label: 'Machine Learning', category: 'AI', related: ['student-placement-predictor', 'cardiovascular-disease-prediction', 'corizo-edutech'] },
  { id: 'data', label: 'Data Science', category: 'Analytics', related: ['cardiovascular-disease-prediction', 'student-placement-predictor', 'axcentra'] },
  { id: 'cv', label: 'Computer Vision', category: 'AI', related: ['cctv-rtsp-attendance-system'] },
  { id: 'sql', label: 'MySQL / Database', category: 'Data', related: ['cctv-rtsp-attendance-system', 'hospital-management-system'] },
  { id: 'web', label: 'Web / Frontend', category: 'Frontend', related: ['cctv-rtsp-attendance-system', 'pinnacle-labs'] },
  { id: 'appian', label: 'Appian Low-Code', category: 'Enterprise', related: ['hospital-management-system'] }
];
