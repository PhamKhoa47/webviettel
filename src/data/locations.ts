export const LOCATIONS = [
  "Buôn Ma Thuột", "Tân Lập", "Tân An", "Thành Nhất", "Ea Kao", "Hòa Phú", "Cư Êbur", "Ea Tu", "Ea Tam", "Khánh Xuân", "Thắng Lợi", "Thống Nhất", "Tân Lợi", "Tân Thành", 
  "Buôn Hồ", "Cư Bao", "Ea Drông", "Ea Siên", "Bình Tân", "An Bình", "An Lạc", "Thiện An", "Đạt Hiếu", "Bình Thuận", 
  "Ea Súp", "Ia Lốp", "Ia Rvê", "Ea Bung", "Ea Rốk", "Ea Wer", 
  "Buôn Đôn", "Ea Nuôl", "Krông Na", "Tân Hòa", 
  "Cư M'gar", "Ea Kiết", "Ea Kuêh", "Ea Tul", "Ea Tar", "Quảng Hiệp", "Quảng Tiến", "Ea Drơng", 
  "Krông Búk", "Cư Né", "Ea Sin", "Ea Ngai", "Chư Kbô", 
  "Krông Pắk", "Ea Kly", "Ea Phê", "Ea Yông", "Ea Uy", "Ea Kênh", "Hòa An", "Hòa Tiến", "Vụ Bổn", 
  "Ea Kar", "Ea Đar", "Ea Kmút", "Ea Ô", "Ea Sar", "Cư Ni", 
  "M’Đrắk", "Krông Jing", "Cư Prao", "Ea Pil", "Ea Riêng", 
  "Krông Ana", "Buôn Trấp", "Ea Bông", "Ea Na", "Dray Sáp", "Bình Hòa", "Dur Kmăl", 
  "Lắk", "Liên Sơn", "Đắk Liêng", "Đắk Phơi", "Bông Krang", "Krông Nô", 
  "Krông Bông", "Hòa Sơn", "Cư Drăm", "Yang Mao", "Hòa Lễ", "Dang Kang", "Cư Kty", 
  "Ea H’Leo", "Ea Hiao", "Ea Khal", "Ea Sol", "Ea Nam", "Ea Tir", "Ea Wy", "Ea Ral", 
  "Krông Năng", "Ea Hồ", "Phú Xuân", "Ea Tân", "Ea Toh", "Dliê Ya", "Tam Giang", "Cư Klông", "Ea Púk", "Ea Trang"
];

export function slugify(text: string) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a")
    .replace(/[èéẹẻẽêềếệểễ]/g, "e")
    .replace(/[ìíịỉĩ]/g, "i")
    .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o")
    .replace(/[ùúụủũưừứựửữ]/g, "u")
    .replace(/[ỳýỵỷỹ]/g, "y")
    .replace(/đ/g, "d")
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
