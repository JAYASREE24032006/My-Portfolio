import os
import fitz
import json

CERT_DIR = r"c:\Users\jayas\Downloads\portfolio\Jayasree Certificate"
file_analysis = []

for filename in sorted(os.listdir(CERT_DIR)):
    filepath = os.path.join(CERT_DIR, filename)
    if os.path.isdir(filepath):
        continue
    
    ext = os.path.splitext(filename)[1].lower()
    full_text = ""
    
    if ext == ".pdf":
        try:
            doc = fitz.open(filepath)
            for page in doc:
                full_text += page.get_text() + "\n"
        except Exception as e:
            full_text = f"Error: {e}"
            
    clean_text = " ".join(full_text.split())
    
    file_analysis.append({
        "filename": filename,
        "ext": ext,
        "text": clean_text
    })

with open("detailed_pdf_analysis.json", "w", encoding="utf-8") as f:
    json.dump(file_analysis, f, indent=2)

print(f"Analyzed {len(file_analysis)} files.")
