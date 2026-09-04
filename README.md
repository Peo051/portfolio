# Trần Dương Gia Bảo — Portfolio

Trang Portfolio cá nhân chuyên nghiệp được xây dựng bằng **HTML5, CSS3 và Vanilla JavaScript thuần** (Single Page Application dựa trên kiến trúc Hash Routing), tối ưu hóa triển khai tĩnh trực tiếp trên **GitHub Pages**.

## 1. Cấu trúc dự án (Project Structure)

```text
portfolio/
├── index.html                                  # Bộ khung HTML chính & Lightbox Modal
├── README.md                                   # Tài liệu hướng dẫn & cấu trúc
└── assets/
    ├── css/
    │   └── style.css                           # Toàn bộ Style, Dark/Light theme & Responsive
    ├── js/
    │   └── main.js                             # Dữ liệu song ngữ, Router SPA, Modal & Logic UI
    ├── img/
    │   ├── favicon.svg                         # Icon website
    │   ├── gia-bao.png                         # Ảnh gốc chân dung
    │   ├── profile/
    │   │   └── avatar-main.png                 # Ảnh chân dung tối ưu hóa cho khung Hero
    │   ├── projects/                           # Ảnh bìa (Cover 16:9) cho các dự án
    │   │   ├── coffee-shop-wpf-cover.png
    │   │   ├── love-sense-ai-cover.png
    │   │   ├── coffee-shop-web-cover.png
    │   │   ├── calculator-cover.png
    │   │   └── parking-cover.png
    │   └── certificates/                       # Ảnh chứng chỉ chuẩn hóa cho Gallery & Lightbox
    │       ├── google-ai-professional-certificate.png
    │       ├── google-ai-essentials.png
    │       ├── accelerate-job-search-ai.png
    │       ├── google-prompting-essentials.png
    │       ├── google-ux-design.png
    │       ├── ai-application-game-web-pm.png
    │       ├── financial-data-analysis-ai.png
    │       └── gemini-certified.png
    └── documents/
        └── TranDuongGiaBao_ITIntern_CV.pdf     # Tệp PDF CV đính kèm
```

## 2. Tính năng nổi bật

- **Kiến trúc SPA Hash Routing**: Chuyển đổi giữa các trang không gián đoạn (`#/`, `#/project`, `#/project/:slug`, `#/skill`, `#/education`, `#/achievement`, `#/resume`, `#/contact`), tương thích hoàn toàn khi host trên GitHub Pages mà không cần rewrite rules.
- **Hệ thống Theme Dark & Light**: Chế độ Dark mode không gian sâu với tông màu Electric Cyan/Teal và Blue làm điểm nhấn công nghệ cao; Light mode tương phản cao, hiện đại.
- **Hỗ trợ Song ngữ Toàn diện**: Chuyển đổi mượt mà giữa Tiếng Việt (VI) và Tiếng Anh (EN).
- **Bộ nhận diện Hero & Avatar**: Khung avatar viền công nghệ gradient, hiệu ứng status badge phát sáng thời gian thực ("Open to internship opportunities").
- **Khu vực Chứng chỉ Quốc tế & Modal Lightbox**: Trình bày 8 chứng chỉ từ Google/Coursera với bộ lọc danh mục (AI, UX, Career/Data) và khả năng phóng to ảnh toàn màn hình khi click.
- **Bộ ảnh bìa dự án (Project Covers)**: Thiết kế 16:9 đồng bộ, hiển thị trạng thái phát triển và chi tiết ngăn xếp công nghệ (.NET, WPF, SQL Server, Next.js, FastAPI, C++).

## 3. Chạy thử nghiệm trên máy cục bộ (Run locally)

Khởi chạy nhanh bằng server tích hợp sẵn của Python:

```bash
python -m http.server 5500
```

Sau đó truy cập trình duyệt tại: `http://localhost:5500`.

## 4. Hướng dẫn tùy biến & Thay đổi nội dung

1. **Thay ảnh chân dung đại diện**:
   - Thay thế tệp ảnh tại đường dẫn: `assets/img/profile/avatar-main.png` (khuyến nghị tỷ lệ 4:5 hoặc 1:1, độ phân giải từ 400x500px trở lên).
2. **Thay đổi ảnh bìa dự án**:
   - Đặt ảnh chụp màn hình hoặc mockup dự án của bạn vào thư mục `assets/img/projects/` và cập nhật đường dẫn tương ứng trong `assets/js/main.js`.
3. **Cập nhật chứng chỉ & liên kết xác thực**:
   - Thêm ảnh chụp chứng chỉ vào thư mục `assets/img/certificates/`.
   - Trong `assets/js/main.js`, tìm mảng `certifications` để chỉnh sửa tiêu đề, đơn vị cấp, đường dẫn ảnh và link xác thực `verify`.
4. **Cập nhật nội dung & dự án mới**:
   - Tất cả dữ liệu dự án, kỹ năng, học vấn và nội dung song ngữ nằm tập trung trong `assets/js/main.js`.
5. **Cập nhật CV tải về**:
   - Ghi đè tệp CV mới vào `assets/documents/TranDuongGiaBao_ITIntern_CV.pdf`.

## 5. Triển khai lên GitHub Pages (Deploy to GitHub Pages)

1. Đẩy mã nguồn lên repository trên GitHub:
   ```bash
   git add .
   git commit -m "Upgrade portfolio: modern UI/UX, project covers, certs gallery & lightbox"
   git push origin main
   ```
2. Mở GitHub repository, chọn **Settings** → **Pages**.
3. Tại mục **Build and deployment**, chọn Source là **Deploy from a branch**.
4. Chọn nhánh `main` và thư mục `/ (root)`.
5. Bấm **Save** và chờ GitHub Pages xuất bản trang web.

