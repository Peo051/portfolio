(() => {
  "use strict";

  const app = document.getElementById("app");
  const siteHeader = document.getElementById("siteHeader");
  const languageToggle = document.getElementById("languageToggle");
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  // Lightbox modal elements
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxSubtitle = document.getElementById("lightboxSubtitle");
  const lightboxAction = document.getElementById("lightboxAction");
  const lightboxSubcourses = document.getElementById("lightboxSubcourses");

  const icon = (name) => {
    const icons = {
      arrow: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 19 19 5M8 5h11v11"/></svg>`,
      github: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.28-5.27-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.16 1.18a10.96 10.96 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>`,
      download: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"/></svg>`,
      mail: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.5 6.5h17v11h-17z"/><path d="m4 7 8 6 8-6"/></svg>`,
      external: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>`,
      zoom: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>`,
      certificate: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6m-6 4h4"/></svg>`
    };
    return icons[name] || "";
  };

  const data = {
    en: {
      nav: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        achievements: "Achievements & Certifications",
        resume: "Resume",
        contact: "Contact"
      },
      home: {
        eyebrow: "Backend / Fullstack Developer Intern",
        firstName: "GIA",
        lastName: "BAO",
        role: "C# · .NET 8 · ASP.NET CORE · SQL SERVER · FULLSTACK · APPLIED AI",
        description: "Third-year Information Technology student at HUIT, focused on backend and fullstack development. I build practical software systems around RESTful APIs, relational databases, authentication, payment integrations and applied AI workflows.",
        availability: "Open to internship opportunities",
        location: "Ho Chi Minh City, Vietnam",
        viewProjects: "View projects",
        downloadCV: "Download CV",
        contact: "Contact me",
        proof: [
          ["3.74 / 4.0", "Current GPA · HUIT"],
          ["2024 — Present", "Information Technology"],
          ["5+", "Practical software projects"],
          [".NET / Web API", "Primary backend focus"]
        ],
        focusEyebrow: "Core Specialization",
        focusTitle: "Engineering foundations with practical output.",
        focusIntro: "My portfolio emphasizes what I can demonstrate through working software: robust backend APIs, relational data models, desktop architecture and fullstack applications.",
        focusAreas: [
          {
            number: "01",
            title: "Backend & API Engineering",
            desc: "Designing RESTful APIs with ASP.NET Core and FastAPI, featuring layered architecture, JWT authentication, and HMAC webhook verification.",
            tags: ["C#", ".NET 8", "ASP.NET Core", "FastAPI", "Webhooks"]
          },
          {
            number: "02",
            title: "Relational Databases & Data Access",
            desc: "Database schema design, query optimization, indexing, and data access with SQL Server, T-SQL, PostgreSQL, and Dapper micro-ORM.",
            tags: ["SQL Server", "T-SQL", "PostgreSQL", "Dapper", "Schema Design"]
          },
          {
            number: "03",
            title: "Fullstack & Desktop Systems",
            desc: "End-to-end development across desktop and web, applying MVVM design patterns in WPF and modern component architectures in Next.js.",
            tags: ["WPF", "MVVM Pattern", "Next.js", "Bootstrap", "TypeScript"]
          },
          {
            number: "04",
            title: "Applied AI & Data Science",
            desc: "Integrating conversational AI, OCR text extraction, and sentiment analysis pipelines, alongside competitive student data research.",
            tags: ["Applied AI", "FastAPI", "OpenAI API", "OCR", "Data Science"]
          }
        ],
        featuredEyebrow: "Selected Work",
        featuredTitle: "Projects built for real-world workflows.",
        featuredIntro: "Hand-crafted software covering enterprise POS, banking payment APIs, fullstack AI analysis, and e-commerce.",
        certsEyebrow: "Verified Credentials",
        certsTitle: "Continuous learning & professional certificates.",
        certsIntro: "Official certifications from Google and academic competitions demonstrating technical competency across AI, systems and UX."
      },
      pages: {
        skills: {
          eyebrow: "Skills & Capabilities",
          title: "Technical skills, grouped by how I apply them.",
          lead: "A structured overview of the technologies I have utilized in academic coursework and practical software engineering projects."
        },
        projects: {
          eyebrow: "Project Portfolio",
          title: "Work that demonstrates how I build.",
          lead: "From desktop POS systems and payment webhooks to fullstack AI applications, these projects showcase my end-to-end development capabilities."
        },
        education: {
          eyebrow: "Education",
          title: "Academic foundation & continuous practice.",
          lead: "I study Information Technology at the University of Industry and Trade (HUIT), maintaining a 3.74 / 4.0 GPA with an emphasis on Applied Computing."
        },
        achievements: {
          eyebrow: "Achievements & Certifications",
          title: "Competitions, research and verified credentials.",
          lead: "Official milestones in database design, student scientific research, data science competitions, and verified professional certificates from Google."
        },
        resume: {
          eyebrow: "Resume",
          title: "Profile, technical stack and practical experience.",
          lead: "You can review the interactive portfolio overview below or download the official PDF CV."
        },
        contact: {
          eyebrow: "Contact & Collaboration",
          title: "Let's discuss an internship or software project.",
          lead: "I am actively seeking an internship where I can contribute to backend and fullstack software development while learning from senior engineers."
        }
      },
      common: {
        explore: "Explore details",
        repo: "Source Code",
        live: "Live Preview",
        technology: "Technologies",
        period: "Period",
        role: "Role",
        status: "Status",
        overview: "Overview",
        contribution: "What I Built",
        engineering: "Engineering Notes",
        stack: "Technology Stack",
        back: "All Projects",
        source: "Project Links",
        current: "Present",
        download: "Download CV",
        all: "All",
        filterAi: "AI & Prompting",
        filterUx: "UX & Product",
        filterCareer: "Career & Data",
        zoomCert: "View details",
        viewProof: "View award certificate",
        verifyLink: "Verify Credential",
        completed: "Completed",
        inDev: "In Development",
        deployed: "Deployed",
        subcoursesTitle: "Course Certificates Included in this Program"
      }
    },
    vi: {
      nav: {
        home: "Trang chủ",
        projects: "Dự án",
        skills: "Kỹ năng",
        education: "Học vấn",
        achievements: "Thành tích & Chứng chỉ",
        resume: "CV",
        contact: "Liên hệ"
      },
      home: {
        eyebrow: "Thực tập sinh Backend / Fullstack",
        firstName: "GIA",
        lastName: "BAO",
        role: "C# · .NET 8 · ASP.NET CORE · SQL SERVER · FULLSTACK · APPLIED AI",
        description: "Sinh viên năm 3 ngành Công nghệ Thông tin tại HUIT, định hướng chuyên sâu Backend và Fullstack. Tôi tập trung xây dựng các sản phẩm thực tế có RESTful API, cơ sở dữ liệu quan hệ, xác thực người dùng, tích hợp cổng thanh toán và luồng xử lý AI.",
        availability: "Đang tìm cơ hội thực tập",
        location: "TP. Hồ Chí Minh, Việt Nam",
        viewProjects: "Xem dự án",
        downloadCV: "Tải CV",
        contact: "Liên hệ",
        proof: [
          ["3.74 / 4.0", "GPA hiện tại · HUIT"],
          ["2024 — Hiện tại", "Công nghệ Thông tin"],
          ["5+", "Dự án phần mềm thực tế"],
          [".NET / Web API", "Định hướng backend chính"]
        ],
        focusEyebrow: "Lĩnh vực trọng tâm",
        focusTitle: "Nền tảng kỹ thuật vững chắc đi cùng sản phẩm thực tế.",
        focusIntro: "Portfolio tập trung vào những năng lực được chứng minh qua sản phẩm đang chạy: Web API hiệu năng, dữ liệu quan hệ, ứng dụng desktop kiến trúc rõ ràng và sản phẩm web fullstack.",
        focusAreas: [
          {
            number: "01",
            title: "Backend & API Engineering",
            desc: "Xây dựng RESTful Web API với ASP.NET Core và FastAPI, thiết kế kiến trúc phân lớp, xác thực JWT và kiểm thực chữ ký số webhook HMAC.",
            tags: ["C#", ".NET 8", "ASP.NET Core", "FastAPI", "Webhooks"]
          },
          {
            number: "02",
            title: "Cơ sở dữ liệu & Truy cập dữ liệu",
            desc: "Mô hình hóa cơ sở dữ liệu quan hệ, tối ưu câu lệnh truy vấn, lập chỉ mục và kết nối dữ liệu thông qua SQL Server, T-SQL, PostgreSQL và Dapper.",
            tags: ["SQL Server", "T-SQL", "PostgreSQL", "Dapper", "Schema Design"]
          },
          {
            number: "03",
            title: "Phát triển Fullstack & Desktop",
            desc: "Triển khai luồng ứng dụng hoàn chỉnh, áp dụng mẫu thiết kế MVVM trong WPF và xây dựng giao diện tương tác hiện đại với Next.js/Bootstrap.",
            tags: ["WPF", "MVVM Pattern", "Next.js", "Bootstrap", "TypeScript"]
          },
          {
            number: "04",
            title: "Ứng dụng AI & Khám phá dữ liệu",
            desc: "Tích hợp mô hình AI phân tích cảm xúc hội thoại, OCR trích xuất chữ từ hình ảnh cùng các hoạt động nghiên cứu khoa học và thi đấu dữ liệu.",
            tags: ["Applied AI", "FastAPI", "OpenAI API", "OCR", "Data Science"]
          }
        ],
        featuredEyebrow: "Dự án tiêu biểu",
        featuredTitle: "Các sản phẩm giải quyết luồng nghiệp vụ cụ thể.",
        featuredIntro: "Các dự án bao gồm phần mềm quản lý quán cà phê tích hợp thanh toán VietQR/PayOS, ứng dụng phân tích AI fullstack và website bán hàng.",
        certsEyebrow: "Chứng chỉ quốc tế",
        certsTitle: "Học tập liên tục & chứng nhận chuyên môn.",
        certsIntro: "Các chứng chỉ chuyên môn chính thức từ Google và giải thưởng học thuật khẳng định nền tảng kỹ thuật về AI, hệ thống và thiết kế trải nghiệm người dùng."
      },
      pages: {
        skills: {
          eyebrow: "Kỹ năng chuyên môn",
          title: "Kỹ năng kỹ thuật được nhóm theo ứng dụng thực tế.",
          lead: "Tổng quan các công nghệ tôi đã nắm vững và sử dụng trong môn học cũng như các dự án phần mềm hoàn chỉnh."
        },
        projects: {
          eyebrow: "Danh mục dự án",
          title: "Những dự án minh chứng cho năng lực triển khai.",
          lead: "Từ phần mềm quản lý POS trên desktop, API thanh toán cho đến ứng dụng AI web fullstack, các dự án thể hiện quy trình phát triển khép kín."
        },
        education: {
          eyebrow: "Học vấn & Nền tảng",
          title: "Nền tảng học thuật và quá trình trau dồi liên tục.",
          lead: "Sinh viên ngành Công nghệ Thông tin tại Trường Đại học Công Thương TP.HCM (HUIT), điểm trung bình tích lũy GPA 3.74 / 4.0 chuyên ngành Tin học ứng dụng."
        },
        achievements: {
          eyebrow: "Thành tích & Chứng chỉ",
          title: "Giải thưởng học thuật, nghiên cứu và chứng chỉ chuyên môn.",
          lead: "Các cột mốc đạt được trong cuộc thi thiết kế CSDL, nghiên cứu khoa học sinh viên, Data Science cùng 8 chứng chỉ chuẩn quốc tế từ Google."
        },
        resume: {
          eyebrow: "Hồ sơ cá nhân",
          title: "Tóm tắt kinh nghiệm, năng lực kỹ thuật và thông tin liên hệ.",
          lead: "Bạn có thể xem phiên bản tương tác trên portfolio hoặc tải tệp CV gốc bằng PDF."
        },
        contact: {
          eyebrow: "Liên hệ & Cơ hội hợp tác",
          title: "Trao đổi về vị trí thực tập hoặc dự án phần mềm.",
          lead: "Tôi mong muốn tìm kiếm cơ hội thực tập Backend hoặc Fullstack để cống hiến vào sản phẩm thực tế và học hỏi kinh nghiệm từ các đàn anh."
        }
      },
      common: {
        explore: "Xem chi tiết",
        repo: "Mã nguồn",
        live: "Bản chạy thử",
        technology: "Công nghệ",
        period: "Thời gian",
        role: "Vai trò",
        status: "Trạng thái",
        overview: "Tổng quan",
        contribution: "Phần tôi xây dựng",
        engineering: "Điểm kỹ thuật",
        stack: "Công nghệ sử dụng",
        back: "Tất cả dự án",
        source: "Liên kết dự án",
        current: "Hiện tại",
        download: "Tải CV",
        all: "Tất cả",
        filterAi: "AI & Prompting",
        filterUx: "UX & Thiết kế",
        filterCareer: "Sự nghiệp & Dữ liệu",
        zoomCert: "Xem chi tiết",
        viewProof: "Xem giấy khen / minh chứng",
        verifyLink: "Xác minh chứng chỉ",
        completed: "Đã hoàn thành",
        inDev: "Đang phát triển",
        deployed: "Đã triển khai",
        subcoursesTitle: "Các chứng chỉ thành phần của chương trình đào tạo"
      }
    }
  };

  const skillGroups = {
    en: [
      ["Programming Languages", "Core languages used across system backend and application layers.", ["C#", "C++", "JavaScript", "TypeScript", "SQL"]],
      ["Backend & Web APIs", "Building scalable Web APIs, service logic, and payment integrations.", [".NET 8", "ASP.NET Core Web API", "RESTful API", "FastAPI", "Swagger / OpenAPI", "HMAC-SHA256"]],
      ["Databases & Data Modeling", "Relational schema design, querying, indexing, and high-performance data access.", ["SQL Server", "T-SQL", "PostgreSQL", "Dapper", "Supabase", "LocalStorage"]],
      ["Frontend & Desktop UI", "Creating responsive web experiences and maintainable desktop client applications.", ["WPF", "MVVM Pattern", "Next.js", "React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]],
      ["Tools, Cloud & DevOps", "Version control, API testing, authorization, deployment, and cloud platforms.", ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Firebase Auth", "PayOS / VietQR", "Vercel", "Render"]],
      ["Applied AI & Machine Learning", "Applying generative models, sentiment analysis, OCR vision, and data exploration.", ["OpenAI API", "AI Vision / OCR", "Sentiment Analysis", "Prompt Engineering", "Data Science Workflows"]]
    ],
    vi: [
      ["Ngôn ngữ lập trình", "Các ngôn ngữ nòng cốt dùng trong xử lý backend hệ thống và ứng dụng.", ["C#", "C++", "JavaScript", "TypeScript", "SQL"]],
      ["Backend & Web API", "Xây dựng Web API mở rộng, nghiệp vụ dịch vụ và tích hợp cổng thanh toán.", [".NET 8", "ASP.NET Core Web API", "RESTful API", "FastAPI", "Swagger / OpenAPI", "HMAC-SHA256"]],
      ["Cơ sở dữ liệu & Mô hình hóa", "Thiết kế CSDL quan hệ, truy vấn tối ưu, lập chỉ mục và kết nối dữ liệu hiệu năng cao.", ["SQL Server", "T-SQL", "PostgreSQL", "Dapper", "Supabase", "LocalStorage"]],
      ["Giao diện Frontend & Desktop", "Xây dựng giao diện responsive trên web và kiến trúc ứng dụng desktop dễ bảo trì.", ["WPF", "MVVM Pattern", "Next.js", "React", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"]],
      ["Công cụ, Cloud & DevOps", "Quản lý mã nguồn, kiểm thử API, xác thực người dùng và triển khai cloud.", ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Firebase Auth", "PayOS / VietQR", "Vercel", "Render"]],
      ["Ứng dụng AI & Khoa học dữ liệu", "Tích hợp mô hình sinh, phân tích cảm xúc hội thoại, OCR và phân tích dữ liệu.", ["OpenAI API", "AI Vision / OCR", "Sentiment Analysis", "Prompt Engineering", "Data Science Workflows"]]
    ]
  };

  const projects = [
    {
      slug: "coffee-shop-management",
      title: "Coffee Shop Management System",
      cover: "assets/img/projects/coffee-shop-wpf-cover.png",
      category: "WPF Desktop + ASP.NET Core Payment API",
      year: "2026 — Present",
      status: "In development",
      statusKey: "in-development",
      role: "Backend & Desktop Developer",
      repo: "https://github.com/Peo051/Coffee_Shop_Management_WPF",
      live: "",
      tech: ["C#", ".NET 8", "WPF", "MVVM", "ASP.NET Core", "SQL Server", "Dapper", "PayOS", "VietQR"],
      en: {
        summary: "A POS and coffee shop management system covering products, inventory, staff, customer loyalty, reporting, and real-time VietQR banking payment.",
        overview: "This enterprise desktop system couples a WPF desktop application with an ASP.NET Core payment API microservice. It allows cashier staff to quickly register orders and dynamically generate VietQR codes with automated webhook payment reconciliation.",
        contribution: [
          "Engineered full management workflows for menu categories, inventory replenishment, staff roles, member loyalty points, and sales analytics.",
          "Constructed a dedicated ASP.NET Core payment gateway API integrating VietQR / PayOS webhooks with HMAC-SHA256 request signature verification.",
          "Designed database schemas in SQL Server and authored high-performance data access methods using Dapper micro-ORM."
        ],
        engineering: [
          "Adheres to strict MVVM separation between XAML view components, view models, and domain business services.",
          "Payment processing is decoupled into an independent ASP.NET Core microservice rather than embedding payment secrets directly into the desktop client.",
          "All incoming webhooks validate HMAC cryptographic signatures before transitioning order status to prevent tampering."
        ]
      },
      vi: {
        summary: "Hệ thống POS và quản lý quán cà phê gồm danh mục sản phẩm, tồn kho, nhân viên, khách hàng, khuyến mãi, báo cáo và thanh toán VietQR tự động.",
        overview: "Dự án kết nối ứng dụng desktop WPF với một Payment API độc lập bằng ASP.NET Core. Phần mềm hỗ trợ nhân viên order nhanh, tạo mã QR động VietQR/PayOS và tự động đồng bộ trạng thái đơn hàng qua webhook.",
        contribution: [
          "Xây dựng toàn bộ các luồng quản lý thực đơn, xuất nhập tồn kho, phân quyền nhân viên, tích điểm thành viên và thống kê doanh thu.",
          "Triển khai ASP.NET Core API tích hợp cổng thanh toán VietQR / PayOS, xử lý webhook đồng bộ giao dịch ngân hàng theo thời gian thực.",
          "Thiết kế cấu trúc cơ sở dữ liệu trên SQL Server và viết tầng truy cập dữ liệu tốc độ cao bằng Dapper micro-ORM."
        ],
        engineering: [
          "Áp dụng chuẩn kiến trúc MVVM giúp tách biệt hoàn toàn giao diện XAML, ViewModel và tầng xử lý nghiệp vụ.",
          "Tách riêng Payment API thành service độc lập thay vì nhúng logic thanh toán và khóa bảo mật vào ứng dụng máy trạm WPF.",
          "Xác thực chữ ký HMAC-SHA256 trên mọi webhook nhận về trước khi kích hoạt hoàn tất đơn hàng nhằm bảo mật tuyệt đối."
        ]
      }
    },
    {
      slug: "love-sense-ai",
      title: "Love Sense AI",
      cover: "assets/img/projects/love-sense-ai-cover.png",
      category: "Fullstack AI Sentiment Analysis Web App",
      year: "2026 — Present",
      status: "Deployed",
      statusKey: "deployed",
      role: "Fullstack Developer",
      repo: "https://github.com/Peo051/love-sense-ai",
      live: "https://love-sense-ai.vercel.app",
      tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Firebase Auth", "OpenAI API", "Tailwind CSS"],
      en: {
        summary: "A fullstack AI web application analyzing chat sentiment, extracting text from screenshot uploads via OCR, and generating empathetic contextual responses.",
        overview: "Love Sense AI brings together a Next.js TypeScript frontend with a high-performance Python FastAPI backend. Users can paste chat logs or upload screenshots to receive structured emotional scoring, subtext breakdowns, and response suggestions.",
        contribution: [
          "Developed multi-dimensional sentiment scoring algorithms with confidence levels, subtext detection, and suggested replies.",
          "Engineered image upload and vision OCR extraction workflows for analyzing mobile screenshots.",
          "Integrated Firebase Authentication, PostgreSQL database models, analysis history caching, and privacy demo modes."
        ],
        engineering: [
          "Frontend (Vercel) and backend (Render) are deployed independently with tight CORS controls and rate limiting.",
          "PostgreSQL provides persistent relational analysis history while Firebase Auth handles identity verification.",
          "Zero-retention privacy switches ensure users can analyze confidential text without saving chat data to persistent storage."
        ]
      },
      vi: {
        summary: "Ứng dụng AI fullstack phân tích cảm xúc hội thoại, trích xuất chữ từ ảnh chụp màn hình bằng OCR và gợi ý phản hồi tinh tế theo ngữ cảnh.",
        overview: "Love Sense AI kết hợp giao diện Next.js hiện đại với backend FastAPI (Python). Ứng dụng cho phép người dùng dán tin nhắn hoặc tải ảnh chụp đoạn chat để phân tích mức độ cảm xúc, giải mã ý ngầm và nhận gợi ý câu trả lời phù hợp.",
        contribution: [
          "Xây dựng luồng phân tích cảm xúc hội thoại kèm chỉ số tin cậy, phân tích tâm lý ẩn ý và gợi ý câu trả lời theo ngữ cảnh.",
          "Tích hợp OCR và AI Vision để tự động nhận dạng chữ từ ảnh chụp màn hình điện thoại.",
          "Xây dựng xác thực tài khoản Firebase Auth, lưu trữ lịch sử trên PostgreSQL và tính năng demo không cần đăng nhập."
        ],
        engineering: [
          "Frontend (Vercel) và Backend (Render) triển khai độc lập, kiểm soát chặt chẽ CORS và giới hạn tần suất gọi API (rate limiting).",
          "PostgreSQL lưu trữ dữ liệu người dùng có cấu trúc kết hợp Firebase Auth quản lý danh tính bảo mật.",
          "Cơ chế bảo mật quyền riêng tư cho phép phân tích tức thì mà không cần lưu giữ tin nhắn cá nhân vào cơ sở dữ liệu."
        ]
      }
    },
    {
      slug: "coffee-shop-web",
      title: "Coffee Shop Website",
      cover: "assets/img/projects/coffee-shop-web-cover.png?v=2.2",
      category: "E-commerce Coffee Ordering Website",
      year: "2025",
      status: "Completed",
      statusKey: "completed",
      role: "Core Web Developer",
      repo: "https://github.com/Peo051/Coffee_Shop_Management_Web",
      live: "",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Firebase Auth", "LocalStorage"],
      en: {
        summary: "A responsive coffee ordering and store platform featuring dynamic menus, interactive shopping cart, loyalty points, and banking QR support.",
        overview: "An e-commerce web platform designed around an intuitive customer journey from product discovery and cart modifications to checkout and loyalty point accrual.",
        contribution: [
          "Engineered shopping cart persistence, discount calculations, size/sugar/ice customization options, and live price recalculations.",
          "Implemented customer authentication and profile management via Firebase Auth.",
          "Integrated banking transfer QR modal workflows for seamless mobile checkout."
        ],
        engineering: [
          "State management uses clean LocalStorage synchronization for immediate client-side responsiveness.",
          "Fully responsive mobile-first UI components built with Bootstrap and custom CSS variables.",
          "Dynamic pricing engine recalculates subtotal, discounts, and delivery fees on every state mutation."
        ]
      },
      vi: {
        summary: "Website đặt cà phê trực tuyến responsive gồm thực đơn đa dạng, giỏ hàng tương tác, hệ thống điểm thành viên và hỗ trợ thanh toán QR ngân hàng.",
        overview: "Dự án web thương mại điện tử phục vụ khách hàng đặt đồ uống, tùy chọn công thức (đường, đá, topping), quản lý giỏ hàng và thanh toán chuyển khoản tiện lợi.",
        contribution: [
          "Phát triển module giỏ hàng, tính toán giá linh hoạt theo tùy chọn (size, topping), áp dụng mã giảm giá và tính điểm thưởng.",
          "Tích hợp xác thực người dùng và quản lý hồ sơ thành viên bằng Firebase Authentication.",
          "Xây dựng luồng tạo mã QR chuyển khoản ngân hàng ngay trong giao diện checkout."
        ],
        engineering: [
          "Đồng bộ trạng thái giỏ hàng và tùy chọn khách hàng mượt mà qua LocalStorage.",
          "Thiết kế giao diện responsive chuẩn mobile-first với Bootstrap và hệ thống CSS biến hiện đại.",
          "Cơ chế tính toán tiền tự động cập nhật chiết khấu và tổng thanh toán khi có bất kỳ thay đổi nào."
        ]
      }
    },
    {
      slug: "calculator-wpf",
      title: "Calculator WPF",
      cover: "assets/img/projects/calculator-cover.png",
      category: "Desktop Engineering · OOP & MVVM",
      year: "2025",
      status: "Completed",
      statusKey: "completed",
      role: "Desktop Developer",
      repo: "https://github.com/Peo051/Calculator",
      live: "",
      tech: ["C#", ".NET 8", "WPF", "MVVM Pattern", "XAML"],
      en: {
        summary: "A desktop calculator application built in C# and WPF reinforcing object-oriented design principles, Command patterns, and clean MVVM architecture.",
        overview: "A deliberate engineering exercise applying core C# and WPF fundamentals to reinforce separation between UI presentation and computation logic.",
        contribution: [
          "Implemented comprehensive arithmetic calculation logic and mathematical expression validation.",
          "Applied WPF MVVM architecture with Command dispatching and data binding.",
          "Handled complex edge states such as decimal overflows, chained operations, and display resets."
        ],
        engineering: [
          "Strict separation of concern guarantees the math engine can be tested independently of the XAML interface.",
          "Demonstrates the foundational patterns required for enterprise-grade WPF desktop engineering.",
          "Defensive input validation prevents invalid numerical operations from compromising execution."
        ]
      },
      vi: {
        summary: "Ứng dụng máy tính desktop bằng C# và WPF củng cố tư duy lập trình hướng đối tượng OOP, Command pattern và kiến trúc MVVM.",
        overview: "Dự án thực hành chuyên sâu nhằm làm chủ nền tảng lập trình C# .NET và WPF, tập trung vào việc phân tách độc lập giữa giao diện XAML và thuật toán tính toán.",
        contribution: [
          "Xây dựng bộ xử lý biểu thức số học và kiểm tra tính hợp lệ của toán tử toán học.",
          "Áp dụng cấu trúc MVVM với ICommand binding dữ liệu hai chiều (two-way binding).",
          "Xử lý các tình huống biên phức tạp như phép tính nối tiếp, tràn số thập phân và xóa bộ nhớ đệm."
        ],
        engineering: [
          "Tách biệt hoàn toàn tầng logic tính toán giúp mã nguồn dễ dàng viết unit test độc lập với giao diện đồ họa.",
          "Làm chủ kiến trúc MVVM chuẩn mực làm nền tảng phát triển các hệ thống phần mềm doanh nghiệp lớn trên Windows.",
          "Kiểm soát dữ liệu nhập nghiêm ngặt, ngăn chặn trạng thái lỗi chia cho 0 hoặc định dạng toán tử không hợp lệ."
        ]
      }
    },
    {
      slug: "parking-dsa",
      title: "Parking Management — DSA",
      cover: "assets/img/projects/parking-cover.png",
      category: "Data Structures & Algorithms Coursework",
      year: "2025",
      status: "Completed",
      statusKey: "completed",
      role: "Developer",
      repo: "https://github.com/Peo051/QuanLiBaiDoXe",
      live: "",
      tech: ["C++", "Data Structures", "Algorithms", "Optimization", "CLI"],
      en: {
        summary: "A C++ academic software simulating parking lot slot allocation, vehicle entry/exit processing, and time calculation using foundational data structures.",
        overview: "An academic capstone project in Data Structures and Algorithms applying hash tables, queues, and tree structures to solve concrete vehicle allocation and billing scenarios.",
        contribution: [
          "Engineered fast check-in and check-out workflows with automated parking fee calculation.",
          "Selected and benchmarked C++ data structures for fast vehicle lookup and vacant slot retrieval.",
          "Structured procedural logic into modular functions adhering to clean code standards."
        ],
        engineering: [
          "Emphasizes fundamental algorithmic efficiency and optimal time complexity over external framework bloat.",
          "Utilizes appropriate data collections to achieve O(1) plate lookup and efficient slot allocation.",
          "Robust validation guards against duplicate plate entries and memory leaks."
        ]
      },
      vi: {
        summary: "Đồ án C++ mô phỏng quản lý bãi đỗ xe, xử lý luồng xe vào/ra và tính toán cước phí bằng các cấu trúc dữ liệu và giải thuật tối ưu.",
        overview: "Đồ án môn học Cấu trúc Dữ liệu và Giải thuật tại trường, áp dụng cấu trúc dữ liệu bảng băm, hàng đợi và danh sách liên kết vào bài toán quản lý phương tiện giao thông thực tế.",
        contribution: [
          "Xây dựng quy trình xử lý xe vào/ra tự động kèm tính toán thời gian gửi và tiền cước chính xác.",
          "Lựa chọn và cài đặt các cấu trúc dữ liệu C++ tối ưu tốc độ tra cứu biển số và tìm chỗ đỗ trống nhanh nhất.",
          "Tổ chức mã nguồn theo module hàm rõ ràng, tuân thủ nguyên tắc mã sạch (clean code)."
        ],
        engineering: [
          "Tập trung rèn luyện tư duy tối ưu độ phức tạp thuật toán và quản lý bộ nhớ thủ công trong C++.",
          "Cấu trúc bảng băm và hàng đợi ưu tiên giúp tra cứu xe với độ phức tạp tiệm cận O(1).",
          "Kiểm soát chặt chẽ các trường hợp biển số trùng lặp và giải phóng vùng nhớ an toàn."
        ]
      }
    }
  ];

  // REAL CERTIFICATIONS WITH SUB-COURSES BREAKDOWN FROM GITHUB Peo051/Peo051
  const certifications = [
    {
      id: "google-ai-prof",
      title: "Google AI Professional Certificate",
      issuer: "Google via Coursera",
      category: "ai",
      year: "2026",
      image: "assets/img/certificates/certificate-google-ai-professional.png",
      verify: "https://coursera.org/verify/professional-cert/9477BZVHLC2N",
      en: {
        tag: "AI & Machine Learning",
        summary: "Comprehensive professional certificate demonstrating fluency in AI across 7 specialized courses. Built 20+ AI artifacts and custom AI solutions covering research, content, data analysis and app building."
      },
      vi: {
        tag: "AI & Machine Learning",
        summary: "Chứng chỉ chuyên nghiệp toàn diện của Google gồm 7 khóa học chuyên sâu, xây dựng hơn 20 sản phẩm AI và giải pháp trí tuệ nhân tạo tùy chỉnh từ nghiên cứu, nội dung đến phân tích dữ liệu và tạo ứng dụng."
      },
      subCourses: [
        { title: "AI Fundamentals", image: "assets/img/certificates/certificate-google-ai-fundamentals.png", verify: "https://coursera.org/verify/LBBNAFKH73YU" },
        { title: "AI for Brainstorming and Planning", image: "assets/img/certificates/certificate-google-ai-brainstorming-planning.png", verify: "https://coursera.org/verify/CXD4JWUUX6R1" },
        { title: "AI for Research and Insights", image: "assets/img/certificates/certificate-google-ai-research-insights.png", verify: "https://coursera.org/verify/82WE4I9VAFZ4" },
        { title: "AI for Writing and Communicating", image: "assets/img/certificates/certificate-google-ai-writing-communicating.png", verify: "https://coursera.org/verify/O1LLZPBZJDZO" },
        { title: "AI for Content Creation", image: "assets/img/certificates/certificate-google-ai-content-creation.png", verify: "https://coursera.org/verify/98M51OJHX14HM" },
        { title: "AI for Data Analysis", image: "assets/img/certificates/certificate-google-ai-data-analysis.png", verify: "https://coursera.org/verify/0LYMLZ14PN2X" },
        { title: "AI for App Building", image: "assets/img/certificates/certificate-google-ai-for-app-building.png", verify: "https://coursera.org/verify/KCQVVQXQVQXQ" }
      ]
    },
    {
      id: "google-ai-essentials",
      title: "Google AI Essentials",
      issuer: "Google via Coursera",
      category: "ai",
      year: "2026",
      image: "assets/img/certificates/certificate-google-ai-essentials-specialization.png",
      verify: "https://coursera.org/verify/specialization/OA4F9JXTDQV2",
      en: {
        tag: "Generative AI",
        summary: "Comprehensive specialization covering AI fundamentals, productivity tools, prompt engineering, and responsible AI implementation."
      },
      vi: {
        tag: "Generative AI",
        summary: "Chuyên môn toàn diện về nền tảng AI, công cụ gia tăng hiệu suất, kỹ thuật viết prompt và ứng dụng AI có trách nhiệm."
      },
      subCourses: [
        { title: "Introduction to AI", image: "assets/img/certificates/certificate-google-introduction-to-ai.png", verify: "https://coursera.org/verify/GGGCSVFYV6Z7" },
        { title: "Maximize Productivity With AI Tools", image: "assets/img/certificates/certificate-google-maximize-productivity-with-ai-tools.png", verify: "https://coursera.org/verify/YLBW8IUHL2AT" },
        { title: "Discover the Art of Prompting", image: "assets/img/certificates/certificate-google-discover-the-art-of-prompting.png", verify: "https://coursera.org/verify/95K4US2N6RI4" },
        { title: "Use AI Responsibly", image: "assets/img/certificates/certificate-google-use-ai-responsibly.png", verify: "https://coursera.org/verify/67U9FYD7X0F3" },
        { title: "Stay Ahead of the AI Curve", image: "assets/img/certificates/certificate-google-stay-ahead-of-the-ai-curve.png", verify: "https://coursera.org/verify/LAOTVMIOVCJW" }
      ]
    },
    {
      id: "accelerate-job-search",
      title: "Accelerate Your Job Search with AI",
      issuer: "Google via Coursera",
      category: "career",
      year: "2026",
      image: "assets/img/certificates/certificate-google-accelerate-your-job-search-with-ai.png",
      verify: "https://coursera.org/verify/specialization/DM1GGN4MS6QE",
      en: {
        tag: "Career & Productivity",
        summary: "Specialization focused on leveraging AI for job search optimization, application management, skills assessment, and interview preparation."
      },
      vi: {
        tag: "Sự nghiệp & Năng suất",
        summary: "Chuyên môn tập trung vào việc ứng dụng AI để tối ưu hóa tìm kiếm việc làm, quản lý hồ sơ ứng tuyển và chuẩn bị phỏng vấn."
      },
      subCourses: [
        { title: "Uncover Your Transferable Skills with AI", image: "assets/img/certificates/certificate-google-uncover-your-transferable-skills-with-ai.png", verify: "https://coursera.org/verify/BOXPIJ1FTNTO" },
        { title: "Plan Your Job Search with AI", image: "assets/img/certificates/certificate-google-plan-your-job-search-with-ai.png", verify: "https://coursera.org/verify/4KVCJ4AEDZSB" },
        { title: "Manage Your Job Applications with AI", image: "assets/img/certificates/certificate-google-manage-your-job-applications-with-ai.png", verify: "https://coursera.org/verify/4EEKR5ME6QIY" },
        { title: "Prepare and Practice for Interviews with AI", image: "assets/img/certificates/certificate-google-prepare-and-practice-for-interviews-with-ai.png", verify: "https://coursera.org/verify/RBQ3URO1UDZ5" }
      ]
    },
    {
      id: "google-prompting",
      title: "Google Prompting Essentials",
      issuer: "Google via Coursera",
      category: "ai",
      year: "2026",
      image: "assets/img/certificates/certificate-google-discover-the-art-of-prompting.png",
      verify: "https://coursera.org/verify/95K4US2N6RI4",
      en: {
        tag: "Prompt Engineering",
        summary: "Specialization focused on prompt engineering, AI-powered productivity, and creative applications of AI tools for everyday work tasks."
      },
      vi: {
        tag: "Kỹ thuật Prompt",
        summary: "Chuyên môn tập trung vào prompt engineering nâng cao, khai thác AI tăng năng suất và ứng dụng sáng tạo trong công việc hàng ngày."
      },
      subCourses: [
        { title: "Start Writing Prompts like a Pro", image: "assets/img/certificates/certificate-google-start-writing-prompts-like-a-pro.png", verify: "https://coursera.org/verify/7D7NHC7BYM89" },
        { title: "Design Prompts for Everyday Work Tasks", image: "assets/img/certificates/certificate-google-design-prompts-for-everyday-work-tasks.png", verify: "https://coursera.org/verify/Z8XRRMSZD9A9" },
        { title: "Speed Up Data Analysis and Presentation Building", image: "assets/img/certificates/certificate-google-speed-up-data-analysis-and-presentation-building.png", verify: "https://coursera.org/verify/KEJ60APLHJLC" },
        { title: "Use AI as a Creative or Expert Partner", image: "assets/img/certificates/certificate-google-use-ai-as-a-creative-or-expert-partner.png", verify: "https://coursera.org/verify/UXU8U2ROLZJ09" }
      ]
    },
    {
      id: "google-ux-design",
      title: "Google UX Design Professional Certificate",
      issuer: "Google via Coursera",
      category: "ux",
      year: "2026",
      image: "assets/img/certificates/certificate-google-ux-design-professional.png",
      verify: "https://coursera.org/verify/professional-cert/CO07OPHIC3ER",
      en: {
        tag: "UX / UI Design",
        summary: "Professional certificate covering the complete UX design process: user research, empathy mapping, wireframing, interactive prototyping in Figma, and usability testing."
      },
      vi: {
        tag: "Thiết kế UX / UI",
        summary: "Chứng chỉ chuyên nghiệp về toàn bộ quy trình UX Design: nghiên cứu người dùng, lập bản đồ thấu cảm, wireframing, tạo mẫu tương tác trên Figma và kiểm thử trải nghiệm."
      },
      subCourses: [
        { title: "Foundations of User Experience (UX) Design", image: "assets/img/certificates/certificate-google-ux-foundations.png", verify: "https://coursera.org/verify/5ACPWD0XBD3W" },
        { title: "Start the UX Design Process: Empathize, Define, Ideate", image: "assets/img/certificates/certificate-google-ux-empathize-define-ideate.png", verify: "https://coursera.org/verify/926MG2Z7ZQEE" },
        { title: "Build Wireframes and Low-Fidelity Prototypes", image: "assets/img/certificates/certificate-google-ux-wireframes-prototypes.png", verify: "https://coursera.org/verify/NXQ2IIME4XM4" },
        { title: "Conduct UX Research and Test Early Concepts", image: "assets/img/certificates/certificate-google-ux-research-test-concepts.png", verify: "https://coursera.org/verify/Y4K2LKTMUP5V" },
        { title: "Create High-Fidelity Designs and Prototypes in Figma", image: "assets/img/certificates/certificate-google-ux-high-fidelity-designs-prototypes-figma.png", verify: "https://coursera.org/verify/33K9GDA8MMPT" },
        { title: "Build Dynamic User Interfaces (UI) for Websites", image: "assets/img/certificates/certificate-google-build-dynamic-user-interfaces-ui-for-websites.png", verify: "https://coursera.org/verify/DRQSN9BG2QL2" },
        { title: "Design a User Experience for Social Good & Prepare for Jobs", image: "assets/img/certificates/certificate-google-design-user-experience-for-social-good-prepare-for-jobs.png", verify: "https://coursera.org/verify/B7WZ416MKODO" }
      ]
    },
    {
      id: "ai-app-game-web-pm",
      title: "AI Application for Game, Web & PM",
      issuer: "Công ty TNHH Lượng Từ Xanh (Green Quantum Company)",
      category: "ai",
      year: "2026",
      image: "assets/img/certificates/certificate-ai-game-web-project-management.png",
      verify: "",
      en: {
        tag: "Applied Systems",
        summary: "Completed intensive training program on practical AI applications in game development, web development, and project management workflows."
      },
      vi: {
        tag: "Hệ thống ứng dụng",
        summary: "Hoàn thành khóa đào tạo chuyên sâu về ứng dụng AI thực tế trong phát triển game, phát triển web và quy trình quản lý dự án phần mềm."
      },
      subCourses: []
    },
    {
      id: "financial-data-analysis",
      title: "Financial Data Analysis & Decision-Making in AI",
      issuer: "Specialized Coursework",
      category: "career",
      year: "2026",
      image: "assets/img/certificates/certificate-financial-data-ai.png",
      verify: "",
      en: {
        tag: "Data & Analytics",
        summary: "Demonstrates practical foundation in financial data analysis, quantitative reasoning, and algorithmic decision-making in the age of AI."
      },
      vi: {
        tag: "Dữ liệu & Phân tích",
        summary: "Minh chứng kiến thức nền tảng về phân tích dữ liệu tài chính, tư duy định lượng và ra quyết định trong thời đại AI."
      },
      subCourses: []
    },
    {
      id: "gemini-certified",
      title: "Gemini Certified: Educator & University Student",
      issuer: "Google for Education",
      category: "ai",
      year: "2026",
      image: "assets/img/certificates/gemini-certified-educator.png",
      verify: "",
      en: {
        tag: "Google Gemini Models",
        summary: "Certified in practical Gemini workflows for educational scenarios, academic research assistance, and advanced student productivity."
      },
      vi: {
        tag: "Mô hình Google Gemini",
        summary: "Chứng nhận thành thạo các luồng làm việc với Gemini trong môi trường giáo dục, hỗ trợ nghiên cứu học thuật và gia tăng năng suất học tập."
      },
      subCourses: [
        { title: "Gemini Certified Educator", image: "assets/img/certificates/gemini-certified-educator.png", verify: "" },
        { title: "Gemini Certified University Student", image: "assets/img/certificates/gemini-certified-university-student.png", verify: "" }
      ]
    }
  ];

  // REAL ACADEMIC ACHIEVEMENTS
  const achievements = {
    en: [
      {
        id: "db-challenge",
        label: "Encouragement Prize",
        year: "AY 2025–2026",
        title: "Database Design Challenge — HUIT",
        detail: "Awarded by the Faculty of Information Technology, HUIT, for technical excellence in relational schema modeling, normalization, query optimization, and transaction constraints.",
        image: "assets/img/achievements/database-design-challenge-2025.jpg",
        proofName: "Official Award Certificate"
      },
      {
        id: "research-comp",
        label: "Encouragement Prize",
        year: "AY 2025–2026",
        title: "Student Scientific Research Competition — HUIT",
        detail: "Topic: 'Optimizing Time in Mining High Utility Itemsets on Positive and Negative Profit Transaction Databases' under advisors ThS. Vu Van Vinh & HV. Pham Tan Thuan.",
        image: "assets/img/achievements/achievement-research-competition-encouragement-2026.png",
        proofName: "Faculty Research Award Certificate"
      },
      {
        id: "data-science",
        label: "Final Round Participant",
        year: "AY 2025–2026",
        title: "University-level Data Science Competition",
        detail: "Reached finals in two applied computer vision & healthcare AI tracks: Rice Pest Classification & Segmentation (YOLO + SAM-ViT) and Skin Cancer Classification (Vision Transformer - ViT).",
        image: "assets/img/achievements/data-science-huit-yolo-samvit.png",
        proofName: "Model Architecture & Pipeline"
      }
    ],
    vi: [
      {
        id: "db-challenge",
        label: "Giải Khuyến khích",
        year: "Năm học 2025–2026",
        title: "Cuộc thi Thiết kế Cơ sở dữ liệu — HUIT",
        detail: "Được trao bởi Khoa Công nghệ Thông tin, HUIT, nhờ thiết kế chuẩn hóa lược đồ CSDL quan hệ, tối ưu hóa câu lệnh truy vấn phức tạp và kiểm soát toàn vẹn dữ liệu.",
        image: "assets/img/achievements/database-design-challenge-2025.jpg",
        proofName: "Giấy khen Giải thưởng CSDL"
      },
      {
        id: "research-comp",
        label: "Giải Khuyến khích",
        year: "Năm học 2025–2026",
        title: "Cuộc thi Sinh viên Nghiên cứu Khoa học — HUIT",
        detail: "Đề tài: 'Tối ưu thời gian khai thác tập mục hữu ích cao trên cơ sở dữ liệu giao dịch có lợi nhuận âm và dương' dưới sự hướng dẫn của ThS. Vũ Văn Vinh và HV. Phạm Tấn Thuận.",
        image: "assets/img/achievements/achievement-research-competition-encouragement-2026.png",
        proofName: "Giấy chứng nhận Giải NCKH cấp Khoa"
      },
      {
        id: "data-science",
        label: "Vòng Chung kết",
        year: "Năm học 2025–2026",
        title: "Cuộc thi Data Science cấp trường",
        detail: "Lọt vào chung kết 2 hướng nghiên cứu AI thị giác máy tính: Phân loại / phân đoạn sâu bệnh lúa (YOLO + SAM-ViT) và Phân loại tổn thương ung thư da (Vision Transformer - ViT).",
        image: "assets/img/achievements/data-science-huit-yolo-samvit.png",
        proofName: "Kiến trúc mô hình & Luồng huấn luyện"
      }
    ]
  };

  const education = {
    en: [
      {
        meta: "2024 — Present",
        title: "University of Industry and Trade — HUIT",
        subline: "B.Sc. Information Technology · Applied Computing",
        desc: "Current GPA: 3.74 / 4.0. Strong academic focus in Object-Oriented Programming (C# / C++), Data Structures & Algorithms, Database Management Systems (SQL Server), Web Development, and Applied AI."
      }
    ],
    vi: [
      {
        meta: "2024 — Hiện tại",
        title: "Trường Đại học Công Thương TP.HCM — HUIT",
        subline: "Cử nhân Công nghệ Thông tin · Hướng Tin học ứng dụng",
        desc: "GPA hiện tại: 3.74 / 4.0. Nền tảng học thuật vững chắc về Lập trình hướng đối tượng (C# / C++), Cấu trúc dữ liệu & Giải thuật, Hệ quản trị CSDL (SQL Server), Công nghệ Web và AI ứng dụng."
      }
    ]
  };

  let language = localStorage.getItem("portfolio-language") || "vi";
  if (!data[language]) language = "vi";
  let currentCertFilter = "all";

  const getText = () => data[language];
  const tags = (items) => items.map((item) => `<span class="tag">${item}</span>`).join("");
  const pad = (number) => String(number).padStart(2, "0");

  function openLightbox(item) {
    if (!lightboxModal) return;
    const body = item[language] || item;
    const c = getText().common;
    const fullImgText = language === "vi" ? "Xem ảnh gốc" : "View full image";
    const mainCertBadge = language === "vi" ? "Chứng chỉ chính" : "Main Certificate";
    
    lightboxImage.src = item.image;
    lightboxImage.alt = item.title;
    lightboxTitle.textContent = item.title;
    
    if (item.issuer) {
      lightboxSubtitle.textContent = `${item.issuer} · ${item.year} — ${body.summary}`;
    } else {
      lightboxSubtitle.textContent = `${item.label} · ${item.year} — ${item.detail}`;
    }
    
    function renderActions(verifyUrl, imgUrl, repoUrl) {
      let html = "";
      if (verifyUrl) {
        html += `<a class="button primary" href="${verifyUrl}" target="_blank" rel="noreferrer">${icon("external")} ${c.verifyLink}</a>`;
      }
      if (repoUrl) {
        html += `<a class="button primary" href="${repoUrl}" target="_blank" rel="noreferrer">${icon("github")} Source Code</a>`;
      }
      if (imgUrl) {
        html += `<a class="button ghost" href="${imgUrl}" target="_blank" rel="noreferrer">${icon("external")} ${fullImgText}</a>`;
      }
      return html;
    }
    
    lightboxAction.innerHTML = renderActions(item.verify, item.image, item.repo);
    
    // Check if item has subCourses
    if (item.subCourses && item.subCourses.length > 0) {
      const allList = [
        {
          title: item.title,
          image: item.image,
          verify: item.verify,
          isMain: true
        },
        ...item.subCourses
      ];
      
      const subHtml = `
        <div class="lightbox-subcourses-title">
          ${icon("certificate")} ${c.subcoursesTitle} (${item.subCourses.length})
        </div>
        <div class="lightbox-subcourses-grid">
          ${allList.map((sub, idx) => `
            <div class="subcourse-card ${idx === 0 ? "is-active" : ""}" data-sub-idx="${idx}">
              <div class="subcourse-thumb">
                <img src="${sub.image}" alt="${sub.title}" loading="lazy">
              </div>
              <span class="subcourse-card-title">${sub.title}</span>
              ${sub.isMain ? `<span class="subcourse-card-badge">${mainCertBadge}</span>` : ""}
            </div>
          `).join("")}
        </div>
      `;
      lightboxSubcourses.innerHTML = subHtml;
      lightboxSubcourses.style.display = "block";

      // Attach clicks to subcourses
      lightboxSubcourses.querySelectorAll(".subcourse-card").forEach(card => {
        card.addEventListener("click", () => {
          const idx = parseInt(card.dataset.subIdx, 10);
          const selected = allList[idx];
          if (selected) {
            lightboxImage.src = selected.image;
            lightboxTitle.textContent = selected.title;
            lightboxSubcourses.querySelectorAll(".subcourse-card").forEach(cCard => cCard.classList.remove("is-active"));
            card.classList.add("is-active");
            lightboxAction.innerHTML = renderActions(selected.verify, selected.image, null);
          }
        });
      });
    } else {
      lightboxSubcourses.innerHTML = "";
      lightboxSubcourses.style.display = "none";
    }

    const dialog = lightboxModal.querySelector(".lightbox-dialog");
    if (dialog) dialog.scrollTop = 0;

    lightboxModal.classList.add("is-active");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("is-active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal && lightboxModal.classList.contains("is-active")) {
      closeLightbox();
    }
  });

  function pageHero(page) {
    const p = getText().pages[page];
    return `
      <section class="section-page-hero">
        <div class="shell">
          <p class="eyebrow">${p.eyebrow}</p>
          <h1 class="page-title">${p.title}</h1>
          <p class="page-lead">${p.lead}</p>
        </div>
      </section>`;
  }

  function renderHome() {
    const t = getText().home;
    const c = getText().common;
    const featured = projects.slice(0, 3);
    const awardItems = achievements[language];
    const certPreview = certifications.slice(0, 4);

    return `
      <div class="page route-enter">
        <section class="hero">
          <div class="shell hero-grid">
            <div>
              <p class="eyebrow">${t.eyebrow}</p>
              <h1 class="hero-title"><span>${t.firstName}</span><span class="outline">${t.lastName}</span></h1>
              <p class="hero-role">
                <span>C# · .NET 8</span>
                <span class="accent-badge">ASP.NET Core</span>
                <span>SQL Server</span>
                <span class="accent-badge">Fullstack</span>
                <span>Applied AI</span>
              </p>
              <p class="hero-description">${t.description}</p>
              <div class="hero-actions">
                <a class="button primary" href="#/project">${t.viewProjects} ${icon("arrow")}</a>
                <a class="button" href="assets/documents/TranDuongGiaBao_ITIntern_CV.pdf" download>${icon("download")} ${t.downloadCV}</a>
                <a class="button ghost" href="#/contact">${icon("mail")} ${t.contact}</a>
                <a class="button ghost" href="https://github.com/Peo051" target="_blank" rel="noreferrer">${icon("github")} GitHub</a>
              </div>
            </div>
            <div class="hero-card reveal">
              <div class="portrait-frame">
                <img src="assets/img/profile/avatar-main.png?v=2.7" alt="Trần Dương Gia Bảo" width="960" height="632">
              </div>
              <div class="status-badge">
                <div class="status-row"><span class="status-dot"></span><span>${t.availability}</span></div>
                <small>${t.location}</small>
              </div>
            </div>
          </div>
        </section>

        <section class="proof-strip">
          <div class="shell proof-grid">
            ${t.proof.map(([value, label]) => `<div class="proof-item reveal"><strong class="proof-value">${value}</strong><span class="proof-label">${label}</span></div>`).join("")}
          </div>
        </section>

        <!-- Focus Areas Section -->
        <section class="section">
          <div class="shell">
            <div class="section-head reveal">
              <div><p class="eyebrow">${t.focusEyebrow}</p><h2 class="section-title">${t.focusTitle}</h2></div>
              <p class="section-intro">${t.focusIntro}</p>
            </div>
            <div class="expertise-grid">
              ${t.focusAreas.map(item => `
                <article class="expertise-card reveal">
                  <span class="card-number">${item.number}</span>
                  <h3>${item.title}</h3>
                  <p>${item.desc}</p>
                  <div class="skill-mini-list">${tags(item.tags)}</div>
                </article>`).join("")}
            </div>
          </div>
        </section>

        <!-- Featured Projects with Covers -->
        <section class="section">
          <div class="shell">
            <div class="section-head reveal">
              <div><p class="eyebrow">${t.featuredEyebrow}</p><h2 class="section-title">${t.featuredTitle}</h2></div>
              <p class="section-intro">${t.featuredIntro}</p>
            </div>
            <div class="project-list">
              ${featured.map((project, index) => {
                const body = project[language];
                return `
                  <a class="project-row reveal" href="#/project/${project.slug}">
                    <span class="project-index">${pad(index + 1)}</span>
                    <div class="project-row-thumb">
                      <img src="${project.cover}" alt="${project.title}" loading="lazy">
                    </div>
                    <div>
                      <h3>${project.title}</h3>
                      <div class="project-type">${project.category}</div>
                    </div>
                    <div>
                      <p>${body.summary}</p>
                      <div class="skill-mini-list">${tags(project.tech.slice(0, 5))}</div>
                    </div>
                    <span class="project-arrow">${icon("arrow")}</span>
                  </a>`;
              }).join("")}
            </div>
            <div class="inline-actions reveal" style="margin-top: 36px;">
              <a class="button primary" href="#/project">${c.back} ${icon("arrow")}</a>
            </div>
          </div>
        </section>

        <!-- Certifications Preview -->
        <section class="section">
          <div class="shell">
            <div class="section-head reveal">
              <div><p class="eyebrow">${t.certsEyebrow}</p><h2 class="section-title">${t.certsTitle}</h2></div>
              <p class="section-intro">${t.certsIntro}</p>
            </div>
            <div class="cert-grid">
              ${certPreview.map(cert => {
                const body = cert[language];
                return `
                  <article class="cert-card reveal">
                    <div class="cert-thumb-wrap" data-cert-id="${cert.id}">
                      <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                      <div class="cert-zoom-overlay">${icon("zoom")} ${c.zoomCert}</div>
                    </div>
                    <div class="cert-content">
                      <div class="cert-meta-top">
                        <span class="cert-issuer">${cert.issuer.split("·")[0].split("via")[0].trim()}</span>
                        <span class="status-pill completed"><span class="status-dot"></span>${c.completed}</span>
                      </div>
                      <h3>${cert.title}</h3>
                      <p>${body.summary}</p>
                      <div class="cert-actions">
                        <button type="button" class="cert-btn-zoom" data-cert-id="${cert.id}">${icon("zoom")} ${c.zoomCert}</button>
                        ${cert.verify ? `<a class="text-link" href="${cert.verify}" target="_blank" rel="noreferrer">${icon("external")} Verify</a>` : ""}
                      </div>
                    </div>
                  </article>`;
              }).join("")}
            </div>
            <div class="inline-actions reveal" style="margin-top: 36px;">
              <a class="button" href="#/achievement">${language === "vi" ? "Xem tất cả 8 chứng chỉ & giải thưởng" : "View all 8 certificates & awards"} ${icon("arrow")}</a>
            </div>
          </div>
        </section>

        <!-- Academic Achievements Preview (Hidden Proof Images, Popup Button) -->
        <section class="section">
          <div class="shell">
            <div class="section-head reveal">
              <div><p class="eyebrow">${language === "vi" ? "Giải thưởng học thuật" : "Academic Milestones"}</p><h2 class="section-title">${language === "vi" ? "Kết quả nghiên cứu & cuộc thi tại HUIT." : "Research and competition awards at HUIT."}</h2></div>
              <p class="section-intro">${language === "vi" ? "Các cột mốc khẳng định khả năng giải quyết bài toán thuật toán và thiết kế dữ liệu có hệ thống." : "Milestones proving systematic problem solving in algorithms and database modeling."}</p>
            </div>
            <div class="evidence-grid">
              ${awardItems.map(item => `
                <article class="evidence-card reveal">
                  <span class="award-label">${item.label} · ${item.year}</span>
                  <h3>${item.title}</h3>
                  <p>${item.detail}</p>
                  <div class="evidence-action">
                    <button type="button" class="view-proof-btn" data-proof-id="${item.id}">
                      ${icon("zoom")} ${c.viewProof}
                    </button>
                  </div>
                </article>`).join("")}
            </div>
          </div>
        </section>

        <!-- CTA Callout -->
        <section class="section compact">
          <div class="shell">
            <div class="callout reveal">
              <p class="eyebrow">${getText().home.eyebrow}</p>
              <h2>${language === "vi" ? "Sẵn sàng cho vị trí thực tập Backend / Fullstack." : "Available for Backend or Fullstack Internship."}</h2>
              <p>${language === "vi" ? "Tôi mong muốn được tham gia phát triển sản phẩm phần mềm thực tế với .NET, ASP.NET Core, SQL Server và hệ thống web hiện đại; đồng thời sẵn sàng học thêm công nghệ mới theo định hướng của dự án." : "Looking to contribute to practical software products with .NET, ASP.NET Core, SQL Server and modern web architectures while continuously learning alongside senior engineers."}</p>
              <div class="inline-actions">
                <a class="button primary" href="mailto:tranduonggiabao0501@gmail.com">${icon("mail")} tranduonggiabao0501@gmail.com</a>
                <a class="button" href="assets/documents/TranDuongGiaBao_ITIntern_CV.pdf" download>${icon("download")} ${c.download}</a>
                <a class="button ghost" href="https://github.com/Peo051" target="_blank" rel="noreferrer">${icon("github")} GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </div>`;
  }

  function renderSkills() {
    const groups = skillGroups[language];
    return `
      <div class="page route-enter">
        ${pageHero("skills")}
        <section class="section compact">
          <div class="shell skill-groups">
            ${groups.map(([title, desc, items], index) => `
              <article class="skill-group reveal">
                <span class="skill-group-number">${pad(index + 1)}</span>
                <div><h2>${title}</h2><p class="skill-group-desc">${desc}</p></div>
                <div class="skill-tags">${tags(items)}</div>
              </article>`).join("")}
          </div>
        </section>
      </div>`;
  }

  function renderProjects() {
    const c = getText().common;
    return `
      <div class="page route-enter">
        ${pageHero("projects")}
        <section class="section compact">
          <div class="shell project-grid">
            ${projects.map((project, index) => {
              const body = project[language];
              return `
                <article class="project-card reveal">
                  <div class="project-card-cover">
                    <img src="${project.cover}" alt="${project.title}" loading="lazy">
                  </div>
                  <div class="project-card-meta">
                    <span class="section-index">PROJECT / ${pad(index + 1)}</span>
                    <span class="status-pill ${project.statusKey}"><span class="status-dot"></span>${project.status}</span>
                  </div>
                  <h2>${project.title}</h2>
                  <p>${body.summary}</p>
                  <div class="skill-mini-list">${tags(project.tech.slice(0, 6))}</div>
                  <div class="project-card-footer">
                    <a class="text-link" href="#/project/${project.slug}">${c.explore} ${icon("arrow")}</a>
                    <span class="section-index">${project.year}</span>
                  </div>
                </article>`;
            }).join("")}
          </div>
        </section>
      </div>`;
  }

  function renderProjectDetail(slug) {
    const project = projects.find(item => item.slug === slug);
    if (!project) return renderNotFound();
    const body = project[language];
    const c = getText().common;

    return `
      <div class="page route-enter">
        <section class="project-detail-hero">
          <div class="shell">
            <nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/project">${c.back}</a><span>/</span><span>${project.title}</span></nav>
            <p class="eyebrow">${project.category}</p>
            <h1 class="project-detail-title">${project.title}</h1>
            <p class="project-detail-subtitle">${project.year} · ${project.status}</p>
            
            <dl class="project-facts">
              <div class="project-fact"><dt>${c.technology}</dt><dd>${project.tech.slice(0, 3).join(" · ")}</dd></div>
              <div class="project-fact"><dt>${c.period}</dt><dd>${project.year}</dd></div>
              <div class="project-fact"><dt>${c.role}</dt><dd>${project.role}</dd></div>
              <div class="project-fact"><dt>${c.status}</dt><dd>${project.status}</dd></div>
            </dl>

            <div class="project-detail-banner reveal">
              <img src="${project.cover}" alt="${project.title}">
            </div>
          </div>
        </section>

        <div class="shell case-study">
          <aside class="case-nav">
            <button type="button" data-scroll-target="overview">01 · ${c.overview}</button>
            <button type="button" data-scroll-target="contribution">02 · ${c.contribution}</button>
            <button type="button" data-scroll-target="engineering">03 · ${c.engineering}</button>
            <button type="button" data-scroll-target="stack">04 · ${c.stack}</button>
          </aside>
          <div class="case-content">
            <section class="case-section reveal" id="overview">
              <p class="eyebrow">01 / ${c.overview}</p>
              <h2>${body.summary}</h2>
              <p>${body.overview}</p>
            </section>
            <section class="case-section reveal" id="contribution">
              <p class="eyebrow">02 / ${c.contribution}</p>
              <h2>${c.contribution}</h2>
              <ul>${body.contribution.map(item => `<li>${item}</li>`).join("")}</ul>
            </section>
            <section class="case-section reveal" id="engineering">
              <p class="eyebrow">03 / ${c.engineering}</p>
              <h2>${c.engineering}</h2>
              <ul>${body.engineering.map(item => `<li>${item}</li>`).join("")}</ul>
            </section>
            <section class="case-section reveal" id="stack">
              <p class="eyebrow">04 / ${c.stack}</p>
              <h2>${c.stack}</h2>
              <div class="tech-stack-box">${tags(project.tech)}</div>
              <div class="inline-actions">
                <a class="button primary" href="${project.repo}" target="_blank" rel="noreferrer">${icon("github")} ${c.repo}</a>
                ${project.live ? `<a class="button" href="${project.live}" target="_blank" rel="noreferrer">${c.live} ${icon("arrow")}</a>` : ""}
              </div>
            </section>
          </div>
        </div>
      </div>`;
  }

  function renderEducation() {
    const items = education[language];
    return `
      <div class="page route-enter">
        ${pageHero("education")}
        <section class="section compact">
          <div class="shell timeline">
            ${items.map(item => `
              <article class="timeline-item reveal">
                <div class="timeline-meta">${item.meta}</div>
                <div class="timeline-content"><h3>${item.title}</h3><div class="subline">${item.subline}</div><p>${item.desc}</p></div>
              </article>`).join("")}
            <article class="timeline-item reveal">
              <div class="timeline-meta">${language === "vi" ? "Ngôn ngữ" : "Languages"}</div>
              <div class="timeline-content">
                <h3>${language === "vi" ? "Tiếng Anh chuyên ngành" : "Technical English"}</h3>
                <div class="subline">Documentation & Technical reading</div>
                <p>${language === "vi" ? "Có khả năng đọc hiểu tốt tài liệu kỹ thuật tiếng Anh (Microsoft Docs, GitHub Repos, API Specifications), phục vụ quá trình tự nghiên cứu và phát triển phần mềm độc lập." : "Comfortable comprehending English technical documentation, API specifications, and software references for learning and independent software delivery."}</p>
              </div>
            </article>
          </div>
        </section>
      </div>`;
  }

  function renderAchievements() {
    const items = achievements[language];
    const c = getText().common;

    const filteredCerts = certifications.filter(cert => {
      if (currentCertFilter === "all") return true;
      if (currentCertFilter === "ai") return cert.category === "ai";
      if (currentCertFilter === "ux") return cert.category === "ux";
      if (currentCertFilter === "career") return cert.category === "career";
      return true;
    });

    return `
      <div class="page route-enter">
        ${pageHero("achievements")}
        
        <!-- Academic Competitions Section (Images Hidden, Popup Button) -->
        <section class="section compact" style="padding-bottom: 30px;">
          <div class="shell">
            <div class="section-head reveal" style="margin-bottom: 30px;">
              <div>
                <p class="eyebrow">${language === "vi" ? "Giải thưởng học thuật" : "Competitions & Research"}</p>
                <h2 class="section-title">${language === "vi" ? "Cuộc thi & Nghiên cứu tại HUIT." : "Awards & Research at HUIT."}</h2>
              </div>
              <p class="section-intro">${language === "vi" ? "Các giải thưởng chứng minh năng lực thiết kế hệ thống dữ liệu và nghiên cứu thuật toán khai thác dữ liệu có minh chứng rõ ràng." : "Recognitions in database architecture and data mining algorithm research with official verified certificates."}</p>
            </div>
            <div class="evidence-grid">
              ${items.map((item, index) => `
                <article class="evidence-card reveal">
                  <span class="award-label">${pad(index + 1)} · ${item.label} · ${item.year}</span>
                  <h3>${item.title}</h3>
                  <p>${item.detail}</p>
                  <div class="evidence-action">
                    <button type="button" class="view-proof-btn" data-proof-id="${item.id}">
                      ${icon("zoom")} ${c.viewProof}
                    </button>
                  </div>
                </article>`).join("")}
            </div>
          </div>
        </section>

        <!-- Certifications Section with Real Images & Verification Links -->
        <section class="section compact" style="padding-top: 30px;">
          <div class="shell">
            <div class="cert-section-head reveal">
              <div>
                <p class="eyebrow">${language === "vi" ? "Chứng chỉ chuyên nghiệp" : "Professional Certifications"}</p>
                <h2 class="section-title">${language === "vi" ? "8 Chứng nhận chính thức từ Google & Khóa đào tạo." : "8 Official Credentials from Google & Global Programs."}</h2>
              </div>
              <div class="cert-filter-group">
                <button type="button" class="cert-filter-btn ${currentCertFilter === 'all' ? 'is-active' : ''}" data-cert-filter="all">${c.all}</button>
                <button type="button" class="cert-filter-btn ${currentCertFilter === 'ai' ? 'is-active' : ''}" data-cert-filter="ai">${c.filterAi}</button>
                <button type="button" class="cert-filter-btn ${currentCertFilter === 'ux' ? 'is-active' : ''}" data-cert-filter="ux">${c.filterUx}</button>
                <button type="button" class="cert-filter-btn ${currentCertFilter === 'career' ? 'is-active' : ''}" data-cert-filter="career">${c.filterCareer}</button>
              </div>
            </div>

            <div class="cert-grid">
              ${filteredCerts.map(cert => {
                const body = cert[language];
                const subCount = cert.subCourses ? cert.subCourses.length : 0;
                return `
                  <article class="cert-card reveal">
                    <div class="cert-thumb-wrap" data-cert-id="${cert.id}">
                      <img src="${cert.image}" alt="${cert.title}" loading="lazy">
                      <div class="cert-zoom-overlay">${icon("zoom")} ${c.zoomCert}</div>
                    </div>
                    <div class="cert-content">
                      <div class="cert-meta-top">
                        <span class="cert-issuer">${cert.issuer.split("·")[0].split("via")[0].trim()}</span>
                        <span class="status-pill completed"><span class="status-dot"></span>${c.completed}</span>
                      </div>
                      <h3>${cert.title}</h3>
                      <p>${body.summary}</p>
                      <div class="cert-actions">
                        <button type="button" class="cert-btn-zoom" data-cert-id="${cert.id}">
                          ${icon("zoom")} ${subCount > 0 ? (language === 'vi' ? `Xem khóa (${subCount})` : `Courses (${subCount})`) : c.zoomCert}
                        </button>
                        ${cert.verify ? `<a class="text-link" href="${cert.verify}" target="_blank" rel="noreferrer">${icon("external")} Verify</a>` : ""}
                      </div>
                    </div>
                  </article>`;
              }).join("")}
            </div>
          </div>
        </section>
      </div>`;
  }

  function renderResume() {
    const c = getText().common;
    const profile = getText().home.description;
    const awardItems = achievements[language];
    return `
      <div class="page route-enter">
        ${pageHero("resume")}
        <section class="section compact">
          <div class="shell resume-layout">
            <div class="resume-main">
              <section class="resume-section reveal">
                <h2>${language === "vi" ? "Giới thiệu bản thân" : "Profile Summary"}</h2>
                <p>${profile}</p>
              </section>
              <section class="resume-section reveal">
                <h2>${language === "vi" ? "Học vấn" : "Education"}</h2>
                <div class="resume-entry">
                  <h3>University of Industry and Trade — HUIT</h3>
                  <div class="resume-entry-meta">2024 — Present · Information Technology · GPA: 3.74 / 4.0</div>
                </div>
              </section>
              <section class="resume-section reveal">
                <h2>${language === "vi" ? "Dự án tiêu biểu" : "Featured Projects"}</h2>
                ${projects.slice(0, 3).map(project => `
                  <div class="resume-entry">
                    <h3>${project.title}</h3>
                    <div class="resume-entry-meta">${project.year} · ${project.category}</div>
                    <p>${project[language].summary}</p>
                  </div>`).join("")}
              </section>
              <section class="resume-section reveal">
                <h2>${language === "vi" ? "Giải thưởng học thuật" : "Awards & Honors"}</h2>
                ${awardItems.map(item => `
                  <div class="resume-entry">
                    <h3>${item.title}</h3>
                    <div class="resume-entry-meta">${item.label} · ${item.year}</div>
                    <p>${item.detail}</p>
                  </div>`).join("")}
              </section>
              <section class="resume-section reveal">
                <h2>${language === "vi" ? "Chứng chỉ chuyên nghiệp" : "Certifications"}</h2>
                <div class="skill-mini-list" style="margin-top: 12px;">
                  ${tags(certifications.map(c => c.title))}
                </div>
              </section>
            </div>
            <aside class="resume-sidebar">
              <div class="resume-box reveal">
                <h3>${language === "vi" ? "Tải CV chính thức" : "Official Resume PDF"}</h3>
                <a class="button primary" style="width:100%" href="assets/documents/TranDuongGiaBao_ITIntern_CV.pdf" download>${icon("download")} ${c.download}</a>
              </div>
              <div class="resume-box reveal">
                <h3>${language === "vi" ? "Thông tin liên hệ" : "Contact Information"}</h3>
                <p><strong>Email:</strong> tranduonggiabao0501@gmail.com<br><strong>Phone:</strong> +8453576817<br><strong>Location:</strong> Tay Lan, Ba Diem, TP.HCM</p>
              </div>
              <div class="resume-box reveal">
                <h3>${language === "vi" ? "Ngăn xếp kỹ thuật" : "Core Tech Stack"}</h3>
                <div class="skill-mini-list">${tags(["C#", ".NET 8", "ASP.NET Core", "SQL Server", "WPF / MVVM", "FastAPI", "PostgreSQL", "Next.js", "Git"])}</div>
              </div>
            </aside>
          </div>
        </section>
      </div>`;
  }

  function renderContact() {
    return `
      <div class="page route-enter">
        ${pageHero("contact")}
        <section class="section compact">
          <div class="shell contact-grid">
            <div class="contact-card reveal">
              <p class="eyebrow">${language === "vi" ? "Thông tin kết nối" : "Direct Contact"}</p>
              <div class="contact-list">
                <div class="contact-item"><span>Email</span><a href="mailto:tranduonggiabao0501@gmail.com">tranduonggiabao0501@gmail.com</a></div>
                <div class="contact-item"><span>${language === "vi" ? "Điện thoại" : "Phone"}</span><a href="tel:+8453576817">+8453576817</a></div>
                <div class="contact-item"><span>${language === "vi" ? "Địa điểm" : "Location"}</span><strong>Tay Lan, Ba Diem, TP.HCM</strong></div>
                <div class="contact-item"><span>GitHub</span><a href="https://github.com/Peo051" target="_blank" rel="noreferrer">github.com/Peo051</a></div>
                <div class="contact-item"><span>LinkedIn</span><a href="https://www.linkedin.com/in/peo0501" target="_blank" rel="noreferrer">linkedin.com/in/peo0501</a></div>
              </div>
            </div>
            <div class="callout reveal">
              <p class="eyebrow">${language === "vi" ? "Mục tiêu thực tập" : "Internship Focus"}</p>
              <h2>${language === "vi" ? "Backend / Fullstack là định hướng ưu tiên hàng đầu." : "Backend / Fullstack is my primary focus."}</h2>
              <p class="contact-note">${language === "vi" ? "Tôi mong muốn được tham gia làm việc trực tiếp với C#, .NET, ASP.NET Core, SQL Server và hệ thống ứng dụng web/desktop thực tế; sẵn sàng học hỏi thêm các công nghệ cần thiết để hoàn thành tốt mục tiêu của nhóm." : "I am eager to work with C#, .NET, ASP.NET Core, SQL Server and real-world web/desktop systems, while staying adaptive to learn new stacks required by the development team."}</p>
              <div class="inline-actions"><a class="button primary" href="mailto:tranduonggiabao0501@gmail.com">${icon("mail")} ${language === "vi" ? "Gửi email trực tiếp" : "Send direct email"}</a></div>
            </div>
          </div>
        </section>
      </div>`;
  }

  function renderNotFound() {
    return `
      <div class="page route-enter">
        <section class="hero">
          <div class="shell">
            <p class="eyebrow">404</p>
            <h1 class="page-title">${language === "vi" ? "Không tìm thấy trang." : "Page not found."}</h1>
            <div class="inline-actions" style="margin-top:24px;"><a class="button primary" href="#/">${language === "vi" ? "Về trang chủ" : "Back home"}</a></div>
          </div>
        </section>
      </div>`;
  }

  function normalizeRoute() {
    let hash = window.location.hash || "#/";
    if (!hash.startsWith("#/")) hash = "#/";
    return hash.slice(1).replace(/\/$/, "") || "/";
  }

  function setActiveNavigation(route) {
    const rootRoute = route.startsWith("/project/") ? "/project" : route;
    document.querySelectorAll("[data-route]").forEach(link => {
      link.classList.toggle("is-active", link.dataset.route === rootRoute);
    });
  }

  function updateNavigationLabels() {
    const n = getText().nav;
    const map = [
      ["/", n.home], ["/project", n.projects], ["/skill", n.skills],
      ["/education", n.education], ["/achievement", n.achievements], ["/resume", n.resume]
    ];
    document.querySelectorAll("[data-route]").forEach(link => {
      const item = map.find(([route]) => route === link.dataset.route);
      if (item) link.textContent = item[1];
    });
    const contact = mobileNav.querySelector('a[href="#/contact"]');
    if (contact) contact.textContent = n.contact;
    document.querySelector("[data-i18n='footerLine']").textContent = language === "vi" ? "Thực tập sinh Backend / Fullstack Developer" : "Backend / Fullstack Developer Intern";
  }

  function attachRevealObserver() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: "0px 0px -40px" });
    elements.forEach(element => observer.observe(element));
  }

  function closeMobileMenu() {
    mobileNav.classList.remove("is-open");
    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function attachCertificateHandlers() {
    // Lightbox triggers for Certificates
    app.querySelectorAll("[data-cert-id]").forEach(element => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const certId = element.dataset.certId;
        const cert = certifications.find(c => c.id === certId);
        if (cert) openLightbox(cert);
      });
    });

    // Lightbox triggers for Achievements Proofs (Popup giấy khen)
    app.querySelectorAll("[data-proof-id]").forEach(element => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const proofId = element.dataset.proofId;
        const list = achievements[language];
        const item = list.find(a => a.id === proofId);
        if (item) openLightbox(item);
      });
    });

    // Category filter buttons in Achievements page
    app.querySelectorAll("[data-cert-filter]").forEach(button => {
      button.addEventListener("click", () => {
        currentCertFilter = button.dataset.certFilter;
        render();
      });
    });
  }

  function render() {
    const route = normalizeRoute();
    let html;

    if (route === "/") html = renderHome();
    else if (route === "/skill" || route === "/skills") html = renderSkills();
    else if (route === "/project" || route === "/projects") html = renderProjects();
    else if (route === "/education") html = renderEducation();
    else if (route === "/achievement" || route === "/achievements") html = renderAchievements();
    else if (route === "/resume") html = renderResume();
    else if (route === "/contact") html = renderContact();
    else if (route.startsWith("/project/")) html = renderProjectDetail(route.split("/").pop());
    else html = renderNotFound();

    app.innerHTML = html;
    setActiveNavigation(route);
    updateNavigationLabels();
    closeMobileMenu();
    attachRevealObserver();
    attachCertificateHandlers();

    app.querySelectorAll("[data-scroll-target]").forEach(button => {
      button.addEventListener("click", () => {
        const target = document.getElementById(button.dataset.scrollTarget);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = route === "/" ? "Trần Dương Gia Bảo | Backend / Fullstack Developer" : `${route.split("/").filter(Boolean).pop()?.replaceAll("-", " ").toUpperCase() || "Portfolio"} | Trần Dương Gia Bảo`;
  }

  function applyTheme(theme) {
    const safeTheme = theme === "light" ? "light" : "dark";
    document.documentElement.dataset.theme = safeTheme;
    localStorage.setItem("portfolio-theme", safeTheme);
    themeToggle.setAttribute("aria-label", safeTheme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  const initialTheme = localStorage.getItem("portfolio-theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  applyTheme(initialTheme);

  themeToggle.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  languageToggle.addEventListener("click", () => {
    language = language === "en" ? "vi" : "en";
    localStorage.setItem("portfolio-language", language);
    languageToggle.textContent = language === "en" ? "VI" : "EN";
    document.documentElement.lang = language;
    render();
  });

  menuToggle.addEventListener("click", () => {
    const open = !mobileNav.classList.contains("is-open");
    mobileNav.classList.toggle("is-open", open);
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mobileNav.addEventListener("click", event => {
    if (event.target.closest("a")) closeMobileMenu();
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("scroll", () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  document.getElementById("currentYear").textContent = new Date().getFullYear();
  languageToggle.textContent = language === "en" ? "VI" : "EN";
  document.documentElement.lang = language;

  if (!window.location.hash) window.location.hash = "#/";
  else render();
})();
