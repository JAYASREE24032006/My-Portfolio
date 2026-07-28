import json

with open("detailed_pdf_analysis.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print("=== ALL PDF CERTIFICATES WITH EXTRACTED TEXT ===")
for item in data:
    if item["ext"] == ".pdf" and len(item["text"]) > 10:
        # print filename and extracted text
        print(f"FILE: {item['filename']}")
        print(f"TEXT: {item['text'][:250]}")
        print("-" * 60)
