export const personalInfo = {
  name: "Trần Dương Gia Bảo",
  displayName: "Gia Bao",
  role: "Software Engineering Student | Backend & AI Enthusiast",
  location: "Ho Chi Minh City, Vietnam",
  school: "University of Industry and Trade (HUIT)",
  major: "Information Technology / Applied Computing",
  email: "tranduonggiabao0501email@gmail.com",
  github: "https://github.com/GiaBao051",
  linkedin: "https://linkedin.com/in/your-linkedin",
  tagline: "I build reliable software systems and intelligent digital experiences.",
  summary:
    "I am a software engineering student focused on building reliable systems with strong fundamentals in backend development, object-oriented design, clean architecture, and relational databases. Alongside academic projects, I actively explore applied AI and computer vision through hands-on experimentation and technical competitions.",
  aboutParagraphs: [
    "I am Trần Dương Gia Bảo, an IT student at HUIT with an engineering-first mindset. I care about designing systems that are clear, maintainable, and practical for real users.",
    "My core direction is backend development with C#, ASP.NET Core, and relational database design. I enjoy translating business rules into structured logic, from API flow to data modeling.",
    "Beyond software fundamentals, I am expanding into applied AI and computer vision through competitions and experiments. My goal is to grow into an impact-driven engineer who can build dependable products end-to-end."
  ]
};

export const socials = [
  { label: "GitHub", href: personalInfo.github },
  { label: "Email", href: `mailto:${personalInfo.email}` },
  { label: "LinkedIn", href: personalInfo.linkedin }
];

export const highlights = [
  "Backend Development",
  ".NET / ASP.NET Core",
  "OOP & Clean Architecture",
  "SQL Server / T-SQL",
  "Applied AI & Computer Vision"
];

export const journey = [
  {
    year: "2022 - Present",
    title: "Software Engineering Foundation at HUIT",
    description:
      "Built core knowledge in programming, object-oriented design, software engineering principles, and relational databases through coursework and lab practice."
  },
  {
    year: "2023 - 2024",
    title: "Academic Projects and System Thinking",
    description:
      "Developed project-based solutions with focus on business flow, data layer design, and backend-oriented logic. Practiced turning requirements into implementation plans."
  },
  {
    year: "2024 - 2025",
    title: "Technical Competitions and AI Exposure",
    description:
      "Participated in database and applied AI competition tracks, gaining hands-on experience with data-centric problem solving and practical experimentation."
  },
  {
    year: "Now",
    title: "Growing Toward Impact-Driven Engineering",
    description:
      "Continuing to deepen backend architecture fundamentals while expanding into computer vision and intelligent systems for real-world use cases."
  }
];

export const education = [
  {
    title: "University of Industry and Trade (HUIT)",
    subtitle: "Information Technology / Applied Computing",
    extra: "Software Engineering direction"
  }
];

export const skills = [
  {
    title: "Languages",
    items: ["C#", "Java", "C++", "JavaScript", "HTML/CSS", "SQL"]
  },
  {
    title: "Backend & Architecture",
    items: [
      ".NET",
      "ASP.NET Core",
      "OOP",
      "Clean Architecture",
      "REST API fundamentals",
      "Business Logic Design"
    ]
  },
  {
    title: "Database",
    items: [
      "SQL Server",
      "T-SQL",
      "Relational Database Design",
      "Query Optimization basics"
    ]
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Responsive Web Design"]
  },
  {
    title: "AI / Data / Computer Vision",
    items: [
      "YOLO",
      "ViT",
      "SAM-ViT",
      "Applied AI Research",
      "Image Classification",
      "Computer Vision fundamentals"
    ]
  },
  {
    title: "Tools / Workflow",
    items: ["Git", "GitHub", "Firebase", "VS Code", "Visual Studio"]
  }
];

export const projects = [
  {
    title: "GIBOR Coffee Shop Management",
    role: "Academic Project | Frontend Logic + Business Flow Implementation",
    summary:
      "Designed and implemented an academic coffee shop management web system that models a practical ordering workflow from menu browsing to checkout and loyalty handling.",
    contributions: [
      "Built cart and order management flow with clear state transitions",
      "Implemented payment-related logic and user-facing checkout behavior",
      "Connected Firebase authentication to secure account-based actions",
      "Handled business logic and data interactions for menu, orders, and points",
      "Refined dark-mode oriented UI styling for a polished user experience"
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firebase", "SQL assets"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact:
      "Strengthened my ability to model real-world commerce behavior and convert requirements into stable front-end business logic."
  },
  {
    title: "YOLOv8 Detect Sign Language",
    role: "Computer Vision Experiment | Applied AI Learning",
    summary:
      "Developed a practical computer vision pipeline for real-time sign language detection using YOLOv8 with notebook-based experimentation and webcam inference scripts.",
    contributions: [
      "Organized model experimentation flow through Jupyter notebooks",
      "Integrated webcam input for real-time prediction testing",
      "Managed model weight usage and iterative testing",
      "Documented practical learnings around detection quality and pipeline behavior"
    ],
    stack: ["Python", "Jupyter Notebook", "YOLOv8", "OpenCV"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact:
      "Gave me hands-on experience in vision-based interaction and reinforced a research-to-implementation mindset in AI projects."
  },
  {
    title: "BE_NET",
    role: "Backend Practice Repository | .NET Learning Lab",
    summary:
      "A backend-focused practice repository used to strengthen C# and .NET fundamentals through structured coding exercises and service-oriented thinking.",
    contributions: [
      "Practiced organizing backend project structure and logical layering",
      "Focused on business logic clarity and maintainable coding style",
      "Improved understanding of API-ready architecture and backend flow"
    ],
    stack: ["C#", ".NET", "Backend fundamentals"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact:
      "Built a stronger foundation for designing clean backend components before scaling into larger product systems."
  },
  {
    title: "QuanLiBaiDoXe",
    role: "Final-Term DSA Project | C++",
    summary:
      "Implemented a parking lot management problem with data structures and algorithms, focusing on system logic, constraints handling, and operational flow.",
    contributions: [
      "Applied DSA concepts to represent parking operations",
      "Designed control flow for vehicle in-out and slot management",
      "Practiced translating problem statements into deterministic logic"
    ],
    stack: ["C++", "Data Structures", "Algorithms"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact:
      "Improved problem-solving discipline and strengthened my ability to reason about system-level behavior through algorithmic modeling."
  },
  {
    title: "Web_Designer",
    role: "Frontend Fundamentals Practice",
    summary:
      "A structured repository of HTML/CSS learning sessions, focused on layout mechanics, responsive basics, and reusable UI structures.",
    contributions: [
      "Practiced building page structures from scratch",
      "Explored responsive behavior across screen sizes",
      "Improved consistency in styling and visual hierarchy"
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact:
      "Established a reliable frontend base that supports clearer collaboration with backend and product workflows."
  }
];

export const additionalProjects = ["HUIMiner", "CLHMiner", "FEACP"];

export const achievements = [
  {
    title: "Encouragement Prize - Database Design Challenge at HUIT",
    context:
      "Recognized in a university-level database design challenge focused on structured thinking and practical data modeling.",
    signal:
      "Reflects strong problem-solving fundamentals and initiative in engineering competitions."
  },
  {
    title: "Final Round Participant - Applied AI / Data Science Tracks",
    context:
      "Competed in practical challenge themes including Rice Pest Classification & Segmentation and Skin Cancer Classification.",
    signal:
      "Shows willingness to apply AI techniques to meaningful real-world problems beyond standard coursework."
  }
];
