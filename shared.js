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

  // Execute
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
