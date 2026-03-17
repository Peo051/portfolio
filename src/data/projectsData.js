import giborThumbnail from "../assets/project-gibor.jpg";
import yoloThumbnail from "../assets/project-yolo.jpg";
import parkingThumbnail from "../assets/project-parking.jpg";

export const projectsData = [
  {
    id: "gibor-coffee-shop",
    title: "GIBOR Coffee Shop",
    category: "Academic Commerce Workflow Project",
    valueSummary: "Translated a coffee shop business workflow into a structured ordering and loyalty system with consistent data flow.",
    thumbnail: giborThumbnail,
    github: "PASTE_REAL_LINK_HERE_GIBOR",
    problemContext:
      "The project started from a realistic academic scenario: a coffee shop system needed coherent menu browsing, cart behavior, ordering, payment handling, and user identity continuity.",
    whatIBuilt:
      "Built core modules for cart workflow, order management, payment flow handling, authentication-aware actions with Firebase, and loyalty point logic tied to user activity.",
    keyContributions: [
      "Designed the data layer and business flow transitions for cart-to-order lifecycle.",
      "Implemented order and payment handling to keep operational state consistent.",
      "Structured loyalty point logic based on user transactions.",
      "Contributed dark mode-oriented UI implementation for better visual consistency."
    ],
    whatILearned:
      "I learned how to convert business requirements into stable system logic and keep multiple flows synchronized across identity, order state, and data persistence.",
    techStack: ["JavaScript", "Firebase", "HTML", "CSS", "Relational Data Modeling"]
  },
  {
    id: "yolov8-sign-language",
    title: "YOLOv8 Detect Sign Language",
    category: "Applied AI / Computer Vision Project",
    valueSummary: "Built a practical detection pipeline to explore real-time sign language recognition with iterative model experimentation.",
    thumbnail: yoloThumbnail,
    github: "PASTE_REAL_LINK_HERE_YOLOV8",
    problemContext:
      "The objective was to explore a practical computer vision workflow where model behavior, confidence thresholds, and inference performance affect real-time usability.",
    whatIBuilt:
      "Implemented a YOLOv8-based pipeline for detection experiments and webcam inference, including model testing loops and practical evaluation of detection outputs.",
    keyContributions: [
      "Set up and iterated on model-based detection experiments.",
      "Built scripts for real-time inference and response monitoring.",
      "Adjusted confidence behavior and tested detection consistency.",
      "Documented findings to bridge learning with implementation decisions."
    ],
    whatILearned:
      "I gained hands-on understanding of how experimental AI workflows connect to software implementation quality, especially in repeatability and practical evaluation.",
    techStack: ["Python", "YOLOv8", "OpenCV", "Jupyter", "Model Experimentation"]
  },
  {
    id: "parking-lot-management",
    title: "Parking Lot Management System",
    category: "C++ Academic Systems Logic Project",
    valueSummary: "Applied structured problem solving and algorithmic thinking to build deterministic parking management operations.",
    thumbnail: parkingThumbnail,
    github: "PASTE_REAL_LINK_HERE_PARKING",
    problemContext:
      "This project focused on turning operational parking rules into clear system logic, with reliable flow handling for vehicle entry, exit, and slot usage.",
    whatIBuilt:
      "Built a C++ management flow model for slot allocation, occupancy control, and transaction-like state updates under defined constraints.",
    keyContributions: [
      "Designed entry and exit flow with consistent slot-state transitions.",
      "Applied data structures and algorithmic reasoning for system state tracking.",
      "Implemented predictable control logic for operational scenarios.",
      "Refined code organization for clarity and maintainability."
    ],
    whatILearned:
      "I strengthened my ability to model real operational logic with structured programming and reason carefully about state transitions and edge cases.",
    techStack: ["C++", "Data Structures", "Algorithms", "System Logic"]
  }
];

export const additionalExplorations = [".NET backend practice", "Java coursework implementations"];
