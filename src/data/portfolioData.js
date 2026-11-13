/**
 * Centralized Portfolio Data for Khushi Tiwari
 * All information, projects, skills, and links can be maintained directly here.
 */

export const personalData = {
  name: "Khushi Tiwari",
  initials: "KT",
  title: "Aspiring Software Developer | Full Stack Developer",
  tagline: "I enjoy building meaningful digital experiences and developing practical software solutions.",
  email: "khushitiwari69120@gmail.com",
  location: "India",
  github: "https://github.com/TheKT-Github",
  linkedin: "https://linkedin.com/in/khushi-tiwari-908505280",
  resumePath: "/resume.pdf",
  profilePhoto: "/images/profile.jpg",
  availableForWork: true
};

export const aboutData = {
  paragraphs: [
    "I am Khushi Tiwari, a Computer Science graduate from GLA University, Mathura, with an interest in software development and building practical technology solutions.",
    "I enjoy working with frontend and backend technologies, developing full-stack applications, exploring databases, and solving programming problems.",
    "Through internships, professional experience, certifications, and personal projects, I continue to strengthen my understanding of modern software engineering practices."
  ],
  highlights: [
    {
      title: "Full Stack & Backend",
      description: "Hands-on experience building robust architectures with Java, Spring Boot, React, and Node.js."
    },
    {
      title: "AI-Powered Systems",
      description: "Developing intelligent applications using RAG, GenAI agents, and Google Gemini API integration."
    },
    {
      title: "Engineering Discipline",
      description: "Focus on clean OOP design, RBAC security, automated unit testing, and workflow optimization."
    }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "Angular", "HTML5", "CSS3", "JavaScript"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate", "Node.js", "Express.js", "Flask", "REST APIs"]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["Oracle SQL", "MySQL", "MongoDB", "H2"]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    skills: ["Git", "GitHub", "CI/CD (GitHub Actions)", "Docker", "Postman", "SonarQube", "AWS", "Terraform"]
  },
  {
    category: "AI & Testing",
    icon: "Bot",
    skills: ["NLP", "RAG", "Agentic AI", "JUnit", "Mockito", "API Testing", "Debugging", "Purple Fabric", "iTurmeric"]
  },
  {
    category: "Core Concepts",
    icon: "Cpu",
    skills: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems", "REST APIs", "RBAC", "SDLC"]
  }
];

export const experienceData = [
  {
    company: "Intellect Design Arena Ltd.",
    role: "Associate Consultant",
    location: "Chennai, India",
    duration: "June 2026 – August 2026",
    type: "Professional Experience",
    responsibilities: [
      "Developed enterprise application components using Java, Spring Boot, and Angular, following OOP principles and coding standards.",
      "Configured business workflows on iTurmeric, supporting workflow automation and SDLC activities with QA and architecture teams.",
      "Designed and deployed GenAI agents using Purple Fabric, gaining hands-on experience in agentic AI, multi-agent workflows, and AI governance."
    ],
    techTags: ["Java", "Spring Boot", "Angular", "iTurmeric", "Purple Fabric", "GenAI"]
  },
  {
    company: "Embrizon Technologies",
    role: "Web Development Intern",
    location: "Remote",
    duration: "May 2024 – July 2024",
    type: "Internship",
    responsibilities: [
      "Developed responsive web interfaces using React.js, JavaScript, HTML5, and CSS3, leveraging reusable components and modern frontend practices.",
      "Implemented interactive UI features and event handling.",
      "Applied debugging and testing practices to improve usability and maintainable code."
    ],
    techTags: ["React.js", "JavaScript", "HTML5", "CSS3"]
  }
];

export const projectsData = [
  {
    id: "stylesense-ai",
    title: "StyleSense AI",
    subtitle: "Fashion Feedback & Product Intelligence Platform",
    featured: true,
    badge: "AI & Full Stack",
    image: "/images/projects/stylesense.svg",
    description: "An end-to-end feedback intelligence platform that collects customer reviews and uses AI to extract actionable insights from fashion product feedback.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini API",
      "RAG",
      "Chart.js",
      "JWT",
      "PDFKit"
    ],
    keyFeatures: [
      "Aspect-level sentiment classification focusing on Fitting, Quality, and Fabric feedback.",
      "Automated spam detection and feedback sanitization engine.",
      "JWT-based authentication paired with role-based admin access control.",
      "RAG-based AI engine integrated with Google Gemini to generate comparative analytics.",
      "Business recommendations strictly grounded in retrieved customer reviews with validated citations.",
      "Interactive admin dashboards with complaint trend visualizations.",
      "Dynamic PDF and CSV export generation using PDFKit.",
      "Automated regression testing suite covering 700+ test assertions."
    ],
    problemStatement: "Fashion e-commerce platforms struggle with thousands of unstructured product reviews where critical product defects (such as seam issues or inconsistent sizing) get lost in generic star ratings.",
    solution: "StyleSense AI extracts structured aspect-level sentiments and applies Retrieval-Augmented Generation (RAG) on customer reviews to produce validated, cited merchant recommendations and automated trend reports.",
    myContribution: "Engineered the RAG pipeline and aspect-level classification engine using Google Gemini API and Node.js. Built JWT authentication with RBAC, integrated PDFKit report generation, and implemented automated regression testing covering 700+ assertions.",
    challenges: [
      "Mitigating hallucination in LLM synthesis by enforcing strict retrieval grounding.",
      "Engineering aspect-specific classification for complex fashion feedback with dual sentiments in a single sentence.",
      "Maintaining high-throughput report generation using asynchronous PDFKit compilation."
    ],
    githubUrl: "https://github.com/TheKT-Github/feedback-survey-system",
    liveUrl: null
  },
  {
    id: "priora",
    title: "Priora",
    subtitle: "Smart Task Prioritization System",
    featured: true,
    badge: "Enterprise Java & Algorithms",
    image: "/images/projects/priora.svg",
    description: "An enterprise task management platform that intelligently prioritizes tasks based on deadline urgency, task dependencies, stagnation, and assignee workload.",
    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Angular 16",
      "Oracle SQL",
      "Hibernate",
      "JUnit",
      "Mockito"
    ],
    keyFeatures: [
      "Dynamic Gravity Engine algorithm recalculating priorities based on urgency, dependency depth, and stagnation.",
      "Three-Zone Quantum Canvas (Critical Gravity, Active Orbit, Stable Backlog) for intuitive workload distribution.",
      "Dependency graph validation preventing circular workflow deadlocks.",
      "Assignee capacity balancing to avoid task stagnation and team burnout.",
      "Role-Based Access Control (RBAC) securely partitioning permissions across 4 distinct user tiers.",
      "Comprehensive RESTful backend API suite documented and validated with automated JUnit & Mockito tests."
    ],
    problemStatement: "Traditional task trackers rely on static priority flags (Low/Med/High) that fail to account for looming deadlines, blocked dependencies, or developer overload.",
    solution: "Priora computes a continuous gravity score using dynamic mathematical heuristics, automatically surfacing critical-path blockers into clear visual zones.",
    myContribution: "Architected the Dynamic Gravity Engine mathematical scoring algorithm in Spring Boot. Developed the Angular 16 Three-Zone Quantum Canvas dashboard, implemented RBAC security layer, and created comprehensive JUnit/Mockito test suites.",
    challenges: [
      "Designing an efficient priority recalculation engine that handles large dependency trees without performance degradation.",
      "Ensuring strict data consistency across Oracle SQL transactions during concurrent task reassignments.",
      "Achieving robust test coverage across all boundary conditions and permission gates."
    ],
    githubUrl: "https://github.com/TheKT-Github/Priora",
    liveUrl: null
  },
  {
    id: "attendflow",
    title: "AttendFlow",
    subtitle: "Leave Management System",
    featured: false,
    badge: "Full Stack Workflow",
    image: "/images/projects/attendflow.svg",
    description: "A web-based leave management application designed to streamline leave requests, approvals, and escalation workflows.",
    techStack: [
      "React.js",
      "JavaScript",
      "Python",
      "Flask",
      "REST APIs"
    ],
    keyFeatures: [
      "Dedicated employee interface for leave request submission with automatic balance checks.",
      "Multi-tier approval workflows supporting supervisor reviews and hierarchical approvals.",
      "Automated escalation triggers for unreviewed requests exceeding SLA thresholds.",
      "Dual client and server-side validation ensuring request compliance.",
      "Clean integration between React components and Flask REST endpoints."
    ],
    problemStatement: "Manual leave tracking through emails leads to approval delays, untracked absences, and missed escalation deadlines.",
    solution: "AttendFlow delivers a structured, transparent leave orchestration workflow with real-time status transitions and automated escalation.",
    myContribution: "Built the responsive leave application UI in React.js and connected it to Python Flask REST endpoints. Designed the multi-tier approval workflow logic and form validation rules.",
    challenges: [
      "Synchronizing client state with backend validation rules for variable leave allowances.",
      "Designing clean workflow transitions between employee submission and managerial escalation."
    ],
    githubUrl: null,
    githubPlaceholder: "Repository URL pending publication",
    liveUrl: null
  }
];

export const educationData = [
  {
    institution: "GLA University",
    location: "Mathura, Uttar Pradesh",
    degree: "Bachelor of Technology in Computer Science",
    duration: "Graduation: June 2026",
    details: "Focused on core computer science foundations including Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and full-stack software development."
  },
  {
    institution: "Kendriya Vidyalaya, BHU",
    location: "Varanasi, Uttar Pradesh",
    degree: "Secondary & Higher Secondary Education (Class X & Class XII)",
    duration: "Completed",
    details: "Built strong academic grounding in Mathematics, Physics, and foundational Computer Science concepts."
  }
];

export const certificationsData = [
  {
    title: "Purple Fabric Certification",
    category: "AI & Agents",
    description: "Agentic AI and multi-agent workflow development.",
    certificateUrl: "https://drive.google.com/file/d/10YKxUbaNNUdVI9_Ztfcto4Ycyc7pQ7Vt/view?usp=sharing"
  },
  {
    title: "iTurmeric Certification",
    category: "Enterprise Low-Code",
    description: "Low-code application development and workflow orchestration.",
    certificateUrl: "https://drive.google.com/file/d/1UVyh3GUENCVlZgT2sG1-IX1UC4wCyO6-/view?usp=sharing"
  },
  {
    title: "DevOps & Cloud Computing",
    category: "Cloud & CI/CD",
    description: "Completed training in cloud infrastructure and DevOps practices.",
    certificateUrl: "https://drive.google.com/file/d/14-orNGcTve0sEnxXDr81m4Soe01cUdrK/view?usp=sharing"
  },
  {
    title: "Web Development Certification",
    category: "Frontend",
    description: "Frontend development using modern web technologies.",
    certificateUrl: "https://drive.google.com/file/d/1PfONepI5L3ZAODXO_NRMU5PYNbw75HKP/view?usp=sharing"
  },
  {
    title: "Terraform Infrastructure Project Recognition",
    category: "Infrastructure as Code",
    description: "Recognized for developing a Terraform-based cloud infrastructure project.",
    certificateUrl: null
  }
];


export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];
