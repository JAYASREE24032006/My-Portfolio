import os
import re
import fitz  # PyMuPDF
import json
import shutil

CERT_DIR = r"c:\Users\jayas\Downloads\portfolio\Jayasree Certificate"
OUTPUT_IMG_DIR = r"c:\Users\jayas\Downloads\portfolio\images"

os.makedirs(OUTPUT_IMG_DIR, exist_ok=True)

files = os.listdir(CERT_DIR)

file_info = []

for filename in files:
    filepath = os.path.join(CERT_DIR, filename)
    if os.path.isdir(filepath):
        continue
    
    ext = os.path.splitext(filename)[1].lower()
    text = ""
    out_img = ""
    
    if ext == ".pdf":
        try:
            doc = fitz.open(filepath)
            for page in doc:
                text += page.get_text() + " "
            
            # Save first page as image
            if len(doc) > 0:
                clean_name = re.sub(r'[^a-zA-Z0-9]', '_', os.path.splitext(filename)[0]).strip('_').lower()
                clean_name = re.sub(r'_+', '_', clean_name)
                img_name = f"cert_{clean_name}.png"
                img_path = os.path.join(OUTPUT_IMG_DIR, img_name)
                
                page = doc[0]
                pix = page.get_pixmap(dpi=150)
                pix.save(img_path)
                out_img = f"images/{img_name}"
        except Exception as e:
            text = f"Error reading PDF: {e}"
    elif ext in [".png", ".jpg", ".jpeg"]:
        clean_name = re.sub(r'[^a-zA-Z0-9]', '_', os.path.splitext(filename)[0]).strip('_').lower()
        clean_name = re.sub(r'_+', '_', clean_name)
        img_name = f"cert_{clean_name}{ext}"
        img_path = os.path.join(OUTPUT_IMG_DIR, img_name)
        shutil.copy2(filepath, img_path)
        out_img = f"images/{img_name}"
        text = filename  # Use filename as text indicator
    else:
        continue
        
    file_info.append({
        "file": filename,
        "ext": ext,
        "text_snippet": text[:300].replace('\n', ' '),
        "out_img": out_img
    })

print(f"Processed {len(file_info)} files.")
with open("extracted_certs_info.json", "w", encoding="utf-8") as f:
    json.dump(file_info, f, indent=2)

print("Saved extracted_certs_info.json")
