export type ArticleSection = {
  q: string;
  a: string;
  detail: string;
};

export type LocationArticleContent = {
  intro: ArticleSection;
  packages: ArticleSection;
  whyChoose: ArticleSection;
  businessSupport: ArticleSection;
  posSoftware: ArticleSection;
  caInvoice: ArticleSection;
  bizReg: ArticleSection;
  eContract: ArticleSection;
  process: ArticleSection;
};

export function generateArticleContent(locationName: string): LocationArticleContent {
  // Simple seeded random function
  let seed = 0;
  for (let i = 0; i < locationName.length; i++) {
    seed += locationName.charCodeAt(i);
  }
  
  function random() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }

  const pick = <T,>(arr: T[]): T => {
    if (arr.length === 0) {
      throw new Error('Cannot pick from an empty array');
    }
    const index = Math.floor(random() * arr.length);
    return arr[index]!;
  };
  
  // Determine if it's a commune (xã) or town/city
  const isCommune = locationName.toLowerCase().includes('ea') || 
                   locationName.toLowerCase().includes('krông') || 
                   locationName.toLowerCase().includes('hòa') ||
                   locationName.toLowerCase().includes('tân') ||
                   !["Buôn Ma Thuột", "Buôn Hồ"].includes(locationName);

  const locationType = isCommune ? "xã" : "khu vực";

  const intros = [
    {
      q: `Lắp mạng Viettel tại ${locationType} ${locationName} năm 2026 có ưu đãi gì?`,
      a: `Năm 2026, Viettel Đắk Lắk triển khai hạ tầng quang hóa 100% tại ${locationName}. Giá cước siêu rẻ chỉ từ 195.000đ/tháng, phí lắp đặt 300.000đ, miễn phí modem Wifi 6 thế hệ mới và hỗ trợ lắp đặt nhanh trong ngày.`,
      detail: `Chào mừng bà con và quý khách hàng tại ${locationName}. Với mục tiêu phổ cập internet tốc độ cao đến từng thôn buôn, Viettel đã hoàn tất nâng cấp hạ tầng băng rộng tại địa phương. Hiện nay, việc sở hữu một đường truyền <a href="/internet-viettel">Internet Viettel</a> ổn định để con em học tập, người dân giải trí và kinh doanh đã trở nên dễ dàng hơn bao giờ hết với sự hỗ trợ tận tình từ đội ngũ Nhân Viên Viettel địa bàn.`
    },
    {
      q: `Tại sao bà con ${locationName} nên chọn lắp Internet Viettel?`,
      a: `Viettel là nhà mạng có vùng phủ sóng rộng nhất tại ${locationName}, cam kết tốc độ ổn định ngay cả trong giờ cao điểm. Chỉ từ 195.000đ, phí lắp đặt 300.000đ, bà con được tận hưởng mạng siêu tốc, trang bị modem Wifi 6 và bảo trì trọn đời.`,
      detail: `Trong bối cảnh chuyển đổi số mạnh mẽ tại Đắk Lắk, ${locationName} đang thay đổi từng ngày. Viettel tự hào là đơn vị tiên phong mang công nghệ Wifi 6 hiện đại về tận ${locationType}. Chúng tôi không chỉ bán dịch vụ, mà còn mang đến giải pháp kết nối bền vững, giúp bà con tiếp cận kho tàng kiến thức và cơ hội kinh doanh trực tuyến một cách hiệu quả nhất.`
    },
    {
      q: `Dịch vụ Internet Viettel tại ${locationName} có gì mới trong năm 2026?`,
      a: `Viettel đã chính thức nâng cấp băng thông lên đến 1Gbps tại ${locationName}. Với giá chỉ từ 195.000đ, khách hàng được trải nghiệm công nghệ Wifi 6 xuyên tường, hỗ trợ học tập và làm việc từ xa mượt mà.`,
      detail: `Hạ tầng viễn thông tại ${locationName} đã có bước nhảy vọt trong năm 2026. Viettel Đắk Lắk cam kết mang đến trải nghiệm internet không giới hạn cho mọi gia đình. Dù bạn ở trung tâm hay các thôn xa, đội ngũ kỹ thuật của chúng tôi luôn sẵn sàng phục vụ với tiêu chuẩn chất lượng cao nhất.`
    }
  ];

  const packages = [
    {
      q: `Gói cước Internet Viettel nào rẻ nhất tại ${locationName}?`,
      a: `Gói cước rẻ nhất hiện nay tại ${locationName} là 195.000đ/tháng cho tốc độ 300Mbps. Phí lắp đặt là 300.000đ. Nếu gia đình có nhu cầu dùng nhiều thiết bị hoặc nhà tầng, bà con nên chọn gói Mesh Wifi để sóng khỏe mọi ngóc ngách.`,
      detail: `Viettel thiết kế các gói cước linh hoạt cho bà con tại ${locationName}. Gói cơ bản 195k đáp ứng tốt nhu cầu xem Youtube, lướt Facebook và học online. Với các hộ kinh doanh hoặc gia đình đông người, các gói <a href="/wifi-solution">Wifi Mesh</a> sẽ là lựa chọn tuyệt vời để đảm bảo sóng xuyên tường, không lo giật lag khi di chuyển giữa các phòng.`
    },
    {
      q: `Bảng giá lắp mạng Viettel mới nhất 2026 tại ${locationName}?`,
      a: `Giá cước tại ${locationName} dao động từ 195.000đ đến 350.000đ tùy gói cước. Gói Combo Internet + Truyền hình TV360 chỉ từ 215.000đ, tặng kèm đầu thu 4K và miễn phí modem Wifi 6.`,
      detail: `Chúng tôi luôn nỗ lực mang lại giá trị tốt nhất cho khách hàng tại ${locationName}. Các gói cước năm 2026 không chỉ nhanh hơn mà còn ổn định hơn nhờ công nghệ quang hóa hiện đại. Bà con có thể dễ dàng lựa chọn gói cước phù hợp với túi tiền và nhu cầu sử dụng của gia đình mình.`
    }
  ];

  const whyChoose = [
    {
      q: `Lắp mạng Viettel tại ${locationName} có nhanh không?`,
      a: `Cực kỳ nhanh chóng! Chỉ cần gọi hotline 0989113602, Nhân Viên Viettel sẽ có mặt khảo sát và lắp đặt hoàn thiện trong vòng 24h. Chúng tôi cam kết làm việc cả thứ 7 và Chủ nhật để phục vụ bà con.`,
      detail: `Điểm khác biệt của Viettel tại ${locationName} chính là sự tận tâm. Đội ngũ kỹ thuật viên là những người am hiểu địa bàn, luôn túc trực để hỗ trợ bà con nhanh nhất. Từ khâu tư vấn đến khi kéo dây, cài đặt modem, mọi thứ đều được thực hiện chuyên nghiệp, gọn gàng. Đặc biệt, hotline <strong>0989113602</strong> luôn sẵn sàng giải đáp mọi thắc mắc của quý khách.`
    },
    {
      q: `Chế độ bảo hành, sửa chữa mạng Viettel tại ${locationName} như thế nào?`,
      a: `Viettel cam kết bảo trì trọn đời dịch vụ tại ${locationName}. Khi gặp sự cố, bà con chỉ cần báo qua ứng dụng My Viettel hoặc gọi tổng đài, kỹ thuật viên sẽ có mặt xử lý trong vòng 2 giờ làm việc.`,
      detail: `Sự an tâm của khách hàng là ưu tiên hàng đầu của Viettel Đắk Lắk. Tại ${locationName}, chúng tôi có đội ngũ ứng cứu thông tin chuyên trách, đảm bảo đường truyền luôn thông suốt 24/7. Bà con hoàn toàn có thể yên tâm sử dụng dịch vụ mà không lo gián đoạn công việc hay giải trí.`
    }
  ];

  const businessSupport = [
    {
      q: `Hộ kinh doanh tại ${locationName} cần những dịch vụ số nào?`,
      a: `Để kinh doanh hiệu quả năm 2026, các hộ kinh doanh tại ${locationName} nên trang bị: Internet tốc độ cao, Phần mềm bán hàng vPOS và Hóa đơn điện tử. Viettel hỗ trợ trọn gói chỉ từ vài ngàn đồng mỗi ngày.`,
      detail: `Viettel Đắk Lắk thấu hiểu những khó khăn của các chủ cửa hàng, quán xá tại ${locationName}. Chúng tôi mang đến bộ giải pháp số hóa toàn diện, giúp bà con quản lý doanh thu chặt chẽ, xuất hóa đơn nhanh chóng và chuyên nghiệp hóa quy trình bán hàng thông qua các dịch vụ <a href="/e-invoice">Hóa đơn điện tử</a> và <a href="/pos-software">Phần mềm quản lý</a>.`
    }
  ];

  const posSoftware = [
    {
      q: `Phần mềm bán hàng Viettel giúp gì cho chủ quán tại ${locationName}?`,
      a: `Giúp quản lý kho, tính tiền nhanh, in hóa đơn và báo cáo doanh thu ngay trên điện thoại. Đặc biệt, phần mềm tích hợp sẵn hóa đơn điện tử máy tính tiền theo đúng quy định mới nhất của ngành Thuế.`,
      detail: `Với <a href="/pos-software">phần mềm bán hàng Viettel</a>, các chủ quán tại ${locationName} không còn lo lắng về việc thất thoát hàng hóa hay sai sót khi tính tiền. Giao diện tiếng Việt dễ dùng, hỗ trợ cả những người không rành công nghệ. Đây là bước đệm quan trọng để các hộ kinh doanh tại địa phương bứt phá doanh thu trong năm 2026.`
    }
  ];

  const caInvoice = [
    {
      q: `Doanh nghiệp mới tại ${locationName} đăng ký Chữ ký số ở đâu?`,
      a: `Quý khách chỉ cần liên hệ hotline 0989113602. Nhân Viên Viettel sẽ hỗ trợ làm thủ tục tận nơi tại ${locationName}, bàn giao USB Token và hướng dẫn ký thuế, BHXH ngay trong ngày.`,
      detail: `Dịch vụ <a href="/digital-signature">Chữ ký số Viettel-CA</a> là lựa chọn hàng đầu của các doanh nghiệp tại ${locationName} nhờ tính bảo mật cao và sự hỗ trợ kịp thời. Kết hợp cùng <a href="/e-invoice">Hóa đơn điện tử S-Invoice</a>, doanh nghiệp sẽ hoàn toàn yên tâm trong các giao dịch điện tử và kê khai pháp lý với cơ quan nhà nước.`
    }
  ];

  const bizReg = [
    {
      q: `Chi phí thành lập doanh nghiệp trọn gói tại ${locationName} là bao nhiêu?`,
      a: `Viettel cung cấp gói hỗ trợ khởi nghiệp trọn gói tại ${locationName} với chi phí cực kỳ cạnh tranh. Bao gồm tất cả thủ tục pháp lý, con dấu và các công cụ số cần thiết để doanh nghiệp đi vào hoạt động ngay.`,
      detail: `Khởi nghiệp tại ${locationName} chưa bao giờ dễ dàng đến thế. Với dịch vụ <a href="/business-registration">thành lập doanh nghiệp</a> của Viettel, quý khách sẽ được tư vấn chuyên sâu về luật doanh nghiệp, hỗ trợ soạn thảo hồ sơ và nhận kết quả tận tay, giúp tiết kiệm thời gian và tránh các rủi ro pháp lý không đáng có.`
    }
  ];

  const eContract = [
    {
      q: `Tại sao doanh nghiệp ${locationName} nên dùng Hợp đồng điện tử?`,
      a: `Giúp ký kết với đối tác ở xa tức thì, không mất phí chuyển phát, lưu trữ an toàn và có giá trị pháp lý tuyệt đối. vContract là xu hướng tất yếu của doanh nghiệp hiện đại năm 2026.`,
      detail: `<a href="/e-contract">Hợp đồng điện tử vContract</a> giúp các đơn vị tại ${locationName} tối ưu hóa quy trình ký kết. Không còn cảnh chờ đợi chuyển phát nhanh hay lo lắng thất lạc giấy tờ. Mọi giao dịch đều được thực hiện minh bạch, an toàn trên nền tảng số của Viettel.`
    }
  ];

  const process = [
    {
      q: `Làm sao để đăng ký dịch vụ Viettel tại ${locationName} nhanh nhất?`,
      a: `Bà con chỉ cần gọi 0989113602. Nhân Viên Viettel sẽ tư vấn, khảo sát và làm hợp đồng điện tử ngay tại chỗ. Lắp đặt hoàn thiện và bàn giao dịch vụ chỉ trong vòng 24 giờ.`,
      detail: `Quy trình phục vụ tại ${locationName} được tối giản hóa để tiết kiệm thời gian cho bà con. Chỉ với một cuộc gọi đến hotline <strong>0989113602</strong>, mọi yêu cầu về Internet, truyền hình hay giải pháp số đều được tiếp nhận và xử lý siêu tốc. Viettel cam kết mang lại sự hài lòng cao nhất cho mỗi khách hàng tại địa phương.`
    }
  ];

  return {
    intro: pick(intros),
    packages: pick(packages),
    whyChoose: pick(whyChoose),
    businessSupport: pick(businessSupport),
    posSoftware: pick(posSoftware),
    caInvoice: pick(caInvoice),
    bizReg: pick(bizReg),
    eContract: pick(eContract),
    process: pick(process)
  };
}
