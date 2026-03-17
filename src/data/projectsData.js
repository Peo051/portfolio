import giborThumbnail from "../assets/project-gibor.jpg";
import fakeNewsThumbnail from "../assets/project-fake-news.jpg";
import parkingThumbnail from "../assets/project-parking.jpg";

export const projectsData = [
  {
    id: "gibor-coffee-shop",
    title: { en: "GIBOR Coffee Shop", vi: "GIBOR Coffee Shop" },
    category: { en: "Academic Full-Stack Workflow Project", vi: "Dự án học thuật full-stack theo luồng nghiệp vụ" },
    valueSummary: {
      en: "Built an e-commerce-style ordering workflow that connects user actions, payment flow, and loyalty logic with consistent system behavior.",
      vi: "Xây dựng luồng đặt hàng theo phong cách e-commerce, kết nối thao tác người dùng, thanh toán và tích điểm với hành vi hệ thống nhất quán."
    },
    thumbnail: giborThumbnail,
    github: "https://github.com/GiaBao051/Coffee_Shop_Management",
    repositoryVisible: true,
    problemContext: {
      en: "The project required a practical business workflow where menu browsing, cart actions, ordering, payment handling, and user identity must remain coherent across the full flow.",
      vi: "Dự án yêu cầu mô phỏng luồng nghiệp vụ thực tế, nơi xem menu, giỏ hàng, đặt món, thanh toán và danh tính người dùng phải vận hành xuyên suốt và nhất quán."
    },
    whatIBuilt: {
      en: "Implemented menu-to-order user flow, cart behavior, payment-related process logic, Firebase authentication, and loyalty points tied to user transactions.",
      vi: "Triển khai luồng người dùng từ menu đến đơn hàng, xử lý giỏ hàng, logic thanh toán, xác thực Firebase và tích điểm theo giao dịch người dùng."
    },
    keyContributions: {
      en: [
        "Designed clear cart-to-order business state transitions.",
        "Built order and payment flow handling with consistent operational behavior.",
        "Implemented loyalty logic connected to transaction history.",
        "Structured project flow around maintainability and clear user-state continuity."
      ],
      vi: [
        "Thiết kế chuyển trạng thái nghiệp vụ rõ ràng từ giỏ hàng sang đơn hàng.",
        "Xây dựng luồng đơn hàng và thanh toán với hành vi vận hành ổn định.",
        "Triển khai logic tích điểm gắn với lịch sử giao dịch.",
        "Tổ chức luồng dự án theo hướng dễ bảo trì và xuyên suốt trạng thái người dùng."
      ]
    },
    whatILearned: {
      en: "I learned to translate business requirements into reliable software flow, especially where data consistency and user-state continuity drive product quality.",
      vi: "Tôi học được cách chuyển yêu cầu nghiệp vụ thành luồng phần mềm tin cậy, đặc biệt ở các điểm quyết định chất lượng như tính nhất quán dữ liệu và trạng thái người dùng."
    },
    techStack: ["JavaScript", "Firebase", "HTML", "CSS", "Relational Data Modeling"]
  },
  {
    id: "fake-news-detection",
    title: { en: "Fake News Detection", vi: "Fake News Detection" },
    category: { en: "Applied AI / ML Project", vi: "Dự án AI / ML ứng dụng" },
    valueSummary: {
      en: "Combined dataset training and API integration in a practical fake-news classification workflow.",
      vi: "Kết hợp huấn luyện dữ liệu và tích hợp API trong luồng phân loại tin giả theo hướng thực hành."
    },
    thumbnail: fakeNewsThumbnail,
    github: "",
    repositoryVisible: false,
    problemContext: {
      en: "The project focused on practical ML workflow building: preparing data, training classification models, and integrating inference into an application flow.",
      vi: "Dự án tập trung vào luồng ML thực tế: chuẩn bị dữ liệu, huấn luyện mô hình phân loại và tích hợp suy luận vào luồng ứng dụng."
    },
    whatIBuilt: {
      en: "Built a fake-news detection workflow with dataset-driven training, model inference pipeline, and API integration to connect prediction output with application logic.",
      vi: "Xây dựng workflow phát hiện tin giả gồm huấn luyện theo dataset, pipeline suy luận mô hình và tích hợp API để kết nối kết quả dự đoán vào logic ứng dụng."
    },
    keyContributions: {
      en: [
        "Prepared and organized data for repeatable training runs.",
        "Built model training and inference pipeline with practical evaluation loops.",
        "Integrated prediction service into application flow via API.",
        "Documented limitations and next-step improvements for model quality."
      ],
      vi: [
        "Chuẩn bị và tổ chức dữ liệu để có thể huấn luyện lặp lại.",
        "Xây dựng pipeline huấn luyện và suy luận kèm vòng lặp đánh giá thực tế.",
        "Tích hợp dịch vụ dự đoán vào luồng ứng dụng thông qua API.",
        "Ghi nhận giới hạn hiện tại và hướng cải tiến chất lượng mô hình."
      ]
    },
    whatILearned: {
      en: "This project strengthened my understanding of how ML experimentation, integration, and software structure must align to produce usable engineering outcomes.",
      vi: "Dự án giúp tôi hiểu rõ cách thực nghiệm ML, tích hợp hệ thống và cấu trúc phần mềm cần đồng bộ để tạo ra kết quả có thể sử dụng trong thực tế."
    },
    techStack: ["Python", "Machine Learning", "API Integration", "Dataset Training", "Inference Workflow"]
  },
  {
    id: "parking-lot-management",
    title: { en: "Parking Lot Management System", vi: "Parking Lot Management System" },
    category: { en: "Academic Systems Logic Project", vi: "Dự án học thuật thiên về logic hệ thống" },
    valueSummary: {
      en: "Modeled parking operations with deterministic flow control and data-structure-driven state transitions.",
      vi: "Mô hình hóa vận hành bãi xe với điều khiển luồng xác định và chuyển trạng thái dựa trên cấu trúc dữ liệu."
    },
    thumbnail: parkingThumbnail,
    github: "https://github.com/GiaBao051/QuanLiBaiDoXe",
    repositoryVisible: true,
    problemContext: {
      en: "This project translated operational parking rules into clear software flow for slot allocation, entry-exit control, and state consistency.",
      vi: "Dự án chuyển các quy tắc vận hành bãi xe thành luồng phần mềm rõ ràng cho phân bổ chỗ, kiểm soát vào-ra và đảm bảo nhất quán trạng thái."
    },
    whatIBuilt: {
      en: "Implemented a C++ management model for occupancy tracking, entry/exit handling, and deterministic state updates under defined constraints.",
      vi: "Triển khai mô hình quản lý C++ cho theo dõi trạng thái chỗ đỗ, xử lý vào-ra và cập nhật trạng thái có tính xác định theo ràng buộc đã định."
    },
    keyContributions: {
      en: [
        "Designed structured flow for vehicle entry, exit, and slot assignment.",
        "Applied DSA-based reasoning for state representation and transition control.",
        "Implemented predictable operational logic for edge-case scenarios.",
        "Organized code for clearer debugging and maintainability."
      ],
      vi: [
        "Thiết kế luồng có cấu trúc cho vào xe, ra xe và phân bổ vị trí đỗ.",
        "Áp dụng tư duy DSA để biểu diễn và kiểm soát chuyển trạng thái.",
        "Triển khai logic vận hành có thể dự đoán cho các tình huống biên.",
        "Tổ chức mã nguồn rõ ràng hơn để dễ debug và bảo trì."
      ]
    },
    whatILearned: {
      en: "I improved my systems-thinking discipline by modeling operational rules into robust logic, instead of relying on ad-hoc implementation.",
      vi: "Tôi cải thiện tư duy hệ thống khi chuyển quy tắc vận hành thành logic bền vững, thay vì triển khai theo kiểu chắp vá."
    },
    techStack: ["C++", "Data Structures", "Algorithms", "System Logic"]
  }
];

export const additionalExplorations = [
  {
    title: { en: "Calculator WPF", vi: "Calculator WPF" },
    detail: { en: ".NET 8, MVVM basics", vi: ".NET 8, nền tảng MVVM" }
  },
  {
    title: { en: "HUIM Algorithm Research", vi: "Nghiên cứu thuật toán HUIM" },
    detail: { en: "Academic algorithm study", vi: "Tìm hiểu thuật toán trong học thuật" }
  },
  {
    title: { en: "YOLO / AI Model Training", vi: "Huấn luyện mô hình YOLO / AI" },
    detail: { en: "Experiment pipelines", vi: "Pipeline thực nghiệm" }
  },
  {
    title: { en: "Scientific Research Participation", vi: "Tham gia nghiên cứu khoa học" },
    detail: { en: "University-level team activity", vi: "Hoạt động nhóm cấp trường" }
  }
];
