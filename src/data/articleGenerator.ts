export function generateArticleContent(locationName: string) {
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

  const pick = (arr: string[]) => arr[Math.floor(random() * arr.length)];

  const intros = [
    `Nằm trong định hướng phát triển hạ tầng số tại Đắk Lắk, Viettel tự hào mang đến dịch vụ viễn thông và giải pháp doanh nghiệp toàn diện tại ${locationName}. Với sứ mệnh đồng hành cùng người dân và hộ kinh doanh địa phương, chúng tôi cam kết cung cấp đường truyền Internet cáp quang tốc độ cao, ổn định cùng hệ sinh thái dịch vụ số đa dạng, đáp ứng mọi nhu cầu học tập, làm việc và giải trí.`,
    `${locationName} đang trên đà phát triển mạnh mẽ về kinh tế và xã hội. Nắm bắt nhu cầu chuyển đổi số ngày càng cao, Viettel Đắk Lắk đã đầu tư mạnh mẽ vào hạ tầng mạng lưới tại khu vực này. Khách hàng tại ${locationName} giờ đây có thể dễ dàng tiếp cận các dịch vụ Internet siêu tốc, truyền hình thông minh và các giải pháp quản lý bán hàng hiện đại nhất với chi phí vô cùng hợp lý.`,
    `Bạn đang sinh sống và làm việc tại ${locationName}? Bạn cần một đường truyền mạng ổn định để học tập, giải trí hay các phần mềm hỗ trợ kinh doanh hiệu quả? Viettel chính là sự lựa chọn hàng đầu. Chúng tôi cung cấp dịch vụ lắp đặt Internet cáp quang siêu tốc và các giải pháp số hóa doanh nghiệp chuyên nghiệp ngay tại ${locationName}, hỗ trợ triển khai nhanh chóng trong 24h, mang công nghệ đến từng ngõ ngách.`
  ];

  const packages = [
    `Tại ${locationName}, Viettel cung cấp đa dạng các gói cước Internet cáp quang từ cơ bản đến nâng cao, phù hợp với từng đối tượng khách hàng. Từ gói cước dành cho cá nhân, sinh viên với chi phí tiết kiệm, đến các gói cước tốc độ cao tích hợp công nghệ Wifi 6 dành cho hộ gia đình nhiều thiết bị, quán cafe hay doanh nghiệp lớn. Khách hàng đăng ký mới còn được trang bị miễn phí modem 2 băng tần và tặng thêm tháng cước khi thanh toán trước.`,
    `Hiểu được nhu cầu đa dạng của người dân ${locationName}, Viettel đã thiết kế các gói cước Internet và Combo Internet + Truyền hình linh hoạt. Chỉ với một khoản chi phí nhỏ mỗi tháng, gia đình bạn đã có thể sở hữu đường truyền cáp quang hàng trăm Mbps cùng hàng trăm kênh truyền hình đặc sắc trên TV360. Đặc biệt, các gói cước dành cho doanh nghiệp tại ${locationName} luôn được cam kết băng thông quốc tế và cấp IP tĩnh miễn phí.`,
    `Hệ thống gói cước Internet Viettel tại ${locationName} được tối ưu hóa để mang lại trải nghiệm tốt nhất với mức giá cạnh tranh nhất. Dù bạn chỉ lướt web, xem phim hay cần đường truyền chuyên biệt cho livestream, chơi game trực tuyến, Viettel đều có gói cước đáp ứng hoàn hảo. Hơn nữa, chúng tôi liên tục nâng cấp băng thông miễn phí cho khách hàng cũ tại ${locationName}, khẳng định chất lượng dịch vụ vượt trội.`
  ];

  const whyChoose = [
    `Lựa chọn lắp đặt mạng Viettel tại ${locationName}, quý khách hàng sẽ được trải nghiệm đường truyền cáp quang công nghệ mới nhất (GPON/Wifi 6), đảm bảo tốc độ cao và không bị nhiễu sóng. Đội ngũ kỹ thuật viên của chúng tôi am hiểu địa bàn ${locationName}, luôn sẵn sàng hỗ trợ xử lý sự cố 24/7. Hơn thế nữa, thủ tục đăng ký vô cùng đơn giản, triển khai lắp đặt siêu tốc chỉ trong vòng 24 giờ kể từ khi tiếp nhận yêu cầu.`,
    `Viettel luôn khẳng định vị thế nhà mạng số 1 với vùng phủ sóng rộng khắp. Tại ${locationName}, hạ tầng cáp quang Viettel đã được ngầm hóa và nâng cấp đồng bộ, hạn chế tối đa ảnh hưởng của thời tiết. Khách hàng không chỉ được tận hưởng Internet mượt mà để xem phim 4K, chơi game online không lag, mà còn nhận được vô vàn ưu đãi như tặng modem Wifi, miễn phí hòa mạng khi đóng trước cước. Sự hài lòng của người dân ${locationName} là ưu tiên hàng đầu của chúng tôi.`,
    `Chất lượng dịch vụ và chăm sóc khách hàng tận tâm là lý do hàng ngàn hộ gia đình tại ${locationName} tin dùng Viettel. Đường truyền cáp quang Viettel sử dụng công nghệ tiên tiến, băng thông quốc tế lớn, đáp ứng hoàn hảo mọi nhu cầu từ cơ bản đến nâng cao. Đặc biệt, hệ thống cửa hàng và nhân viên địa bàn tại ${locationName} luôn túc trực để giải đáp và hỗ trợ khách hàng nhanh nhất, mang lại sự an tâm tuyệt đối trong suốt quá trình sử dụng.`
  ];

  const businessSupport = [
    `Không chỉ dừng lại ở dịch vụ Internet, Viettel còn là đối tác tin cậy của các hộ kinh doanh và doanh nghiệp tại ${locationName}. Chúng tôi cung cấp một hệ sinh thái số hoàn chỉnh, giúp tối ưu hóa quy trình vận hành, tiết kiệm chi phí và nâng cao năng lực cạnh tranh trong thời đại công nghệ 4.0.`,
    `Đối với các cửa hàng, đại lý và công ty đang hoạt động tại ${locationName}, việc ứng dụng công nghệ vào quản lý là yếu tố sống còn. Viettel mang đến bộ giải pháp toàn diện từ phần mềm quản lý bán hàng, chữ ký số, hóa đơn điện tử cho đến dịch vụ hỗ trợ thành lập doanh nghiệp, giúp quá trình kinh doanh trở nên dễ dàng và chuyên nghiệp hơn bao giờ hết.`,
    `Nhằm thúc đẩy chuyển đổi số cho khối doanh nghiệp vừa và nhỏ tại ${locationName}, Viettel đã thiết kế các gói giải pháp tích hợp siêu tiết kiệm. Từ việc quản lý doanh thu hàng ngày bằng phần mềm thông minh, đến việc ký kết hợp đồng từ xa hay xuất hóa đơn điện tử chuẩn Tổng cục Thuế, mọi thứ đều được Viettel hỗ trợ trọn gói và đồng bộ.`
  ];

  const posSoftware = [
    `Phần mềm quản lý bán hàng vPOS của Viettel là trợ thủ đắc lực cho các cửa hàng tạp hóa, siêu thị mini, quán cafe, nhà hàng tại ${locationName}. Với giao diện trực quan, dễ sử dụng trên cả điện thoại và máy tính, vPOS giúp chủ quán kiểm soát doanh thu, quản lý kho hàng, in hóa đơn nhanh chóng và theo dõi báo cáo chi tiết mọi lúc mọi nơi, chống thất thoát hiệu quả.`,
    `Dành riêng cho các hộ kinh doanh bán lẻ tại ${locationName}, phần mềm bán hàng Viettel mang đến trải nghiệm quản lý chuyên nghiệp. Tích hợp sẵn tính năng quét mã vạch, thanh toán QR động và đồng bộ với các thiết bị phần cứng như máy in bill, ngăn kéo đựng tiền. Việc kiểm kho, quản lý nhân viên và chăm sóc khách hàng trở nên đơn giản hơn bao giờ hết.`,
    `Giải pháp quản lý bán hàng đa kênh từ Viettel giúp các chủ shop tại ${locationName} bứt phá doanh thu. Không chỉ bán hàng tại quầy, phần mềm còn hỗ trợ quản lý đơn hàng online, tích hợp vận chuyển và báo cáo lãi lỗ tự động. Chỉ với vài thao tác cơ bản, bạn đã có thể nắm bắt toàn bộ tình hình kinh doanh của cửa hàng một cách chính xác nhất.`
  ];

  const caInvoice = [
    `Chữ ký số (Viettel-CA) và Hóa đơn điện tử (S-Invoice) là bộ đôi giải pháp không thể thiếu cho mọi doanh nghiệp tại ${locationName}. Viettel-CA đảm bảo tính pháp lý, an toàn tuyệt đối cho các giao dịch điện tử, kê khai thuế, hải quan, BHXH. Trong khi đó, S-Invoice giúp doanh nghiệp phát hành, lưu trữ và quản lý hóa đơn nhanh chóng, tiết kiệm 80% chi phí in ấn và vận chuyển so với hóa đơn giấy.`,
    `Viettel tự hào cung cấp dịch vụ Chữ ký số và Hóa đơn điện tử chuẩn quy định của Bộ Tài chính và Tổng cục Thuế cho các doanh nghiệp tại ${locationName}. Hệ thống bảo mật đa lớp RSA 2048-bit của Viettel-CA bảo vệ an toàn dữ liệu tuyệt đối. Hóa đơn điện tử S-Invoice tích hợp dễ dàng với các phần mềm kế toán, bán hàng, giúp quá trình xuất hóa đơn diễn ra tự động và chính xác.`,
    `Đồng hành cùng doanh nghiệp ${locationName} trong công cuộc chuyển đổi số, Viettel mang đến gói giải pháp Chữ ký số và Hóa đơn điện tử với mức giá ưu đãi nhất. Khách hàng được hỗ trợ cài đặt tận nơi, hướng dẫn sử dụng chi tiết và bảo hành thiết bị USB Token trọn đời. Hệ thống lưu trữ hóa đơn an toàn trên nền tảng Cloud của Viettel đảm bảo dữ liệu không bao giờ bị mất mát.`
  ];

  const bizReg = [
    `Bạn đang ấp ủ ý tưởng kinh doanh và muốn thành lập công ty tại ${locationName}? Dịch vụ hỗ trợ thành lập doanh nghiệp trọn gói của Viettel sẽ giúp bạn khởi sự nhanh chóng. Chúng tôi tư vấn miễn phí về loại hình doanh nghiệp, ngành nghề kinh doanh, vốn điều lệ và thay mặt khách hàng hoàn tất mọi thủ tục pháp lý với cơ quan nhà nước, giúp bạn tiết kiệm tối đa thời gian và công sức.`,
    `Khởi nghiệp tại ${locationName} trở nên dễ dàng hơn với dịch vụ thành lập doanh nghiệp từ Viettel. Đội ngũ chuyên viên pháp lý giàu kinh nghiệm của chúng tôi sẽ đồng hành cùng bạn từ khâu soạn thảo hồ sơ, nộp lên Sở Kế hoạch và Đầu tư, cho đến khi nhận Giấy chứng nhận đăng ký doanh nghiệp và con dấu. Bạn chỉ cần tập trung vào chiến lược kinh doanh, mọi thủ tục hành chính đã có Viettel lo.`,
    `Viettel cung cấp gói dịch vụ "All-in-one" cho các startup và hộ kinh doanh muốn lên doanh nghiệp tại ${locationName}. Không chỉ hoàn thiện thủ tục thành lập công ty nhanh chóng, chúng tôi còn tư vấn và cung cấp đồng bộ các dịch vụ thiết yếu sau thành lập như: Chữ ký số, Hóa đơn điện tử, Phần mềm kế toán, Mở tài khoản ngân hàng, giúp doanh nghiệp sẵn sàng đi vào hoạt động hợp pháp ngay lập tức.`
  ];

  const eContract = [
    `Hợp đồng điện tử vContract của Viettel là giải pháp đột phá giúp các doanh nghiệp tại ${locationName} ký kết tài liệu thương mại, lao động mọi lúc, mọi nơi trên mọi thiết bị (máy tính, điện thoại, tablet). Không cần in ấn, không cần chuyển phát, vContract tiết kiệm 90% thời gian và chi phí ký kết, đồng thời đảm bảo giá trị pháp lý tương đương hợp đồng giấy truyền thống.`,
    `Trong bối cảnh kinh doanh không biên giới, Hợp đồng điện tử Viettel (vContract) giúp các công ty tại ${locationName} dễ dàng giao thương với đối tác khắp mọi nơi. Hệ thống hỗ trợ đa dạng phương thức ký (ký số USB Token, ký số từ xa, ký OTP), quản lý luồng trình ký thông minh và lưu trữ an toàn trên hạ tầng Cloud chuẩn quốc tế, chống giả mạo và chối bỏ trách nhiệm.`,
    `Viettel vContract mang đến quy trình ký kết không giấy tờ chuyên nghiệp cho các tổ chức tại ${locationName}. Từ hợp đồng mua bán, hợp đồng lao động đến các biên bản nghiệm thu, tất cả đều được số hóa và ký kết điện tử nhanh chóng. Giải pháp này không chỉ nâng cao hiệu suất làm việc mà còn thể hiện sự tiên phong trong ứng dụng công nghệ của doanh nghiệp bạn.`
  ];

  const process = [
    `Quy trình đăng ký lắp đặt mạng Internet và các dịch vụ Viettel tại ${locationName} vô cùng đơn giản và nhanh chóng. Bước 1: Khách hàng liên hệ Hotline 0989113602 hoặc để lại thông tin trên website. Bước 2: Nhân viên Viettel địa bàn ${locationName} sẽ gọi lại tư vấn gói cước phù hợp và khảo sát hạ tầng thực tế. Bước 3: Tiến hành ký kết hợp đồng (hỗ trợ ký điện tử hoặc tại nhà). Bước 4: Kỹ thuật viên triển khai lắp đặt, cài đặt thiết bị và hướng dẫn sử dụng trong vòng 24h.`,
    `Để đăng ký các dịch vụ của Viettel tại ${locationName}, quý khách chỉ cần thực hiện 4 bước cơ bản. Đầu tiên, gọi ngay đến số 0989113602 để yêu cầu tư vấn. Tiếp theo, chuyên viên của chúng tôi sẽ kiểm tra hạ tầng cáp quang tại khu vực nhà bạn ở ${locationName} và đề xuất phương án tối ưu. Sau khi thống nhất gói cước, hợp đồng sẽ được tạo lập nhanh chóng. Cuối cùng, đội ngũ kỹ thuật sẽ đến tận nơi thi công, nghiệm thu và bàn giao dịch vụ ngay trong ngày.`,
    `Viettel cam kết mang đến trải nghiệm đăng ký dịch vụ thuận tiện nhất cho khách hàng tại ${locationName}. Chỉ với một cuộc gọi đến Hotline 0989113602, mọi nhu cầu từ lắp Internet, truyền hình đến mua phần mềm, chữ ký số đều được tiếp nhận. Chúng tôi hỗ trợ khảo sát và làm hợp đồng tận nhà hoặc online. Quá trình triển khai kỹ thuật được thực hiện chuyên nghiệp, gọn gàng, đảm bảo mỹ quan và hoàn tất nhanh chóng trong 24 giờ làm việc.`
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
