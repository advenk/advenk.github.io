"""
Extract figures directly from project PDFs and save as thumbnails.
Coordinates are (x0, y0, x1, y1) as fractions of page dimensions.
"""

import fitz
import os
from PIL import Image

REPORTS = "/Users/adityavenkatesh/Documents/Code/cv-optimization/Project_Reports"
OUT     = os.path.join(os.path.dirname(__file__), "images")
SCALE   = 3.0   # render at 3× for crisp downscaling

def crop_page(pdf_name, page_idx, box_frac, out_name, size=400):
    """Render a page region and save as a thumbnail.

    Does NOT force-square the crop — preserves the natural aspect ratio of the
    figure and resizes so the longer axis is `size` px.  The HTML already uses
    object-fit:cover so the browser squares it at display time, meaning the
    center of the image (not a biased edge) is what you see.
    """
    path = os.path.join(REPORTS, pdf_name)
    doc  = fitz.open(path)
    page = doc[page_idx]
    pw, ph = page.rect.width, page.rect.height

    x0f, y0f, x1f, y1f = box_frac
    clip = fitz.Rect(x0f * pw, y0f * ph, x1f * pw, y1f * ph)
    pix  = page.get_pixmap(matrix=fitz.Matrix(SCALE, SCALE), clip=clip)
    doc.close()

    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)

    # Resize so longer axis = size; shorter axis scales proportionally
    w, h = img.size
    if w >= h:
        new_w, new_h = size, max(1, int(h * size / w))
    else:
        new_w, new_h = max(1, int(w * size / h)), size
    img = img.resize((new_w, new_h), Image.LANCZOS)

    dest = os.path.join(OUT, out_name)
    img.save(dest, "JPEG", quality=92)
    print(f"  {out_name}  ({new_w}×{new_h})")


THESIS     = "_Aditya__Personalized_Product_Ranking_MSc_Thesis__8_ (4).pdf"
MULTIAGENT = "Agent_Coordination_ICLR (4).pdf"
JEPA       = "DL2___Group_2___Project_Report (3).pdf"
DBPEDIA    = "Hindi_DBpedia_Position_Paper (10).pdf"
KMEANS     = "Report_Assignment1_Group12 (2).pdf"

print("Extracting thumbnails from project reports...")

# ── Smart Rankings ────────────────────────────────────────────────────────────
# p5: Figure 1 — four listing-surfaces pipeline diagram (top half of page)
crop_page(THESIS, 4,
          (0.08, 0.08, 0.92, 0.46),
          "smart-rankings.jpg")

# p12: Figure 6 — NDCG bar chart (top-left quadrant)
crop_page(THESIS, 11,
          (0.0, 0.02, 0.50, 0.42),
          "smart-rankings-results.jpg")

# ── Multi-Agent Coordination ──────────────────────────────────────────────────
# p4: Figure 1 — colored task-instance graph panels; full width, tighten vertically
crop_page(MULTIAGENT, 3,
          (0.0, 0.03, 1.0, 0.30),
          "multiagent.jpg")

# p10: Figure 10 — frontier model horizontal bar comparison; skip text preamble
crop_page(MULTIAGENT, 9,
          (0.0, 0.52, 1.0, 0.82),
          "multiagent-results.jpg")

# ── JEPA World Models ─────────────────────────────────────────────────────────
# p10: Figure 4 — discounted-return probing bar chart; include y-axis from x=0
crop_page(JEPA, 9,
          (0.0, 0.01, 0.92, 0.34),
          "jepa.jpg")

# p10: Figure 6 — reward probing bar chart (bottom third)
crop_page(JEPA, 9,
          (0.0, 0.66, 0.92, 0.99),
          "jepa-results.jpg")

# ── DBpedia Hindi IE ──────────────────────────────────────────────────────────
# p8: Table 2 — Hindi OIE method comparison; full width to capture method names + F1
crop_page(DBPEDIA, 7,
          (0.0, 0.33, 1.0, 0.57),
          "dbpedia.jpg")

# p8: Figure 3 — full-width predicate linking pipeline (wider y-band)
crop_page(DBPEDIA, 7,
          (0.0, 0.52, 1.0, 0.73),
          "dbpedia-results.jpg")

# ── Parallel K-Means CUDA ─────────────────────────────────────────────────────
# p2: Figure 1 — execution time + speedup chart; full chart width, above caption
crop_page(KMEANS, 1,
          (0.36, 0.43, 1.0, 0.68),
          "kmeans.jpg")

# p3: Figure 2 — scalability log-log chart (left side only, skip legend text column)
crop_page(KMEANS, 2,
          (0.0, 0.10, 0.50, 0.52),
          "kmeans-results.jpg")

print("Done.")
