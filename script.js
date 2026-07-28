/* ═══════════════════════════════════════════════════
   JAYASREE R PORTFOLIO — script.js
   Grouped Certifications Catalog · Type-Only Terminal Auto Redirect ·
   Project Details Modal & Overview Engine · Resume PDF Auto-Open
   ═══════════════════════════════════════════════════ */

'use strict';

// DETAILED PROJECT DATA FOR THE PROJECT OVERVIEW MODAL
const PROJECT_DETAILS = {
  talentgrid: {
    title: "TALENTGRID — Recruitment Workflow & Analytics Platform",
    tagline: "Multi-tenant recruitment engine with custom Neobrutalist UI, role-based dashboards, and live Chart.js funnel metrics.",
    overview: "TALENTGRID is an enterprise-grade recruitment management platform designed to streamline corporate hiring. It bridges candidates, corporate recruiters, and system administrators into a single unified workspace with custom access controls and real-time candidate progression metrics.",
    features: [
      "Multi-tenant Role Dashboards: Distinct operational views for System Admins, Corporate Recruiters, and Candidates.",
      "Job Eligibility & Screening Engine: Automated applicant eligibility evaluation based on GPA, skill tags, and graduation year.",
      "Live Funnel Analytics: Interactive Chart.js visualization tracking applicants from Application Submitted → Screened → Interviewed → Hired.",
      "SQLAlchemy Relational Database: High-performance schema managing dynamic application workflows, partner company requests, and candidate records."
    ],
    tech: ["Python", "Flask", "SQLite", "Flask-SQLAlchemy", "Jinja2", "Bootstrap 5", "Chart.js", "JavaScript"],
    github: "https://github.com/JAYASREE24032006"
  },
  trekora: {
    title: "TREKORA — Adventure Logistics Platform",
    tagline: "Operational logistics and participant management system for adventure trekking organizations.",
    overview: "TREKORA is a specialized adventure logistics platform that replaces manual trek coordination with an automated, role-based web application. It orchestrates booking histories, guide allocations, route inventory tracking, and participant safety tracking.",
    features: [
      "Role-Based Access System: Separate interfaces for Trek Organizers, Guides, Staff Members, and Participants.",
      "Dynamic Route Inventory: Real-time route allocation, difficulty classification, and group capacity management.",
      "Trek Lifecycle Management: Systemic control states enabling staff to manage active trek schedules and participant check-ins.",
      "Unified Search & Status Dashboard: Admin control panel providing cross-entity search and live logistics monitoring."
    ],
    tech: ["Python", "Flask", "SQLite", "Flask-SQLAlchemy", "Jinja2", "Bootstrap 5", "JavaScript"],
    github: "https://github.com/JAYASREE24032006"
  },
  infiniticook: {
    title: "INFINITICOOK — Recipe Management Platform",
    tagline: "Full-stack multi-cuisine recipe portal created during CIRF Technology Internship under Dr. D. Doreen Hephzibah Miriam.",
    overview: "INFINITICOOK is an interactive web platform developed during Jayasree's CIRF Technology inplant internship. It provides structured recipe discovery across Indian and international cuisines with multi-criteria category filtering and user recipe contribution.",
    features: [
      "Multi-Cuisine Recipe Catalog: Structured pages for Sambar, Mushroom Biryani, Mango Lassi, Chicken 65, Idli, Chapathi, Pulao, and more.",
      "User Account & Profile System: Login, registration, user profile management, and saved recipe bookmarking (`myrecipes.html`).",
      "Recipe Submission Engine: Interactive form (`submit.html`) allowing users to upload custom recipes, ingredients list, and cooking instructions.",
      "Modular Database Architecture: Relational MySQL database schema designed for efficient query execution and rapid data rendering."
    ],
    tech: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/JAYASREE24032006"
  },
  shield: {
    title: "SHIELD — Agentic AI Single Sign-On",
    tagline: "Agentic AI–driven SSO security system with real-time session tracking and forced global logout.",
    overview: "SHIELD is an advanced security authentication architecture combining Agentic AI monitoring with centralized Single Sign-On (SSO). It protects enterprise web applications against session hijacking, credential abuse, and unauthorized access.",
    features: [
      "Agentic AI Anomaly Monitor: Autonomous security agents evaluating real-time login behavior, IP shifts, and session risks.",
      "Forced Global Logout: Instant cross-application session revocation triggered automatically upon threat detection.",
      "Distributed Session State: High-speed session token tracking using Redis in-memory storage and JWT payload validation.",
      "Unified Single Sign-On: Centralized identity provider allowing seamless single login across all connected microservices."
    ],
    tech: ["Python", "Flask", "JWT", "Redis", "React", "Node.js", "Express"],
    github: "https://github.com/JAYASREE24032006"
  }
};

// CERTIFICATIONS CATALOG CATEGORIZED WITH RICH DESCRIPTIONS
const ALL_CERTIFICATIONS = [
  {
    "id": 1,
    "title": "PyTorch Ultimate 2024: Basics to Cutting-Edge Specialization",
    "org": "Coursera / Packt",
    "cat": "ai",
    "image": "images/cert_coursera_x0gl9jpwnalv.png",
    "desc": "3-Course Specialization covering PyTorch Foundations, Neural Network Architecture, and Advanced PyTorch Techniques."
  },
  {
    "id": 2,
    "title": "Building and Training Neural Networks with PyTorch",
    "org": "Packt (via Coursera)",
    "cat": "ai",
    "image": "images/cert_coursera_v8yt961nzpov.png",
    "desc": "Mastered PyTorch tensor operations, autograd, backpropagation, and deep neural network training pipelines."
  },
  {
    "id": 3,
    "title": "Advanced PyTorch Techniques and Applications",
    "org": "Packt (via Coursera)",
    "cat": "ai",
    "image": "images/cert_coursera_fpqfa32ahnpn.png",
    "desc": "Advanced training in custom loss functions, transfer learning, model optimization, and deployment workflows."
  },
  {
    "id": 4,
    "title": "Build & Train RNNs: Neural Network Components",
    "org": "Skillsoft / Wingspan",
    "cat": "ai",
    "image": "images/cert_1_9ba993c7_99a9_418b_807c_2362cde9b576.png",
    "desc": "Mastered Recurrent Neural Network (RNN) sequence modeling, LSTM memory cells, and Gated Recurrent Units (GRU)."
  },
  {
    "id": 5,
    "title": "AWS Educate - Introduction to Generative AI",
    "org": "AWS Educate",
    "cat": "ai",
    "image": "images/cert_aws_educate_introduction_to_generative_ai_training.png",
    "desc": "Explored foundational LLM concepts, prompt engineering principles, fine-tuning methodologies, and AWS Bedrock."
  },
  {
    "id": 6,
    "title": "AWS Educate - Machine Learning Foundations",
    "org": "AWS Educate",
    "cat": "ai",
    "image": "images/cert_aws_educate_machine_learning_foundations_training_b.png",
    "desc": "Core cloud machine learning concepts including data preparation, feature engineering, and SageMaker model training."
  },
  {
    "id": 7,
    "title": "Crash Course on Python",
    "org": "Google (via Coursera)",
    "cat": "ai",
    "image": "images/cert_coursera_yt82png7tx72.png",
    "desc": "Mastered core Python scripting, object-oriented programming principles, data structures, and algorithmic logic."
  },
  {
    "id": 8,
    "title": "Artificial Intelligence Essentials V2",
    "org": "IBM SkillsBuild / Credly",
    "cat": "ai",
    "image": "images/cert_ibmdesign20250926_31_xq8bz6.png",
    "desc": "Comprehensive overview of AI ethics, supervised/unsupervised learning algorithms, NLP, and computer vision."
  },
  {
    "id": 9,
    "title": "AI for India 2.0 Certification",
    "org": "GUVI / Skill India",
    "cat": "ai",
    "image": "images/cert_jayasree_guvi_ai_for_india.png",
    "desc": "Certified participant in GUVI & Ministry of Skill Development national AI literacy initiative."
  },
  {
    "id": 10,
    "title": "Claude Code in Action",
    "org": "Anthropic",
    "cat": "ai",
    "image": "images/claude.png",
    "desc": "Certified competency in Agentic AI programming workflows, prompt design, automated code synthesis, and LLM tools."
  },
  {
    "id": 11,
    "title": "Fundamentals of Database: What is SQL?",
    "org": "Infosys Springboard",
    "cat": "data-science",
    "image": "images/cert_8247073_85695421745502257537.png",
    "desc": "Relational database fundamentals covering SQL queries, multi-table JOIN operations, indexing, and normalization."
  },

  {
    "id": 13,
    "title": "Data Labeling Job Simulation",
    "org": "Forage",
    "cat": "data-science",
    "image": "images/forage.png",
    "desc": "Practical task execution in Batch Labeling & PII Awareness, Review, Quality Control & Iteration."
  },
  {
    "id": 14,
    "title": "Ethical Hacker Certification",
    "org": "Cisco Networking Academy",
    "cat": "ethical-hacking",
    "image": "images/cert_ethical_hacker_certificate.png",
    "desc": "Certified in penetration testing methodologies, network reconnaissance, vulnerability exploitation, and security defense."
  },
  {
    "id": 15,
    "title": "Cyber Threat Management",
    "org": "Cisco Networking Academy / SEC",
    "cat": "cybersecurity",
    "image": "images/cert_cyber_threat_management_certificate_jayasree2403206_gmail_com_c101c35a_74cc_4956_bc7a_78e6c7c1c65c.png",
    "desc": "Studied cyber incident response frameworks, threat intelligence gathering, firewall configuration, and network perimeter protection."
  },
  {
    "id": 16,
    "title": "Red Hat System Administration II (RH134 v9.3)",
    "org": "Red Hat, Inc.",
    "cat": "cybersecurity",
    "image": "images/cert_courseattendance20251016_31_ze0n2s.png",
    "desc": "Advanced Enterprise Linux administration: shell scripting, user permission controls, SELinux policy management, and system services."
  },
  {
    "id": 17,
    "title": "CompTIA A+ 220-1002: Microsoft OS Installation",
    "org": "Skillsoft",
    "cat": "cybersecurity",
    "image": "images/cert_comptia_a_220_1002_microsoft_operating_system_installation_upgrade.png",
    "desc": "Operating system security management: Windows installation, user access controls, file system permissions, and network troubleshooting."
  },
  {
    "id": 18,
    "title": "Python Essentials 1",
    "org": "Cisco Networking Academy",
    "cat": "cybersecurity",
    "image": "images/cert_python_essentials_1_certificate_jayasree2403206_gmail_com_8888169b_de01_4507_968d_9b66513ba74d.png",
    "desc": "Verified completion of Cisco Networking Academy Python core programming & algorithmic logic module."
  },
  {
    "id": 19,
    "title": "Basics of Computer Networking",
    "org": "Great Learning Academy",
    "cat": "cybersecurity",
    "image": "images/cert_jayasree_computer_networks.png",
    "desc": "Foundational computer networking: OSI model layers, TCP/IP protocol suite, IP routing, subnetting, and DNS architectures."
  },
  {
    "id": 20,
    "title": "Digital Forensics Concepts",
    "org": "Infosec (via Coursera)",
    "cat": "forensics",
    "image": "images/cert_coursera_xpecy893bck1.png",
    "desc": "Core digital forensics techniques: evidence collection chain of custody, digital disk imaging, file system artifact analysis, and reporting."
  },
  {
    "id": 21,
    "title": "Windows OS Forensics",
    "org": "Infosec (via Coursera)",
    "cat": "forensics",
    "image": "images/cert_coursera_dsbxl8esgwaw.png",
    "desc": "Investigating Windows operating system artifacts: event log auditing, prefetch file examination, shortcut link parsing, and memory dumps."
  },
  {
    "id": 22,
    "title": "Windows Registry Forensics",
    "org": "Infosec (via Coursera)",
    "cat": "forensics",
    "image": "images/cert_coursera_by38uiyk0z9h.png",
    "desc": "Registry hive analysis: investigating SAM database, software execution keys, connected USB device logs, and persistent malware keys."
  },
  {
    "id": 23,
    "title": "30 Days MasterClass in Full Stack Development",
    "org": "NoviTech R&D",
    "cat": "web-cloud",
    "image": "images/cert_novitech.png",
    "desc": "30-day intensive web development boot camp building full-stack applications with modern frontend frameworks and backend databases."
  },
  {
    "id": 24,
    "title": "Hands-on Workshop: Full Stack Intro - Node.JS",
    "org": "Imarticus Learning",
    "cat": "web-cloud",
    "image": "images/cert_jayasree_imartiies.png",
    "desc": "Hands-on web application development using Node.js event-driven server runtime, Express routing, and MongoDB database integrations."
  },
  {
    "id": 25,
    "title": "Automation Developer Associate Training",
    "org": "UiPath / ICT Academy",
    "cat": "web-cloud",
    "image": "images/cert_automation_developer_associate_training_v2023_10_for_ict_academy_jayasree_r_en_us_diploma.png",
    "desc": "Robotic Process Automation (RPA) workflow design: automation UI selector setup, data scraping, Excel automation, and orchestration."
  },
  {
    "id": 26,
    "title": "UX Design for Web Developers",
    "org": "Infosys Springboard",
    "cat": "web-cloud",
    "image": "images/cert_jayasree_web.png",
    "desc": "User-centered interface design principles: wireframing, responsive layouts, color accessibility, and micro-interaction design."
  },
  {
    "id": 27,
    "title": "Introduction to Internet of Things (NPTEL)",
    "org": "NPTEL (IIT)",
    "cat": "web-cloud",
    "image": "images/cert_212223040074_jayasree_r.png",
    "desc": "12-week NPTEL course covering IoT sensor architectures, microcontroller protocols (MQTT, HTTP), edge computing, and cloud analytics."
  },
  {
    "id": 28,
    "title": "Software Engineering Job Simulation",
    "org": "Forage",
    "cat": "web-cloud",
    "image": "images/cert_e6mchjdksqyh79moz_sj7teml583qayphxd_68c3d8d6f3a12726370d7693_1759731529661_completion_certificate.png",
    "desc": "Simulated software engineering tasks: writing clean modular code, Git version control workflows, unit testing, and code reviews."
  },
  {
    "id": 29,
    "title": "SEO Certification",
    "org": "GUVI / Google for Edu",
    "cat": "web-cloud",
    "image": "images/cert_jayasree_guvi_seo.png",
    "desc": "Search Engine Optimization techniques: keyword research, web page performance tuning, meta tags setup, and web traffic analytics."
  },
  {
    "id": 30,
    "title": "'Leadership Development' Virtual Training",
    "org": "Team Everest",
    "cat": "soft-skills",
    "image": "images/cert_jayasree_te_leadership_developement.png",
    "desc": "Leadership and team management training: group facilitation, active listening, conflict resolution, and collaborative goal alignment."
  },
  {
    "id": 31,
    "title": "'Decision Making' Virtual Training",
    "org": "Team Everest",
    "cat": "soft-skills",
    "image": "images/cert_jayasree_te_decision_making.png",
    "desc": "Structured problem-solving strategies: root cause evaluation, risk assessment frameworks, and data-backed decision modeling."
  },
  {
    "id": 32,
    "title": "'Bridge' Virtual Training",
    "org": "Team Everest",
    "cat": "soft-skills",
    "image": "images/cert_jayasree_te_bridge.png",
    "desc": "Professional communication skills: technical documentation, team presentation skills, and cross-functional project collaboration."
  },
  {
    "id": 33,
    "title": "IITM Foundation Program Certificate",
    "org": "IIT Madras",
    "cat": "iitm",
    "image": "images/cert_iitm_foundation.png",
    "desc": "Completed 8 course foundation requirements at IIT Madras: Mathematics, Statistics, Python Programming, and Computational Thinking."
  },
  {
    "id": 34,
    "title": "Python Core Certification",
    "org": "GUVI",
    "cat": "iitm",
    "image": "images/cert_jayasree_guvi_python.png",
    "desc": "Verified completion of GUVI Python core programming module: functions, file I/O operations, and data manipulation."
  }
];

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. THEME TOGGLE ────────────────────────────── */
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('jayasree-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('jayasree-theme', newTheme);
    });
  }


  /* ── 2. NAVBAR SCROLL & HAMBURGER ───────────────── */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }


  /* ── 3. HERO TYPEWRITER ─────────────────────────── */
  const typedTextSpan = document.getElementById('typedText');
  const textArray = [
    'Machine Learning Systems',
    'AI-Driven Applications',
    'Full-Stack Web Engines',
    'Data Science and Analytics',
    'Software Engineering Workflows',
    'Mathematical Models',
  ];
  let typingIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!typedTextSpan) return;
    const currentText = textArray[typingIndex];

    if (isDeleting) {
      typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % textArray.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }
  type();


  /* ── 4. TYPE-ONLY TERMINAL WITH AUTO REDIRECT ───── */
  const termInput = document.getElementById('termInput');
  const terminalHistory = document.getElementById('terminalHistory');
  const terminalBody = document.getElementById('terminalBody');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const commands = {
    help: `Available Commands to Type & Redirect:
  • <span class="c-func">bio</span>       - View Jayasree's dual degree summary (Scrolls to About)
  • <span class="c-func">skills</span>    - Core technical capabilities (Scrolls to Skills)
  • <span class="c-func">projects</span>  - Key full-stack & AI builds (Scrolls to Projects)
  • <span class="c-func">certs</span>     - View certifications catalog (Scrolls to Certifications)
  • <span class="c-func">iitm</span>      - IIT Madras Diploma & Badges (Scrolls to Education)
  • <span class="c-func">contact</span>   - Contact details (Scrolls to Contact)
  • <span class="c-func">clear</span>     - Clear terminal screen`,
    
    bio: `Jayasree R: Dual-Degree CS & Data Science Scholar (Redirecting to #about...)`,
    skills: `Tech Stack Overview (Redirecting to #skills...)`,
    projects: `Key Featured Projects (Redirecting to #projects...)`,
    certs: `Catalog Loaded (Redirecting to #certifications...)`,
    certifications: `Catalog Loaded (Redirecting to #certifications...)`,
    iitm: `IIT Madras Portal Credentials & Honors (Redirecting to #education...)`,
    education: `Academic Credentials (Redirecting to #education...)`,
    contact: `Get In Touch (Redirecting to #contact...)`
  };

  function executeCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      terminalHistory.innerHTML = '';
      if (termInput) termInput.value = '';
      return;
    }

    const output = commands[cmd] || `Command not recognized: '${cmd}'. Type <span class="c-func">help</span> to view available commands.`;

    const entry = document.createElement('div');
    entry.className = 'term-entry';
    entry.innerHTML = `
      <div class="term-line"><span class="c-prompt">jayasree@dev:~$</span> ${cmd}</div>
      <div class="term-line output-text" style="padding-left: 0.8rem; margin-block: 0.2rem;">${output}</div>
    `;

    terminalHistory.appendChild(entry);
    if (termInput) termInput.value = '';
    if (terminalBody) terminalBody.scrollTop = terminalBody.scrollHeight;

    if (cmd === 'projects') setTimeout(() => scrollToSection('projects'), 300);
    if (cmd === 'skills') setTimeout(() => scrollToSection('skills'), 300);
    if (cmd === 'certs' || cmd === 'certifications') setTimeout(() => scrollToSection('certifications'), 300);
    if (cmd === 'contact') setTimeout(() => scrollToSection('contact'), 300);
    if (cmd === 'bio' || cmd === 'about') setTimeout(() => scrollToSection('about'), 300);
    if (cmd === 'iitm' || cmd === 'education') setTimeout(() => scrollToSection('education'), 300);
  }

  if (termInput) {
    termInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') executeCommand(termInput.value);
    });
  }


  /* ── 5. PROJECT OVERVIEW MODAL HANDLER ──────────── */
  const projectModal = document.getElementById('projectModal');
  const projModalTitle = document.getElementById('projModalTitle');
  const projModalBody = document.getElementById('projModalBody');
  const closeProjModalBtn = document.getElementById('closeProjModalBtn');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');

  function openProjectModal(key) {
    const p = PROJECT_DETAILS[key];
    if (!p || !projectModal) return;

    projModalTitle.textContent = p.title;

    projModalBody.innerHTML = `
      <div class="proj-modal-tagline">${p.tagline}</div>
      
      <div class="proj-modal-section">
        <h4>System Overview</h4>
        <p>${p.overview}</p>
      </div>

      <div class="proj-modal-section">
        <h4>Key Features &amp; Modules</h4>
        <ul>
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      <div class="proj-modal-section">
        <h4>Technologies Used</h4>
        <div class="proj-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    `;

    projectModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project');
      openProjectModal(key);
    });
  });

  if (closeProjModalBtn) closeProjModalBtn.addEventListener('click', closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener('click', e => {
      if (e.target === projectModal) closeProjectModal();
    });
  }


  /* ── 6. RENDER ALL GROUPED CERTIFICATIONS ───────── */
  const certGrid = document.getElementById('certGrid');

  function renderAllCertifications() {
    if (!certGrid) return;
    certGrid.innerHTML = '';

    ALL_CERTIFICATIONS.forEach(c => {
      const card = document.createElement('div');
      card.className = 'cert-card reveal visible';
      card.setAttribute('data-category', c.cat);

      card.innerHTML = `
        <div class="card-image-box cert-img">
          ${c.image ? `<img src="${c.image}" alt="${c.title}" />` : `<div class="upload-placeholder"><span>📜 Verified Credential</span></div>`}
        </div>
        <div class="cert-badge">${c.org}</div>
        <h3>${c.title}</h3>
        <p class="cert-desc">${c.desc}</p>
      `;
      certGrid.appendChild(card);
    });
  }
  renderAllCertifications();


  /* ── 7. CERTIFICATION SEARCH & GROUP FILTER ─────── */
  const certSearch = document.getElementById('certSearch');
  const certTabs = document.querySelectorAll('.cert-tab');

  let activeFilter = 'all';

  function filterCertifications() {
    const certCards = document.querySelectorAll('.cert-card');
    const query = certSearch ? certSearch.value.trim().toLowerCase() : '';

    certCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const text = card.textContent.toLowerCase();

      const matchesFilter = activeFilter === 'all' || category === activeFilter;
      const matchesSearch = !query || text.includes(query);

      if (matchesFilter && matchesSearch) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  certTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      certTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter');
      filterCertifications();
    });
  });

  if (certSearch) {
    certSearch.addEventListener('input', filterCertifications);
  }


  /* ── 8. RESUME ACTION (AUTO-OPENS RESUME PDF + MODAL) ─ */
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');

  function openCV() {
    window.open('Jayasree_R_Resume.pdf', '_blank');

    if (resumeModal) {
      resumeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCV() {
    if (resumeModal) {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openCV);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openCV);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeCV);

  if (resumeModal) {
    resumeModal.addEventListener('click', e => {
      if (e.target === resumeModal) closeCV();
    });
  }


  /* ── 9. SCROLL REVEAL OBSERVER ───────────────────── */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));


  /* ── 10. STAT METRIC COUNTERS ────────────────────── */
  const metricNums = document.querySelectorAll('.metric-num');
  let counted = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        metricNums.forEach(numEl => {
          if (!numEl.hasAttribute('data-count')) return;
          const target = parseFloat(numEl.getAttribute('data-count'));
          const isFloat = target % 1 !== 0;
          let current = 0;
          const increment = target / 50;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              numEl.textContent = isFloat ? target.toFixed(1) : Math.round(target);
              clearInterval(timer);
            } else {
              numEl.textContent = isFloat ? current.toFixed(1) : Math.round(current);
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.5 });

  const metricsContainer = document.querySelector('.hero-metrics');
  if (metricsContainer) countObserver.observe(metricsContainer);


  /* ── 11. CONTACT FORM HANDLING (DIRECT WHATSAPP & EMAIL) ── */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        formStatus.style.color = '#ef4444';
        formStatus.textContent = 'Please fill out all fields.';
        return;
      }

      formStatus.style.color = '#10b981';
      formStatus.textContent = 'Opening WhatsApp to send your message directly to Jayasree... 💬';

      // Format WhatsApp message text
      const waText = `Hi Jayasree,\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n\n*Message:*\n${message}`;
      const waUrl = `https://api.whatsapp.com/send?phone=918939238010&text=${encodeURIComponent(waText)}`;

      // Send background notification via FormSubmit
      fetch('https://formsubmit.co/ajax/jayasree2403206@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Subject: subject,
          Message: message,
          _subject: `New Portfolio Message from ${name}: ${subject}`
        })
      }).catch(err => console.log('Background email trigger:', err));

      // Redirect directly to WhatsApp after 500ms
      setTimeout(() => {
        window.open(waUrl, '_blank');
        contactForm.reset();
      }, 500);
    });
  }

});
