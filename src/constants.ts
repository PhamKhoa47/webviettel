export const BRAND = {
  name: 'Viettel Đắk Lắk',
  phone: '0989113602',
  email: 'phamkhoaviettel@gmail.com',
  address: '48 Lý Trọng, Phường Tân An, Tỉnh Đắk Lắk',
  workingHours: 'Thứ 2 - Thứ 7: 08:00 - 17:30',
};

export const SERVICES = [
  {
    id: 'internet',
    title: 'Internet Viettel',
    description: 'Cáp quang tốc độ cao, ổn định nhất Việt Nam.',
    icon: 'Wifi',
    path: '/internet-viettel',
  },
  {
    id: 'digital-signature',
    title: 'Chữ ký số',
    description: 'Kê khai thuế, bảo hiểm xã hội, hải quan điện tử.',
    icon: 'PenTool',
    path: '/digital-signature',
  },
  {
    id: 'e-invoice',
    title: 'Hóa đơn điện tử',
    description: 'Giải pháp hóa đơn điện tử S-Invoice an toàn, bảo mật.',
    icon: 'FileText',
    path: '/e-invoice',
  },
  {
    id: 'e-contract',
    title: 'Hợp đồng điện tử',
    description: 'Ký kết hợp đồng mọi lúc, mọi nơi, pháp lý đảm bảo.',
    icon: 'FileCheck',
    path: '/e-contract',
  },
  {
    id: 'pos',
    title: 'Phần mềm bán hàng',
    description: 'Quản lý bán hàng, kho, khách hàng hiệu quả với Tendoo.',
    icon: 'LayoutDashboard',
    path: '/pos-software',
  },
  {
    id: 'business-reg',
    title: 'Thành lập doanh nghiệp',
    description: 'Tư vấn và hỗ trợ thủ tục pháp lý trọn gói cho startup.',
    icon: 'Briefcase',
    path: '/business-registration',
  },
];

export const PRICING_INTERNET = [
  { name: 'NETVT01_T', speed: '300 Mbps', price: '195.000đ', features: ['Thiết bị: ONT Dualband (chuẩn wifi 6)', 'Phù hợp cá nhân, hộ gia đình', 'Tốc độ ổn định'] },
  { name: 'NETVT2_T', speed: '500 Mbps - 1 Gbps', price: '240.000đ', features: ['Thiết bị: ONT Dualband (chuẩn wifi 6)', 'Phù hợp hộ gia đình nhiều thiết bị', 'Băng thông lớn'] },
  { name: 'MESHVT1_T', speed: '300 Mbps', price: '210.000đ', features: ['Thiết bị: ONT Dualband + 1 Mesh wifi', 'Phủ sóng rộng, xuyên tường', 'Công nghệ Mesh wifi 6'] },
  { name: 'MESHVT2_T', speed: '500 Mbps - 1 Gbps', price: '245.000đ', features: ['Thiết bị: ONT Dualband + 2 Mesh wifi', 'Phủ sóng toàn bộ căn nhà', 'Roaming mượt mà'] },
  { name: 'MESHVT3_T', speed: '500 Mbps - 1 Gbps', price: '299.000đ', features: ['Thiết bị: ONT Dualband + 3 Mesh wifi', 'Giải pháp cho nhà tầng, biệt thự', 'Tốc độ không giới hạn'] },
];

export const PRICING_CA = [
  { duration: '1 Năm', price: '1.792.000đ', renewalPrice: '1.252.000đ', promo: 'Đã bao gồm VAT & USB Token' },
  { duration: '2 Năm', price: '2.691.000đ', renewalPrice: '2.151.000đ', promo: 'Đã bao gồm VAT & USB Token' },
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
