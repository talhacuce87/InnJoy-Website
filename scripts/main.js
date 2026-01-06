/* InnJoy interactions */
(function(){
  // Intro splash removed
  const layers = document.querySelectorAll('.parallax-layer');
  const track = document.querySelector('.slider-track');
  const prev = document.querySelector('.slider-btn.prev');
  const next = document.querySelector('.slider-btn.next');
  // Hero swap elements
  const securityLink = document.querySelector('.main-nav a[href="security.html"]');
  const guestLink = document.querySelector('.main-nav a[href="guest.html"]');
  const adminLink = document.querySelector('.main-nav a[href="admin.html"]');
  const homeLink = document.querySelector('.main-nav a[href="index.html"]');
  const heroEl = document.getElementById('hero');
  const originalHeroHTML = heroEl ? heroEl.innerHTML : '';

  const securityHeroHTML = `
    <div class="security-hero">
      <div class="hero-bg" aria-hidden="true"></div>

      <div class="container hero-inner">
        <div class="hero-content">
          <span class="hero-tag">
            <span class="dot"></span>
            ENTERPRISE SECURITY STANDARDS
          </span>

          <h1>
            <span class="siyah-metin">Your Data Is</span>
            <span class="mavi-metin"><span class="highlight">Safe</span></span>
          </h1>
            InnJoy, built on Google Firebase, protects your data on a secure and scalable platform.
            Real‑time synchronization, secure authentication and managed infrastructure provide a seamless and reliable experience for both hotels and guests.
            The app combines smooth integrations with modern cloud technologies and high performance.
          </p>


          <div class="hero-badges">
            <span>✔ GDPR Compliant</span>
            <span>✔ HTTPS & TLS</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Empty hero variant (placeholder screen)
  const emptyHeroHTML = `
    <div class="security-hero empty-hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-inner"></div>
    </div>
  `;

  // Admin hero variant (Oteller için)
  const adminHeroHTML = `
    <div class="security-hero admin-hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <span class="hero-tag">
            <span class="dot"></span>
            FOR HOTELS — ADMIN PANEL
          </span>
          <h1>
            <span class="siyah-metin">Manage Your Hotel from One Panel</span>
            <span class="mavi-metin"><span class="highlight">All Services, One Control Point</span></span>
          </h1>
          <p>
            InnJoy is a comprehensive digital solution that lets you manage your entire hotel operation from a single, central platform.
            From reservations to guest requests, from operational coordination to service tracking — all workflows live in one system.
            Real‑time data strengthens communication across teams, accelerates processes and standardizes service quality.
            InnJoy boosts guest satisfaction while giving hotel management a more efficient, controlled and sustainable operation.
          </p>
          <div class="hero-badges">
            <span>✔ Fast Setup</span>
            <span>✔ PNR Management</span>
            <span>✔ Live Monitoring</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Guest hero variant (Konuklar için)
  const guestHeroHTML = `
    <div class="security-hero guest-hero">
      <div class="hero-bg" aria-hidden="true"></div>
      <div class="container hero-inner">
        <div class="hero-content">
          <span class="hero-tag">
            <span class="dot"></span>
            FOR GUESTS — GUEST EXPERIENCE
          </span>
          <h1>
            <span class="siyah-metin">During Your Stay</span>
            <span class="mavi-metin"><span class="highlight">Everything That Matters</span></span>
          </h1>
          <p>
            Menus, reservations, housekeeping requests and indoor hotel maps — all in one app.
            Make the guest experience modern and effortless with simple, intuitive use.
          </p>
          <div class="hero-badges">
            <span>✔ Easy to Use</span>
            <span>✔ Fast Reservations</span>
            <span>✔ Real‑time Notifications</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Intro splash completely removed

  // Simple parallax
  const onScroll = () => {
    // While intro is active, do not react to page scroll
    if (document.body.classList.contains('intro-active')) return;
    const y = window.scrollY || 0;
    layers.forEach((el,i)=>{
      const depth = (i+1)*0.08;
      el.style.transform = `translateY(${y*depth}px)`;
    });
  };
  window.addEventListener('scroll', onScroll, {passive:true});

  // Slider controls
  if (track && prev && next){
    prev.addEventListener('click', ()=>{
      track.scrollBy({left:-300,behavior:'smooth'});
    });
    next.addEventListener('click', ()=>{
      track.scrollBy({left:300,behavior:'smooth'});
    });
  }

  // Hero swap (right-slide), no page reload
  function swapHero(toSecurity = true, customHTML = null){
    if (!heroEl) return;
    heroEl.classList.remove('swap-in');
    heroEl.classList.add('swap-out');
    heroEl.addEventListener('animationend', function handleOut(){
      heroEl.removeEventListener('animationend', handleOut);
      heroEl.innerHTML = customHTML ? customHTML : (toSecurity ? securityHeroHTML : originalHeroHTML);
      heroEl.classList.remove('swap-out');
      heroEl.classList.add('swap-in');
      const backBtn = heroEl.querySelector('#hero-back');
      if (backBtn) backBtn.addEventListener('click', ()=> swapHero(false));
    }, { once:true });
  }

  if (securityLink){
    securityLink.addEventListener('click', (e)=>{ e.preventDefault(); swapHero(true); });
  }
  if (guestLink){
    guestLink.addEventListener('click', (e)=>{ e.preventDefault(); swapHero(true, guestHeroHTML); });
  }
  if (adminLink){
    adminLink.addEventListener('click', (e)=>{ e.preventDefault(); swapHero(true, adminHeroHTML); });
  }
  if (homeLink){
    homeLink.addEventListener('click', (e)=>{ e.preventDefault(); swapHero(false); });
  }

  // Bind CTA button to show empty hero screen for now
  const adminCTA = document.querySelector('.cta-actions .btn.primary[href="admin.html"]');
  if (adminCTA){
    adminCTA.addEventListener('click', (e)=>{ e.preventDefault(); swapHero(true, adminHeroHTML); });
  }
  // Also bind features section admin link, if present
  const adminFeatureLink = document.querySelector('.feature-ctas a[href="admin.html"]');
  if (adminFeatureLink){
    adminFeatureLink.addEventListener('click', (e)=>{ e.preventDefault(); swapHero(true, adminHeroHTML); });
  }

  // Invoice interactions removed

  // App QR modal behavior
  const qrModal = document.getElementById('app-qr-modal');
  const getAppLinks = document.querySelectorAll('a[href="#uygulama"]');
  const openQrModal = () => {
    if (!qrModal) return;
    qrModal.classList.add('open');
    qrModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('panel-active');
    const closeBtn = qrModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  };
  const closeQrModal = () => {
    if (!qrModal) return;
    qrModal.classList.remove('open');
    qrModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('panel-active');
  };
  getAppLinks.forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); openQrModal(); }));
  if (qrModal){
    const closeBtn = qrModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeQrModal);
    qrModal.addEventListener('click', (e) => { if (e.target === qrModal) closeQrModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && qrModal.classList.contains('open')) closeQrModal(); });
  }

  // KVKK modal
  const kvkkModal = document.getElementById('kvkk-modal');
  const kvkkLink = document.getElementById('kvkk-link');
  const openKvkk = () => {
    if (!kvkkModal) return;
    kvkkModal.classList.add('open');
    kvkkModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('panel-active');
    const closeBtn = kvkkModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  };
  const closeKvkk = () => {
    if (!kvkkModal) return;
    kvkkModal.classList.remove('open');
    kvkkModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('panel-active');
  };
  if (kvkkLink) kvkkLink.addEventListener('click', (e) => { e.preventDefault(); openKvkk(); });
  if (kvkkModal){
    const closeBtn = kvkkModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeKvkk);
    kvkkModal.addEventListener('click', (e) => { if (e.target === kvkkModal) closeKvkk(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && kvkkModal.classList.contains('open')) closeKvkk(); });
  }
})();
