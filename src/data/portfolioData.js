const bi = (vi, en) => ({ vi, en });

export const personalInfo = {
  name: "Tran Duong Gia Bao",
  displayName: "Gia Bao",
  role: bi("Sinh viên Kỹ thuật Phần mềm | Định hướng Backend & AI", "Software Engineering Student | Backend & AI Focus"),
  location: bi("TP. Ho Chi Minh, Viet Nam", "Ho Chi Minh City, Vietnam"),
  school: bi("Đại học Công Thương TP.HCM (HUIT)", "University of Industry and Trade (HUIT)"),
  major: bi("Công nghệ Thông tin / Tin học ứng dụng", "Information Technology / Applied Computing"),
  email: "tranduonggiabao0501email@gmail.com",
  github: "https://github.com/GiaBao051",
  linkedin: "https://linkedin.com/in/your-linkedin",
  tagline: bi(
    "Xây dựng hệ thống phần mềm ổn định và sản phẩm số có tính ứng dụng cao.",
    "Building reliable software systems and practical digital products."
  ),
  summary: bi(
    "Mình tập trung vào backend, thiết kế hướng đối tượng, clean architecture và cơ sở dữ liệu quan hệ. Song song đó, mình chủ động mở rộng sang AI ứng dụng và computer vision qua dự án thực hành, cuộc thi và thử nghiệm kỹ thuật.",
    "I focus on backend development, object-oriented design, clean architecture, and relational databases. In parallel, I actively expand into applied AI and computer vision through hands-on projects, competitions, and experiments."
  ),
  aboutParagraphs: [
    bi(
      "Mình là Trần Dương Gia Bảo, sinh viên CNTT tại HUIT với tư duy kỹ sư: thiết kế hệ thống rõ ràng, dễ bảo trì, và giải quyết đúng nhu cầu người dùng.",
      "I am Tran Duong Gia Bao, an IT student at HUIT with an engineering mindset: clear system design, maintainable implementation, and practical user value."
    ),
    bi(
      "Hướng đi cốt lõi của mình là backend với C#, ASP.NET Core và mô hình dữ liệu quan hệ. Mình thích chuyển các quy tắc nghiệp vụ thành luồng API và data model có cấu trúc.",
      "My core direction is backend development with C#, ASP.NET Core, and relational data modeling. I enjoy translating business rules into structured API flow and system logic."
    ),
    bi(
      "Ngoài nền tảng phần mềm, mình đang mở rộng sang AI ứng dụng và thị giác máy tính. Mục tiêu là trở thành kỹ sư có thể triển khai sản phẩm end-to-end với chất lượng ổn định.",
      "Beyond software fundamentals, I am expanding into applied AI and computer vision. My goal is to become an impact-driven engineer who can deliver dependable end-to-end products."
    )
  ]
};

export const socials = [
  { id: "github", label: bi("GitHub", "GitHub"), href: personalInfo.github },
  { id: "email", label: bi("Email", "Email"), href: `mailto:${personalInfo.email}` },
  { id: "linkedin", label: bi("LinkedIn", "LinkedIn"), href: personalInfo.linkedin }
];

export const highlights = [
  bi("Phát triển Backend", "Backend Development"),
  bi(".NET / ASP.NET Core", ".NET / ASP.NET Core"),
  bi("OOP & Clean Architecture", "OOP & Clean Architecture"),
  bi("SQL Server / T-SQL", "SQL Server / T-SQL"),
  bi("AI ứng dụng & Computer Vision", "Applied AI & Computer Vision")
];

export const journey = [
  {
    year: "2022 - Present",
    title: bi("Nền tảng Kỹ thuật Phần mềm tại HUIT", "Software Engineering Foundation at HUIT"),
    description: bi(
      "Xây nền tảng lập trình, tư duy hướng đối tượng, nguyên lý kỹ thuật phần mềm và cơ sở dữ liệu quan hệ qua học phần và thực hành lab.",
      "Built strong fundamentals in programming, object-oriented design, software engineering principles, and relational databases through coursework and labs."
    )
  },
  {
    year: "2023 - 2024",
    title: bi("Dự án học thuật và tư duy hệ thống", "Academic Projects and System Thinking"),
    description: bi(
      "Phát triển các bài toán theo luồng nghiệp vụ, tập trung vào thiết kế data layer và logic backend, đồng thời luyện kỹ năng chuyển requirement thành kế hoạch triển khai.",
      "Developed project-based solutions focused on business workflow, data-layer design, and backend logic while practicing requirement-to-implementation thinking."
    )
  },
  {
    year: "2024 - 2025",
    title: bi("Thi kỹ thuật và mở rộng AI ứng dụng", "Technical Competitions and AI Exposure"),
    description: bi(
      "Tham gia các sân chơi về cơ sở dữ liệu và AI ứng dụng, tích lũy kinh nghiệm xử lý bài toán dữ liệu và thử nghiệm mô hình thực tế.",
      "Joined database and applied AI tracks, gaining practical experience in data-centric problem solving and model experimentation."
    )
  },
  {
    year: "Now",
    title: bi("Phát triển theo hướng kỹ sư tạo tác động", "Growing Toward Impact-Driven Engineering"),
    description: bi(
      "Tiếp tục đào sâu kiến trúc backend, đồng thời đưa computer vision vào các use case thực tế có thể triển khai.",
      "Continuing to deepen backend architecture while applying computer vision to deployable real-world use cases."
    )
  }
];

export const education = [
  {
    title: bi("Đại học Công Thương TP.HCM (HUIT)", "University of Industry and Trade (HUIT)"),
    subtitle: bi("Công nghệ Thông tin / Tin học ứng dụng", "Information Technology / Applied Computing"),
    extra: bi("Định hướng Kỹ thuật Phần mềm", "Software Engineering direction")
  }
];

export const skills = [
  {
    id: "languages",
    title: bi("Ngôn ngữ", "Languages"),
    items: ["C#", "Java", "C++", "JavaScript", "HTML/CSS", "SQL"]
  },
  {
    id: "backend",
    title: bi("Backend & Kiến trúc", "Backend & Architecture"),
    items: [".NET", "ASP.NET Core", "OOP", "Clean Architecture", "REST API fundamentals", "Business Logic Design"]
  },
  {
    id: "database",
    title: bi("Cơ sở dữ liệu", "Database"),
    items: ["SQL Server", "T-SQL", "Relational Database Design", "Query Optimization basics"]
  },
  {
    id: "frontend",
    title: bi("Frontend", "Frontend"),
    items: ["HTML", "CSS", "JavaScript", "Responsive Web Design"]
  },
  {
    id: "ai",
    title: bi("AI / Dữ liệu / Computer Vision", "AI / Data / Computer Vision"),
    items: ["YOLO", "ViT", "SAM-ViT", "Applied AI Research", "Image Classification", "Computer Vision fundamentals"]
  },
  {
    id: "tools",
    title: bi("Công cụ / Quy trình", "Tools / Workflow"),
    items: ["Git", "GitHub", "Firebase", "VS Code", "Visual Studio"]
  }
];

export const projects = [
  {
    slug: "gibor-coffee-shop-management",
    title: "GIBOR Coffee Shop Management",
    role: bi("Dự án học thuật | Frontend logic + luồng nghiệp vụ", "Academic Project | Frontend Logic + Business Flow"),
    summary: bi(
      "Xây dựng hệ thống quản lý quán cà phê mô phỏng quy trình đặt món thực tế: duyệt menu, giỏ hàng, thanh toán và tích điểm.",
      "Built an academic coffee shop management system that models practical ordering workflow from menu browsing to checkout and loyalty handling."
    ),
    contributions: [
      bi("Xây luồng giỏ hàng và đơn hàng với state transition rõ ràng", "Built cart and order flow with explicit state transitions"),
      bi("Triển khai logic thanh toán và hành vi checkout cho người dùng", "Implemented payment logic and user-facing checkout behavior"),
      bi("Tích hợp Firebase Authentication cho tác vụ theo tài khoản", "Integrated Firebase Authentication for account-based actions"),
      bi("Xử lý nghiệp vụ menu, đơn hàng và điểm thưởng", "Handled business rules for menu, orders, and loyalty points"),
      bi("Tinh chỉnh giao diện dark-mode để tăng tính nhất quán", "Refined dark-mode styling for a more polished UX")
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firebase", "SQL assets"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact: bi(
      "Tăng khả năng mô hình hóa hành vi thương mại thực tế và chuyển requirement thành logic front-end ổn định.",
      "Strengthened my ability to model real commerce behavior and convert requirements into stable front-end business logic."
    ),
    caseStudy: {
      overview: bi(
        "Case study tập trung vào cách mô hình hóa nghiệp vụ bán hàng thành luồng sử dụng có kiểm soát trạng thái.",
        "This case study focuses on translating commerce rules into a state-driven user flow."
      ),
      timeline: bi("8 tuần", "8 weeks"),
      team: bi("Nhóm 3 thành viên", "3-member team"),
      roleFocus: bi("Thiết kế luồng nghiệp vụ + logic checkout", "Business flow design + checkout logic"),
      challenge: bi(
        "Bài toán chính là giữ dữ liệu giỏ hàng, trạng thái đơn và điểm thưởng luôn nhất quán khi người dùng thao tác liên tục.",
        "The main challenge was keeping cart data, order state, and loyalty points consistent under continuous user actions."
      ),
      objectives: [
        bi("Chuẩn hóa vòng đời đơn hàng từ tạo đến hoàn tất", "Standardize the order lifecycle from creation to completion"),
        bi("Giảm lỗi trạng thái khi thao tác nhanh ở UI", "Reduce state inconsistencies during rapid UI interactions"),
        bi("Tổ chức code dễ mở rộng cho chức năng mới", "Organize code for future feature extension")
      ],
      architecture: [
        bi("Tách rõ view layer, business rules và data access", "Separated view layer, business rules, and data access"),
        bi("Dùng cấu trúc module cho cart, payment, loyalty", "Used module boundaries for cart, payment, and loyalty"),
        bi("Áp dụng quy tắc validate dữ liệu trước khi commit", "Applied validation gates before state commits")
      ],
      execution: [
        bi("Thiết kế state transition cho cart và đơn hàng", "Designed deterministic state transitions for cart and orders"),
        bi("Viết utility xử lý tính tiền và điểm tích lũy", "Implemented reusable utilities for pricing and loyalty calculations"),
        bi("Kiểm thử luồng người dùng bằng kịch bản end-to-end thủ công", "Validated user flow with manual end-to-end scenarios")
      ],
      outcomes: [
        bi("Luồng thanh toán ổn định hơn và giảm trạng thái sai", "Checkout flow became more stable with fewer invalid states"),
        bi("Tốc độ triển khai feature mới tốt hơn nhờ module hóa", "Feature iteration improved due to modular structure"),
        bi("Nâng khả năng làm việc với business logic phía client", "Improved my confidence in business-logic-heavy frontend work")
      ],
      nextSteps: [
        bi("Thêm dashboard thống kê doanh thu theo ca", "Add shift-based revenue dashboard"),
        bi("Bổ sung test tự động cho pricing và loyalty", "Add automated tests for pricing and loyalty logic"),
        bi("Tách API backend thực thụ thay vì xử lý cục bộ", "Move critical flows to a dedicated backend API")
      ]
    }
  },
  {
    slug: "yolov8-sign-language-detection",
    title: "YOLOv8 Detect Sign Language",
    role: bi("Thử nghiệm Computer Vision | Học AI ứng dụng", "Computer Vision Experiment | Applied AI Learning"),
    summary: bi(
      "Xây pipeline nhận diện ngôn ngữ ký hiệu thời gian thực bằng YOLOv8, từ huấn luyện notebook đến chạy webcam inference.",
      "Developed a real-time sign language detection pipeline using YOLOv8, from notebook experiments to webcam inference."
    ),
    contributions: [
      bi("Tổ chức quy trình thử nghiệm mô hình bằng Jupyter Notebook", "Organized model experimentation flow in Jupyter notebooks"),
      bi("Tích hợp webcam cho dự đoán thời gian thực", "Integrated webcam input for real-time prediction"),
      bi("Quản lý phiên bản weight và benchmark các lần train", "Managed weight versions and compared training runs"),
      bi("Ghi chép sai số và hành vi mô hình theo từng điều kiện ánh sáng", "Documented errors and model behavior across lighting conditions")
    ],
    stack: ["Python", "Jupyter Notebook", "YOLOv8", "OpenCV"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact: bi(
      "Cho mình kinh nghiệm thực chiến từ dữ liệu đến inference, đồng thời củng cố tư duy research-to-implementation.",
      "Gave me practical data-to-inference experience and reinforced a research-to-implementation mindset."
    ),
    caseStudy: {
      overview: bi(
        "Case study nhấn vào chất lượng pipeline: dữ liệu, huấn luyện, đánh giá và triển khai thời gian thực.",
        "This case study highlights pipeline quality: data, training, evaluation, and real-time deployment."
      ),
      timeline: bi("6 tuần", "6 weeks"),
      team: bi("Cá nhân", "Solo project"),
      roleFocus: bi("Data curation + huấn luyện + inference", "Data curation + training + inference"),
      challenge: bi(
        "Dữ liệu phân tán và điều kiện ánh sáng thay đổi mạnh làm giảm độ ổn định khi nhận diện trực tiếp từ webcam.",
        "Sparse data and varying lighting conditions reduced prediction stability during live webcam inference."
      ),
      objectives: [
        bi("Thiết lập pipeline train và evaluate lặp lại được", "Create a repeatable train-and-evaluate workflow"),
        bi("Giảm false positive trong môi trường thực", "Reduce false positives in real-world scenes"),
        bi("Đảm bảo tốc độ xử lý đáp ứng realtime cơ bản", "Maintain practical real-time inference speed")
      ],
      architecture: [
        bi("Chuỗi xử lý gồm chuẩn bị dữ liệu, train, export model và inference script", "Pipeline included data prep, training, model export, and inference script"),
        bi("Tách notebook nghiên cứu khỏi script chạy thực tế", "Separated exploratory notebooks from runtime scripts"),
        bi("Theo dõi cấu hình model và dataset bằng cấu trúc thư mục rõ ràng", "Tracked model and dataset variants through clear folder conventions")
      ],
      execution: [
        bi("Làm sạch nhãn dữ liệu và cân bằng lại một số lớp", "Cleaned labels and rebalanced selected classes"),
        bi("Tinh chỉnh confidence threshold theo tình huống", "Adjusted confidence thresholds for different scenarios"),
        bi("So sánh nhiều phiên bản model để chọn tradeoff tốt nhất", "Compared multiple model variants to select the best tradeoff")
      ],
      outcomes: [
        bi("Độ ổn định nhận diện tăng rõ trong điều kiện ánh sáng tiêu chuẩn", "Detection stability improved in standard lighting"),
        bi("Pipeline rõ ràng giúp tái lập kết quả nhanh hơn", "Clear pipeline structure improved reproducibility"),
        bi("Nâng kỹ năng triển khai computer vision có định hướng sản phẩm", "Improved my ability to shape computer vision experiments for product use")
      ],
      nextSteps: [
        bi("Mở rộng dataset với nhiều góc quay và nền phức tạp", "Expand dataset with more camera angles and complex backgrounds"),
        bi("Bổ sung tracking theo chuỗi frame để giảm flicker", "Add frame-by-frame tracking to reduce flicker"),
        bi("Đóng gói demo desktop/web để trình diễn dễ hơn", "Package a desktop/web demo for easier presentation")
      ]
    }
  },
  {
    slug: "be-net-learning-lab",
    title: "BE_NET",
    role: bi("Repository luyện Backend | Phòng lab .NET", "Backend Practice Repository | .NET Learning Lab"),
    summary: bi(
      "Kho thực hành backend để củng cố nền tảng C#/.NET qua bài tập có cấu trúc và tư duy service-oriented.",
      "A backend practice repository to strengthen C#/.NET fundamentals through structured exercises and service-oriented thinking."
    ),
    contributions: [
      bi("Chuẩn hóa cấu trúc dự án backend theo layer", "Organized backend projects using layered structure"),
      bi("Rèn tính rõ ràng trong business logic", "Focused on business logic clarity"),
      bi("Luyện thiết kế endpoint theo hướng API-ready", "Practiced API-ready endpoint design")
    ],
    stack: ["C#", ".NET", "Backend fundamentals"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact: bi(
      "Tạo nền tảng vững hơn để thiết kế thành phần backend sạch trước khi mở rộng hệ thống lớn.",
      "Built a stronger foundation for designing clean backend components before scaling to larger systems."
    ),
    caseStudy: {
      overview: bi(
        "Case study tập trung vào quá trình hình thành thói quen thiết kế backend có cấu trúc và nhất quán.",
        "This case study focuses on building consistent backend engineering habits through structured practice."
      ),
      timeline: bi("Liên tục 4 tháng", "Ongoing for 4 months"),
      team: bi("Cá nhân", "Solo project"),
      roleFocus: bi("Kiến trúc backend + thực hành API", "Backend architecture + API practice"),
      challenge: bi(
        "Thách thức nằm ở việc giữ mã nguồn dễ đọc khi số lượng bài tập và pattern tăng dần.",
        "The challenge was preserving readability as the number of exercises and patterns kept growing."
      ),
      objectives: [
        bi("Thiết kế layout dự án backend thống nhất", "Create a consistent backend project layout"),
        bi("Chuẩn hóa naming và flow xử lý lỗi", "Standardize naming and error-handling flow"),
        bi("Nâng khả năng tách business logic khỏi controller", "Improve separation of business logic from controllers")
      ],
      architecture: [
        bi("Tách domain/service/repository cho từng module", "Used domain/service/repository separation per module"),
        bi("Dùng DTO để bảo vệ boundary giữa API và domain", "Used DTOs to protect API-domain boundaries"),
        bi("Xây helper chung cho validation và response format", "Built shared helpers for validation and response formatting")
      ],
      execution: [
        bi("Viết nhiều micro-exercise theo từng chủ đề backend", "Implemented micro-exercises for each backend topic"),
        bi("Refactor định kỳ để loại bỏ code duplication", "Refactored regularly to reduce duplication"),
        bi("Tự review từng module bằng checklist kiến trúc", "Self-reviewed modules with an architecture checklist")
      ],
      outcomes: [
        bi("Thói quen thiết kế backend nhất quán hơn", "Developed more consistent backend design habits"),
        bi("Giảm đáng kể lỗi logic do cấu trúc lỏng", "Reduced logic issues caused by weak structure"),
        bi("Rút ngắn thời gian bắt đầu dự án backend mới", "Shortened setup time for new backend projects")
      ],
      nextSteps: [
        bi("Bổ sung integration test cho module chính", "Add integration tests for core modules"),
        bi("Áp dụng logging và observability cơ bản", "Introduce basic logging and observability"),
        bi("Đóng gói thành template starter backend", "Package as a reusable backend starter template")
      ]
    }
  },
  {
    slug: "quan-li-bai-do-xe",
    title: "QuanLiBaiDoXe",
    role: bi("Đồ án DSA cuối kỳ | C++", "Final-Term DSA Project | C++"),
    summary: bi(
      "Mô hình hóa bài toán quản lý bãi đỗ xe bằng cấu trúc dữ liệu và thuật toán, tập trung vào luồng vào/ra và ràng buộc vận hành.",
      "Implemented a parking-lot management problem with data structures and algorithms, focusing on in-out flow and operational constraints."
    ),
    contributions: [
      bi("Áp dụng DSA để biểu diễn thao tác trong bãi đỗ", "Applied DSA concepts to represent parking operations"),
      bi("Thiết kế control flow cho xe vào/ra và quản lý slot", "Designed control flow for vehicle entry/exit and slot allocation"),
      bi("Chuyển đề bài thành logic xác định và kiểm thử được", "Translated the problem statement into deterministic, testable logic")
    ],
    stack: ["C++", "Data Structures", "Algorithms"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact: bi(
      "Cải thiện tư duy giải thuật và khả năng phân tích hành vi hệ thống từ bài toán có ràng buộc.",
      "Improved algorithmic discipline and system-level reasoning on constrained problems."
    ),
    caseStudy: {
      overview: bi(
        "Case study tập trung vào cách chuyển bài toán thuật toán sang mô hình hoạt động có thể mô phỏng.",
        "This case study focuses on converting an algorithmic task into an executable system model."
      ),
      timeline: bi("4 tuần", "4 weeks"),
      team: bi("Nhóm 2 thành viên", "2-member team"),
      roleFocus: bi("Mô hình dữ liệu + xử lý luồng thao tác", "Data modeling + operation flow handling"),
      challenge: bi(
        "Phải xử lý đồng thời ràng buộc slot, trạng thái xe và truy vấn thao tác mà vẫn giữ độ phức tạp hợp lý.",
        "We had to handle slot constraints, vehicle states, and operation queries while keeping complexity under control."
      ),
      objectives: [
        bi("Đảm bảo thao tác vào/ra luôn nhất quán", "Guarantee consistent entry/exit operations"),
        bi("Giữ độ phức tạp phù hợp với dữ liệu đầu vào", "Keep complexity suitable for expected input sizes"),
        bi("Tạo logic dễ kiểm thử theo từng tình huống", "Build logic that can be tested scenario by scenario")
      ],
      architecture: [
        bi("Thiết kế struct/class cho xe, slot và giao dịch", "Designed structs/classes for vehicles, slots, and transactions"),
        bi("Tổ chức hàm theo use case vận hành", "Organized functions around operational use cases"),
        bi("Tách input parsing khỏi thuật toán lõi", "Separated input parsing from core algorithm logic")
      ],
      execution: [
        bi("Xây bộ test case theo tình huống biên", "Built edge-case test scenarios"),
        bi("Đo và điều chỉnh các đoạn xử lý tốn thời gian", "Measured and adjusted costly operations"),
        bi("Refactor để giảm nhánh điều kiện lồng nhau", "Refactored to reduce nested conditional branches")
      ],
      outcomes: [
        bi("Mô hình hoạt động bãi xe chạy ổn định theo yêu cầu đề bài", "Parking-lot simulation met assignment requirements reliably"),
        bi("Nâng kỹ năng thiết kế thuật toán theo bối cảnh thực tế", "Improved contextual algorithm design skills"),
        bi("Tăng khả năng trình bày quyết định kỹ thuật", "Strengthened technical decision communication")
      ],
      nextSteps: [
        bi("Thêm giao diện trực quan cho mô phỏng", "Add a visual interface for simulation"),
        bi("Mở rộng rule cho nhiều loại phương tiện", "Extend rules for multiple vehicle types"),
        bi("Tích hợp lưu trữ lịch sử thao tác", "Persist operation history for analysis")
      ]
    }
  },
  {
    slug: "web-designer-practice",
    title: "Web_Designer",
    role: bi("Thực hành Frontend nền tảng", "Frontend Fundamentals Practice"),
    summary: bi(
      "Kho học HTML/CSS có cấu trúc, tập trung vào bố cục, responsive và tính tái sử dụng thành phần UI.",
      "A structured HTML/CSS practice repository focused on layout mechanics, responsive behavior, and reusable UI structures."
    ),
    contributions: [
      bi("Dựng layout từ đầu theo nhiều loại trang", "Built page layouts from scratch across different patterns"),
      bi("Thử nghiệm responsive trên nhiều kích thước màn hình", "Explored responsive behavior across various breakpoints"),
      bi("Nâng tính nhất quán về spacing và hierarchy", "Improved consistency in spacing and visual hierarchy")
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/GiaBao051",
    demo: "",
    impact: bi(
      "Xây nền frontend rõ ràng hơn để phối hợp tốt với backend và quy trình sản phẩm.",
      "Established a stronger frontend base that improves collaboration with backend and product workflows."
    ),
    caseStudy: {
      overview: bi(
        "Case study xoay quanh việc xây nền frontend bài bản qua chuỗi bài tập tăng dần độ khó.",
        "This case study covers structured frontend growth through progressively harder exercises."
      ),
      timeline: bi("Liên tục 10 tuần", "10-week continuous practice"),
      team: bi("Cá nhân", "Solo project"),
      roleFocus: bi("Layout system + responsive patterns", "Layout system + responsive patterns"),
      challenge: bi(
        "Bài toán chính là duy trì tính nhất quán khi số lượng layout và component tăng nhanh.",
        "The main challenge was maintaining consistency as the number of layouts and components rapidly grew."
      ),
      objectives: [
        bi("Chuẩn hóa bộ quy tắc spacing và typography", "Standardize spacing and typography rules"),
        bi("Tối ưu hiển thị cho mobile và desktop", "Optimize rendering for mobile and desktop"),
        bi("Rút ngắn thời gian dựng giao diện mới", "Reduce time needed to build new interfaces")
      ],
      architecture: [
        bi("Tạo hệ class tiện ích cho layout lặp lại", "Created utility-style classes for repeated layout patterns"),
        bi("Tách component theo block UI tái sử dụng", "Split UI into reusable block-level components"),
        bi("Quy hoạch naming convention cho style", "Defined naming conventions for styling")
      ],
      execution: [
        bi("Thực hành theo sprint nhỏ, mỗi sprint một mục tiêu UI", "Worked in short sprints, each focused on one UI objective"),
        bi("Đối chiếu giao diện giữa nhiều viewport", "Compared output across multiple viewport sizes"),
        bi("Refactor CSS để loại bỏ style trùng lặp", "Refactored CSS to eliminate duplicate rules")
      ],
      outcomes: [
        bi("Tốc độ triển khai giao diện tăng đáng kể", "Interface delivery speed improved significantly"),
        bi("Responsive behavior ổn định hơn trên mobile", "Responsive behavior became more stable on mobile"),
        bi("Nền tảng UI đủ tốt để kết hợp vào dự án lớn hơn", "Built a UI foundation suitable for larger projects")
      ],
      nextSteps: [
        bi("Chuyển các pattern chính sang component library", "Move core patterns into a component library"),
        bi("Bổ sung accessibility checklist cho từng page", "Add accessibility checklist for each page"),
        bi("Kết hợp animation có chủ đích theo ngữ cảnh", "Integrate purposeful motion based on context")
      ]
    }
  }
];

export const additionalProjects = ["HUIMiner", "CLHMiner", "FEACP"];

export const achievements = [
  {
    title: bi("Giải Khuyến khích - Cuộc thi Thiết kế CSDL tại HUIT", "Encouragement Prize - Database Design Challenge at HUIT"),
    context: bi(
      "Được ghi nhận tại sân chơi thiết kế cơ sở dữ liệu cấp trường, tập trung vào tư duy hệ thống và mô hình hóa dữ liệu thực tế.",
      "Recognized in a university-level database design challenge focused on structured thinking and practical data modeling."
    ),
    signal: bi(
      "Thể hiện nền tảng giải quyết vấn đề tốt và tinh thần chủ động trong môi trường cạnh tranh kỹ thuật.",
      "Reflects strong problem-solving fundamentals and initiative in technical competition settings."
    )
  },
  {
    title: bi("Vào vòng Chung kết - Các bảng Applied AI / Data Science", "Final Round Participant - Applied AI / Data Science Tracks"),
    context: bi(
      "Tham gia các chủ đề thực tế như phân loại và phân đoạn sâu bệnh lúa, phân loại ung thư da.",
      "Competed in practical themes such as rice pest classification/segmentation and skin cancer classification."
    ),
    signal: bi(
      "Cho thấy năng lực áp dụng AI vào bài toán thực tiễn thay vì dừng ở mức lý thuyết.",
      "Shows willingness to apply AI techniques to meaningful real-world problems beyond coursework."
    )
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}
