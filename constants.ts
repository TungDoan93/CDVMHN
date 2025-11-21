import { AppContent } from './types';

export const BRAND_COLORS = {
  primary: '#073459', // Xanh thương hiệu
  accent: '#EB0738',  // Đỏ thương hiệu
  light: '#F3F4F6',
  white: '#FFFFFF'
};

export const CONTENT: Record<'vi' | 'en', AppContent> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      programs: "Ngành đào tạo",
      facilities: "Cơ sở vật chất",
      contact: "Liên hệ",
      langBtn: "EN"
    },
    hero: {
      title: "TRƯỜNG CAO ĐẲNG VIỆT MỸ HÀ NỘI",
      subtitle: "Thực học - Thực nghiệp - Chuẩn Quốc tế",
      desc: "Thành viên Tập đoàn EQuest. Đào tạo nguồn nhân lực chất lượng cao, cam kết việc làm.",
      cta: "Đăng ký tư vấn ngay"
    },
    stats: [
      { num: "18+", label: "Năm phát triển" },
      { num: "20.000+", label: "Sinh viên tốt nghiệp" },
      { num: "96%", label: "Có việc làm ngay" },
      { num: "8 Tỷ", label: "Học bổng / năm" }
    ],
    philosophy: {
      title: "Triết lý Đào tạo",
      items: [
        { title: "Lấy người học làm trung tâm", desc: "Tư duy tăng trưởng - Tư duy thiết kế - Tư duy phản biện." },
        { title: "Gắn kết doanh nghiệp", desc: "Doanh nghiệp góp ý chương trình, hướng dẫn đề án & tuyển dụng." }
      ]
    },
    majors: {
      title: "Chương trình Đào tạo",
      groups: [
        { name: "Ngôn ngữ", items: ["Tiếng Anh", "Tiếng Nhật", "Tiếng Hàn", "Tiếng Trung"] },
        { name: "Quản trị & Kinh doanh", items: ["Quản trị kinh doanh", "Bán hàng", "Quản trị Khách sạn", "Tài chính"] },
        { name: "Công nghệ & Thiết kế", items: ["Thiết kế đồ họa", "Ứng dụng phần mềm", "Digital Marketing", "Công nghệ ô tô"] },
        { name: "Sức khỏe & Dịch vụ", items: ["Chăm sóc sắc đẹp", "Điều dưỡng", "Logistics"] }
      ]
    },
    facilities: {
      title: "Môi trường & Đời sống",
      list: [
        "Phòng học hiện đại 100% máy chiếu – âm thanh",
        "Khu thực hành chuẩn doanh nghiệp & Căn tin tiện lợi",
        "Ký túc xá & Hỗ trợ SV quốc tế (SIM, Ngân hàng)",
        "CLB: Bóng đá, Kpop, Graphic Design, Tiếng Anh..."
      ]
    },
    locations: {
      title: "Cơ sở đào tạo",
      list: ["Cơ sở Cầu Giấy", "Cơ sở Mỹ Đình", "Cơ sở Đình Lễ"]
    },
    footer: {
      copy: "© 2025 Trường Cao đẳng Việt Mỹ Hà Nội. Thành viên Tập đoàn EQuest."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      programs: "Programs",
      facilities: "Facilities",
      contact: "Contact",
      langBtn: "VN"
    },
    hero: {
      title: "VIET MY COLLEGE HANOI",
      subtitle: "Practical Learning - International Standard",
      desc: "A member of EQuest Group. Training high-quality human resources ready for the global workforce.",
      cta: "Admissions Inquiry"
    },
    stats: [
      { num: "18+", label: "Years of Growth" },
      { num: "20,000+", label: "Graduates" },
      { num: "96%", label: "Employed Instantly" },
      { num: "8 Bil", label: "Scholarships/Year" }
    ],
    philosophy: {
      title: "Training Philosophy",
      items: [
        { title: "Learner-Centered", desc: "Growth Mindset - Design Thinking - Critical Thinking." },
        { title: "Business Connection", desc: "Enterprises contribute to curriculum, mentorship & recruitment." }
      ]
    },
    majors: {
      title: "Academic Programs",
      groups: [
        { name: "Languages", items: ["English", "Japanese", "Korean", "Chinese"] },
        { name: "Business & Admin", items: ["Business Admin", "Sales", "Hotel Management", "Finance"] },
        { name: "Tech & Design", items: ["Graphic Design", "Software Apps", "Digital Marketing", "Automotive Tech"] },
        { name: "Health & Services", items: ["Beauty Care", "Nursing", "Logistics"] }
      ]
    },
    facilities: {
      title: "Campus Life & Facilities",
      list: [
        "Modern classrooms with 100% projectors & audio systems",
        "Enterprise-standard practice zones & Canteen",
        "Dormitory & Int'l Student Support (SIM, Banking)",
        "Clubs: Football, Kpop, Graphic Design, English..."
      ]
    },
    locations: {
      title: "Our Campuses",
      list: ["Cau Giay Campus", "My Dinh Campus", "Dinh Le Campus"]
    },
    footer: {
      copy: "© 2025 Viet My College Hanoi. Member of EQuest Group."
    }
  }
};