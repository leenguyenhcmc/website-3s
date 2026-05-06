/* Shared header + footer injected on every page.
   Pages set <body data-active-nav="solutions|industries|ecosystem|insights|about|contact"> to highlight current section. */
(function(){
  const active = document.body.dataset.activeNav || '';
  const pageRoot = document.body.dataset.root || '';

  const i18n = {
    vi: {
      solutions: 'Giải pháp',
      industries: 'Ngành hàng',
      ecosystem: 'Hệ sinh thái',
      insights: 'Insights',
      about: 'Về 3S',
      contact: 'Liên hệ',
      tagline: 'Secured Supply',
      footerBlurb: '3S cung cấp mô hình CxO as a Service. Lãnh đạo chuyên môn thuê ngoài — không cần tuyển dụng, bắt đầu tạo giá trị ngay từ 12 ngày đầu.',
      copy: '© 2026 3S TechCoop. Secured Supply. Zero Surprises.',
      privacy: 'Quyền riêng tư',
      terms: 'Điều khoản',
      sitemap: 'Sơ đồ trang',
      phone: '0933 48 28 38',
      // Homepage
      hero_pill: '<span class="tdot"></span><span><strong>TechCoop × 3S</strong> · Đối tác chiến lược</span><span class="vline"></span><span>Chuyển đổi toàn diện chuỗi cung ứng nông sản</span>',
      hero_h1: 'Biến chiến lược thành hành động —<br>tăng trưởng <span class="accent">bền vững</span> cho doanh nghiệp nông nghiệp xuất khẩu.',
      hero_lede: 'Mô hình <strong style="color:#fff">CxO as a Service</strong>. Lãnh đạo chuyên môn thuê ngoài — không cần tuyển dụng. Quản trị chuỗi cung ứng từ nông trại đến bàn ăn. Tạo giá trị ngay từ <strong style="color:#fff">12 ngày làm việc đầu tiên</strong>.',
      hero_btn_growth: 'Hành trình tăng trưởng',
      hero_btn_arch: 'Kiến trúc chuỗi cung ứng',
      stat_industries: '8 <em>ngành hàng</em>',
      stat_industries_lbl: 'Nông sản XK chủ lực',
      stat_partners: '20+',
      stat_partners_lbl: 'Doanh nghiệp đồng hành',
      stat_value_days: '12<em>d</em>',
      stat_value_days_lbl: 'Tạo giá trị từ ngày đầu',
      stat_nps_lbl: 'NPS từ lộ trình đầu',
      trusted_label: 'Được tin tưởng bởi',
      roles_eyebrow: 'Mô hình nhân sự',
      roles_h2: 'Một đội ngũ lãnh đạo. Năm trụ cột chuyên môn.',
      roles_lede: 'Doanh nghiệp chỉ trả chi phí cho kết quả thực tế — không trả chi phí nhân sự cố định. CxO chuyên môn được điều phối theo nhu cầu từng giai đoạn.',
      // Roles Common
      role_cmo_h: 'Thị trường xuất khẩu',
      role_cmo_p: 'Đa dạng hoá kênh khách hàng. Vào EU, Bắc Mỹ, Nhật, Hàn — không phụ thuộc một thị trường.',
      role_cpo_h: 'Nhà máy & sản phẩm',
      role_cpo_p: 'Vận hành sản xuất theo chuẩn HACCP/BRC. Phát triển dòng giá trị gia tăng.',
      role_cfo_h: 'Tài chính',
      role_cfo_p: 'Cấu trúc vốn, dòng tiền. Tiếp cận tín dụng XK, bảo hiểm tỷ giá, quản trị rủi ro.',
      role_cto_h: 'Chuyển đổi số',
      role_cto_p: 'ERP, traceability, IoT nhà máy. Số hoá vùng nguyên liệu — sẵn sàng EUDR.',
      role_cdo_h: 'Kế thừa & tổ chức',
      role_cdo_p: 'Chuyển giao thế hệ. Xây bộ máy quản trị, ESOP, văn hoá doanh nghiệp gia đình.',
      // Role details
      cmo_h1: 'CMO — <span class="accent">Thị trường & Doanh thu.</span>',
      cmo_lede: 'Xây dựng thương hiệu quốc tế, mở rộng kênh phân phối và tối ưu hoá chi phí marketing cho doanh nghiệp nông sản.',
      cpo_h1: 'CPO — <span class="accent">Nhà máy & Sản phẩm.</span>',
      cpo_lede: 'Vận hành sản xuất theo chuẩn HACCP/BRC. Tối ưu hoá tỷ lệ thu hồi và phát triển dòng giá trị gia tăng.',
      cfo_h1: 'CFO — <span class="accent">Tài chính & Dòng tiền.</span>',
      cfo_lede: 'Cấu trúc lại vốn, quản trị dòng tiền chuỗi cung ứng và tiếp cận nguồn vốn quốc tế chi phí thấp.',
      cto_h1: 'CTO — <span class="accent">Công nghệ & Dữ liệu.</span>',
      cto_lede: 'Chuyển đổi số toàn diện từ ERP nhà máy đến truy xuất nguồn gốc vùng nuôi/trồng. Sẵn sàng cho EUDR.',
      cdo_h1: 'CDO — <span class="accent">Kế thừa & Tổ chức.</span>',
      cdo_lede: 'Xây dựng đội ngũ kế cận, family governance và văn hoá doanh nghiệp bền vững cho các SME nông sản.',
      // Industries Section
      ind_eyebrow: 'Theo ngành hàng',
      ind_h2: 'Giải pháp đóng gói theo từng ngành — không generic.',
      ind_lede: 'Mỗi chuỗi giá trị có đặc thù về mùa vụ, chuẩn chất lượng và thị trường XK. 3S thiết kế giải pháp riêng cho từng ngành.',
      ind_task_title: 'Nhiệm vụ của POM',
      ind_result_title: 'Kết quả đạt được',
      ind_eff_title: 'Đạt hiệu quả',
      ind_eff_desc: 'Đề xuất phát triển<br>trong ngành chế biến',
      ind_task_ceo: '<strong>CEO —</strong> Giám sát dự án và mục tiêu doanh thu',
      ind_task_cfo: '<strong>CFO —</strong> Lên kế hoạch tài chính & vốn lưu động',
      ind_task_cto: '<strong>CTO —</strong> Triển khai ERP, CRM, traceability',
      ind_task_cgo: '<strong>CGO —</strong> Mở rộng thị trường XK Châu Á',
      ind_res_kpi: 'KPIs đo lường',
      ind_res_roi: 'ROI rõ ràng',
      ind_res_speed: 'Tăng tốc độ',
      ind_res_waste: 'Cắt giảm hao hụt',
      tab_cashew: 'Cây điều',
      tab_coffee: 'Cà phê',
      tab_durian: 'Sầu riêng',
      tab_rice: 'Gạo / Lúa nước',
      tab_pepper: 'Hồ tiêu / Quế hồi',
      tab_passion: 'Chanh dây',
      tab_fish: 'Thuỷ sản',
      tab_cassava: 'Mì lát',
      // Roadmap
      road_eyebrow: 'Lộ trình hợp tác',
      road_h2: 'Bắt đầu từ đâu cũng được — quan trọng là đúng chỗ.',
      road_lede: 'Lộ trình phân tầng. Mỗi bước là một điểm chạm có thể đo được. Doanh nghiệp uỷ quyền tối đa cho ban lãnh đạo 3S theo phạm vi đã cam kết.',
      road_form_lbl: 'Doanh nghiệp bạn đang ở đâu?',
      road_form_btn: 'Gửi yêu cầu',
      step_1_h: 'Khám phá',
      step_1_p: 'Từ vấn đề tới lợi ích & hành động — Data research',
      step_2_h: 'Phân tích',
      step_2_p: 'Đội ngũ chuyên gia — cấu trúc lại quy trình',
      step_3_h: 'Thực thi',
      step_3_p: 'Kế hoạch chi tiết — kịch bản — demo',
      step_4_h: 'Vận hành',
      step_4_p: 'Thực thi → đánh giá → cải tiến liên tục',
      step_5_h: 'Bàn giao',
      step_5_p: 'Hỗ trợ — đào tạo nhóm — quy trình hiện tại',
      // Contact Form
      cont_eyebrow: 'Liên hệ',
      cont_h2: 'Sẵn sàng tăng trưởng?<br>Hãy bắt đầu bằng một cuộc trò chuyện.',
      cont_desc: 'Đội ngũ CxO 3S sẽ giúp bạn nhìn nhận mọi rủi ro tài chính và vận hành — trước khi chúng phát sinh.',
      cont_form_btn: 'Gửi yêu cầu tư vấn',
      form_name: 'Họ và tên *',
      form_email: 'Email *',
      form_company: 'Tên doanh nghiệp *',
      form_role: 'Vai trò',
      form_ind: 'Ngành hàng',
      form_revenue: 'Quy mô doanh thu',
      form_cxo: 'CxO bạn quan tâm',
      form_msg: 'Mô tả ngắn nhu cầu',
      form_msg_ph: 'VD: Chúng tôi đang cần chuẩn bị EUDR cho lô cà phê XK sang Đức...',
      form_submit: 'Gửi yêu cầu diagnostic',
      form_note: 'Thông tin của bạn được bảo mật — chỉ dùng để tư vấn.',
      // Industry Pages Common
      ind_home: 'Trang chủ',
      ind_inds: 'Ngành hàng',
      ind_fact_title: 'Số liệu ngành',
      ind_fact_blurb: 'Thống kê tổng hợp từ Tổng cục Hải quan, Hiệp hội ngành, MARD và đối tác hệ sinh thái 3S.',
      ind_chain_eyebrow: 'Chuỗi giá trị',
      ind_mkt_eyebrow: 'Thị trường xuất khẩu',
      ind_challenge_eyebrow: 'Thách thức ngành',
      ind_cta_btn_diag: 'Đặt lịch ngay',
      ind_cta_btn_roles: 'Xem 5 vai trò CxO',
      ind_cta_desc: 'Đặt diagnostic 90 phút miễn phí — chúng tôi rà soát 5 chức năng và đề xuất 1–2 vai trò CxO ưu tiên cho 90 ngày tiếp theo.',
      // Coffee Page
      coffee_h1: 'Cà phê Việt — <span class="accent">specialty đến đại trà.</span>',
      coffee_lede: 'Việt Nam là nước XK robusta số 1 thế giới. 3S đồng hành các DN cà phê từ chế biến đến rang xay, từ commodity sang specialty. Truy xuất nguồn gốc, EUDR-ready.',
      coffee_chain_h2: '4 mắt xích Cà phê mà 3S can thiệp.',
      coffee_node_1_h: 'Vùng nguyên liệu',
      coffee_node_1_p: 'Tây Nguyên: Đắk Lắk, Lâm Đồng, Gia Lai, Kon Tum, Đắk Nông. Số hoá hộ trồng — sẵn sàng EUDR.',
      coffee_node_2_h: 'Sơ chế',
      coffee_node_2_p: 'Wet/dry/honey processing. Quản trị độ ẩm, lên men, phơi sấy. Lab cupping nội bộ.',
      coffee_node_3_h: 'Chế biến sâu',
      coffee_node_3_p: 'Rang xay specialty, hoà tan, drip bag, RTD. Phát triển dòng thương hiệu cho buyers.',
      coffee_node_4_h: 'Logistics & XK',
      coffee_node_4_p: 'Container 40ft, kho ngoại quan. LC, CAD, DP. Insurance hàng hoá XK toàn cầu.',
      coffee_mkt_h2: 'Đa dạng kênh khách hàng — <span class="ink-soft">không phụ thuộc một thị trường.</span>',
      coffee_challenge_h2: '4 vấn đề chính 3S thường gặp.',
      coffee_chal_1_h: 'EUDR compliance trước 12/2025',
      coffee_chal_2_h: 'Biến động giá ICE robusta',
      coffee_chal_3_h: 'Cạnh tranh từ Brazil, Indonesia',
      coffee_chal_4_h: 'Yêu cầu specialty tăng',
      coffee_cta_h2: 'Doanh nghiệp cà phê của bạn cần CxO nào?',
      // Cashew Page
      cashew_h1: 'Ngành Điều Việt Nam — <span class="accent">Nâng tầm giá trị gia tăng.</span>',
      cashew_lede: 'Việt Nam giữ vị thế số 1 thế giới về xuất khẩu nhân điều. 3S đồng hành cùng doanh nghiệp tối ưu hoá chuỗi cung ứng từ thu mua nguyên liệu đến chế biến sâu.',
      cashew_chain_h2: '4 mắt xích Ngành Điều mà 3S can thiệp.',
      cashew_node_1_h: 'Nhập nguyên liệu thô',
      cashew_node_1_p: 'Bờ Biển Ngà, Tanzania, Mozambique, Ghana. Quản trị KCS, kho lưu trữ ổn định độ ẩm.',
      cashew_node_2_h: 'Bóc tách & phân loại',
      cashew_node_2_p: 'Steam, cutting, peeling, color sorter. WW240/W320/W450 grading. Yield optimization.',
      cashew_node_3_h: 'Chế biến VAS',
      cashew_node_3_p: 'Rang muối, mật ong, vị BBQ. Đóng gói retail cho EU/US. Halal/Kosher cert.',
      cashew_node_4_h: 'XK & phân phối',
      cashew_node_4_p: 'LC at sight, CAD, FOB/CIF. Quan hệ với Olam, Camlin, anchor buyers.',
      cashew_mkt_h2: 'Phân khúc khách hàng đa dạng.',
      cashew_challenge_h2: 'Các rủi ro doanh nghiệp điều thường gặp.',
      cashew_chal_1_h: 'Biến động giá nguyên liệu thô',
      cashew_chal_2_h: 'Chi phí lao động tăng',
      cashew_chal_3_h: 'Yêu cầu sustainability từ buyer',
      cashew_chal_4_h: 'Cạnh tranh từ Bờ Biển Ngà nội địa hoá',
      cashew_cta_h2: 'Doanh nghiệp điều của bạn cần CxO nào?',
      // Durian Page
      durian_h1: 'Sầu riêng Việt — <span class="accent">Chinh phục thị trường tỷ dân.</span>',
      durian_lede: 'Sầu riêng đang trở thành trái cây xuất khẩu tỷ đô. 3S hỗ trợ doanh nghiệp chuẩn hoá quy trình đóng gói, mã số vùng trồng và kết nối người mua anchor.',
      durian_chain_h2: '4 mắt xích Sầu riêng mà 3S can thiệp.',
      durian_node_1_h: 'Vùng trồng & mã số',
      durian_node_1_p: 'Tiền Giang, Đắk Lắk, Lâm Đồng. Hỗ trợ đăng ký mã số vùng trồng + cơ sở đóng gói (TQ).',
      durian_node_2_h: 'Thu hoạch & sơ chế',
      durian_node_2_p: 'Tiêu chuẩn độ chín, phân loại theo trọng lượng và độ đẹp vỏ. Kho lạnh trung chuyển.',
      durian_node_3_h: 'Đóng gói & xuất tươi',
      durian_node_3_p: 'Nhà đóng gói chuẩn, kiểm tra ruồi đục quả, fumigation. Container lạnh đi TQ.',
      durian_node_4_h: 'Đông lạnh & cấp đông',
      durian_node_4_p: 'IQF cho thị trường Hàn/Nhật/EU. Sản phẩm múi tách hạt, sinh tố, kem.',
      durian_mkt_h2: 'Đa dạng kênh khách hàng — <span class="ink-soft">không phụ thuộc một thị trường.</span>',
      durian_challenge_h2: '4 vấn đề chính 3S thường gặp.',
      durian_chal_1_h: 'Phụ thuộc thị trường TQ',
      durian_chal_2_h: 'Tiêu chuẩn ruồi đục quả khắt khe',
      durian_chal_3_h: 'Mã số vùng trồng giả',
      durian_chal_4_h: 'Biến động chất lượng theo mùa',
      durian_cta_h2: 'Doanh nghiệp sầu riêng của bạn cần CxO nào?',
      // Rice Page
      rice_h1: 'Gạo Việt — <span class="accent">An ninh lương thực & Giá trị cao.</span>',
      rice_lede: 'Việt Nam đang chuyển dịch sang gạo chất lượng cao (ST25, Japonica). 3S hỗ trợ DN xây dựng chuỗi liên kết lúa gạo bền vững.',
      rice_chain_h2: '4 mắt xích Gạo mà 3S can thiệp.',
      rice_node_1_h: 'Mua lúa & xay xát',
      rice_node_1_p: 'Mua lúa từ HTX qua hợp đồng bao tiêu. Xay xát hiện đại — máy SATAKE, BUHLER.',
      rice_node_2_h: 'Phân loại & đánh bóng',
      rice_node_2_p: 'Color sorter, length grader. Tỷ lệ tấm <5%. Đánh bóng 2 lần.',
      rice_node_3_h: 'Đóng gói thương hiệu',
      rice_node_3_p: 'Túi 1kg, 2kg, 5kg cho retail. Túi 25kg, 50kg cho HORECA & B2B.',
      rice_node_4_h: 'Chứng nhận & XK',
      rice_node_4_p: 'HACCP, BRC, organic. Halal, Kosher tuỳ thị trường. Container 20ft/40ft.',
      rice_mkt_h2: 'Đa dạng kênh khách hàng — <span class="ink-soft">không phụ thuộc một thị trường.</span>',
      rice_challenge_h2: '4 vấn đề chính 3S thường gặp.',
      rice_chal_1_h: 'Cạnh tranh giá với Ấn Độ, Thái',
      rice_chal_2_h: 'Yêu cầu MRL khắt khe (EU)',
      rice_chal_3_h: 'Logistic & inflation chi phí',
      rice_chal_4_h: 'Brand-building cho gạo VN',
      rice_cta_h2: 'Doanh nghiệp gạo của bạn cần CxO nào?',
      // Spices Page
      spices_h1: 'Hồ tiêu & Gia vị — <span class="accent">Đậm đà bản sắc Việt.</span>',
      spices_lede: 'Việt Nam là thủ phủ hồ tiêu thế giới. 3S giúp doanh nghiệp kiểm soát dư lượng thuốc bảo vệ thực vật và đa dạng hoá sản phẩm gia vị đặc sản.',
      spices_chain_h2: '4 mắt xích Hồ tiêu mà 3S can thiệp.',
      spices_node_1_h: 'Vùng trồng bền vững',
      spices_node_1_p: 'Đắk Nông, Bình Phước, Gia Lai. Mô hình tiêu hữu cơ, GAP, Rainforest Alliance.',
      spices_node_2_h: 'Thu hoạch & sơ chế',
      spices_node_2_p: 'Phân loại theo dung trọng (500–600 g/L). Sấy đạt chuẩn ASTA, ESA, JSSA.',
      spices_node_3_h: 'Chế biến sâu',
      spices_node_3_p: 'Tiêu trắng, tiêu xay, tiêu sạch steam-sterilized cho EU. Đóng gói retail.',
      spices_node_4_h: 'XK & phân phối',
      spices_node_4_p: 'Buyers chính: Olam, McCormick, Ofi, Trumpkin. LC, CAD, FOB/CIF.',
      spices_mkt_h2: 'Đa dạng kênh khách hàng — <span class="ink-soft">không phụ thuộc một thị trường.</span>',
      spices_challenge_h2: '4 vấn đề chính 3S thường gặp.',
      spices_chal_1_h: 'Giá biến động mạnh theo chu kỳ',
      spices_chal_2_h: 'Yêu cầu MRL chặt từ EU',
      spices_chal_3_h: 'Biến đổi khí hậu',
      spices_chal_4_h: 'Cạnh tranh từ Brazil, Ấn Độ',
      spices_cta_h2: 'Doanh nghiệp gia vị của bạn cần CxO nào?',
      // Seafood Page
      seafood_h1: 'Thuỷ sản Việt — <span class="accent">Tiêu chuẩn xanh & Bền vững.</span>',
      seafood_lede: 'Tôm, cá tra và hải sản XK đi EU/US yêu cầu khắt khe về ASC/GlobalGAP. 3S tư vấn quản trị vận hành nhà máy và truy xuất nguồn gốc.',
      seafood_chain_h2: '4 mắt xích thuỷ sản mà 3S can thiệp.',
      seafood_node_1_h: 'Vùng nuôi',
      seafood_node_1_p: 'Tôm ĐBSCL, cá tra An Giang / Đồng Tháp. ASC, BAP, organic. Pond IoT monitoring.',
      seafood_node_2_h: 'Chế biến cơ bản',
      seafood_node_2_p: 'IQF, đóng block. Tôm bóc vỏ, cá tra fillet. HACCP, BRC, BAP, HALAL.',
      seafood_node_3_h: 'VAS chế biến sâu',
      seafood_node_3_p: 'Tôm tẩm bột, cá tra cuộn, sushi-grade. Ready-to-cook, ready-to-eat.',
      seafood_node_4_h: 'Cold chain & XK',
      seafood_node_4_p: 'Container -18°C, temperature logger. Buyers Walmart, Costco, Lidl, AEON.',
      seafood_chal_h2: '5 rào cản lớn nhất của ngành thuỷ sản XK.',
      seafood_chal_1_h: 'IUU & Yellow Card EU',
      seafood_chal_2_h: 'Kháng sinh tồn dư',
      seafood_chal_3_h: 'Anti-dumping',
      seafood_chal_4_h: 'GACC & mã vùng nuôi',
      seafood_chal_5_h: 'Cold chain chuẩn',
      seafood_cta_h2: 'Doanh nghiệp thuỷ sản của bạn cần CxO nào?',
      // Passion Fruit Page
      passion_h1: 'Chanh dây & Trái cây — <span class="accent">Chế biến sâu & XK.</span>',
      passion_lede: 'Xu hướng nước ép cô đặc và trái cây đông lạnh (IQF). 3S đồng hành cùng nhà máy tối ưu tỷ lệ thu hồi và quản trị tồn kho.',
      passion_chain_h2: '4 mắt xích Chanh dây mà 3S can thiệp.',
      passion_node_1_h: 'Vùng trồng tập trung',
      passion_node_1_p: 'Gia Lai, Đắk Nông, Lâm Đồng. Hợp đồng bao tiêu với hộ trồng, chuẩn GlobalGAP.',
      passion_node_2_h: 'Thu mua & phân loại',
      passion_node_2_p: 'Phân loại theo grade A/B/C, độ Brix. Sơ chế ngay tại điểm thu mua.',
      passion_node_3_h: 'Chế biến',
      passion_node_3_p: 'Puree (single-strength, concentrate), IQF, sấy thăng hoa. Hệ thống tiệt trùng hiện đại.',
      passion_node_4_h: 'XK đa kênh',
      passion_node_4_p: 'Tươi (Trung Quốc), puree (EU/US food service), IQF (Nhật/Hàn beverage).',
      passion_chal_h2: '4 vấn đề chính 3S thường gặp.',
      passion_chal_1_h: 'Biến động giá theo mùa',
      passion_chal_2_h: 'Bệnh virus trên cây',
      passion_chal_3_h: 'Tiêu chuẩn dư lượng EU',
      passion_chal_4_h: 'Lạm phát chi phí logistics',
      passion_cta_h2: 'Doanh nghiệp chanh dây của bạn cần CxO nào?',
      // Cassava Page
      cassava_h1: 'Ngành Sắn (Mì lát) — <span class="accent">Năng lượng & Công nghiệp.</span>',
      cassava_lede: 'Sắn là nguyên liệu quan trọng cho năng lượng xanh và công nghiệp thực phẩm. 3S hỗ trợ DN quản trị chuỗi thu mua tập trung và tối ưu hóa logistics.',
      cassava_chain_h2: '4 mắt xích Ngành Sắn mà 3S can thiệp.',
      cassava_node_1_h: 'Vùng nguyên liệu',
      cassava_node_1_p: 'Tây Ninh, Gia Lai, Kon Tum. Liên kết hộ nông dân, kiểm soát chất lượng củ tươi.',
      cassava_node_2_h: 'Sơ chế & Mì lát',
      cassava_node_2_p: 'Sân phơi, máy băm thái. Quản trị độ ẩm và tạp chất theo chuẩn XK.',
      cassava_node_3_h: 'Tinh bột sắn',
      cassava_node_3_p: 'Dây chuyền tách lọc, ly tâm hiện đại. Sản phẩm đạt chuẩn thực phẩm/công nghiệp.',
      cassava_node_4_h: 'Logistics & XK',
      cassava_node_4_p: 'Container, tàu rời. Thị trường TQ chiếm 90%. Hedging rủi ro thanh toán.',
      cassava_chal_h2: '4 thách thức chính 3S thường gặp.',
      cassava_chal_1_h: 'Dịch bệnh khảm lá',
      cassava_chal_2_h: 'Phụ thuộc thị trường TQ',
      cassava_chal_3_h: 'Giá củ tươi biến động',
      cassava_chal_4_h: 'Chi phí logistics tăng',
      cassava_cta_h2: 'Doanh nghiệp sắn của bạn cần CxO nào?',
      // Ecosystem Page
      eco_h1: 'Hệ sinh thái — <span class="accent">Kết nối & Cộng hưởng.</span>',
      eco_lede: 'Mạng lưới đối tác chiến lược từ công nghệ, tài chính đến logistics, tạo ra sức mạnh tổng thể cho chuỗi cung ứng.',
      // About Us Page
      about_h1: 'Về 3S — <span class="accent">Cộng hưởng để Vững mạnh.</span>',
      about_lede: 'Chúng tôi không chỉ là đơn vị tư vấn. 3S là đội ngũ điều hành thực chiến, đồng hành cùng sự phát triển bền vững của nông nghiệp Việt.',
      // Contact Page Specific
      contact_h1: 'Liên hệ — <span class="accent">Bắt đầu hành trình Tăng trưởng.</span>',
      contact_lede: 'Hãy để lại thông tin, đội ngũ CxO của 3S sẽ liên hệ tư vấn giải pháp tối ưu nhất cho doanh nghiệp của bạn.',
      // Role Pages Common
      role_home: 'Trang chủ',
      role_sol: 'Giải pháp',
      role_cta_h2: 'Doanh nghiệp của bạn cần vai trò này?',
      role_cta_btn: 'Đặt diagnostic 90 phút',
      // Process Section
      proc_eyebrow: 'Lộ trình chuyên nghiệp',
      proc_title: 'Quy trình thực hiện dịch vụ 3S',
      proc_g1: 'Tiếp nhận',
      proc_g2: 'Thực hiện',
      proc_g3: 'Hoàn thành & Bàn giao',
      proc_s1_h: '01. Tiếp nhận yêu cầu',
      proc_s1_p: 'Ghi nhận thông tin sơ bộ về nhu cầu doanh nghiệp.',
      proc_s2_h: '02. Xem xét & Xác nhận',
      proc_s2_p: 'Đánh giá tính khả thi và xác nhận phạm vi công việc.',
      proc_s3_h: '03. Đánh giá sơ bộ',
      proc_s3_p: 'Phân loại và đưa ra nhận định ban đầu về dự án.',
      proc_s4_h: '04. Gửi báo giá',
      proc_s4_p: 'Đề xuất phương án tài chính và lộ trình cụ thể.',
      proc_s5_h: '05. Kick-off dự án',
      proc_s5_p: 'Họp khởi động để thống nhất mục tiêu và nhân sự.',
      proc_s6_h: '06. Ký NDA & Hợp đồng',
      proc_s6_p: 'Bảo mật thông tin và xác lập pháp lý dịch vụ.',
      proc_s7_h: '07. Thu thập dữ liệu',
      proc_s7_p: 'Khảo sát và thu thập dữ liệu chuyên sâu tại doanh nghiệp.',
      proc_s8_h: '08. Triển khai',
      proc_s8_p: 'Thực hiện các giải pháp CxO theo lộ trình đã cam kết.',
      proc_s9_h: '09. Nghiệm thu',
      proc_s9_p: 'Kiểm tra kết quả và đối chiếu với KPI đề ra.',
      proc_s10_h: '10. Bàn giao',
      proc_s10_p: 'Bàn giao kết quả và hướng dẫn vận hành bền vững.',
      // Combo Section Headers
      combo_eyebrow: 'Giải pháp chuyên biệt',
      combo_h2: 'Combo dịch vụ theo từng vai trò CxO.',
      combo_sol_label: 'Gói',
      combo_desc_label: 'Giải pháp cụ thể',
      // Cashew Combo
      cashew_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1.1 — Target Market</span><div class="combo-text">Phân tích thị trường điều nhân theo phân khúc (WW240, WW320...), xác định thị trường trọng điểm.</div></div>
        <div class="combo-item"><span class="combo-code">E.1.2 — Buyer Conn.</span><div class="combo-text">Kết nối trực tiếp với trader/roaster/snack manufacturer tại Mỹ, EU, TQ, Ấn Độ.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.1 — Documents</span><div class="combo-text">Chuẩn hoá hồ sơ XK (C/O, Phyto, Health Certificate, chứng nhận FSSC/BRC).</div></div>
        <div class="combo-item"><span class="combo-code">E.3.1 — Order Mgmt</span><div class="combo-text">Quản trị đơn hàng XK khối lượng lớn, nhiều shipment liên tục.</div></div>
        <div class="combo-item"><span class="combo-code">E.3.3 — Relationship</span><div class="combo-text">Quản lý KH dài hạn (contract buyer), duy trì mối quan hệ với trader quốc tế.</div></div>
      `,
      cashew_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — QMS Setup</span><div class="combo-text">Thiết lập FSSC 22000, BRC, SMETA/Sedex cho nhà máy chế biến điều.</div></div>
        <div class="combo-item"><span class="combo-code">P.2 — Market Access</span><div class="combo-text">Đăng ký FDA (Mỹ), đáp ứng EU Novel Food regulation, GACC (TQ).</div></div>
        <div class="combo-item"><span class="combo-code">P.3 — Supplier Audit</span><div class="combo-text">Đánh giá NCC nguyên liệu thô (điều thô NK), kiểm tra năng lực chế biến NCC gia công.</div></div>
        <div class="combo-item"><span class="combo-code">P.4 — Traceability</span><div class="combo-text">Truy xuất từ vùng trồng (Bình Phước, Đồng Nai, Châu Phi) → nhà máy → container XK.</div></div>
      `,
      cashew_cfo_combo: `
        <div class="combo-item"><span class="combo-code">E.1.1 — Fundraising</span><div class="combo-text">Huy động vốn thu mua nguyên liệu mùa vụ (lượng vốn lớn, xoay nhanh), tiếp cận trade finance/LC.</div></div>
        <div class="combo-item"><span class="combo-code">E.1.3 — Cash Flow</span><div class="combo-text">Quản trị dòng tiền theo chu kỳ thu mua — chế biến — XK (thường 3-6 tháng), tối ưu vốn lưu động.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.2 — Reporting</span><div class="combo-text">Báo cáo P&L theo từng grade, phân tích margin theo thị trường, theo mùa vụ.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.3 — Risk Mgmt</span><div class="combo-text">Quản trị rủi ro biến động giá nguyên liệu (hedging advisory), rủi ro tỷ giá.</div></div>
      `,
      cashew_cto_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Order Mgmt</span><div class="combo-text">Quản lý đơn hàng XK theo grade/spec/shipment, theo dõi tiến độ giao hàng.</div></div>
        <div class="combo-item"><span class="combo-code">E.2 — Traceability</span><div class="combo-text">Truy xuất nguyên liệu NK → chế biến → XK (đáp ứng EUDR).</div></div>
        <div class="combo-item"><span class="combo-code">E.3 — ERP</span><div class="combo-text">Quản lý kho nguyên liệu thô, bán thành phẩm, thành phẩm theo grade; quản lý mua hàng NK.</div></div>
      `,
      cashew_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.2 — Internship</span><div class="combo-text">Thực tập tại nhà máy chế biến điều, học vận hành QC/QA.</div></div>
        <div class="combo-item"><span class="combo-code">D.3 — Graduate</span><div class="combo-text">Chương trình phát triển cán bộ quản lý nhà máy điều thế hệ mới.</div></div>
        <div class="combo-item"><span class="combo-code">D.4 — Global</span><div class="combo-text">Kết nối học hỏi mô hình chế biến tiên tiến tại Ấn Độ, Brazil.</div></div>
      `,
      // Coffee Combo
      coffee_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1.1 — Market Strategy</span><div class="combo-text">Xác định phân khúc Specialty vs Commodity cho thị trường EU/US/Nhật.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.2 — Buyer Outreach</span><div class="combo-text">Kết nối Roasters và Coffee Houses quốc tế. Xây dựng Brand Story vùng miền.</div></div>
        <div class="combo-item"><span class="combo-code">E.3.1 — Certification</span><div class="combo-text">Triển khai Rainforest Alliance, 4C, Organic (USDA/EU) cho vùng trồng.</div></div>
      `,
      coffee_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — QC Standards</span><div class="combo-text">Thiết lập Lab Cupping, chuẩn hoá quy trình sơ chế ướt/khô/honey.</div></div>
        <div class="combo-item"><span class="combo-code">P.2 — Processing</span><div class="combo-text">Tối ưu hoá quy trình rang xay, bảo quản green beans đạt chuẩn độ ẩm XK.</div></div>
      `,
      coffee_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — ICE Hedging</span><div class="combo-text">Advisory về phòng ngừa rủi ro giá cà phê theo sàn London (Robusta) và New York (Arabica).</div></div>
        <div class="combo-item"><span class="combo-code">F.2 — Trade Finance</span><div class="combo-text">Thu xếp vốn lưu động cho mùa vụ thu mua tập trung tháng 10-01.</div></div>
      `,
      coffee_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — EUDR Ready</span><div class="combo-text">Số hoá bản đồ vùng trồng, quản lý tọa độ GPS đáp ứng quy định chống phá rừng của EU.</div></div>
        <div class="combo-item"><span class="combo-code">T.2 — Farm Mgmt</span><div class="combo-text">Hệ thống quản lý hộ nông dân và nhật ký canh tác số.</div></div>
      `,
      coffee_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Q-Grader Path</span><div class="combo-text">Đào tạo đội ngũ nếm thử chất lượng chuẩn quốc tế (Q-Grader).</div></div>
        <div class="combo-item"><span class="combo-code">D.2 — Leadership</span><div class="combo-text">Phát triển thế hệ kế thừa am hiểu cả nông nghiệp và thương mại quốc tế.</div></div>
      `,
      // Spices Combo
      spices_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — ASTA Standard</span><div class="combo-text">Xây dựng hồ sơ sản phẩm tiêu đạt chuẩn ASTA, ESA cho thị trường Mỹ, EU.</div></div>
        <div class="combo-item"><span class="combo-code">E.2 — B2B Network</span><div class="combo-text">Kết nối các nhà sản xuất gia vị, thực phẩm hàng đầu (McCormick, Olam).</div></div>
      `,
      spices_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Steam Sterile</span><div class="combo-text">Chuẩn hoá quy trình tiệt trùng hơi nước (Steam Sterilization) cho hồ tiêu XK.</div></div>
        <div class="combo-item"><span class="combo-code">P.2 — Pesticide Control</span><div class="combo-text">Quản lý dư lượng thuốc BVTV (MRL) theo danh mục 500+ hoạt chất của EU.</div></div>
      `,
      spices_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — Price Hedging</span><div class="combo-text">Quản trị rủi ro biến động giá hồ tiêu nội địa và quốc tế.</div></div>
      `,
      spices_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — Origin Trace</span><div class="combo-text">Truy xuất nguồn gốc đến từng hộ trồng hồ tiêu hữu cơ.</div></div>
      `,
      spices_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Tech Farm</span><div class="combo-text">Đào tạo quản lý nông trại công nghệ cao cho đội ngũ kế cận.</div></div>
      `,
      // Seafood Combo
      seafood_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Retail Entry</span><div class="combo-text">Đưa hàng vào chuỗi siêu thị Walmart, Costco, AEON. Chuẩn hoá bao gói retail.</div></div>
        <div class="combo-item"><span class="combo-code">E.2 — Market Access</span><div class="combo-text">Hỗ trợ hồ sơ tháo gỡ thẻ vàng IUU, chống bán phá giá (anti-dumping).</div></div>
      `,
      seafood_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Certifications</span><div class="combo-text">Triển khai ASC, BAP, GlobalGAP cho vùng nuôi và BRC, IFS cho nhà máy.</div></div>
        <div class="combo-item"><span class="combo-code">P.2 — Cold Chain</span><div class="combo-text">Tối ưu hoá quy trình cấp đông IQF và quản trị chuỗi cung ứng lạnh -18°C.</div></div>
      `,
      seafood_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — ESG Capital</span><div class="combo-text">Tiếp cận nguồn vốn xanh, vốn ưu đãi cho dự án nuôi trồng bền vững.</div></div>
      `,
      seafood_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — IoT Farming</span><div class="combo-text">Hệ thống giám sát môi trường nước và quản lý thức ăn tự động cho ao nuôi.</div></div>
      `,
      seafood_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Aqua Experts</span><div class="combo-text">Đào tạo chuyên gia kỹ thuật nuôi trồng và quản trị nhà máy hiện đại.</div></div>
      `,
      // Rice Combo
      rice_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Brand Export</span><div class="combo-text">Xây dựng thương hiệu gạo đóng túi (1kg, 2kg, 5kg) cho thị trường retail cao cấp.</div></div>
        <div class="combo-item"><span class="combo-code">E.2 — G2G & B2B</span><div class="combo-text">Hỗ trợ hồ sơ thầu quốc tế, kết nối đầu mối thu mua lương thực quốc gia.</div></div>
      `,
      rice_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Milling Opt.</span><div class="combo-text">Tối ưu quy trình xay xát, đánh bóng, tách màu để giảm tỷ lệ tấm và tăng thu hồi.</div></div>
        <div class="combo-item"><span class="combo-code">P.2 — Quality Standard</span><div class="combo-text">Thiết lập tiêu chuẩn kiểm soát dư lượng thuốc BVTV, chuẩn hoá độ ẩm XK.</div></div>
      `,
      rice_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — Inventory Fund</span><div class="combo-text">Huy động vốn lưu động cho dự án bao tiêu lúa cánh đồng lớn.</div></div>
      `,
      rice_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — Paddy Trace</span><div class="combo-text">Hệ thống truy xuất nguồn gốc từ hộ nông dân/HTX đến nhà máy.</div></div>
      `,
      rice_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Agri Manager</span><div class="combo-text">Đào tạo đội ngũ quản lý chuỗi liên kết lúa gạo bền vững.</div></div>
      `,
      // Passion Combo
      passion_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Juice Network</span><div class="combo-text">Kết nối các nhà máy beverage, concentrate juice quốc tế.</div></div>
      `,
      passion_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — IQF/Puree</span><div class="combo-text">Thiết lập quy trình cấp đông IQF và sản xuất puree chanh dây đạt Brix chuẩn.</div></div>
      `,
      // Durian Combo
      durian_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — China Channel</span><div class="combo-text">Thiết lập kênh phân phối chính ngạch sang Trung Quốc, kết nối chợ đầu mối & retail.</div></div>
        <div class="combo-item"><span class="combo-code">E.2 — Global IQF</span><div class="combo-text">Mở rộng thị trường sầu riêng cấp đông sang Hàn Quốc, Nhật Bản, Mỹ.</div></div>
      `,
      durian_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Packing House</span><div class="combo-text">Chuẩn hoá nhà đóng gói theo quy định GACC, quản lý mã số vùng trồng.</div></div>
      `,
      // Cassava Combo
      cassava_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Industrial Link</span><div class="combo-text">Kết nối chuỗi cung ứng nguyên liệu cho nhà máy ethanol và thực phẩm TQ/VN.</div></div>
      `,
      cassava_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Starch Opt.</span><div class="combo-text">Cải tiến quy trình tách tinh bột và sấy mì lát đạt chuẩn độ ẩm XK.</div></div>
      `,
      // Fallbacks
      gen_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — Working Capital</span><div class="combo-text">Tối ưu hoá dòng tiền và thu xếp vốn lưu động cho các dự án thu mua mùa vụ.</div></div>
        <div class="combo-item"><span class="combo-code">F.2 — Risk Mgmt</span><div class="combo-text">Quản trị rủi ro tỷ giá và biến động giá nông sản trên thị trường quốc tế.</div></div>
      `,
      gen_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — ERP/MES</span><div class="combo-text">Hệ thống quản trị sản xuất và kho bãi chuyên biệt cho ngành nông nghiệp.</div></div>
        <div class="combo-item"><span class="combo-code">T.2 — Traceability</span><div class="combo-text">Giải pháp truy xuất nguồn gốc đáp ứng tiêu chuẩn khắt khe của EU, Mỹ.</div></div>
      `,
      gen_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Succession</span><div class="combo-text">Xây dựng lộ trình kế thừa và đào tạo đội ngũ quản lý nòng cốt cho doanh nghiệp gia đình.</div></div>
      `,
      // Insights Page
      ins_h1: 'Insights — <span class="accent">Tri thức & Hành động.</span>',
      ins_lede: 'Dữ liệu thị trường, góc nhìn chuyên môn và những bài học thực chiến từ các dự án 3S đã triển khai.',
      ins_filter_all: 'Tất cả',
      ins_featured: 'Bài viết nổi bật',
      ins_aside_topics: 'Chủ đề',
      ins_aside_diag: 'Diagnostic miễn phí',
      ins_aside_news: 'Newsletter',
    },
    en: {
      solutions: 'Solutions',
      industries: 'Industries',
      ecosystem: 'Ecosystem',
      insights: 'Insights',
      about: 'About 3S',
      contact: 'Contact',
      tagline: 'Secured Supply',
      footerBlurb: '3S provides CxO as a Service. Outsourced professional leadership — no hiring needed, creating value from the first 12 days.',
      copy: '© 2026 3S TechCoop. Secured Supply. Zero Surprises.',
      privacy: 'Privacy',
      terms: 'Terms',
      sitemap: 'Sitemap',
      phone: '0933 48 28 38',
      // Homepage
      hero_pill: '<span class="tdot"></span><span><strong>TechCoop × 3S</strong> · Strategic Partner</span><span class="vline"></span><span>Comprehensive Agri-Supply Chain Transformation</span>',
      hero_h1: 'Turn Strategy into Action —<br><span class="accent">Sustainable</span> growth for export agriculture enterprises.',
      hero_lede: '<strong style="color:#fff">CxO as a Service</strong> model. Outsourced professional leadership — no hiring needed. Managing supply chain from farm to table. Creating value from the <strong style="color:#fff">first 12 working days</strong>.',
      hero_btn_growth: 'Growth Journey',
      hero_btn_arch: 'Supply Chain Architecture',
      stat_industries: '8 <em>industries</em>',
      stat_industries_lbl: 'Key export products',
      stat_partners: '20+',
      stat_partners_lbl: 'Committed enterprises',
      stat_value_days: '12<em>d</em>',
      stat_value_days_lbl: 'Value from day one',
      stat_nps_lbl: 'NPS from first roadmap',
      trusted_label: 'Trusted by',
      roles_eyebrow: 'Talent Model',
      roles_h2: 'One leadership team. Five pillars of expertise.',
      roles_lede: 'Businesses only pay for actual results — no fixed personnel costs. Specialized CxOs are deployed according to each phase\'s needs.',
      // Roles Common
      role_cmo_h: 'Export Markets',
      role_cmo_p: 'Diversifying customer channels. Entry into EU, North America, Japan, Korea — no market dependency.',
      role_cpo_h: 'Factory & Products',
      role_cpo_p: 'Production operation to HACCP/BRC standards. Developing value-added product lines.',
      role_cfo_h: 'Finance',
      role_cfo_p: 'Capital structure, cash flow. Access to export credit, exchange rate insurance, risk management.',
      role_cto_h: 'Digital Transformation',
      role_cto_p: 'ERP, traceability, factory IoT. Digitalizing raw material areas — EUDR-ready.',
      role_cdo_h: 'Succession & Org',
      role_cdo_p: 'Generational handover. Building governance, ESOP, family business culture.',
      // Role details
      cmo_h1: 'CMO — <span class="accent">Markets & Revenue.</span>',
      cmo_lede: 'Building international brands, expanding distribution channels, and optimizing marketing costs for agri-enterprises.',
      cpo_h1: 'CPO — <span class="accent">Factory & Products.</span>',
      cpo_lede: 'Production operation to HACCP/BRC standards. Optimizing recovery rates and developing value-added lines.',
      cfo_h1: 'CFO — <span class="accent">Finance & Cash Flow.</span>',
      cfo_lede: 'Restructuring capital, managing supply chain cash flow, and accessing low-cost international funding.',
      cto_h1: 'CTO — <span class="accent">Technology & Data.</span>',
      cto_lede: 'Comprehensive digital transformation from factory ERP to farm-to-table traceability. Ready for EUDR.',
      cdo_h1: 'CDO — <span class="accent">Succession & Organization.</span>',
      cdo_lede: 'Building successor teams, family governance, and sustainable corporate culture for agri-SMEs.',
      // Industries Section
      ind_eyebrow: 'By Industry',
      ind_h2: 'Packaged solutions by industry — not generic.',
      ind_lede: 'Each value chain has its own specific seasonality, quality standards, and export markets. 3S designs bespoke solutions for each industry.',
      ind_task_title: 'POM Missions',
      ind_result_title: 'Results Achieved',
      ind_eff_title: 'Efficiency Gained',
      ind_eff_desc: 'Development proposal<br>in processing industry',
      ind_task_ceo: '<strong>CEO —</strong> Project supervision and revenue targets',
      ind_task_cfo: '<strong>CFO —</strong> Financial planning & working capital',
      ind_task_cto: '<strong>CTO —</strong> ERP, CRM, traceability implementation',
      ind_task_cgo: '<strong>CGO —</strong> Expanding Asian export markets',
      ind_res_kpi: 'Measurable KPIs',
      ind_res_roi: 'Clear ROI',
      ind_res_speed: 'Increased Speed',
      ind_res_waste: 'Reduced Waste',
      tab_cashew: 'Cashew',
      tab_coffee: 'Coffee',
      tab_durian: 'Durian',
      tab_rice: 'Rice',
      tab_pepper: 'Pepper / Spices',
      tab_passion: 'Passion Fruit',
      tab_fish: 'Seafood',
      tab_cassava: 'Cassava',
      // Roadmap
      road_eyebrow: 'Partnership Roadmap',
      road_h2: 'Start anywhere — what matters is the right spot.',
      road_lede: 'Layered roadmap. Every step is a measurable touchpoint. Businesses delegate maximum authority to 3S leadership within the agreed scope.',
      road_form_lbl: 'Where is your business currently?',
      road_form_btn: 'Submit Request',
      step_1_h: 'Discovery',
      step_1_p: 'From problems to benefits & actions — Data research',
      step_2_h: 'Analysis',
      step_2_p: 'Expert team — restructuring processes',
      step_3_h: 'Execution',
      step_3_p: 'Detailed plan — scenarios — demo',
      step_4_h: 'Operation',
      step_4_p: 'Execution → evaluation → continuous improvement',
      step_5_h: 'Handover',
      step_5_p: 'Support — group training — current processes',
      // Contact Form
      cont_eyebrow: 'Contact',
      cont_h2: 'Ready to Grow?<br>Let\'s start with a conversation.',
      cont_desc: 'The 3S CxO team will help you identify all financial and operational risks — before they arise.',
      cont_form_btn: 'Request Consultation',
      form_name: 'Full Name *',
      form_email: 'Email *',
      form_company: 'Company Name *',
      form_role: 'Role',
      form_ind: 'Industry',
      form_revenue: 'Revenue Scale',
      form_cxo: 'CxO of Interest',
      form_msg: 'Brief description of needs',
      form_msg_ph: 'E.g.: We need to prepare EUDR for coffee export to Germany...',
      form_submit: 'Submit Diagnostic Request',
      form_note: 'Your information is secured — only used for consultation.',
      // Industry Pages Common
      ind_home: 'Home',
      ind_inds: 'Industries',
      ind_fact_title: 'Industry Figures',
      ind_fact_blurb: 'Consolidated statistics from Customs, Associations, MARD, and 3S ecosystem partners.',
      ind_chain_eyebrow: 'Value Chain',
      ind_mkt_eyebrow: 'Export Markets',
      ind_challenge_eyebrow: 'Industry Challenges',
      ind_cta_btn_diag: 'Book Now',
      ind_cta_btn_roles: 'View 5 CxO Roles',
      ind_cta_desc: 'Book a free 90-min diagnostic — we review 5 functions and propose 1–2 priority CxO roles for the next 90 days.',
      // Coffee Page
      coffee_h1: 'Vietnamese Coffee — <span class="accent">from specialty to commodity.</span>',
      coffee_lede: 'Vietnam is the world\'s #1 robusta exporter. 3S accompanies coffee businesses from processing to roasting, commodity to specialty. Traceability, EUDR-ready.',
      coffee_chain_h2: '4 Coffee value chain nodes where 3S intervenes.',
      coffee_node_1_h: 'Raw Material Area',
      coffee_node_1_p: 'Central Highlands: Dak Lak, Lam Dong, Gia Lai, Kon Tum, Dak Nong. Digitalizing farmers — EUDR-ready.',
      coffee_node_2_h: 'Pre-processing',
      coffee_node_2_p: 'Wet/dry/honey processing. Managing humidity, fermentation, drying. Internal lab cupping.',
      coffee_node_3_h: 'Deep Processing',
      coffee_node_3_p: 'Specialty roasted, instant, drip bag, RTD. Developing brands for buyers.',
      coffee_node_4_h: 'Logistics & Export',
      coffee_node_4_p: '40ft containers, bonded warehouses. LC, CAD, DP. Global export cargo insurance.',
      coffee_mkt_h2: 'Diverse customer channels — <span class="ink-soft">not dependent on a single market.</span>',
      coffee_challenge_h2: '4 main challenges 3S frequently addresses.',
      coffee_chal_1_h: 'EUDR compliance before 12/2025',
      coffee_chal_2_h: 'ICE robusta price volatility',
      coffee_chal_3_h: 'Competition from Brazil, Indonesia',
      coffee_chal_4_h: 'Rising specialty demand',
      coffee_cta_h2: 'Which CxO does your coffee business need?',
      // Cashew Page
      cashew_h1: 'Vietnam Cashew Industry — <span class="accent">Enhancing Added Value.</span>',
      cashew_lede: 'Vietnam holds the world\'s #1 position in cashew kernel exports. 3S accompanies businesses in optimizing the supply chain from raw material procurement to deep processing.',
      cashew_chain_h2: '4 Cashew value chain nodes where 3S intervenes.',
      cashew_node_1_h: 'Raw Material Import',
      cashew_node_1_p: 'Ivory Coast, Tanzania, Mozambique, Ghana. KCS management, humidity-stable storage.',
      cashew_node_2_h: 'Peeling & Sorting',
      cashew_node_2_p: 'Steam, cutting, peeling, color sorter. WW240/W320/W450 grading. Yield optimization.',
      cashew_node_3_h: 'VAS Processing',
      cashew_node_3_p: 'Salted, honey, BBQ flavors. Retail packaging for EU/US. Halal/Kosher cert.',
      cashew_node_4_h: 'Export & Distribution',
      cashew_node_4_p: 'LC at sight, CAD, FOB/CIF. Relations with Olam, Camlin, anchor buyers.',
      cashew_mkt_h2: 'Diverse customer segments.',
      cashew_challenge_h2: 'Common risks for cashew businesses.',
      cashew_chal_1_h: 'Raw material price volatility',
      cashew_chal_2_h: 'Rising labor costs',
      cashew_chal_3_h: 'Sustainability requirements from buyers',
      cashew_chal_4_h: 'Competition from localized Ivory Coast processing',
      cashew_cta_h2: 'Which CxO does your cashew business need?',
      // Durian Page
      durian_h1: 'Vietnamese Durian — <span class="accent">Conquering the Billion-Person Market.</span>',
      durian_lede: 'Durian is becoming a billion-dollar export fruit. 3S supports businesses in standardizing packaging processes, planting area codes, and connecting anchor buyers.',
      durian_chain_h2: '4 Durian value chain nodes where 3S intervenes.',
      durian_node_1_h: 'Planting & Codes',
      durian_node_1_p: 'Tien Giang, Dak Lak, Lam Dong. Support in registering area codes + packing facilities (China).',
      durian_node_2_h: 'Harvest & Pre-processing',
      durian_node_2_p: 'Maturity standards, weight and appearance sorting. Transshipment cold storage.',
      durian_node_3_h: 'Packing & Fresh Export',
      durian_node_3_p: 'Standard packing houses, fruit fly inspection, fumigation. Refrigerated containers to China.',
      durian_node_4_h: 'Freezing & IQF',
      durian_node_4_p: 'IQF for Korea/Japan/EU markets. Pitted pulp products, smoothies, ice cream.',
      durian_mkt_h2: 'Diverse customer channels — <span class="ink-soft">not dependent on a single market.</span>',
      durian_challenge_h2: '4 main challenges 3S frequently addresses.',
      durian_chal_1_h: 'Dependence on China market',
      durian_chal_2_h: 'Strict fruit fly standards',
      durian_chal_3_h: 'Fake planting area codes',
      durian_chal_4_h: 'Seasonal quality fluctuations',
      durian_cta_h2: 'Which CxO does your durian business need?',
      // Rice Page
      rice_h1: 'Vietnamese Rice — <span class="accent">Food Security & High Value.</span>',
      rice_lede: 'Vietnam is shifting towards high-quality rice (ST25, Japonica). 3S supports businesses in building sustainable rice linkage chains.',
      rice_chain_h2: '4 Rice value chain nodes where 3S intervenes.',
      rice_node_1_h: 'Rice Purchase & Milling',
      rice_node_1_p: 'Purchase from cooperatives via offtake contracts. Modern milling — SATAKE, BUHLER machines.',
      rice_node_2_h: 'Sorting & Polishing',
      rice_node_2_p: 'Color sorter, length grader. Broken rice <5%. Double polishing.',
      rice_node_3_h: 'Branded Packaging',
      rice_node_3_p: '1kg, 2kg, 5kg bags for retail. 25kg, 50kg bags for HORECA & B2B.',
      rice_node_4_h: 'Certification & Export',
      rice_node_4_p: 'HACCP, BRC, organic. Halal, Kosher depending on market. 20ft/40ft containers.',
      rice_mkt_h2: 'Diverse customer channels — <span class="ink-soft">not dependent on a single market.</span>',
      rice_challenge_h2: '4 main challenges 3S frequently addresses.',
      rice_chal_1_h: 'Price competition with India, Thailand',
      rice_chal_2_h: 'Strict MRL requirements (EU)',
      rice_chal_3_h: 'Logistics & cost inflation',
      rice_chal_4_h: 'Brand-building for VN rice',
      rice_cta_h2: 'Which CxO does your rice business need?',
      // Spices Page
      spices_h1: 'Pepper & Spices — <span class="accent">Rich Vietnamese Identity.</span>',
      spices_lede: 'Vietnam is the world\'s pepper capital. 3S helps businesses control pesticide residues and diversify specialty spice products.',
      spices_chain_h2: '4 Pepper value chain nodes where 3S intervenes.',
      spices_node_1_h: 'Sustainable Planting Areas',
      spices_node_1_p: 'Dak Nong, Binh Phuoc, Gia Lai. Organic, GAP, Rainforest Alliance models.',
      spices_node_2_h: 'Harvest & Pre-processing',
      spices_node_2_p: 'Sorting by density (500–600 g/L). Drying to ASTA, ESA, JSSA standards.',
      spices_node_3_h: 'Deep Processing',
      spices_node_3_p: 'White pepper, ground pepper, steam-sterilized clean pepper for EU. Retail packaging.',
      spices_node_4_h: 'Export & Distribution',
      spices_node_4_p: 'Major buyers: Olam, McCormick, Ofi, Trumpkin. LC, CAD, FOB/CIF.',
      spices_mkt_h2: 'Diverse customer channels — <span class="ink-soft">not dependent on a single market.</span>',
      spices_challenge_h2: '4 main challenges 3S frequently addresses.',
      spices_chal_1_h: 'Cyclical price volatility',
      spices_chal_2_h: 'Strict MRL requirements from EU',
      spices_chal_3_h: 'Climate change',
      spices_chal_4_h: 'Competition from Brazil, India',
      spices_cta_h2: 'Which CxO does your spice business need?',
      // Seafood Page
      seafood_h1: 'Vietnamese Seafood — <span class="accent">Green & Sustainable Standards.</span>',
      seafood_lede: 'Shrimp, pangasius, and seafood exported to EU/US require strict ASC/GlobalGAP compliance. 3S advises on factory operational management and traceability.',
      seafood_chain_h2: '4 Seafood value chain nodes where 3S intervenes.',
      seafood_node_1_h: 'Farming Areas',
      seafood_node_1_p: 'Mekong Delta shrimp, An Giang / Dong Thap pangasius. ASC, BAP, organic. Pond IoT monitoring.',
      seafood_node_2_h: 'Basic Processing',
      seafood_node_2_p: 'IQF, block frozen. Peeled shrimp, pangasius fillets. HACCP, BRC, BAP, HALAL.',
      seafood_node_3_h: 'VAS Deep Processing',
      seafood_node_3_p: 'Breaded shrimp, pangasius rolls, sushi-grade. Ready-to-cook, ready-to-eat.',
      seafood_node_4_h: 'Cold Chain & Export',
      seafood_node_4_p: '-18°C containers, temperature logger. Buyers: Walmart, Costco, Lidl, AEON.',
      seafood_chal_h2: '5 Biggest barriers for seafood export.',
      seafood_chal_1_h: 'IUU & EU Yellow Card',
      seafood_chal_2_h: 'Antibiotic Residues',
      seafood_chal_3_h: 'Anti-dumping',
      seafood_chal_4_h: 'GACC & Farming Codes',
      seafood_chal_5_h: 'Standard Cold Chain',
      seafood_cta_h2: 'Which CxO does your seafood business need?',
      // Passion Fruit Page
      passion_h1: 'Passion Fruit & Fruits — <span class="accent">Deep Processing & Export.</span>',
      passion_lede: 'Trend towards concentrated juices and frozen fruits (IQF). 3S accompanies factories in optimizing recovery rates and inventory management.',
      passion_chain_h2: '4 Passion Fruit value chain nodes where 3S intervenes.',
      passion_node_1_h: 'Concentrated Planting Areas',
      passion_node_1_p: 'Gia Lai, Dak Nong, Lam Dong. Offtake contracts with farmers, GlobalGAP standards.',
      passion_node_2_h: 'Procurement & Sorting',
      passion_node_2_p: 'Sorting by grade A/B/C, Brix level. Pre-processing at procurement points.',
      passion_node_3_h: 'Processing',
      passion_node_3_p: 'Puree (single-strength, concentrate), IQF, freeze-drying. Modern sterilization systems.',
      passion_node_4_h: 'Multi-channel Export',
      passion_node_4_p: 'Fresh (China), puree (EU/US food service), IQF (Japan/Korea beverage).',
      passion_chal_h2: '4 Main challenges 3S frequently addresses.',
      passion_chal_1_h: 'Seasonal price fluctuations',
      passion_chal_2_h: 'Plant virus diseases',
      passion_chal_3_h: 'EU residue standards',
      passion_chal_4_h: 'Logistics cost inflation',
      passion_cta_h2: 'Which CxO does your passion fruit business need?',
      // Cassava Page
      cassava_h1: 'Cassava Industry (Dried Chips) — <span class="accent">Energy & Industry.</span>',
      cassava_lede: 'Cassava is a key material for green energy and food industry. 3S supports businesses in centralized procurement management and logistics optimization.',
      cassava_chain_h2: '4 Cassava value chain nodes where 3S intervenes.',
      cassava_node_1_h: 'Raw Material Area',
      cassava_node_1_p: 'Tay Ninh, Gia Lai, Kon Tum. Farmer linkages, fresh root quality control.',
      cassava_node_2_h: 'Pre-processing & Chips',
      cassava_node_2_p: 'Drying yards, chipping machines. Managing humidity and impurities to export standards.',
      cassava_node_3_h: 'Cassava Starch',
      cassava_node_3_p: 'Modern separation and centrifuge lines. Products meeting food/industrial standards.',
      cassava_node_4_h: 'Logistics & Export',
      cassava_node_4_p: 'Containers, bulk vessels. China market accounts for 90%. Hedging payment risks.',
      cassava_chal_h2: '4 Main challenges 3S frequently addresses.',
      cassava_chal_1_h: 'Mosaic leaf disease',
      cassava_chal_2_h: 'Dependence on China market',
      cassava_chal_3_h: 'Fresh root price volatility',
      cassava_chal_4_h: 'Rising logistics costs',
      cassava_cta_h2: 'Which CxO does your cassava business need?',
      // Ecosystem Page
      eco_h1: 'Ecosystem — <span class="accent">Connection & Resonance.</span>',
      eco_lede: 'Strategic partner network from technology and finance to logistics, creating overall strength for the supply chain.',
      // About Us Page
      about_h1: 'About 3S — <span class="accent">Resonate to be Strong.</span>',
      about_lede: 'We are not just consultants. 3S is a practical executive team, accompanying the sustainable development of Vietnamese agriculture.',
      // Contact Page Specific
      contact_h1: 'Contact — <span class="accent">Start Your Growth Journey.</span>',
      contact_lede: 'Please leave your information, the 3S CxO team will contact you to consult the most optimal solution for your business.',
      // Role Pages Common
      role_home: 'Home',
      role_sol: 'Solutions',
      role_cta_h2: 'Does your business need this role?',
      role_cta_btn: 'Book 90-min Diagnostic',
      // Process Section
      proc_eyebrow: 'Professional Roadmap',
      proc_title: '3S Service Implementation Process',
      proc_g1: 'Intake',
      proc_g2: 'Execution',
      proc_g3: 'Completion & Handover',
      proc_s1_h: '01. Request Intake',
      proc_s1_p: 'Record initial information about business needs.',
      proc_s2_h: '02. Review & Confirm',
      proc_s2_p: 'Assess feasibility and confirm scope of work.',
      proc_s3_h: '03. Initial Assessment',
      proc_s3_p: 'Classify and provide initial project insights.',
      proc_s4_h: '04. Quotation',
      proc_s4_p: 'Propose financial plan and specific roadmap.',
      proc_s5_h: '05. Project Kick-off',
      proc_s5_p: 'Kick-off meeting to align on goals and personnel.',
      proc_s6_h: '06. NDA & Contract',
      proc_s6_p: 'Information security and legal establishment.',
      proc_s7_h: '07. Data Collection',
      proc_s7_p: 'In-depth survey and data gathering at the enterprise.',
      proc_s8_h: '08. Implementation',
      proc_s8_p: 'Execute CxO solutions according to the roadmap.',
      proc_s9_h: '09. Acceptance',
      proc_s9_p: 'Verify results against defined KPIs.',
      proc_s10_h: '10. Handover',
      proc_s10_p: 'Handover results and sustainable operations guide.',
      // Combo Section Headers
      combo_eyebrow: 'Specialized Solutions',
      combo_h2: 'Service combos by CxO roles.',
      combo_sol_label: 'Package',
      combo_desc_label: 'Specific Solutions',
      // Cashew Combo
      cashew_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1.1 — Target Market</span><div class="combo-text">Cashew kernel market analysis by segment (WW240, WW320...), identifying key markets.</div></div>
        <div class="combo-item"><span class="combo-code">E.1.2 — Buyer Conn.</span><div class="combo-text">Direct connection with traders/roasters/snack manufacturers in US, EU, China, India.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.1 — Documents</span><div class="combo-text">Standardizing export documents (C/O, Phyto, Health Cert, FSSC/BRC certifications).</div></div>
        <div class="combo-item"><span class="combo-code">E.3.1 — Order Mgmt</span><div class="combo-text">Managing high-volume export orders, multiple continuous shipments.</div></div>
        <div class="combo-item"><span class="combo-code">E.3.3 — Relationship</span><div class="combo-text">Long-term customer management (contract buyer), maintaining international trader relations.</div></div>
      `,
      cashew_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — QMS Setup</span><div class="combo-text">Setting up FSSC 22000, BRC, SMETA/Sedex for cashew processing factories.</div></div>
        <div class="combo-item"><span class="combo-code">P.2 — Market Access</span><div class="combo-text">FDA registration (US), complying with EU Novel Food regulation, GACC (China).</div></div>
        <div class="combo-item"><span class="combo-code">P.3 — Supplier Audit</span><div class="combo-text">Raw material supplier audit (imported RCN), processing capacity check for sub-contractors.</div></div>
        <div class="combo-item"><span class="combo-code">P.4 — Traceability</span><div class="combo-text">Traceability from farm (Binh Phuoc, Dong Nai, Africa) → factory → export container.</div></div>
      `,
      cashew_cfo_combo: `
        <div class="combo-item"><span class="combo-code">E.1.1 — Fundraising</span><div class="combo-text">Raising capital for seasonal raw material purchase, accessing trade finance/LC.</div></div>
        <div class="combo-item"><span class="combo-code">E.1.3 — Cash Flow</span><div class="combo-text">Managing cash flow by purchase-processing-export cycle, optimizing working capital.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.2 — Reporting</span><div class="combo-text">P&L reporting by grade, margin analysis by market and season.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.3 — Risk Mgmt</span><div class="combo-text">Managing raw material price volatility risk (hedging advisory), exchange rate risk.</div></div>
      `,
      cashew_cto_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Order Mgmt</span><div class="combo-text">Managing export orders by grade/spec/shipment, tracking delivery progress.</div></div>
        <div class="combo-item"><span class="combo-code">E.2 — Traceability</span><div class="combo-text">Imported raw material traceability → processing → export (EUDR compliant).</div></div>
        <div class="combo-item"><span class="combo-code">E.3 — ERP</span><div class="combo-text">Managing RCN, semi-finished, finished goods inventory by grade; import purchase management.</div></div>
      `,
      cashew_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.2 — Internship</span><div class="combo-text">Internship at cashew processing factories, learning QC/QA operations.</div></div>
        <div class="combo-item"><span class="combo-code">D.3 — Graduate</span><div class="combo-text">Management trainee program for the next generation of cashew factory managers.</div></div>
        <div class="combo-item"><span class="combo-code">D.4 — Global</span><div class="combo-text">Connecting to learn advanced processing models in India, Brazil.</div></div>
      `,
      // Coffee Combo
      coffee_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1.1 — Market Strategy</span><div class="combo-text">Defining Specialty vs Commodity segments for EU/US/Japan markets.</div></div>
        <div class="combo-item"><span class="combo-code">E.2.2 — Buyer Outreach</span><div class="combo-text">Connecting with international Roasters and Coffee Houses. Building Regional Brand Stories.</div></div>
        <div class="combo-item"><span class="combo-code">E.3.1 — Certification</span><div class="combo-text">Implementing Rainforest Alliance, 4C, Organic (USDA/EU) for growing areas.</div></div>
      `,
      coffee_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — QC Standards</span><div class="combo-text">Setting up Cupping Labs, standardizing wet/dry/honey pre-processing.</div></div>
        <div class="combo-item"><span class="combo-code">P.2 — Processing</span><div class="combo-text">Optimizing roasting processes, preserving green beans to export moisture standards.</div></div>
      `,
      coffee_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — ICE Hedging</span><div class="combo-text">Advisory on coffee price risk hedging on London (Robusta) and New York (Arabica) exchanges.</div></div>
        <div class="combo-item"><span class="combo-code">F.2 — Trade Finance</span><div class="combo-text">Arranging working capital for seasonal centralized procurement (Oct-Jan).</div></div>
      `,
      coffee_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — EUDR Ready</span><div class="combo-text">Digitalizing farm maps, managing GPS coordinates to meet EU deforestation regulations.</div></div>
        <div class="combo-item"><span class="combo-code">T.2 — Farm Mgmt</span><div class="combo-text">Digital system for farmer management and cultivation logs.</div></div>
      `,
      coffee_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Q-Grader Path</span><div class="combo-text">Training international standard cupping quality team (Q-Grader).</div></div>
      `,
      // Spices Combo
      spices_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — ASTA Standard</span><div class="combo-text">Building product profiles meeting ASTA, ESA standards for US/EU markets.</div></div>
      `,
      spices_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Steam Sterile</span><div class="combo-text">Standardizing Steam Sterilization processes for export pepper.</div></div>
      `,
      // Seafood Combo
      seafood_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Retail Entry</span><div class="combo-text">Entering Walmart, Costco, AEON chains. Standardizing retail packaging.</div></div>
      `,
      seafood_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Aqua Experts</span><div class="combo-text">Training modern aquaculture technical experts and factory management.</div></div>
      `,
      // Rice Combo
      rice_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Brand Export</span><div class="combo-text">Building branded bagged rice (1kg, 2kg, 5kg) for high-end retail markets.</div></div>
        <div class="combo-item"><span class="combo-code">E.2 — G2G & B2B</span><div class="combo-text">Support for international tender documents, connecting with national food procurement agencies.</div></div>
      `,
      rice_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Milling Opt.</span><div class="combo-text">Optimizing milling, polishing, and color sorting to reduce broken rates and increase recovery.</div></div>
      `,
      rice_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — Inventory Fund</span><div class="combo-text">Raising working capital for large-scale field rice offtake projects.</div></div>
      `,
      rice_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — Paddy Trace</span><div class="combo-text">Traceability system from farmers/cooperatives to factory.</div></div>
      `,
      rice_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Agri Manager</span><div class="combo-text">Training managers for sustainable rice linkage chains.</div></div>
      `,
      // Passion Combo
      passion_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Juice Network</span><div class="combo-text">Connecting with international beverage and concentrate juice factories.</div></div>
      `,
      passion_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — IQF/Puree</span><div class="combo-text">Setting up IQF freezing and passion fruit puree production to Brix standards.</div></div>
      `,
      // Durian Combo
      durian_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — China Channel</span><div class="combo-text">Setting up official distribution channels to China, connecting wholesale markets & retail.</div></div>
      `,
      durian_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Packing House</span><div class="combo-text">Standardizing packing houses according to GACC regulations, managing planting area codes.</div></div>
      `,
      // Cassava Combo
      cassava_cmo_combo: `
        <div class="combo-item"><span class="combo-code">E.1 — Industrial Link</span><div class="combo-text">Connecting raw material supply chains for ethanol and food factories in China/Vietnam.</div></div>
      `,
      cassava_cpo_combo: `
        <div class="combo-item"><span class="combo-code">P.1 — Starch Opt.</span><div class="combo-text">Improving starch separation and cassava chip drying to export moisture standards.</div></div>
      `,
      // Fallbacks
      gen_cfo_combo: `
        <div class="combo-item"><span class="combo-code">F.1 — Working Capital</span><div class="combo-text">Optimizing cash flow and arranging working capital for seasonal procurement projects.</div></div>
        <div class="combo-item"><span class="combo-code">F.2 — Risk Mgmt</span><div class="combo-text">Managing exchange rate risks and agricultural price volatility in international markets.</div></div>
      `,
      gen_cto_combo: `
        <div class="combo-item"><span class="combo-code">T.1 — ERP/MES</span><div class="combo-text">Production and warehouse management systems specialized for the agricultural sector.</div></div>
        <div class="combo-item"><span class="combo-code">T.2 — Traceability</span><div class="combo-text">Traceability solutions meeting strict EU and US standards.</div></div>
      `,
      gen_cdo_combo: `
        <div class="combo-item"><span class="combo-code">D.1 — Succession</span><div class="combo-text">Building succession roadmaps and training core management teams for family businesses.</div></div>
      `,
      // Insights Page
      ins_h1: 'Insights — <span class="accent">Knowledge & Action.</span>',
      ins_lede: 'Market data, expert perspectives, and practical lessons from 3S projects.',
      ins_filter_all: 'All',
      ins_featured: 'Featured Articles',
      ins_aside_topics: 'Topics',
      ins_aside_diag: 'Free Diagnostic',
      ins_aside_news: 'Newsletter',
    }
  };

  let lang = localStorage.getItem('3s_lang') || 'vi';
  const t = i18n[lang];

  function setLang(newLang) {
    localStorage.setItem('3s_lang', newLang);
    window.location.reload();
  }

  const navItems = [
    { id:'solutions',  href:'cmo.html', label: t.solutions, caret:true,
      dropdown: [
        { title: lang==='vi'?'CMO — Thị trường XK':'CMO — Export Markets', sub: lang==='vi'?'Mở rộng kênh khách hàng quốc tế':'Expand international client channels', href: 'cmo.html' },
        { title: lang==='vi'?'CPO — Nhà máy & Sản phẩm':'CPO — Factory & Products', sub: lang==='vi'?'Tối ưu sản xuất & chất lượng':'Optimize production & quality', href: 'cpo.html' },
        { title: lang==='vi'?'CFO — Tài chính':'CFO — Finance', sub: lang==='vi'?'Dòng tiền & cấu trúc vốn':'Cashflow & capital structure', href: 'cfo.html' },
        { title: lang==='vi'?'CTO — Chuyển đổi số':'CTO — Digital Transformation', sub: lang==='vi'?'ERP, Traceability & IoT':'ERP, Traceability & IoT', href: 'cto.html' },
        { title: lang==='vi'?'CDO — Kế thừa & Tổ chức':'CDO — Succession & Org', sub: lang==='vi'?'Phát triển đội ngũ kế cận':'Develop successor teams', href: 'cdo.html' }
      ]
    },
    { id:'industries', href:'ca-phe.html', label: t.industries, caret:true,
      dropdown: [
        { title: lang==='vi'?'Cây điều':'Cashew', sub: lang==='vi'?'Chuỗi giá trị hạt điều':'Cashew value chain', href: 'cay-dieu.html' },
        { title: lang==='vi'?'Cà phê':'Coffee', sub: lang==='vi'?'Specialty & Commodity':'Specialty & Commodity', href: 'ca-phe.html' },
        { title: lang==='vi'?'Sầu riêng':'Durian', sub: lang==='vi'?'Xuất khẩu chính ngạch':'Official export', href: 'sau-rieng.html' },
        { title: lang==='vi'?'Gạo / Lúa nước':'Rice', sub: lang==='vi'?'Nông nghiệp bền vững':'Sustainable agriculture', href: 'gao.html' },
        { title: lang==='vi'?'Hồ tiêu / Quế hồi':'Spices', sub: lang==='vi'?'Gia vị đặc sản':'Specialty spices', href: 'ho-tieu.html' },
        { title: lang==='vi'?'Thuỷ sản':'Seafood', sub: lang==='vi'?'GlobalGAP & ASC':'GlobalGAP & ASC', href: 'thuy-san.html' },
        { title: lang==='vi'?'Chanh dây':'Passion Fruit', sub: lang==='vi'?'Puree & Frozen exports':'Puree & Frozen exports', href: 'chanh-day.html' },
        { title: lang==='vi'?'Mì lát':'Cassava', sub: lang==='vi'?'Chuỗi cung ứng sắn':'Cassava supply chain', href: 'mi-lat.html' }
      ]
    },
    { id:'ecosystem',  href:'he-sinh-thai.html', label: t.ecosystem },
    { id:'insights',   href:'insights.html',     label: t.insights },
    { id:'about',      href:'ve-chung-toi.html', label: t.about },
  ];

  // ── Header ─────────────────────────────────────────────────
  const header = document.createElement('header');
  header.className = 'site-header';
  header.id = 'siteHeader';
  header.innerHTML = `
    <div class="container nav">
      <a href="${pageRoot}index.html" class="logo" aria-label="3S - TechCoop">
        <div class="logo-mark">3S</div>
        <div>
          <span class="name">3S TechCoop</span>
          <span class="tag">${t.tagline}</span>
        </div>
      </a>
      
      <button class="menu-toggle" id="menuToggle" aria-label="Menu">
        <span></span><span></span>
      </button>

      <nav class="nav-links" id="navLinks">
        <div class="nav-mobile-top">
          <div class="lang-switcher">
            <button class="${lang==='vi'?'active':''}" data-lang="vi">VI</button>
            <span class="sep">/</span>
            <button class="${lang==='en'?'active':''}" data-lang="en">EN</button>
          </div>
          <button class="close-menu" id="closeMenu">&times;</button>
        </div>
        ${navItems.map(n => `
          <div class="nav-item">
            <a href="${pageRoot}${n.href}" class="${n.caret?'has-caret':''} ${active===n.id?'is-active':''}">${n.label}</a>
            ${n.dropdown ? `
              <div class="dropdown ${n.dropdown.length > 5 ? 'is-grid' : ''}">
                ${n.dropdown.map(d => `
                  <a href="${pageRoot}${d.href}" class="dropdown-link">
                    <span class="title">${d.title}</span>
                    <span class="sub">${d.sub}</span>
                  </a>
                `).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
        <div class="nav-mobile-cta">
           <a href="${pageRoot}lien-he.html" class="btn btn-primary">${t.contact}</a>
        </div>
      </nav>

      <div class="nav-cta">
        <div class="lang-switcher">
          <button class="${lang==='vi'?'active':''}" data-lang="vi">VI</button>
          <span class="sep">/</span>
          <button class="${lang==='en'?'active':''}" data-lang="en">EN</button>
        </div>
        <a href="${pageRoot}lien-he.html" class="btn btn-primary">${t.contact}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>`;
  document.body.insertBefore(header, document.body.firstChild);

  // ── Footer ─────────────────────────────────────────────────
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="foot-col foot-brand">
          <a href="${pageRoot}index.html" class="logo">
            <div class="logo-mark">3S</div>
            <div>
              <span class="name">3S TechCoop</span>
              <span class="tag">${t.tagline}</span>
            </div>
          </a>
          <p class="blurb">${t.footerBlurb}</p>
          <div class="foot-soc">
            <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-14a5 5 0 0 0-5-5zm-11 19h-3v-11h3v11zm-1.5-12.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zm13.5 12.3h-3v-5.6c0-1.4-.5-2.3-1.7-2.3a1.8 1.8 0 0 0-1.7 1.2 2.3 2.3 0 0 0-.1.8v5.9h-3v-11h3v1.5a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1v6.9z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.7c0-2.4 1.5-3.8 3.7-3.8 1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg></a>
          </div>
        </div>
        <div class="foot-col">
          <h4>${t.solutions}</h4>
          <a href="${pageRoot}cmo.html">CMO — ${lang==='vi'?'Thị trường XK':'Export Markets'}</a>
          <a href="${pageRoot}cpo.html">CPO — ${lang==='vi'?'Nhà máy & sản phẩm':'Factory & Products'}</a>
          <a href="${pageRoot}cfo.html">CFO — ${lang==='vi'?'Tài chính':'Finance'}</a>
          <a href="${pageRoot}cto.html">CTO — ${lang==='vi'?'Chuyển đổi số':'Digital Transformation'}</a>
          <a href="${pageRoot}cdo.html">CDO — ${lang==='vi'?'Kế thừa & tổ chức':'Succession & Org'}</a>
        </div>
        <div class="foot-col">
          <h4>${t.industries}</h4>
          <a href="${pageRoot}cay-dieu.html">${lang==='vi'?'Cây điều':'Cashew'}</a>
          <a href="${pageRoot}ca-phe.html">${lang==='vi'?'Cà phê':'Coffee'}</a>
          <a href="${pageRoot}sau-rieng.html">${lang==='vi'?'Sầu riêng':'Durian'}</a>
          <a href="${pageRoot}gao.html">${lang==='vi'?'Gạo':'Rice'}</a>
          <a href="${pageRoot}ho-tieu.html">${lang==='vi'?'Hồ tiêu':'Spices'}</a>
          <a href="${pageRoot}thuy-san.html">${lang==='vi'?'Thuỷ sản':'Seafood'}</a>
        </div>
        <div class="foot-col">
          <h4>${t.contact}</h4>
          <a href="${pageRoot}ve-chung-toi.html">${t.about}</a>
          <a href="${pageRoot}insights.html">${t.insights}</a>
          <a href="${pageRoot}he-sinh-thai.html">${t.ecosystem}</a>
          <a href="mailto:info@techcoop.vn" style="color:var(--teal);font-weight:700;margin-top:8px">info@techcoop.vn</a>
          <a href="tel:0933482838" style="color:var(--teal);font-weight:700">${t.phone}</a>
        </div>
      </div>
      <div class="foot-base">
        <span>${t.copy}</span>
        <div class="links">
          <a href="#">${t.privacy}</a>
          <a href="#">${t.terms}</a>
          <a href="../Sitemap 3S.html">${t.sitemap}</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(footer);

  // ── Interactive Logic ──────────────────────────────────────
  const menuToggle = header.querySelector('#menuToggle');
  const navLinks = header.querySelector('#navLinks');
  
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  document.body.appendChild(overlay);

  function closeMenu() {
    menuToggle.classList.remove('is-active');
    navLinks.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.body.classList.remove('no-scroll');
  }

  const closeBtn = header.querySelector('#closeMenu');
  if(closeBtn) closeBtn.addEventListener('click', closeMenu);

  menuToggle.addEventListener('click', () => {
    const opening = !navLinks.classList.contains('is-open');
    menuToggle.classList.toggle('is-active');
    navLinks.classList.toggle('is-open');
    overlay.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll', opening);
  });

  overlay.addEventListener('click', closeMenu);

  // Handle mobile dropdowns
  navLinks.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('a');
    if (link.classList.contains('has-caret')) {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          const wasOpen = item.classList.contains('is-mobile-open');
          // close others
          navLinks.querySelectorAll('.nav-item').forEach(i => i.classList.remove('is-mobile-open'));
          if(!wasOpen) item.classList.add('is-mobile-open');
        }
      });
    } else {
      link.addEventListener('click', closeMenu);
    }
  });

  // Lang switcher
  header.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  let lastScrollY = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    
    // Always show at the very top
    if (currentScrollY <= 10) {
      header.classList.remove('is-hidden');
      header.classList.remove('is-scrolled');
      lastScrollY = currentScrollY;
      return;
    }

    header.classList.add('is-scrolled');
    
    // Hide on scroll down, show on scroll up
    // threshold of 5px to avoid jitter
    if (Math.abs(currentScrollY - lastScrollY) > 5) {
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !navLinks.classList.contains('is-open')) {
        header.classList.add('is-hidden');
      } else {
        header.classList.remove('is-hidden');
      }
      lastScrollY = currentScrollY;
    }
  }, { passive: true });

  // ── Reveal-on-scroll logic ───────────────────────────────────
  function initReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: .08 });

    document.querySelectorAll('.reveal:not(.in)').forEach(el => {
      io.observe(el);
    });
  }

  // ── Page Translation Helper ────────────────────────────────
  function applyTranslations() {
    const elements = document.querySelectorAll('[data-t]');
    elements.forEach(el => {
      const key = el.dataset.t;
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else if (el.tagName === 'SELECT') {
           if (el.options[0]) el.options[0].text = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });
  }

  // Execute
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initReveal();
      applyTranslations();
    });
  } else {
    initReveal();
    applyTranslations();
  }
})();
