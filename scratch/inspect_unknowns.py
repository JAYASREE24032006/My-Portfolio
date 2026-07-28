import json

with open("detailed_pdf_analysis.json", "r", encoding="utf-8") as f:
    data = json.load(f)

unknown_files = [
    "IBMDesign20250926-31-xq8bz6.pdf",
    "IBMDesign20251016-32-i2fy9a.pdf",
    "IITM foundation.pdf",
    "JAYASREE IOT college.pdf",
    "JAYASREE imartiies.pdf",
    "Jayasree Computer Networks.pdf",
    "Jayasree Marketing.pdf",
    "Jayasree TE Bridge.pdf",
    "Jayasree TE Decision Making.pdf",
    "Jayasree TE Leadership Developement.pdf",
    "Jayasree Web.pdf",
    "Python_Essentials_1_certificate_jayasree2403206-gmail-com_8888169b-de01-4507-968d-9b66513ba74d.pdf",
    "deloite.pdf",
    "novitech.pdf"
]

with open("unknown_output.txt", "w", encoding="utf-8") as out:
    for item in data:
        if item["filename"] in unknown_files:
            out.write(f"=== {item['filename']} ===\n")
            out.write(item['text'][:400] + "\n")
            out.write("-" * 50 + "\n")

print("Saved unknown_output.txt")
