import json
import re
import os

with open('extracted_certs_info.json', 'r', encoding='utf-8') as f:
    extracted = json.load(f)

# Map filenames / keywords to certification IDs or titles
# Let's inspect extracted items and build direct mapping logic
mappings = [
    # (keywords in filename or text, cert id, default image path if matched)
    (["pytorch", "coursera by38uiy"], 1, "images/cert_coursera_by38uiyk0z9h.png"),
    (["rnn", "recurrent neural", "coursera dsbxl8"], 2, "images/cert_coursera_dsbxl8esgwaw.png"),
    (["generative ai", "aws-educate-introduction-to-generative-ai"], 3, "images/cert_aws_educate_introduction_to_generative_ai_training_.png"),
    (["machine learning foundations", "aws-educate-machine-learning-foundations"], 4, "images/cert_aws_educate_machine_learning_foundations_training_b.png"),
    (["crash course on python", "coursera fpqfa3"], 5, "images/cert_coursera_fpqfa32ahnpn.png"),
    (["artificial intelligence essentials", "ibmdesign20250926"], 6, "images/cert_ibmdesign20250926_31_xq8bz6.png"),
    (["claude", "anthropic"], 8, "images/claude.png"),
    (["database", "what is sql", "oracle", "wingspan"], 9, "images/cert_certificate.png"),
    (["ethical hacker", "ethical_hacker_certificate", "ethicak hacker"], 11, "images/cert_ethical_hacker_certificate.png"),
    (["cyber threat management", "cyberthreatmanagement"], 12, "images/cert_cyber_threat_management_certificate_jayasree2403206_gmail_com_c101c35a_74cc_4956_bc7a_78e6c7c1c65c.png"),
    (["red hat", "red-hat-system"], 13, "images/cert_red_hat_system_administration_ii_rh134_rha_ver_9_3.png"),
    (["comptia", "microsoft operating system installation"], 14, "images/cert_comptia_a_220_1002_microsoft_operating_system_installation_upgrade.png"),
    (["computer networks", "jayasree computer networks"], 15, "images/cert_jayasree_computer_networks.png"),
    (["digital forensics concepts", "coursera v8yt96"], 16, "images/cert_coursera_v8yt961nzpov.png"),
    (["windows os forensics", "coursera x0gl9j"], 17, "images/cert_coursera_x0gl9jpwnalv.png"),
    (["windows registry forensics", "coursera xpecy8"], 18, "images/cert_coursera_xpecy893bck1.png"),
    (["cloud 101", "coursera yt82pn"], 19, "images/cert_coursera_yt82png7tx72.png"),
    (["novitech", "30 days masterclass"], 20, "images/cert_novitech.png"),
    (["imarticus", "jayasree imartiies"], 21, "images/cert_jayasree_imartiies.png"),
    (["uipath", "automation developer associate"], 22, "images/cert_automation_developer_associate_training__v2023_10__for_ict_academy_jayasree_r_en_us_diploma.png"),
    (["ux design", "wingspan"], 23, "images/cert_courseattendance20251016_31_ze0n2s.png"),
    (["iot", "jayasree iot college"], 24, "images/cert_jayasree_iot_college.png"),
    (["software engineering job simulation", "forage"], 26, "images/cert_1_9ba993c7_99a9_418b_807c_2362cde9b576.png"),
    (["email marketing", "jayasree marketing"], 27, "images/cert_jayasree_marketing.png"),
    (["seo", "guvi seo"], 28, "images/cert_jayasree_guvi_seo.png"),
    (["leadership developement", "te leadership"], 29, "images/cert_jayasree_te_leadership_developement.png"),
    (["decision making", "te decision"], 30, "images/cert_jayasree_te_decision_making.png"),
    (["bridge", "te bridge"], 31, "images/cert_jayasree_te_bridge.png"),
    (["iitm foundation", "iit madras"], 32, "images/cert_iitm_foundation.png"),
    (["guvi python", "jayasree guvi python"], 33, "images/cert_jayasree_guvi_python.png"),
    (["data labeling", "forage"], 34, "images/forage.png")
]

# Let's inspect matches and build updated ALL_CERTIFICATIONS array in script.js
print("Matching logic ready.")
