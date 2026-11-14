// Synchronized software engineering, fullstack, desktop & applied AI projects
// Audited directly from https://github.com/Peo051

export const projects = [
  {
    slug: "codesense-ai",
    title: "CodeSense AI — Adaptive C# OOP Programming Tutor",
    cover: "assets/img/projects/codesense-ai/cover.webp",
    architectureSvg: "assets/img/projects/codesense-ai/architecture.svg",
    architectureMermaid: "assets/img/projects/codesense-ai/architecture.mmd",
    featured: true,
    categories: ["fullstack", "ai", "research"],
    category: "Next.js + FastAPI · Adaptive Socratic AI Tutor",
    year: "2026 — Present",
    status: "Deployed",
    statusKey: "deployed",
    role: "Fullstack & AI System Architect",
    repo: "https://github.com/Peo051/love-sense-ai",
    repoSecondary: "",
    isPrivateRepo: false,
    live: "https://love-sense-ai.vercel.app",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "Tailwind CSS", "SQLAlchemy", "PostgreSQL", "Socratic AI"],
    gallery: [
      {
        src: "assets/img/projects/codesense-ai/screen-01.webp",
        type: "real-screenshot",
        title: { en: "Live Desktop Interface — Socratic C# OOP Tutor", vi: "Giao diện Desktop Live — Gia sư Socratic C# OOP" },
        caption: {
          en: "Captured directly from https://love-sense-ai.vercel.app (1440×900): shows live BankAccount.cs analysis, encapsulation diagnostics, and step-by-step Socratic hints.",
          vi: "Chụp trực tiếp từ https://love-sense-ai.vercel.app (1440×900): hiển thị phân tích lớp BankAccount.cs, chẩn đoán tính đóng gói và gợi ý Socratic từng bước."
        }
      },
      {
        src: "assets/img/projects/codesense-ai/screen-02.webp",
        type: "real-screenshot",
        title: { en: "Live Mobile Responsive View (390×844)", vi: "Giao diện Mobile Responsive Live (390×844)" },
        caption: {
          en: "Responsive mobile capture from production deployment showing touch-friendly controls and code diagnosis card.",
          vi: "Ảnh chụp bản mobile đang chạy trên Vercel với thẻ chẩn đoán mã nguồn C# thân thiện thao tác chạm."
        }
      },
      {
        src: "assets/img/projects/codesense-ai/screen-03.webp",
        type: "real-screenshot",
        title: { en: "Original Repository Workspace Showcase", vi: "Ảnh minh họa chính thức trong docs/assets của Repository" },
        caption: {
          en: "Verified workspace asset from Peo051/love-sense-ai highlighting adaptive student progression and code privacy guarantee.",
          vi: "Tài nguyên chính thức từ Peo051/love-sense-ai giới thiệu luồng học thích ứng và bảo vệ mã nguồn sinh viên."
        }
      }
    ],
    en: {
      summary: "Adaptive Socratic C# OOP programming tutor built with Next.js & FastAPI (evolved from the Love Sense AI baseline), guiding syntax/logic debugging through leakage-guarded hints and skill mastery tracking.",
      overview: "Originating from the Peo051/love-sense-ai baseline and evolved into CodeSense AI, this platform pairs a Next.js App Router frontend with a FastAPI tutoring backend. Instead of handing out complete solutions, the tutor inspects C# OOP submissions, builds pedagogical context, checks for answer leakage, and tracks per-concept mastery over time.",
      problem: "First-year OOP students often rely on generic LLM chats that immediately leak full solutions, bypassing algorithmic thinking and failing to adapt to each learner's recurring misconceptions in encapsulation, inheritance, and exception handling.",
      solution: "Engineered a multi-stage FastAPI tutoring pipeline (diagnosis.py, hint_manager.py, leakage_guard.py, verification.py, mastery.py) backed by Next.js screens (/tutor, /progress, /history, /privacy) that grounds feedback in evidence without revealing direct answers.",
      features: [
        "Interactive C# OOP code diagnosis focusing on encapsulation, constructors, exception handling, and clean OOP structure.",
        "Multi-turn Socratic hint progression paired with leakage_guard.py & verification.py answer-leakage prevention.",
        "Per-skill student mastery telemetry (/api/mastery, /progress) and consent/privacy controls (/api/consent, /privacy).",
        "Dedicated test coverage across both Next.js testing suites (*.test.tsx) and Python FastAPI backend endpoints."
      ],
      architectureNotes: [
        "Next.js App Router client communicates via REST with FastAPI route modules (tutor.py, mastery.py, sessions.py, auth.py, student_profile.py).",
        "Tutoring domain package isolates context_builder.py, skill_taxonomy.py, evidence_grounding.py, and versioned prompt templates (prompts/*_v1.py).",
        "Preserved legacy ai-service/ NLP preprocessing and OCR modules from the initial baseline while elevating the primary product to CodeSense AI."
      ],
      contribution: [
        "Architected the Next.js frontend routes (/tutor, /progress, /history, /profile, /privacy) and interactive code analysis views.",
        "Implemented FastAPI tutoring routes, student mastery tracking, session persistence, and multi-stage Socratic response validation.",
        "Structured verification test suites on both frontend (React Testing Library) and backend (Pytest)."
      ],
      developmentStatus: "Actively maintained and deployed live on Vercel (love-sense-ai.vercel.app) following the CodeSense AI pivot."
    },
    vi: {
      summary: "Gia sư lập trình C# OOP thích ứng theo phương pháp Socratic trên nền Next.js & FastAPI (phát triển tiếp từ nền tảng Peo051/love-sense-ai), phát hiện lỗi logic và gợi ý từng bước có kiểm soát rò rỉ đáp án.",
      overview: "Xuất phát từ repository Peo051/love-sense-ai và được định hướng lại thành CodeSense AI, hệ thống kết hợp giao diện Next.js App Router với backend FastAPI. Thay vì giải hộ bài tập, hệ thống chẩn đoán mã C# OOP của sinh viên, xây dựng ngữ cảnh sư phạm, chặn lộ đáp án hoàn chỉnh và theo dõi mức độ thành thạo từng khái niệm.",
      problem: "Sinh viên nhập môn OOP C# thường lạm dụng chatbot AI lấy thẳng code hoàn chỉnh, dẫn đến hổng tư duy giải thuật và không cải thiện được các lỗi cốt lõi về đóng gói, kế thừa hay xử lý ngoại lệ.",
      solution: "Xây dựng pipeline gia sư đa tầng trên FastAPI (diagnosis.py, hint_manager.py, leakage_guard.py, verification.py, mastery.py) nối với các màn hình /tutor, /progress, /history, /privacy trên Next.js để phản hồi có dẫn chứng và gợi mở tư duy từng bước.",
      features: [
        "Chẩn đoán mã nguồn C# OOP tập trung vào tính đóng gói (private/protected), constructor, ngoại lệ và cấu trúc hướng đối tượng.",
        "Sinh gợi ý Socratic nhiều cấp độ kết hợp bộ lọc leakage_guard.py và verification.py chống trả về lời giải hoàn chỉnh.",
        "Theo dõi hồ sơ năng lực theo từng kỹ năng (/api/mastery, /progress) và trang minh bạch quyền riêng tư (/privacy).",
        "Hệ thống unit/component test cho cả Next.js (*.test.tsx) lẫn Python FastAPI (backend/tests/)."
      ],
      architectureNotes: [
        "Frontend Next.js gọi REST API tới các route FastAPI (tutor.py, mastery.py, sessions.py, auth.py, student_profile.py).",
        "Thư mục backend/app/tutor/ tách biệt hoàn toàn context_builder.py, skill_taxonomy.py, evidence_grounding.py và các prompt có phiên bản (prompts/*_v1.py).",
        "Vẫn lưu trữ tương thích các module ai-service/ và /analyze, /ocr từ phiên bản tiền nhiệm."
      ],
      contribution: [
        "Thiết kế giao diện Next.js các phân hệ /tutor, /progress, /history, /profile, /privacy và panel minh họa chẩn đoán C# OOP.",
        "Xây dựng tầng FastAPI tutor engine, mô hình đánh giá kỹ năng (mastery.py), lưu phiên học và cơ chế kiểm định đầu ra.",
        "Viết test tự động cho các trang Next.js và quy trình backend."
      ],
      developmentStatus: "Đang vận hành bản live trên Vercel (love-sense-ai.vercel.app) theo định hướng sản phẩm CodeSense AI."
    }
  },
  {
    slug: "tram25h-coffee",
    title: "Trạm 25H — Multi-Branch Coffee E-Commerce & Web Platform",
    cover: "assets/img/projects/tram25h-coffee/cover.webp",
    architectureSvg: "assets/img/projects/tram25h-coffee/architecture.svg",
    architectureMermaid: "assets/img/projects/tram25h-coffee/architecture.mmd",
    featured: true,
    categories: ["fullstack"],
    category: "ASP.NET MVC + Web API · Multi-Branch E-Commerce",
    year: "2025 — 2026",
    status: "Deployed",
    statusKey: "deployed",
    role: "Fullstack .NET Web Developer",
    repo: "https://github.com/Peo051/Tram25H",
    repoSecondary: "https://github.com/Peo051/Coffee_Shop_Management_Web",
    isPrivateRepo: true,
    live: "https://giborcoffee.vercel.app/",
    tech: ["C#", "ASP.NET MVC", "ASP.NET Web API", "SQL Server", "JavaScript", "Bootstrap", "Firebase Auth", "Vercel Serverless", "PayOS"],
    gallery: [
      {
        src: "assets/img/projects/tram25h-coffee/screen-01.webp",
        type: "real-screenshot",
        title: { en: "Live Production Storefront — Hero, Admin Link, Cart & Promo Banner", vi: "Giao diện Storefront Live — Hero, Quản trị, Giỏ hàng & Banner Ưu đãi" },
        caption: {
          en: "Live deployment capture of the companion GIBOR COFFEE ordering storefront at https://giborcoffee.vercel.app/ featuring dark theme navigation, active cart badge, Admin shortcut, and promotional banner.",
          vi: "Ảnh chụp thực tế website đặt món trực tuyến tại https://giborcoffee.vercel.app/ (GIBOR COFFEE) với thanh điều hướng dark mode, giỏ hàng trực tiếp, lối vào Quản trị và banner khuyến mãi."
        }
      },
      {
        src: "assets/img/projects/tram25h-coffee/screen-02.webp",
        type: "real-screenshot",
        title: { en: "Live Menu Catalog — Categorized Beverages & Branch Pricing", vi: "Thực đơn Trực tuyến — Phân loại Đồ uống & Giá bán Live" },
        caption: {
          en: "Captured live from https://giborcoffee.vercel.app/menu.html (1440×900) showing categorized beverage grids (Coffee, Matcha, Tea) with responsive product cards.",
          vi: "Chụp trực tiếp từ https://giborcoffee.vercel.app/menu.html (1440×900) hiển thị danh mục Cà phê, Matcha, Trà cùng thẻ món uống và giá bán trực quan."
        }
      },
      {
        src: "assets/img/projects/tram25h-coffee/screen-03.webp",
        type: "technical-illustration",
        title: { en: "Customer Storefront, Multi-Branch Menu & PayOS Policy Architecture", vi: "Luồng Đặt hàng Chi nhánh & Chính sách Thanh toán PayOS" },
        caption: {
          en: "Technical illustration grounded in MenuController, BranchesController, CartController, and verified unit policy tests in Tram25H.Tests.",
          vi: "Minh họa kỹ thuật tổng hợp từ MenuController, BranchesController, CartController và bộ unit test nghiệp vụ Tram25H.Tests."
        }
      },
      {
        src: "assets/img/projects/tram25h-coffee/screen-04.webp",
        type: "technical-illustration",
        title: { en: "Admin & BranchManager Console + Web API Surface", vi: "Khu vực Quản trị Đa chi nhánh & REST Web API" },
        caption: {
          en: "Technical illustration depicting Areas/Admin controllers (BranchManagerController, OrdersController, ReportsController) and /api/products DTOs.",
          vi: "Minh họa kỹ thuật phân hệ Areas/Admin (BranchManagerController, OrdersController, ReportsController) cùng endpoint /api/products."
        }
      }
    ],
    en: {
      summary: "Full-featured ASP.NET MVC multi-branch coffee e-commerce platform and Web API for Trạm 25H, paired with the live GIBOR COFFEE ordering storefront on Vercel (giborcoffee.vercel.app) featuring Firebase Auth, checkout discounts, and PayOS QR flows.",
      overview: "Unifies the Trạm 25H ASP.NET MVC backend (Peo051/Tram25H) with its companion 2025 Coffee Shop Ordering Website (Peo051/Coffee_Shop_Management_Web), deployed live as GIBOR COFFEE at https://giborcoffee.vercel.app/. Customers browse branch-specific menus, manage carts and loyalty points with localStorage/Firebase Auth, and complete COD or QR checkout backed by PayOS endpoints.",
      problem: "Operating multiple cafe branches requires strict per-branch cart consistency, reliable online QR payment reconciliation, and role separation between system admins and individual branch managers.",
      solution: "Structured clean MVC controllers (Home, Menu, Branches, Cart, Account, Contact), a REST Web API (/api/products), dedicated Areas/Admin controllers backed by Tram25H.Tests & SqlIntegrationTests, plus the live Vercel Ordering Website (giborcoffee.vercel.app) with client-side checkout logic and serverless PayOS endpoints.",
      features: [
        "Customer catalog browsing by branch, configurable cart pricing, loyalty-point redemption, order totals/discounts, COD and PayOS QR checkout.",
        "Role-based Admin & BranchManager portal covering branches, categories, products, customers, orders, status, and revenue reports.",
        "Live Vercel storefront (giborcoffee.vercel.app) with client-side data persistence (localStorage), Firebase Authentication, responsive multi-theme UI, and serverless PayOS endpoints.",
        "Comprehensive automated verification via Tram25H.Tests (CheckoutPricingTests, PayOSServiceTests, OrderStatusTransitionTests) and Tram25H.SqlIntegrationTests."
      ],
      architectureNotes: [
        "Strict checkout policy enforcement isolated in testable services (CartSessionService, ProductSelectionService, PayOSService).",
        "Dedicated Tram25H.SqlIntegrationTests provisions and validates real SQL Server schemas cleanly.",
        "Companion repository Peo051/Coffee_Shop_Management_Web is live on Vercel at https://giborcoffee.vercel.app/ (GIBOR COFFEE) with HTML/CSS/JS/Bootstrap ordering UI, Firebase Auth, and serverless PayOS endpoints."
      ],
      contribution: [
        "Web Developer (Coffee Shop Ordering Website / giborcoffee.vercel.app, 2025): Implemented client-side localStorage persistence, cart, account and loyalty-point flows, mobile-responsive layouts, and checkout logic for totals, discounts, point redemption, COD, QR payments, and serverless PayOS endpoints.",
        "Fullstack .NET Developer (Trạm 25H, 2025–2026): Built customer ordering, multi-branch lookup, Admin/BranchManager controllers, REST Web API DTOs, and PayOS payment verification flows in ASP.NET MVC.",
        "Authored unit tests (Tram25H.Tests) and database integration suites (Tram25H.SqlIntegrationTests)."
      ],
      developmentStatus: "Companion storefront deployed live on Vercel (giborcoffee.vercel.app); full-stack ASP.NET MVC & Web API solution (DoAnLapTrinhWeb.sln) verified with unit and SQL integration tests."
    },
    vi: {
      summary: "Nền tảng web đặt món và quản lý chuỗi cà phê đa chi nhánh Trạm 25H trên ASP.NET MVC & Web API, kết hợp storefront đặt món đang chạy live trên Vercel tại giborcoffee.vercel.app (Firebase Auth, PayOS Serverless, PayOS QR).",
      overview: "Hệ thống kết hợp giải pháp backend ASP.NET MVC (Peo051/Tram25H) cùng website đặt món Coffee Shop Ordering Website năm 2025 (Peo051/Coffee_Shop_Management_Web), đang triển khai trực tuyến dưới tên GIBOR COFFEE tại https://giborcoffee.vercel.app/. Khách hàng đặt món theo chi nhánh, lưu giỏ hàng và tích điểm (localStorage / Firebase Auth), tính giảm giá/đổi điểm và thanh toán COD hoặc PayOS QR.",
      problem: "Vận hành chuỗi quán cà phê nhiều chi nhánh đòi hỏi đồng bộ giá và tồn món theo từng cơ sở, kiểm soát trạng thái đơn hàng chặt chẽ và bảo vệ chính sách giỏ hàng khi thanh toán PayOS trực tuyến.",
      solution: "Tổ chức rõ ràng các controller ASP.NET MVC, khu vực quản trị Areas/Admin và Web API (/api/products) kèm bộ test SQL, kết hợp Website Đặt món đang vận hành live trên Vercel (giborcoffee.vercel.app) sử dụng JavaScript, Bootstrap, Firebase Authentication và Vercel Serverless Functions cho PayOS.",
      features: [
        "Đặt đồ uống theo chi nhánh, tính tổng đơn, áp mã giảm giá, đổi điểm thưởng, thanh toán COD hoặc quét mã PayOS QR.",
        "Phân quyền tách biệt Admin toàn hệ thống và BranchManager theo chi nhánh trong Areas/Admin.",
        "Website đặt món live tại giborcoffee.vercel.app hỗ trợ lưu trữ phía client (localStorage), đăng nhập Firebase Authentication, giao diện sáng/tối responsive và các endpoint Vercel Serverless cho PayOS.",
        "Kiểm thử tự động hóa nghiệp vụ qua CheckoutPricingTests, PayOSServiceTests, OrderStatusTransitionTests và SQL Integration Tests."
      ],
      architectureNotes: [
        "Tách các chính sách tính giá, chọn chi nhánh và trạng thái đơn thành service dễ kiểm thử đơn vị.",
        "Dự án Tram25H.SqlIntegrationTests tự khởi tạo schema và kiểm tra truy vấn trên SQL Server thực tế.",
        "Repository song hành Peo051/Coffee_Shop_Management_Web đang triển khai live trên Vercel tại https://giborcoffee.vercel.app/ (GIBOR COFFEE) với JavaScript, HTML, CSS, Bootstrap, localStorage, Firebase Auth và Vercel Serverless Functions."
      ],
      contribution: [
        "Web Developer (Coffee Shop Ordering Website / giborcoffee.vercel.app, 2025): Triển khai lưu trữ phía client bằng localStorage, giỏ hàng, luồng tài khoản & tích điểm, bố cục di động responsive và logic thanh toán (tổng đơn, giảm giá, đổi điểm, COD, QR kèm serverless PayOS endpoints).",
        "Fullstack .NET Developer (Trạm 25H, 2025–2026): Xây dựng luồng đặt hàng đa chi nhánh, kiểm chứng thanh toán PayOS và phân khu quản trị ASP.NET MVC.",
        "Viết bộ unit test nghiệp vụ và kiểm thử tích hợp SQL Server."
      ],
      developmentStatus: "Storefront đồng hành đang chạy bản live trên Vercel (giborcoffee.vercel.app); giải pháp ASP.NET MVC & Web API đã hoàn thiện cùng bộ unit test và SQL test."
    }
  },
  {
    slug: "uniwallet",
    title: "UniWallet — Multi-Wallet Financial Platform",
    cover: "assets/img/projects/uniwallet/cover.webp",
    architectureSvg: "assets/img/projects/uniwallet/architecture.svg",
    architectureMermaid: "assets/img/projects/uniwallet/architecture.mmd",
    featured: true,
    categories: ["fullstack"],
    category: "Laravel 13 + TiDB MySQL · Multi-Wallet Fintech Platform",
    year: "2026",
    status: "Deployed",
    statusKey: "deployed",
    role: "Core Fullstack & Security Engineer (Team Project — Lead Contributor, 219 commits)",
    repo: "https://github.com/BaoAnh109/UniWallet",
    repoSecondary: "https://github.com/Peo051/UniWallet-backup",
    isPrivateRepo: true,
    live: "https://uniwallet.site/",
    tech: ["PHP 8.3", "Laravel 13", "TiDB Cloud MySQL", "Firebase Auth & MFA", "Resend OTP", "VietQR / SePay / MoMo", "Docker & Render"],
    gallery: [
      {
        src: "assets/img/projects/uniwallet/screen-01.webp",
        type: "real-screenshot",
        title: { en: "Live Production Capture — Public Landing, Login & Onboarding", vi: "Ảnh chụp Production Live — Trang chủ, Đăng nhập & Đăng ký" },
        caption: {
          en: "Captured live from https://uniwallet.site/ (HTTP 200 OK on Render) showing multi-wallet ecosystem branding and Firebase OAuth login portal without accessing private accounts.",
          vi: "Chụp trực tiếp từ bản live https://uniwallet.site/ (HTTP 200 OK trên Render) thể hiện giao diện điều phối đa ví và cổng đăng nhập Firebase OAuth công khai."
        }
      },
      {
        src: "assets/img/projects/uniwallet/screen-02.webp",
        type: "technical-illustration",
        title: { en: "Multi-Wallet Financial Dashboard & Linked Funding Rails (Demo Data)", vi: "Giao diện Quản lý Đa ví & Liên kết Ngân hàng (Dữ liệu Demo)" },
        caption: {
          en: "Technical UI illustration grounded in customer.blade.php, WalletController, and FundingSourceController using strictly synthetic demo balances and zero real user data.",
          vi: "Minh họa giao diện quản lý ví, giữ số dư (BalanceHold) và liên kết MoMo/VNPay/SePay/VietQR hoàn toàn bằng số liệu giả lập demo."
        }
      },
      {
        src: "assets/img/projects/uniwallet/screen-03.webp",
        type: "technical-illustration",
        title: { en: "Top-up, Transfer, VietQR & Privacy-Masked Monitoring Flow", vi: "Luồng Nạp/Rút/Chuyển tiền, Thanh toán VietQR & Che PII Quản trị" },
        caption: {
          en: "Technical illustration mapping TransactionStateMachine, 100M VND daily limit HUD, SePay UW prefix QR callbacks, and MonitoringPrivacyPresenter masking.",
          vi: "Minh họa quy trình TransactionOrchestrator, thanh hạn mức 100M VNĐ, đối soát VietQR/SePay qua HMAC-SHA256 và bộ che dữ liệu nhạy cảm MonitoringPrivacyPresenter."
        }
      },
      {
        src: "assets/img/projects/uniwallet/screen-04.webp",
        type: "technical-illustration",
        title: { en: "Security Architecture — Firebase OAuth, Resend OTP, 3-Photo KYC & Face Step-Up", vi: "Kiến trúc Bảo mật — Firebase Auth, Resend OTP/MFA, KYC 3 ảnh & Step-Up" },
        caption: {
          en: "Schematic pairing the real /login capture with FirebaseAuthService, OtpDeliveryManager, mandatory 3-image KYC check, and >=10M VND biometric step-up.",
          vi: "Sơ đồ kết hợp màn hình /login thực tế cùng xác thực đa tầng Firebase Auth, gửi OTP qua Resend, KYC 3 ảnh thật và step-up khuôn mặt giao dịch từ 10 triệu VNĐ."
        }
      }
    ],
    en: {
      summary: "Production-deployed Laravel 13 multi-wallet fintech orchestration platform unifying MoMo, VNPay, ZaloPay, and VietQR banking rails with Firebase Auth, Resend OTP/MFA, 3-image KYC verification, and HMAC-signed webhooks.",
      overview: "Built as a 3-member team project with upstream production repository BaoAnh109/UniWallet (mirrored to Peo051/UniWallet-backup at main commit 5f660f1) and deployed live on Render at https://uniwallet.site/ over TiDB Cloud MySQL (54 migrations).",
      problem: "Managing digital wallets alongside multiple bank accounts creates fragmented balance tracking, weak step-up authentication across high-value transfers, and privacy risks in administrative transaction monitoring.",
      solution: "Engineered a modular Laravel 13 core pairing TransactionOrchestrator, TransactionStateMachine, CircuitBreaker, and MonitoringPrivacyPresenter with Firebase Auth, Resend OTP/MFA, 3-image KYC verification, and biometric step-up checks for transfers >= 10,000,000 VND.",
      features: [
        "Multi-wallet creation, default wallet routing, atomic lock/unlock, BalanceHold availability guards, and linked funding sources (MoMo, VNPay, ZaloPay, VietQR bank catalog).",
        "Top-up (SePay, MoMo, dynamic VietQR), bank/wallet transfers, withdrawal QR requests, scheduled/recurring rules, utility bills with promotions, and print-ready statements.",
        "Multi-layer security: Firebase Google/GitHub/Phone OAuth, 30-day trusted devices, Resend OTP MFA, mandatory 3-photo KYC audit, and Decision 2345 capture-only biometric step-up (>= 10M VND).",
        "HMAC-SHA256 webhook verification (/api/webhooks/{sepay,vnpay,momo,zalopay}) with payload sanitization, Admin transaction monitoring with PII masking, and UniBot FAQ assistant."
      ],
      architectureNotes: [
        "Source comparison confirms BaoAnh109/UniWallet holds render.yaml for https://uniwallet.site/ while Peo051/UniWallet-backup is its synchronized personal fork backup.",
        "54 MySQL schema migrations run on TiDB Cloud over TLS (certs/isrgrootx1.pem) with database-backed sessions, cache, and queued jobs.",
        "Clean policy separation in App\\Services\\Policies ensures Admin monitoring views mask PII via MonitoringPrivacyPresenter and separate ROLE:ADMIN middleware guards."
      ],
      contribution: [
        "Led repository engineering across BaoAnh109/UniWallet as top contributor (219 commits), including transaction monitoring privacy masking (MonitoringPrivacyPresenter) and bank provider directory management.",
        "Built KYC 3-image live capture enforcement (rejecting simulated fallbacks), biometric photo capture step-up modal flows for high-value transfers, and OTP challenge synchronization.",
        "Authored PHPUnit automated feature & architecture guard tests covering monitoring privacy, transfer limit HUD assertions, and provider status modals."
      ],
      developmentStatus: "Live production web portal accessible at https://uniwallet.site/ (HTTP 200 OK on Render Singapore); sandboxed payment rails & capture-only step-up configured cleanly without exposing private keys."
    },
    vi: {
      summary: "Nền tảng điều phối đa ví điện tử fintech trên Laravel 13 kết nối MoMo, VNPay, ZaloPay và ngân hàng qua VietQR, tích hợp Firebase Auth/MFA, OTP Resend, KYC 3 ảnh và webhook ký số HMAC-SHA256.",
      overview: "Sản phẩm hợp tác nhóm 3 thành viên với repository nguồn triển khai production là BaoAnh109/UniWallet (được sao lưu đối chiếu sang Peo051/UniWallet-backup ở commit 5f660f1), vận hành live tại https://uniwallet.site/ trên Render và TiDB Cloud MySQL (54 migrations).",
      problem: "Người dùng phải chuyển đổi qua lại nhiều ví điện tử và ứng dụng ngân hàng rời rạc, trong khi các giao dịch giá trị lớn cần xác thực đa lớp (OTP, sinh trắc học, KYC) và cổng giám sát quản trị phải ẩn thông tin nhạy cảm của khách hàng.",
      solution: "Xây dựng lõi tài chính Laravel 13 gồm TransactionOrchestrator, TransactionStateMachine, CircuitBreaker và MonitoringPrivacyPresenter, kết hợp Firebase Auth, gửi OTP qua Resend API, bắt buộc KYC 3 ảnh thật và step-up khuôn mặt cho giao dịch từ 10.000.000 VNĐ.",
      features: [
        "Quản lý đa ví (tạo, đặt mặc định, khóa/mở khóa tức thời), kiểm soát giữ số dư (BalanceHold) và liên kết nguồn tiền MoMo, VNPay, ZaloPay, VietQR hơn 30 ngân hàng.",
        "Nghiệp vụ Nạp (SePay, MoMo, QR động), Rút tiền qua QR, Chuyển khoản, Chuyển định kỳ/hẹn lịch, Thanh toán hóa đơn kèm khuyến mãi và xuất sao kê.",
        "Bảo mật đa tầng: Đăng nhập Google/GitHub/Phone qua Firebase, tin cậy thiết bị 30 ngày, MFA OTP qua Resend, duyệt hồ sơ KYC 3 ảnh và xác thực khuôn mặt Step-Up (>= 10 triệu VNĐ).",
        "Nhận Webhook HMAC-SHA256 (/api/webhooks/{sepay,vnpay,momo,zalopay}) kèm lọc payload, cổng Admin giám sát/đối soát giao dịch che PII và trợ lý hỏi đáp UniBot."
      ],
      architectureNotes: [
        "Đối chiếu thực tế xác định BaoAnh109/UniWallet là mã nguồn cấu hình render.yaml triển khai https://uniwallet.site/, còn Peo051/UniWallet-backup là bản fork lưu trữ cá nhân.",
        "CSDL gồm 54 migration chạy trên TiDB Cloud MySQL qua TLS cùng Session, Cache và Queue lưu trên database.",
        "Tách biệt phân quyền role:USER và role:ADMIN; bộ MonitoringPrivacyPresenter tự động che thông tin nhạy cảm trên màn hình giám sát giao dịch."
      ],
      contribution: [
        "Thành viên đóng góp nhiều nhất trên BaoAnh109/UniWallet (219 commits): phát triển cơ chế che dữ liệu riêng tư giám sát giao dịch (MonitoringPrivacyPresenter) và quản lý danh mục ngân hàng.",
        "Triển khai quy trình KYC bắt buộc đủ 3 ảnh chụp trực tiếp (loại bỏ ảnh giả lập), modal xác thực khuôn mặt Step-Up cho giao dịch lớn và đồng bộ OTP trước khi mở camera.",
        "Xây dựng các bài kiểm thử PHPUnit cho phân quyền giám sát giao dịch, kiểm soát hạn mức 100 triệu VNĐ và trạng thái định chế tài chính."
      ],
      developmentStatus: "Đang chạy trực tuyến ổn định tại https://uniwallet.site/ (Render Singapore, HTTP 200 OK); các cổng thanh toán cấu hình an toàn ở chế độ sandbox/capture-only cho trình diễn."
    }
  },
  {
    slug: "tri-nghia-pharma",
    title: "Tri Nghia Pharma — Zalo Mini App E-Commerce",
    cover: "assets/img/projects/tri-nghia-pharma/cover.webp",
    architectureSvg: "assets/img/projects/tri-nghia-pharma/architecture.svg",
    architectureMermaid: "assets/img/projects/tri-nghia-pharma/architecture.mmd",
    featured: true,
    categories: ["fullstack"],
    category: "React + TypeScript · Zalo Mini App",
    year: "2026",
    status: "Completed",
    statusKey: "completed",
    role: "Full-Stack Developer & Software Engineering Intern",
    repo: "https://github.com/Peo051/Tri-Nghia-Pharma",
    repoSecondary: "",
    isPrivateRepo: true,
    live: "",
    tech: ["React", "TypeScript", "Vite", "Jotai", "localStorage", "Zalo Mini App SDK", "SQL Server (36-Table Schema)"],
    gallery: [
      {
        src: "assets/img/projects/tri-nghia-pharma/screen-01.webp",
        type: "real-screenshot",
        title: { en: "Home Screen, OA Card & Flash Sale Grid", vi: "Trang chủ, Thẻ Zalo OA & Lưới Flash Sale" },
        caption: {
          en: "Real demo screenshot (01-home-screen.png) showing Zalo Official Account follow block, countdown flash sale, and product carousel.",
          vi: "Ảnh demo thực tế (01-home-screen.png) hiển thị thẻ quan tâm Zalo OA, đồng hồ Flash Sale và danh mục sản phẩm dược mỹ phẩm."
        }
      },
      {
        src: "assets/img/projects/tri-nghia-pharma/screen-02.webp",
        type: "real-screenshot",
        title: { en: "Catalog Filtering & Category Browser", vi: "Danh mục sản phẩm & Bộ lọc phân loại" },
        caption: {
          en: "Real demo screenshot (02-catalog-screen.png) demonstrating pharmaceutical category navigation and responsive product grid.",
          vi: "Ảnh demo thực tế (02-catalog-screen.png) trình diễn điều hướng nhóm dược phẩm và lưới hiển thị sản phẩm."
        }
      },
      {
        src: "assets/img/projects/tri-nghia-pharma/screen-03.webp",
        type: "real-screenshot",
        title: { en: "Product Detail, Pricing Tiers & Add-to-Cart", vi: "Chi tiết sản phẩm, Khuyến mãi & Thêm giỏ hàng" },
        caption: {
          en: "Real demo screenshot (03-product-detail.png) featuring multi-image gallery, discount badges, and instant floating Zalo support.",
          vi: "Ảnh demo thực tế (03-product-detail.png) gồm thư viện ảnh sản phẩm, giá ưu đãi và nút liên hệ hỗ trợ nhanh."
        }
      },
      {
        src: "assets/img/projects/tri-nghia-pharma/screen-04.webp",
        type: "real-screenshot",
        title: { en: "Shopping Cart & Order Confirmation", vi: "Giỏ hàng & Xác nhận đơn hàng Mini App" },
        caption: {
          en: "Real demo screenshot (04-cart-screen.png) displaying item quantity controls and Zalo Mini App checkout flow.",
          vi: "Ảnh demo thực tế (04-cart-screen.png) với bộ điều chỉnh số lượng và tổng hợp đơn đặt hàng."
        }
      }
    ],
    en: {
      summary: "Commercial Zalo Mini App for pharmacy & healthcare retail built with React, TypeScript, Vite, Jotai, localStorage, and Zalo Mini App SDK, complemented by a 36-table SQL Server database design and integration analysis during the 2026 internship.",
      overview: "Developed in TypeScript, React, Vite, Jotai, and the Zalo Mini App SDK, Tri Nghia Pharma delivers a mobile catalog, search, product details, and persistent cart inside Zalo. During the August–October 2026 internship at Tri Nghia Pharmaceutical & Medicinal Materials Co., Ltd., full system requirements and a 36-table SQL Server schema were designed and documented ahead of backend integration.",
      problem: "Retail pharmacies need an accessible shopping flow inside Zalo where customers already interact with Official Accounts, requiring both responsive frontend state (mock/localStorage) and a well-modeled relational backend specification for ordering, inventory reservation, and VietQR checkout.",
      solution: "Implemented the React/TypeScript Mini App using Jotai state, localStorage persistence, responsive Figma designs, and reusable Zalo Mini App SDK components; validated image assets and build configs for 22 products, designed a 36-table/46-relationship SQL Server schema, and documented Zalo Auth, KiotViet, and backend roadmap specs.",
      features: [
        "Product catalog, search, product detail gallery, flash-sale countdown, Zalo OA follow card, and persistent shopping cart using Jotai & localStorage.",
        "Responsive UI designed in Figma with reusable components powered by Zalo Mini App SDK and Vite.",
        "Validated product image assets and build configuration across 22 pharmaceutical products using Node utility scripts.",
        "Designed a 36-table, 46-relationship SQL Server schema (ordering, inventory reservation, payments) and documented Zalo Authentication, KiotViet, and VietQR requirements alongside a backend roadmap."
      ],
      architectureNotes: [
        "Built on React, TypeScript, Vite, Jotai, localStorage, and Zalo Mini App SDK targeting the Zalo Mini App runtime.",
        "Current deployed Mini App demo runs on structured product data and client-side localStorage persistence; backend APIs and external integrations (Zalo Auth, KiotViet) are specified in the database design and backend roadmap.",
        "SQL Server database design covers 36 tables and 46 relationships mapping product catalog, carts, orders, inventory reservations, vouchers, loyalty points, and payments."
      ],
      contribution: [
        "Mini App Development: Developed the React/TypeScript Zalo Mini App with catalog, search, product details, persistent cart (Jotai/localStorage), responsive Figma UI, and reusable Zalo Mini App SDK components.",
        "System & Requirement Analysis (Intern): Reviewed mock/localStorage workflows, validated assets & build configs for 22 products, and documented requirements for checkout, VietQR, orders, vouchers, loyalty, admin, Zalo Authentication, and KiotViet.",
        "Database Design & Roadmap: Designed a SQL Server schema with 36 tables and 46 relationships and outlined a backend development, database integration, and cloud deployment roadmap."
      ],
      developmentStatus: "Frontend Mini App (22 products) and 36-table SQL Server database schema & integration specifications completed; maintained in private repository Peo051/Tri-Nghia-Pharma."
    },
    vi: {
      summary: "Ứng dụng Zalo Mini App thương mại điện tử dược phẩm xây dựng với React, TypeScript, Vite, Jotai, localStorage và Zalo Mini App SDK; kèm phân tích yêu cầu và thiết kế CSDL SQL Server 36 bảng trong kỳ thực tập 08–10/2026.",
      overview: "Phát triển trên React, TypeScript, Vite, Jotai và Zalo Mini App SDK, Tri Nghia Pharma cung cấp luồng duyệt danh mục, tìm kiếm, xem chi tiết 22 sản phẩm và giỏ hàng lưu bền vững ngay trong Zalo. Trong kỳ thực tập (08–10/2026), hệ thống được phân tích đầy đủ nghiệp vụ và thiết kế lược đồ SQL Server 36 bảng sẵn sàng cho lộ trình tích hợp backend.",
      problem: "Nhà thuốc cần kênh đặt hàng ngay trên Zalo nơi khách hàng tương tác thường xuyên với Zalo OA, đồng thời đòi hỏi đặc tả CSDL và API chặt chẽ cho đơn hàng, giữ hàng tồn kho, thanh toán VietQR và đồng bộ quản trị trước khi xây dựng backend.",
      solution: "Triển khai Mini App React/TypeScript (Jotai, localStorage, Figma responsive UI, Zalo Mini App SDK); kiểm tra hình ảnh & cấu hình build cho 22 sản phẩm; thiết kế CSDL SQL Server 36 bảng, 46 mối quan hệ và tài liệu hóa yêu cầu Zalo Authentication, KiotViet cùng lộ trình backend.",
      features: [
        "Danh mục sản phẩm, tìm kiếm, chi tiết sản phẩm, Flash Sale, thẻ quan tâm Zalo OA và giỏ hàng lưu trữ bền vững qua Jotai & localStorage.",
        "Thiết kế giao diện responsive trên Figma và xây dựng bộ component tái sử dụng với Zalo Mini App SDK trên nền Vite.",
        "Kiểm tra tài nguyên hình ảnh và cấu hình đóng gói build cho 22 sản phẩm qua hệ thống script chuẩn hóa.",
        "Thiết kế lược đồ SQL Server gồm 36 bảng và 46 mối quan hệ (đặt hàng, giữ tồn kho, thanh toán); tài liệu hóa yêu cầu checkout, VietQR, voucher, tích điểm, quản trị, Zalo Auth, KiotViet và backend roadmap."
      ],
      architectureNotes: [
        "Frontend Mini App chạy trên React, TypeScript, Vite, Jotai, localStorage và Zalo Mini App SDK.",
        "Phân định rõ trạng thái thực tế: Mini App hiện dùng dữ liệu sản phẩm chuẩn hóa và localStorage phía client; các yêu cầu API, Zalo Authentication và KiotViet nằm trong tài liệu phân tích và thiết kế CSDL phục vụ giai đoạn backend.",
        "Thiết kế CSDL SQL Server gồm 36 bảng và 46 quan hệ chuẩn hóa khóa, kiểu dữ liệu và luồng nghiệp vụ giữ hàng tồn kho, thanh toán."
      ],
      contribution: [
        "Phát triển Mini App: Lập trình React/TypeScript Zalo Mini App (danh mục, tìm kiếm, chi tiết, giỏ hàng localStorage/Jotai), thiết kế UI responsive trên Figma và component Zalo Mini App SDK.",
        "Phân tích Hệ thống & Nghiệp vụ (Thực tập sinh): Rà soát dữ liệu mock/localStorage, kiểm tra ảnh & cấu hình build 22 sản phẩm, phân tích yêu cầu VietQR, voucher, tích điểm, quản trị và tài liệu hóa tích hợp Zalo Auth, KiotViet.",
        "Thiết kế CSDL & Lộ trình Backend: Thiết kế CSDL SQL Server 36 bảng, 46 mối quan hệ và xây dựng backend roadmap (API, CSDL, triển khai cloud)."
      ],
      developmentStatus: "Đã hoàn thiện Zalo Mini App (22 sản phẩm), tài liệu đặc tả yêu cầu và thiết kế CSDL SQL Server 36 bảng tại repository private Peo051/Tri-Nghia-Pharma."
    }
  },
  {
    slug: "greenbite-ai",
    title: "GreenBite AI — Surplus Food Rescue Platform",
    cover: "assets/img/projects/greenbite-ai/cover.webp",
    architectureSvg: "assets/img/projects/greenbite-ai/architecture.svg",
    architectureMermaid: "assets/img/projects/greenbite-ai/architecture.mmd",
    featured: true,
    categories: ["fullstack", "ai"],
    category: "TypeScript Monorepo · React + Express + Prisma",
    year: "2026",
    status: "Deployed",
    statusKey: "deployed",
    role: "Fullstack TypeScript Engineer",
    repo: "https://github.com/Peo051/GREENBITE-AI",
    repoSecondary: "https://github.com/Peo051/GREENBITE_AI_LADINGPAGE",
    isPrivateRepo: true,
    live: "https://greenbiteai.vercel.app/",
    tech: ["TypeScript", "React", "Express.js", "PostgreSQL", "Prisma ORM", "Google Gemini API", "JWT"],
    gallery: [
      {
        src: "assets/img/projects/greenbite-ai/screen-01.webp",
        type: "real-screenshot",
        title: { en: "Live Desktop Capture — GreenBite AI Platform", vi: "Giao diện Desktop Live — Nền tảng GreenBite AI" },
        caption: {
          en: "Captured live from https://greenbiteai.vercel.app/ (1440×900) showcasing campus F&B surplus rescue flows, QR ordering, and CO2 emission reduction.",
          vi: "Chụp trực tiếp từ https://greenbiteai.vercel.app/ (1440×900) giới thiệu luồng giải cứu món ngon cuối ngày quanh đại học và quy trình nhận đơn bằng mã QR."
        }
      },
      {
        src: "assets/img/projects/greenbite-ai/screen-02.webp",
        type: "real-screenshot",
        title: { en: "Live Mobile Responsive View (390×844)", vi: "Giao diện Mobile Responsive Live (390×844)" },
        caption: {
          en: "Mobile production viewport capture showing responsive student food rescue cards and merchant onboarding CTA.",
          vi: "Ảnh chụp thực tế trên màn hình 390×844 thể hiện giao diện di động mượt mà cho sinh viên và quán ăn đối tác."
        }
      }
    ],
    en: {
      summary: "TypeScript fullstack campus food-rescue marketplace connecting local eateries' end-of-day surplus meals with students via Gemini dynamic pricing, QR order redemption, and CO2 impact analytics.",
      overview: "Engineered as a typed monorepo (apps/frontend in React/Vite + apps/backend in Express/TypeScript/Prisma/PostgreSQL alongside a dedicated live Vercel showcase), GreenBite AI digitizes end-of-day food rescue workflows with strict role guards and order state transitions.",
      problem: "Campus eateries discard quality unsold meals at closing time while students seek affordable evening food options, lacking an organized channel with dynamic markdown pricing and fast QR pickup.",
      solution: "Built Express modular domain routes (auth, rescue-items, orders, admin, impact, ai) validated with request schemas and role middlewares, backed by PostgreSQL/Prisma and gemini.service.ts dynamic markdown recommendations.",
      features: [
        "Student surplus food discovery, discounted time-window offers, and QR code pickup ticket generation.",
        "Seller & Admin order lifecycle management enforced by deterministic state transitions (order-state.ts).",
        "AI end-of-day markdown & demand pricing assistant integrated through gemini.service.ts.",
        "Sustainability impact dashboard quantifying food waste diverted and estimated CO2 savings (impact.service.ts)."
      ],
      architectureNotes: [
        "Clean Express middleware pipeline enforces JWT authentication, RBAC role guards, and schema validation before controllers execute.",
        "Prisma ORM schema and migration history (prisma/schema.prisma, seed.ts, verify-seed.ts) guarantee database reproducibility.",
        "Companion landing/product showcase is deployed live on Vercel at greenbiteai.vercel.app."
      ],
      contribution: [
        "Developed fullstack TypeScript modules (rescue-items, orders, impact, ai) across the Express backend and React UI.",
        "Designed Prisma relational schema, database seeders, and verification scripts.",
        "Integrated Google Gemini API pricing guidance and deployed the live showcase on Vercel."
      ],
      developmentStatus: "Showcase live on Vercel (greenbiteai.vercel.app); full monorepo platform maintained in private repository Peo051/GREENBITE-AI."
    },
    vi: {
      summary: "Nền tảng fullstack TypeScript kết nối món ăn dư cuối ngày tại các quán quanh trường đại học tới sinh viên với gợi ý định giá động Gemini AI, nhận món qua mã QR và đo lường giảm phát thải CO2.",
      overview: "Tổ chức theo cấu trúc monorepo TypeScript (apps/frontend bằng React + apps/backend bằng Express, Prisma, PostgreSQL) cùng trang giới thiệu trực tuyến trên Vercel, GreenBite AI chuẩn hóa quy trình giải cứu thực phẩm cuối ngày với phân quyền chặt chẽ và máy trạng thái đơn hàng rõ ràng.",
      problem: "Cuối ngày nhiều quán ăn quanh khu vực đại học còn dư suất ăn chất lượng tốt nhưng khó tiếp cận nhanh sinh viên do thiếu kênh đăng bán giảm giá tức thời và nhận đơn gọn nhẹ.",
      solution: "Xây dựng các module API chuẩn hóa (auth, rescue-items, orders, admin, impact, ai) qua lớp middleware kiểm tra phân quyền và validation đầu vào, lưu trữ PostgreSQL qua Prisma ORM và tích hợp gemini.service.ts gợi ý mức giá.",
      features: [
        "Sinh viên tìm món ngon giá ưu đãi theo khung giờ cuối ngày và nhận mã QR lấy đồ nhanh tại quán.",
        "Quản lý vòng đời đơn hàng phía quán ăn và quản trị viên qua máy trạng thái order-state.ts.",
        "Tư vấn định giá giảm cuối ngày tự động bằng Google Gemini AI (gemini.service.ts).",
        "Theo dõi tác động môi trường quy đổi lượng thực phẩm cứu được và lượng khí thải CO2 giảm thiểu (impact.service.ts)."
      ],
      architectureNotes: [
        "Chuỗi middleware Express tách riêng xác thực JWT, kiểm tra Role (student/seller/admin) và validate payload trước khi vào service.",
        "CSDL PostgreSQL được quản lý migration, dữ liệu mẫu (seed.ts) và kiểm tra toàn vẹn (verify-seed.ts) qua Prisma.",
        "Trang sản phẩm và bản demo tương tác đang chạy trực tuyến trên Vercel."
      ],
      contribution: [
        "Phát triển các phân hệ backend Express/Prisma (rescue-items, orders, impact, ai) và kết nối giao diện React.",
        "Thiết kế lược đồ CSDL Prisma cùng bộ script seed và kiểm thử dữ liệu.",
        "Tích hợp Gemini API định giá động và triển khai bản live trên Vercel."
      ],
      developmentStatus: "Trang showcase đang chạy live trên Vercel (greenbiteai.vercel.app); mã nguồn monorepo hoàn chỉnh đặt tại repository private Peo051/GREENBITE-AI."
    }
  },
  {
    slug: "coffee-shop-management",
    title: "Coffee Shop Management System (WPF + SQL Server)",
    cover: "assets/img/projects/coffee-shop-management/cover.webp",
    architectureSvg: "assets/img/projects/coffee-shop-management/architecture.svg",
    architectureMermaid: "assets/img/projects/coffee-shop-management/architecture.mmd",
    featured: true,
    categories: ["desktop", "fullstack"],
    category: ".NET WPF Desktop · N-Tier Enterprise POS",
    year: "2025 — 2026",
    status: "Completed",
    statusKey: "completed",
    role: "Team Leader / Backend & Desktop Developer",
    repo: "https://github.com/Peo051/Coffee_Shop_Management_WPF",
    repoSecondary: "",
    isPrivateRepo: false,
    live: "",
    tech: ["C#", ".NET 8", "WPF", "ASP.NET Core Web API", "Dapper", "SQL Server", "PayOS/VietQR"],
    gallery: [
      {
        src: "assets/img/projects/coffee-shop-management/screen-01.webp",
        type: "technical-illustration",
        title: { en: "POS Floor Table Grid & Billing Workflow", vi: "Sơ đồ Bàn POS & Lập Hóa đơn Bán hàng" },
        caption: {
          en: "Technical UI illustration grounded in BanService.cs, HoaDonBanService.cs, and ExportPrintService.cs inside CoffeeShop.Wpf.",
          vi: "Minh họa giao diện kỹ thuật từ BanService.cs, HoaDonBanService.cs và ExportPrintService.cs trong solution CoffeeShop.Wpf."
        }
      },
      {
        src: "assets/img/projects/coffee-shop-management/screen-02.webp",
        type: "technical-illustration",
        title: { en: "BOM Recipe Deduction & Crystal Reports Pipeline", vi: "Trừ kho Định mức Nguyên liệu & Báo cáo Crystal Reports" },
        caption: {
          en: "Technical illustration showing ingredient BOM deduction (CongThucMonService.cs) and CoffeeShop.CrystalReports.Wpf daily revenue reports.",
          vi: "Minh họa cơ chế trừ kho theo công thức pha chế (CongThucMonService.cs) và module xuất báo cáo doanh thu CoffeeShop.CrystalReports.Wpf."
        }
      }
    ],
    en: {
      summary: "Coffee Shop Management System combining an N-tier WPF desktop suite with an ASP.NET Core Web API payment backend (Dapper + SQL Server) supporting PayOS/VietQR QR generation and HMAC-SHA256 verified webhooks.",
      overview: "Architected as a multi-project .NET solution unifying the WPF desktop POS (CoffeeShop.Wpf, CoffeeShop.EFModel, CoffeeShop.CrystalReports.Wpf) with an ASP.NET Core (.NET 8) payment API using controller–service–repository layering, Dapper, and SQL Server.",
      problem: "Cafes need both reliable desktop POS billing with recipe-based raw material inventory deduction and a secure server-side payment API capable of generating VietQR links and verifying asynchronous payment webhooks.",
      solution: "Led team development and engineered the ASP.NET Core payment API (controller–service–repository, Dapper, SQL Server) alongside WPF POS modules, integrating PayOS/VietQR payment creation, QR generation, webhook callbacks, and HMAC-SHA256 signature verification.",
      features: [
        "ASP.NET Core (.NET 8) payment Web API using controller–service–repository architecture, Dapper, and SQL Server.",
        "PayOS/VietQR payment creation, dynamic QR generation, webhook handling, payment status updates, and HMAC-SHA256 signature verification.",
        "Floor table matrix (KhuVuc, Ban), fast POS billing, shift reconciliation (CaLamViecService), and recipe BOM deduction (CongThucMonService).",
        "AuditLog tracking and dedicated Crystal Reports reporting views (CrystalDoanhThuTheoNgay.rpt)."
      ],
      architectureNotes: [
        "Backend payment Web API follows strict controller–service–repository separation with Dapper queries against SQL Server and HMAC-SHA256 webhook verification.",
        "Multi-assembly desktop separation isolates EF models (CoffeeShop.EFModel), reporting (CoffeeShop.CrystalReports.Wpf), and WPF views/services (CoffeeShop.Wpf).",
        "Input safety and DB connectivity routed through XAML validation behaviors and DbConnectionFactory / UserSecurityService."
      ],
      contribution: [
        "Team Leader / Backend Developer: Developed the ASP.NET Core (.NET 8) payment API using controller–service–repository architecture, Dapper, and SQL Server.",
        "Integrated PayOS/VietQR payment creation and QR generation; implemented webhook handling, payment status updates, and HMAC-SHA256 signature verification.",
        "Designed SQL Server entities (BOM recipe deduction, shifts, audit logs) and built core WPF desktop POS services & Crystal Reports views."
      ],
      developmentStatus: "Completed .NET 8 WPF POS & ASP.NET Core payment API solution publicly available on GitHub."
    },
    vi: {
      summary: "Hệ thống quản lý quán cà phê kết hợp ứng dụng Desktop WPF (MVVM/N-Tier) và ASP.NET Core Web API (.NET 8, Dapper, SQL Server) tích hợp thanh toán PayOS/VietQR kèm xác thực webhook HMAC-SHA256.",
      overview: "Cấu trúc theo giải pháp đa tầng .NET 8 gồm ứng dụng Desktop POS WPF (CoffeeShop.Wpf, CoffeeShop.EFModel, CoffeeShop.CrystalReports.Wpf) và API thanh toán ASP.NET Core Web API triển khai theo mô hình Controller–Service–Repository sử dụng Dapper và SQL Server.",
      problem: "Quán cà phê cần đồng thời phần mềm bán hàng tại quầy trừ kho theo định mức pha chế và một lớp API thanh toán phía backend an toàn để tạo mã VietQR và xác thực chữ ký webhook cập nhật trạng thái đơn.",
      solution: "Đóng vai trò Trưởng nhóm & Backend Developer: xây dựng API thanh toán ASP.NET Core theo kiến trúc Controller–Service–Repository với Dapper và SQL Server; tích hợp PayOS/VietQR, xử lý webhook và kiểm tra chữ ký HMAC-SHA256 song song với hệ thống POS WPF.",
      features: [
        "API thanh toán ASP.NET Core Web API (.NET 8) theo kiến trúc Controller–Service–Repository, Dapper và SQL Server.",
        "Tích hợp tạo thanh toán & sinh mã QR qua PayOS/VietQR; xử lý webhook cập nhật trạng thái thanh toán và xác thực chữ ký HMAC-SHA256.",
        "Sơ đồ bàn POS trực quan, tổng kết ca thu ngân (CaLamViecService) và tự động trừ kho nguyên liệu theo công thức định mức (CongThucMonService).",
        "Ghi nhật ký kiểm soát thao tác (AuditLog) và xuất báo cáo doanh thu Crystal Reports."
      ],
      architectureNotes: [
        "Backend API tuân thủ kiến trúc Controller–Service–Repository kết hợp Dapper trên SQL Server và xác thực chữ ký HMAC-SHA256 cho webhook PayOS.",
        "Ứng dụng desktop tách riêng tầng Model (CoffeeShop.EFModel), Báo cáo (CoffeeShop.CrystalReports.Wpf) và giao diện/service WPF (CoffeeShop.Wpf).",
        "Quản lý kết nối CSDL qua DbConnectionFactory và xác thực tài khoản qua UserSecurityService."
      ],
      contribution: [
        "Team Leader / Backend Developer: Phát triển ASP.NET Core payment API (.NET 8) theo mô hình Controller–Service–Repository với Dapper và SQL Server.",
        "Tích hợp PayOS/VietQR tạo giao dịch và sinh QR; lập trình xử lý webhook, cập nhật trạng thái đơn hàng và xác thực chữ ký HMAC-SHA256.",
        "Thiết kế CSDL SQL Server (định mức pha chế, ca làm, audit log), xây dựng các service POS WPF và tích hợp Crystal Reports."
      ],
      developmentStatus: "Đã hoàn thiện giải pháp WPF POS & ASP.NET Core Web API trên .NET 8, công khai trên GitHub."
    }
  },
  {
    slug: "yolov8-sign-language",
    title: "YOLOv8 Hand Sign Language Digit Detection",
    cover: "assets/img/projects/yolov8-sign-language/cover.webp",
    architectureSvg: "assets/img/projects/yolov8-sign-language/architecture.svg",
    architectureMermaid: "assets/img/projects/yolov8-sign-language/architecture.mmd",
    featured: false,
    categories: ["ai", "research"],
    category: "Computer Vision · YOLOv8 & OpenCV",
    year: "2025",
    status: "Completed",
    statusKey: "completed",
    role: "ML Pipeline & Computer Vision Developer",
    repo: "https://github.com/Peo051/YOLOv8_Detect_SignLanguage",
    repoSecondary: "",
    isPrivateRepo: false,
    live: "",
    tech: ["Python", "YOLOv8n-cls", "PyTorch", "OpenCV", "Jupyter Notebook", "Ultralytics"],
    gallery: [
      {
        src: "assets/img/projects/yolov8-sign-language/screen-01.webp",
        type: "technical-illustration",
        title: { en: "Dataset Digit Samples (0-9) & Model Config", vi: "Mẫu Ảnh Ký hiệu Tay (0-9) & Cấu hình Mô hình" },
        caption: {
          en: "Combines actual Sign Language Digits dataset images (dataset/train/0,2,5,7) from Peo051/YOLOv8_Detect_SignLanguage with yolov8n-cls model config.",
          vi: "Kết hợp ảnh mẫu thực tế từ bộ dữ liệu dataset/train/0,2,5,7 trong Peo051/YOLOv8_Detect_SignLanguage cùng cấu hình mô hình yolov8n-cls."
        }
      },
      {
        src: "assets/img/projects/yolov8-sign-language/screen-02.webp",
        type: "technical-illustration",
        title: { en: "Training, Validation & OpenCV Webcam Pipeline", vi: "Quy trình Huấn luyện, Đánh giá & Nhận dạng Webcam OpenCV" },
        caption: {
          en: "Technical pipeline diagram grounded in setup_project.py, fix_dataset.py, train_model.py, test_model.py, and webcam_digits.py.",
          vi: "Sơ đồ quy trình thực thi các script setup_project.py, fix_dataset.py, train_model.py, test_model.py và webcam_digits.py."
        }
      }
    ],
    en: {
      summary: "End-to-end YOLOv8n-cls computer vision pipeline for classifying sign-language hand digits (0–9) with reproducible Colab/CPU training scripts, trained best.pt weights, and real-time OpenCV webcam detection.",
      overview: "Automates dataset acquisition, folder cleanup, GPU/CPU training, evaluation, and live OpenCV ROI inference for Sign Language Digit recognition using Ultralytics YOLOv8 classification architecture.",
      problem: "Interactive sign-language learning demos often stall at static notebooks without repeatable setup scripts or low-latency webcam inference harnesses ready for classroom/desktop execution.",
      solution: "Packaged complete Python utilities (check_system.py, fix_dataset.py, train_model.py, train_model_cpu.py, test_model.py, webcam_digits.py) alongside setup.bat/run.bat and pre-trained best.pt weights.",
      features: [
        "Supports 10 hand-sign digit classes (0 through 9) trained atop yolov8n-cls.pt transfer weights.",
        "Real-time OpenCV webcam Region-of-Interest (ROI) overlay displaying predicted digit and confidence probability.",
        "Environment verification (check_system.py), Google Drive dataset download, and Colab notebook training support.",
        "Windows one-click batch wrappers (setup.bat, run.bat) for local deployment."
      ],
      architectureNotes: [
        "Separates preprocessing (collect_data.py, fix_dataset.py) from CPU/GPU training routines so experiments work across laptops and Colab GPUs.",
        "Stores verified best.pt weights directly alongside webcam_digits.py for immediate local inference testing.",
        "Comprehensive bilingual user documentation shipped via README.md, QUICKSTART.md, TRAIN_GUIDE.md, and HUONG_DAN.md."
      ],
      contribution: [
        "Built the full training, dataset-fixing, and model testing pipeline using Ultralytics YOLOv8 and PyTorch.",
        "Engineered webcam_digits.py real-time OpenCV inference loop with visual HUD overlays.",
        "Authored local environment setup diagnostics and quickstart guides."
      ],
      developmentStatus: "Completed computer vision pipeline with trained best.pt model published on public GitHub repository."
    },
    vi: {
      summary: "Hệ thống thị giác máy tính hoàn chỉnh dùng YOLOv8n-cls phân loại ký hiệu chữ số ngôn ngữ tay (0–9), kèm script huấn luyện GPU/CPU, trọng số best.pt và nhận dạng webcam OpenCV thời gian thực.",
      overview: "Đóng gói quy trình trọn vẹn từ tải/chuẩn hóa tập dữ liệu ký hiệu chữ số, huấn luyện phân loại bằng Ultralytics YOLOv8 (yolov8n-cls.pt), kiểm thử độ chính xác đến suy luận trực tiếp qua camera với OpenCV.",
      problem: "Nhiều bài toán nhận dạng thủ ngữ chỉ dừng ở notebook huấn luyện rời rạc, khó cài đặt lại trên máy trạm cá nhân và thiếu luồng demo webcam tốc độ thực.",
      solution: "Xây dựng bộ script Python đồng bộ (check_system.py, fix_dataset.py, train_model.py, train_model_cpu.py, test_model.py, webcam_digits.py) kèm file trọng số best.pt và file chạy nhanh setup.bat/run.bat.",
      features: [
        "Nhận dạng 10 lớp ký hiệu tay từ số 0 đến 9 dựa trên backbone nhẹ yolov8n-cls.",
        "Giao diện webcam OpenCV thời gian thực vẽ khung vùng quan tâm (ROI), nhãn dự đoán và độ tin cậy.",
        "Hỗ trợ kiểm tra môi trường CUDA/PyTorch (check_system.py) và huấn luyện trên Google Colab (train_on_colab.ipynb).",
        "Đính kèm tài liệu hướng dẫn chi tiết (HUONG_DAN.md, TRAIN_GUIDE.md, QUICKSTART.md)."
      ],
      architectureNotes: [
        "Tách riêng khâu làm sạch dữ liệu (fix_dataset.py) và các cấu hình train CPU/GPU giúp tái lập kết quả thuận tiện.",
        "Lưu trữ sẵn trọng số best.pt để chạy ngay suy luận mà không phải train lại từ đầu.",
        "Sử dụng OpenCV xử lý khung hình luồng camera nhẹ và ổn định."
      ],
      contribution: [
        "Xây dựng toàn bộ pipeline tiền xử lý dữ liệu, huấn luyện và đánh giá mô hình YOLOv8 phân loại thủ ngữ.",
        "Lập trình script webcam_digits.py hiển thị kết quả nhận diện theo thời gian thực.",
        "Hoàn thiện bộ công cụ kiểm tra phần cứng và tài liệu hướng dẫn vận hành."
      ],
      developmentStatus: "Đã hoàn thành mô hình, trọng số best.pt và mã nguồn công khai trên GitHub."
    }
  },
  {
    slug: "fake-news-detection",
    title: "Vietnamese Fake News Detection & Fact-Check Verifier",
    cover: "assets/img/projects/fake-news-detection/cover.webp",
    architectureSvg: "assets/img/projects/fake-news-detection/architecture.svg",
    architectureMermaid: "assets/img/projects/fake-news-detection/architecture.mmd",
    featured: false,
    categories: ["ai", "research", "fullstack"],
    category: "Vietnamese NLP · PhoBERT-v2 & Evidence Retrieval",
    year: "2026",
    status: "Completed",
    statusKey: "completed",
    role: "NLP & Backend Developer",
    repo: "https://github.com/Peo051/fake-news-detection",
    repoSecondary: "",
    isPrivateRepo: true,
    live: "",
    tech: ["Python", "PhoBERT-v2", "PyTorch", "Flask", "TF-IDF", "Scikit-learn", "Pytest"],
    gallery: [
      {
        src: "assets/img/projects/fake-news-detection/screen-01.webp",
        type: "technical-illustration",
        title: { en: "Verified PhoBERT-v2 Metrics & Hybrid Model Assets", vi: "Chỉ số Đánh giá PhoBERT-v2 & Tài nguyên Mô hình" },
        caption: {
          en: "Exact metrics recorded in models/training_metrics.json: 97.69% validation accuracy (94.79% macro-F1) and 79.85% test accuracy on VFND.",
          vi: "Số liệu thực tế từ models/training_metrics.json: độ chính xác 97.69% trên tập val (macro-F1 94.79%) và 79.85% trên tập test VFND."
        }
      },
      {
        src: "assets/img/projects/fake-news-detection/screen-02.webp",
        type: "technical-illustration",
        title: { en: "Real-Time Evidence Verifier & Flask Serving UI", vi: "Bộ Đối chiếu Bằng chứng Thời gian thực & Giao diện Flask" },
        caption: {
          en: "Technical pipeline diagram grounded in query_builder.py, realtime_retriever.py, factcheck_api.py, verifier.py, and app/app.py.",
          vi: "Sơ đồ luồng xử lý của query_builder.py, realtime_retriever.py, factcheck_api.py, verifier.py và web app app/app.py."
        }
      }
    ],
    en: {
      summary: "Hybrid Vietnamese fake news detection system combining fine-tuned vinai/phobert-base-v2 (97.69% val / 79.85% test accuracy on VFND) and TF-IDF models with real-time web evidence retrieval inside a Flask app.",
      overview: "Built on the Vietnamese Fake News Dataset (VFND corpus, 1,496 train / 130 val / 273 test rows), this system marries deep transformer language classification (train_phobert.py) and lightweight scikit-learn TF-IDF baselines (train.py) with external fact-checking evidence retrieval (realtime_retriever.py, factcheck_api.py) served via Flask.",
      problem: "Text-only classifiers can misclassify recent breaking news or nuanced fabrications whose facts shift over time unless supplemented by live external verification sources.",
      solution: "Engineered a dual classification + retrieval architecture combining Vietnamese text preprocessing (preprocess.py, stopwords_vi.txt), PhoBERT-v2 fine-tuning, claim query construction (query_builder.py), cached API retrieval (api_cache.py), and offline verification fallback (offline_factcheck.py).",
      features: [
        "Fine-tuned vinai/phobert-base-v2 transformer (num_epochs=5, max_length=256) alongside serialized fake_news_model_vi.pkl + tfidf_vectorizer_vi.pkl models.",
        "Recorded verified performance metrics in models/training_metrics.json: Validation Accuracy 97.69% (Macro F1: 94.79%) and Test Accuracy 79.85% (Macro F1: 79.37%).",
        "External claim verification pipeline (query_builder.py, realtime_retriever.py, factcheck_api.py, verifier.py) with response caching.",
        "Flask web verification interface (app/app.py, app/templates/index.html) backed by Pytest unit tests (test_preprocess.py, test_verifier.py)."
      ],
      architectureNotes: [
        "Text pipeline handles Vietnamese normalization, stopword filtering, and dataset augmentation cleanly prior to tokenization.",
        "Supports seamless switching or ensemble fallback between offline TF-IDF/offline factcheck and online evidence lookup.",
        "Automated Pytest suite guards preprocessing regex rules and verifier aggregation contracts."
      ],
      contribution: [
        "Prepared VFND JSON/CSV datasets, Vietnamese preprocessing modules, and PhoBERT-v2 + TF-IDF training pipelines.",
        "Implemented claim query extraction, web evidence retriever, API cache layer, and verifier scoring logic.",
        "Built the Flask web interface and authored Pytest tests documenting validation/test benchmarks."
      ],
      developmentStatus: "Completed NLP classification & fact-checking prototype with saved metrics and models in private repo Peo051/fake-news-detection."
    },
    vi: {
      summary: "Hệ thống phát hiện tin giả tiếng Việt kết hợp fine-tune vinai/phobert-base-v2 (97.69% val / 79.85% test trên bộ VFND) và TF-IDF cùng cơ chế truy xuất bằng chứng kiểm chứng trực tuyến trên nền Flask.",
      overview: "Huấn luyện trên tập dữ liệu VFND tiếng Việt (1.496 mẫu train / 130 val / 273 test), dự án kết hợp mô hình ngôn ngữ sâu PhoBERT-v2 (train_phobert.py) và mô hình TF-IDF truyền thống (train.py) với pipeline truy vấn xác thực thông tin theo thời gian thực (realtime_retriever.py, factcheck_api.py) qua giao diện web Flask.",
      problem: "Các bộ phân loại chỉ dựa vào văn phong bài viết dễ nhầm lẫn với tin tức thời sự mới phát sinh nếu không đối chiếu thêm thông tin kiểm chứng từ các nguồn uy tín bên ngoài.",
      solution: "Thiết kế kiến trúc lai gồm tiền xử lý tiếng Việt (preprocess.py, stopwords_vi.txt), phân loại PhoBERT-v2 / TF-IDF, trích xuất truy vấn sự kiện (query_builder.py), cache kết quả API (api_cache.py) và chế độ dự phòng ngoại tuyến (offline_factcheck.py).",
      features: [
        "Fine-tune vinai/phobert-base-v2 (5 epochs, max_length=256, fp16) song song bộ trọng số nhẹ fake_news_model_vi.pkl.",
        "Kết quả thực nghiệm ghi nhận trong models/training_metrics.json: Tập Val đạt 97.69% Accuracy (94.79% Macro-F1); Tập Test đạt 79.85% Accuracy (79.37% Macro-F1).",
        "Module truy xuất bằng chứng (realtime_retriever.py, verifier.py) kèm lớp cache API giảm độ trễ.",
        "Web UI Flask (app/app.py, app/templates/index.html) và bộ unit test Pytest (test_preprocess.py, test_verifier.py)."
      ],
      architectureNotes: [
        "Chuẩn hóa văn bản tiếng Việt, lọc từ dừng và tăng cường dữ liệu trước khi đưa qua tokenizer hoặc TF-IDF.",
        "Có cơ chế chạy ngoại tuyến (offline_factcheck.py) khi không gọi API tra cứu bên ngoài.",
        "Đóng gói kiểm thử đơn vị bằng Pytest cho logic tiền xử lý và tổng hợp độ tin cậy."
      ],
      contribution: [
        "Xử lý bộ dữ liệu VFND, xây dựng pipeline huấn luyện PhoBERT-v2, TF-IDF và lưu vết chỉ số đánh giá.",
        "Phát triển module trích xuất truy vấn, truy tìm bằng chứng kiểm chứng và caching phản hồi.",
        "Xây dựng giao diện web Flask và bộ test Pytest."
      ],
      developmentStatus: "Đã hoàn thành pipeline NLP, mô hình đã huấn luyện và báo cáo chỉ số trong repository private Peo051/fake-news-detection."
    }
  },
  {
    slug: "high-utility-itemset-mining",
    title: "HUI-Miner & CLH-Miner — High-Utility Itemset Mining Suite",
    cover: "assets/img/projects/high-utility-itemset-mining/cover.webp",
    architectureSvg: "assets/img/projects/high-utility-itemset-mining/architecture.svg",
    architectureMermaid: "assets/img/projects/high-utility-itemset-mining/architecture.mmd",
    featured: false,
    categories: ["research", "academic"],
    category: "Java Algorithms · Data Mining Research",
    year: "2025",
    status: "Completed",
    statusKey: "completed",
    role: "Algorithm Implementer & Researcher",
    repo: "https://github.com/Peo051/HUIMiner",
    repoSecondary: "https://github.com/Peo051/CLHMiner",
    isPrivateRepo: false,
    live: "",
    tech: ["Java", "HUI-Miner", "CLH-Miner", "Utility-List", "Taxonomy Tree", "EUCS Pruning"],
    gallery: [
      {
        src: "assets/img/projects/high-utility-itemset-mining/screen-01.webp",
        type: "technical-illustration",
        title: { en: "HUI-Miner Utility-List & Upper-Bound Pruning", vi: "Cấu trúc Utility-List & Tỉa nhánh HUI-Miner" },
        caption: {
          en: "Technical algorithm illustration grounded in HUIMiner.java, UtilityList.java, Element.java, and MemoryLogger.java.",
          vi: "Minh họa thuật toán dựa trên các lớp HUIMiner.java, UtilityList.java, Element.java và MemoryLogger.java."
        }
      },
      {
        src: "assets/img/projects/high-utility-itemset-mining/screen-02.webp",
        type: "technical-illustration",
        title: { en: "CLH-Miner Cross-Level Taxonomy Hierarchy", vi: "Cây Phân cấp Taxonomy Đa tầng CLH-Miner" },
        caption: {
          en: "Technical illustration of TaxonomyTree.java, TaxonomyNode.java, and cross-level utility aggregation in AlgoCLHMiner.java.",
          vi: "Minh họa cấu trúc TaxonomyTree.java, TaxonomyNode.java và tổng hợp lợi ích đa cấp trong AlgoCLHMiner.java."
        }
      }
    ],
    en: {
      summary: "Clean Java research implementations of two seminal data-mining algorithms: single-phase Utility-List HUI-Miner and taxonomy-aware cross-level CLH-Miner with memory telemetry.",
      overview: "Pairs Peo051/HUIMiner and Peo051/CLHMiner into a unified algorithmic study on discovering high-utility patterns from weighted transactional databases without costly candidate-generation phases.",
      problem: "Classical frequent pattern mining ignores item profits/quantities, while two-phase utility miners explode memory generating massive candidate sets; extending to cross-level product categories adds taxonomy aggregation complexity.",
      solution: "Implemented compact UtilityList (Element tuples storing tid, iutils, rutils), TWU item ordering, upper-bound pruning, and TaxonomyTree hierarchical structures inside pure Java with MemoryLogger profiling.",
      features: [
        "Single-phase HUIMiner.java computing high-utility itemsets directly via Utility-List intersections.",
        "Cross-level hierarchical mining (AlgoCLHMiner.java) loading taxonomy.txt trees via TaxonomyNode and TaxonomyTree.",
        "Built-in MemoryLogger.java tracking peak JVM memory footprint across varying minUtil thresholds.",
        "Deterministic CLI runners (Main.java) verified against sample input.txt, taxonomy.txt, and output.txt traces."
      ],
      architectureNotes: [
        "Utility-List structure (sumIutils + sumRutils >= minUtil) prunes unproductive DFS branches early.",
        "CLHMiner generalizes transaction item utilities upward along taxonomy parent links cleanly.",
        "Zero external runtime dependencies — pure standard-library Java implementations."
      ],
      contribution: [
        "Implemented HUIMiner, UtilityList, Element, and MemoryLogger in Java from foundational research specifications.",
        "Extended Utility-List intersection logic to cross-level taxonomies in AlgoCLHMiner, TaxonomyTree, and TaxonomyNode.",
        "Constructed reproducible test datasets (input.txt, taxonomy.txt) and output verification runs."
      ],
      developmentStatus: "Completed research implementations publicly available across Peo051/HUIMiner and Peo051/CLHMiner."
    },
    vi: {
      summary: "Cài đặt thuật toán khai phá tập mục hữu ích cao (HUI-Miner một pha dùng Utility-List) và khai phá đa tầng theo cây phân loại (CLH-Miner) bằng Java thuần kèm đo lường bộ nhớ JVM.",
      overview: "Tổng hợp hai repository nghiên cứu Peo051/HUIMiner và Peo051/CLHMiner, minh họa quá trình tối ưu hóa khai thác mẫu giao dịch có trọng số lợi ích mà không cần bước sinh ứng viên tốn kém bộ nhớ.",
      problem: "Khai phá mẫu phổ biến truyền thống bỏ qua trọng số lợi ích/số lượng sản phẩm, còn thuật toán 2 pha lại sinh quá nhiều tập ứng viên; mở rộng sang cây phân loại sản phẩm càng đòi hỏi tổng hợp lợi ích xuyên tầng chính xác.",
      solution: "Triển khai cấu trúc UtilityList (Element gồm tid, iutils, rutils), sắp xếp theo TWU, tỉa nhánh cận trên và cây TaxonomyTree trong Java chuẩn tích hợp công cụ đo bộ nhớ MemoryLogger.",
      features: [
        "Thuật toán một pha HUIMiner.java khai phá tập mục hữu ích cao thông qua phép kết nối Utility-List.",
        "Thuật toán đa cấp AlgoCLHMiner.java nạp cây phân loại từ taxonomy.txt qua TaxonomyNode và TaxonomyTree.",
        "Giám sát bộ nhớ đỉnh JVM với MemoryLogger.java và thời gian thực thi ứng với từng ngưỡng minUtil.",
        "Chạy kiểm chứng đầu vào/ra đầy đủ qua Main.java, input.txt, taxonomy.txt và output.txt."
      ],
      architectureNotes: [
        "Điều kiện cận trên sumIutils + sumRutils >= minUtil giúp cắt sớm các nhánh tìm kiếm theo chiều sâu không tiềm năng.",
        "CLHMiner tổng hợp giá trị lợi ích từ nút lá lên các nút danh mục cha trong cây phân cấp một cách nhất quán.",
        "Mã nguồn Java thuần gọn nhẹ, không phụ thuộc thư viện ngoài."
      ],
      contribution: [
        "Cài đặt hoàn chỉnh thuật toán HUIMiner, cấu trúc UtilityList, Element và MemoryLogger bằng Java.",
        "Phát triển mở rộng đa tầng phân loại với AlgoCLHMiner, TaxonomyTree và TaxonomyNode.",
        "Chuẩn bị dữ liệu kiểm thử (input.txt, taxonomy.txt) và đối chiếu kết quả đầu ra."
      ],
      developmentStatus: "Đã hoàn thành mã nguồn nghiên cứu và công khai trên hai repository Peo051/HUIMiner & Peo051/CLHMiner."
    }
  },
  {
    slug: "calculator-wpf",
    title: "Modern WPF Calculator (.NET 8 MVVM)",
    cover: "assets/img/projects/calculator-wpf/cover.webp",
    architectureSvg: "assets/img/projects/calculator-wpf/architecture.svg",
    architectureMermaid: "assets/img/projects/calculator-wpf/architecture.mmd",
    featured: false,
    categories: ["desktop", "academic"],
    category: ".NET 8 WPF · Clean MVVM Desktop",
    year: "2026",
    status: "Completed",
    statusKey: "completed",
    role: "Desktop Developer",
    repo: "https://github.com/Peo051/Calculator",
    repoSecondary: "",
    isPrivateRepo: false,
    live: "",
    tech: ["C#", ".NET 8", "WPF XAML", "MVVM", "RelayCommand", "Draw.io"],
    gallery: [
      {
        src: "assets/img/projects/calculator-wpf/screen-01.webp",
        type: "technical-illustration",
        title: { en: "WPF Keypad UI & Calculation History Tape", vi: "Giao diện Bàn phím WPF & Lịch sử Tính toán" },
        caption: {
          en: "Technical illustration of MainWindow.xaml data bindings and Models/HistoryItem.cs observable tape.",
          vi: "Minh họa giao diện MainWindow.xaml kết nối dữ liệu hai chiều và nhật ký biểu thức Models/HistoryItem.cs."
        }
      },
      {
        src: "assets/img/projects/calculator-wpf/screen-02.webp",
        type: "technical-illustration",
        title: { en: ".NET 8 Clean MVVM Layer Anatomy", vi: "Cấu trúc Tầng MVVM Chuẩn trên .NET 8" },
        caption: {
          en: "Technical architecture card mapping RelayCommand.cs, CalculatorViewModel.cs, BaseViewModel.cs, and CalculatorService.cs.",
          vi: "Minh họa phân tách lớp giữa RelayCommand.cs, CalculatorViewModel.cs, BaseViewModel.cs và CalculatorService.cs."
        }
      }
    ],
    en: {
      summary: ".NET 8 Windows desktop calculator demonstrating strict Model-View-ViewModel (MVVM) separation, reusable RelayCommand bindings, arithmetic service isolation, and expression history tracking.",
      overview: "Built cleanly on .NET 8.0-windows, this WPF project isolates UI layout (MainWindow.xaml), property change notification (BaseViewModel), command routing (RelayCommand), history records (HistoryItem), and calculation logic (CalculatorService) with zero business code inside code-behind files.",
      problem: "Desktop beginners often dump arithmetic logic directly inside button click handlers in MainWindow.xaml.cs, creating untestable, tightly coupled UI code.",
      solution: "Structured a textbook MVVM folder layout (Commands/, Models/, Services/, ViewModels/) accompanied by Calculator.drawio architecture documentation and publish profile setup.",
      features: [
        "Zero-code-behind button interaction driven entirely through ICommand / RelayCommand bindings.",
        "Pure CalculatorService.cs handling arithmetic operations, chaining, clear states, and division-by-zero safety.",
        "Live calculation history tracking via strongly typed HistoryItem entries.",
        "Includes Calculator.drawio design diagram and FolderProfile.pubxml Windows release profile."
      ],
      architectureNotes: [
        "BaseViewModel implements INotifyPropertyChanged cleanly using CallerMemberName semantics.",
        "Service layer separation makes the calculation core trivially unit-testable without instantiating WPF windows."
      ],
      contribution: [
        "Designed the complete .NET 8 WPF MVVM solution and Draw.io architecture diagram.",
        "Implemented RelayCommand, CalculatorViewModel, CalculatorService, and history management."
      ],
      developmentStatus: "Completed .NET 8 WPF desktop application publicly hosted on GitHub."
    },
    vi: {
      summary: "Ứng dụng máy tính desktop .NET 8 WPF minh họa chuẩn kiến trúc MVVM tách lớp sạch sẽ với RelayCommand, dịch vụ tính toán độc lập và lưu lịch sử biểu thức.",
      overview: "Phát triển trên nền tảng .NET 8.0-windows, dự án tách biệt hoàn toàn giao diện XAML (MainWindow.xaml), BaseViewModel, định tuyến lệnh (RelayCommand), mô hình dữ liệu (HistoryItem) và logic tính toán (CalculatorService) mà không viết xử lý nghiệp vụ trong code-behind.",
      problem: "Mã nguồn desktop mới học thường viết trực tiếp phép tính vào sự kiện Click trong code-behind, gây khó bảo trì và không thể kiểm thử độc lập.",
      solution: "Tổ chức giải pháp chuẩn MVVM gồm các thư mục Commands/, Models/, Services/, ViewModels/, kèm sơ đồ thiết kế Calculator.drawio và cấu hình xuất bản Windows.",
      features: [
        "Tương tác bàn phím và chuột điều phối hoàn toàn qua giao diện ICommand / RelayCommand.",
        "Tầng CalculatorService.cs xử lý biểu thức liên hoàn, reset trạng thái và an toàn chia cho 0.",
        "Ghi lại danh sách lịch sử các phép tính qua đối tượng HistoryItem.",
        "Tích hợp sẵn sơ đồ kiến trúc Calculator.drawio và profile đóng gói .pubxml."
      ],
      architectureNotes: [
        "BaseViewModel cài đặt chuẩn INotifyPropertyChanged đồng bộ UI tự động.",
        "Nhờ tách riêng CalculatorService, toàn bộ logic tính toán có thể viết unit test mà không cần khởi tạo cửa sổ WPF."
      ],
      contribution: [
        "Thiết kế solution .NET 8 WPF theo kiến trúc MVVM và vẽ sơ đồ Calculator.drawio.",
        "Lập trình RelayCommand, CalculatorViewModel, CalculatorService và lịch sử tính toán."
      ],
      developmentStatus: "Đã hoàn thành ứng dụng desktop .NET 8 và công khai trên GitHub."
    }
  },
  {
    slug: "parking-dsa",
    title: "Smart Parking Lot Management System (C++ DSA)",
    cover: "assets/img/projects/parking-dsa/cover.webp",
    architectureSvg: "assets/img/projects/parking-dsa/architecture.svg",
    architectureMermaid: "assets/img/projects/parking-dsa/architecture.mmd",
    featured: false,
    categories: ["academic", "desktop"],
    category: "C++ · Data Structures & Console UI",
    year: "2025",
    status: "Completed",
    statusKey: "completed",
    role: "C++ Core Developer",
    repo: "https://github.com/Peo051/QuanLiBaiDoXe",
    repoSecondary: "",
    isPrivateRepo: false,
    live: "",
    tech: ["C++", "Data Structures", "File I/O", "Visual Studio", "Console UI"],
    gallery: [
      {
        src: "assets/img/projects/parking-dsa/screen-01.webp",
        type: "technical-illustration",
        title: { en: "C++ Console Slot Matrix & Header Modules", vi: "Giao diện Console C++ & Phân tách Header" },
        caption: {
          en: "Technical UI illustration grounded in DuongBao.h, Ham.h, struct.h, and Main.cpp.",
          vi: "Minh họa giao diện console xây dựng từ DuongBao.h, Ham.h, struct.h và Main.cpp."
        }
      },
      {
        src: "assets/img/projects/parking-dsa/screen-02.webp",
        type: "technical-illustration",
        title: { en: "Persistent Text State & Staff History Files", vi: "Cơ chế Lưu trữ File TXT & Nhật ký Hoạt động" },
        caption: {
          en: "Technical illustration showing file persistence across xeVaoBai.txt, dsNhanVien.txt, lichSuXeTrongBai.txt, and lichSuNhanVien.txt.",
          vi: "Minh họa luồng đọc ghi trạng thái bền vững qua xeVaoBai.txt, dsNhanVien.txt, lichSuXeTrongBai.txt và lichSuNhanVien.txt."
        }
      }
    ],
    en: {
      summary: "Final Data Structures & Algorithms (DSA) C++ console application managing vehicle check-in/out, parking slots, staff shifts, search/sort routines, and persistent flat-file audit ledgers.",
      overview: "Structured cleanly inside a Visual Studio Solution (QuanLiBaiDoXe.sln) separating entity structs (struct.h), console framing/UI rendering (DuongBao.h), DSA list & search routines (Ham.h), and file-backed vehicle/staff history logs.",
      problem: "Demonstrating manual memory management, structured traversal, and persistent state recovery in pure C++ without relying on an external SQL database engine.",
      solution: "Designed structured C++ data models paired with custom console box drawing, interactive operator menus, search/filtering operations, and synchronized .txt persistence files.",
      features: [
        "Vehicle entry & exit registration (xeVaoBai.txt) with fee/duration tracking and history archiving (lichSuXeTrongBai.txt).",
        "Staff account & shift registry (dsNhanVien.txt) alongside operator action logs (lichSuNhanVien.txt).",
        "Custom Windows console frame & menu rendering engine implemented in DuongBao.h.",
        "Clean C++ modular header split (struct.h, DuongBao.h, Ham.h, Main.cpp)."
      ],
      architectureNotes: [
        "Decouples console visual drawing primitives from data manipulation algorithms and file serialization.",
        "Persists active yard state and historical logs synchronously to text ledgers on transitions."
      ],
      contribution: [
        "Implemented core data structures, check-in/check-out algorithms, search utilities, and text persistence in C++.",
        "Built reusable console border drawing headers and collaborated cleanly in team Git workflow (tranGiaBao.cpp / tranDuongGiaBao.cpp)."
      ],
      developmentStatus: "Completed C++ DSA academic capstone publicly archived on GitHub."
    },
    vi: {
      summary: "Đồ án cuối kỳ Cấu trúc Dữ liệu & Giải thuật bằng C++ quản lý xe vào/ra bãi, vị trí đỗ, ca trực nhân viên, tìm kiếm sắp xếp và lưu vết nhật ký bền vững bằng file văn bản.",
      overview: "Đóng gói chuẩn theo Visual Studio Solution (QuanLiBaiDoXe.sln) tách biệt cấu trúc thực thể (struct.h), thư viện vẽ khung console (DuongBao.h), các hàm thuật toán danh sách (Ham.h) và hệ thống file lưu trữ lịch sử xe và nhân viên.",
      problem: "Triển khai hệ thống quản lý hoàn chỉnh bằng C++ thuần có khả năng lưu và khôi phục trạng thái bãi xe thực tế giữa các lần chạy mà không sử dụng hệ quản trị CSDL ngoài.",
      solution: "Tổ chức bộ cấu trúc dữ liệu C++ tối ưu cùng thao tác đọc/ghi đồng bộ ra các tệp dữ liệu trạng thái (xeVaoBai.txt, dsNhanVien.txt) và tệp nhật ký kiểm toán (lichSuXeTrongBai.txt, lichSuNhanVien.txt).",
      features: [
        "Ghi nhận xe vào/ra bãi (xeVaoBai.txt), tra cứu biển số và lưu lịch sử lượt gửi (lichSuXeTrongBai.txt).",
        "Quản lý danh sách nhân viên (dsNhanVien.txt) và nhật ký thao tác ca trực (lichSuNhanVien.txt).",
        "Giao diện console kẻ khung trực quan và điều hướng menu tiện lợi qua DuongBao.h.",
        "Phân chia module header C++ mạch lạc (struct.h, DuongBao.h, Ham.h, Main.cpp)."
      ],
      architectureNotes: [
        "Tách riêng tầng vẽ khung console khỏi các thao tác cấu trúc dữ liệu và đọc ghi tệp tin.",
        "Đảm bảo trạng thái bãi xe luôn được cập nhật bền vững khi xe ra/vào."
      ],
      contribution: [
        "Lập trình cấu trúc dữ liệu quản lý bãi xe, luồng xe vào/ra, tìm kiếm và đồng bộ file trong C++.",
        "Xây dựng hàm tiện ích hiển thị khung console và cộng tác hoàn thiện đồ án nhóm trên GitHub."
      ],
      developmentStatus: "Đã hoàn thành đồ án cuối kỳ môn Cấu trúc Dữ liệu & Giải thuật, mã nguồn công khai trên GitHub."
    }
  }
];
