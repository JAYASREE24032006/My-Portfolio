import json

with open("detailed_pdf_analysis.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for item in data:
    if item["ext"] == ".pdf" and len(item["text"]) > 10:
        filename = item["filename"]
        text = item["text"]
        
        # Identify title keyword
        title = "UNKNOWN"
        if "PyTorch Ultimate" in text:
            title = "PyTorch Ultimate 2024 Specialization"
        elif "Building and Training Neural Networks with PyTorch" in text:
            title = "Building and Training Neural Networks with PyTorch"
        elif "Advanced PyTorch" in text:
            title = "Advanced PyTorch Techniques and Applications"
        elif "Windows Registry Forensics" in text:
            title = "Windows Registry Forensics"
        elif "Windows OS Forensics" in text:
            title = "Windows OS Forensics"
        elif "Digital Forensics Concepts" in text:
            title = "Digital Forensics Concepts"
        elif "Crash Course on Python" in text:
            title = "Crash Course on Python"
        elif "Build & Train RNNs" in text:
            title = "Build & Train RNNs"
        elif "Fundamentals of Database" in text:
            title = "Fundamentals of Database : What is SQL?"
        elif "Internet of Things" in text:
            title = "Introduction to Internet of Things (NPTEL)"
        elif "Automation Developer Associate" in text:
            title = "Automation Developer Associate Training (UiPath)"
        elif "CompTIA A+" in text:
            title = "CompTIA A+ 220-1002"
        elif "Red Hat System Administration II" in text:
            title = "Red Hat System Administration II"
        elif "Cyber Threat Management" in text:
            title = "Cyber Threat Management (Cisco)"
        elif "Ethical Hacker" in text:
            title = "Ethical Hacker (Cisco)"
        elif "Software Engineering Job Simulation" in text:
            title = "Software Engineering Job Simulation (Forage)"
        elif "IBM Z Datathon" in text:
            title = "IBM Z Datathon 2025"
            
        print(f"File: {filename} -> Verified Title: {title}")
