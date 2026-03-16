export const BRAND = {
  name: 'Viettel Đắk Lắk',
  phone: '0989.113.602',
  email: 'phamkhoaviettel@gmail.com',
  address: 'Số 48 Lý Tự Trọng, Phường Tân An, Tỉnh Đắk Lắk, Việt Nam',
  hotlineSupport: '1800.8119',
  workingHours: 'Thứ 2 - Chủ Nhật: 07:30 - 20:00',
  representative: 'Phạm Văn Khoa',
  position: 'Chuyên viên Tư vấn Giải pháp Doanh nghiệp',
};

export const DAK_LAK_DISTRICTS = [
  'TP. Buôn Ma Thuột', 'Thị xã Buôn Hồ', 'Huyện Ea H\'leo', 'Huyện Ea Súp', 'Huyện Buôn Đôn', 
  'Huyện Cư M\'gar', 'Huyện Krông Búk', 'Huyện Krông Năng', 'Huyện Ea Kar', 'Huyện M\'Đrắk', 
  'Huyện Krông Bông', 'Huyện Krông Pắc', 'Huyện Krông Ana', 'Huyện Lắk', 'Huyện Cư Kuin'
];

export const SERVICES = [
  {
    id: 'internet',
    title: 'Internet Cáp Quang',
    description: 'Hạ tầng cáp quang Gpon hiện đại, tốc độ lên đến 1Gbps, ổn định và bảo mật tuyệt đối.',
    icon: 'Wifi',
    path: '/internet-viettel',
    accent: 'viettel-red',
  },
  {
    id: 'digital-signature',
    title: 'Chữ Ký Số Viettel-CA',
    description: 'Giải pháp chứng thực chữ ký số hàng đầu Việt Nam, hỗ trợ kê khai Thuế, BHXH, Hải quan.',
    icon: 'PenTool',
    path: '/digital-signature',
    accent: 'blue-500',
  },
  {
    id: 'e-invoice',
    title: 'Hóa Đơn Điện Tử',
    description: 'Hệ thống S-Invoice thông minh, khởi tạo hóa đơn nhanh chóng, an toàn và đúng quy định pháp luật.',
    icon: 'FileText',
    path: '/e-invoice',
    accent: 'emerald-500',
  },
  {
    id: 'e-contract',
    title: 'Hợp Đồng Điện Tử',
    description: 'Ký kết không chạm vContract, tiết kiệm 90% thời gian và chi phí in ấn, chuyển phát.',
    icon: 'FileCheck',
    path: '/e-contract',
    accent: 'amber-500',
  },
  {
    id: 'pos',
    title: 'Phần Mềm Bán Hàng',
    description: 'Quản lý kho, doanh thu, khách hàng tập trung. Tích hợp hóa đơn điện tử máy tính tiền.',
    icon: 'LayoutDashboard',
    path: '/pos-software',
    accent: 'indigo-500',
  },
  {
    id: 'business-reg',
    title: 'Thành Lập Doanh Nghiệp',
    description: 'Dịch vụ tư vấn pháp lý trọn gói, hỗ trợ startup từ ý tưởng đến khi đi vào hoạt động ổn định.',
    icon: 'Briefcase',
    path: '/business-registration',
    accent: 'rose-500',
  },
];

export const PRICING_INTERNET = [
  { 
    name: 'NETVT01_T', 
    speed: '300 Mbps', 
    price: '195.000đ', 
    features: ['Trang bị Modem Wifi 6 (ONT Dualband)', 'Phù hợp cá nhân, sinh viên', 'Tốc độ ổn định, giá rẻ'] 
  },
  { 
    name: 'NETVT2_T', 
    speed: '500Mbps - 1Gbps', 
    price: '240.000đ', 
    features: ['Trang bị Modem Wifi 6 (ONT Dualband)', 'Phù hợp hộ gia đình 4-6 thiết bị', 'Băng thông lớn, mượt mà'] 
  },
  { 
    name: 'MESHVT1_T', 
    speed: '300 Mbps', 
    price: '210.000đ', 
    features: ['Trang bị Modem Wifi 6 + 01 Mesh Wifi', 'Phủ sóng căn hộ 1-2 phòng ngủ', 'Công nghệ Mesh hiện đại'] 
  },
  { 
    name: 'MESHVT2_T', 
    speed: '500Mbps - 1Gbps', 
    price: '245.000đ', 
    features: ['Trang bị Modem Wifi 6 + 02 Mesh Wifi', 'Phủ sóng nhà tầng, căn hộ rộng', 'Roaming mượt mà toàn bộ nhà'] 
  },
  { 
    name: 'MESHVT3_T', 
    speed: '500Mbps - 1Gbps', 
    price: '299.000đ', 
    features: ['Trang bị Modem Wifi 6 + 03 Mesh Wifi', 'Tốc độ tối đa lên đến 1Gbps', 'Giải pháp cho biệt thự, nhà vườn'] 
  },
];

export const PRICING_CA = [
  { duration: '1 Năm', price: '1.792.000đ', renewalPrice: '1.252.000đ', promo: 'Giá đã bao gồm USB Token (540.000đ)' },
  { duration: '2 Năm', price: '2.691.000đ', renewalPrice: '2.151.000đ', promo: 'Giá đã bao gồm USB Token (540.000đ)' },
  { duration: '3 Năm', price: '3.052.000đ', renewalPrice: '2.856.000đ', promo: 'Miễn phí USB Token' },
];

export const PRICING_EINVOICE = [
  { package: 'DT300', quantity: '300', price: '429.000đ' },
  { package: 'DT500', quantity: '500', price: '583.000đ' },
  { package: 'DT1000', quantity: '1000', price: '913.000đ' },
  { package: 'DT2000', quantity: '2000', price: '1.375.000đ' },
  { package: 'DT3000', quantity: '3000', price: '1.936.000đ' },
  { package: 'DT5000', quantity: '5000', price: '2.937.000đ' },
];
