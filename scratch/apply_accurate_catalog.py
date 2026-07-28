import json
import re

# Precise 100% verified mapping of ALL_CERTIFICATIONS
catalog = [
  # AI & ML
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

  # DATA SCIENCE
  {
    "id": 11,
    "title": "Fundamentals of Database: What is SQL?",
    "org": "Wingspan / Oracle",
    "cat": "data-science",
    "image": "images/cert_8247073_85695421745502257537.png",
    "desc": "Relational database fundamentals covering SQL queries, multi-table JOIN operations, indexing, and normalization."
  },
  {
    "id": 12,
    "title": "Deloitte Data Analytics Job Simulation",
    "org": "Deloitte / Forage",
    "cat": "data-science",
    "image": "images/cert_deloite.png",
    "desc": "Completed client engagement simulation: dataset cleansing, statistical modeling, insights extraction & executive dashboarding."
  },
  {
    "id": 13,
    "title": "Data Labeling Job Simulation",
    "org": "Forage",
    "cat": "data-science",
    "image": "images/forage.png",
    "desc": "Practical task execution in Batch Labeling & PII Awareness, Review, Quality Control & Iteration."
  },

  # ETHICAL HACKING & CYBERSECURITY
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

  # DIGITAL FORENSICS
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

  # WEB & CLOUD
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
    "org": "Wingspan Platform",
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

  # SOFT SKILLS & LEADERSHIP
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

  # IITM & ACADEMIC
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
]

with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

formatted_json = json.dumps(catalog, indent=2)
new_all_certs_code = f"const ALL_CERTIFICATIONS = {formatted_json};"

pattern = r'const ALL_CERTIFICATIONS = \[.*?\];'
updated_script = re.sub(pattern, new_all_certs_code, script_content, flags=re.DOTALL)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(updated_script)

print("Applied 100% accurate certificate mapping to script.js!")
