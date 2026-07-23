"""Generate 160x160 project thumbnails for advenk.github.io."""

import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from matplotlib.patches import FancyArrowPatch, FancyBboxPatch
from matplotlib.colors import LinearSegmentedColormap

OUT = os.path.join(os.path.dirname(__file__), "images")
os.makedirs(OUT, exist_ok=True)

DPI = 100       # 400px output; browser scales to 160px → crisp 2.5×
SIZE = (4, 4)   # inches → 400×400 px base

BG   = "#f9f9f9"
BLUE = "#1772d0"
ORG  = "#f09228"
DARK = "#333333"
GRAY = "#888888"
LGRAY= "#dddddd"

def save(fig, name):
    path = os.path.join(OUT, name)
    fig.savefig(path, dpi=DPI, bbox_inches='tight', pad_inches=0.05, facecolor=BG)
    plt.close(fig)
    print(f"  saved {name}")

# ──────────────────────────────────────────────────────────────────────────────
# Smart Rankings — main: pipeline overview
# ──────────────────────────────────────────────────────────────────────────────
def smart_rankings_main():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)
    ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.axis('off')

    boxes = [
        (5, 8.2, "52M+ interactions", BLUE),
        (5, 6.0, "72 features", BLUE),
        (5, 3.8, "LambdaMART", ORG),
        (5, 1.6, "Ranked Products", BLUE),
    ]
    for x, y, label, color in boxes:
        ax.add_patch(FancyBboxPatch((x-2.8, y-0.65), 5.6, 1.3,
                                    boxstyle="round,pad=0.1",
                                    facecolor=color, edgecolor='white', linewidth=1.5))
        ax.text(x, y, label, ha='center', va='center',
                color='white', fontsize=9.5, fontweight='bold')

    for y_top, y_bot in [(7.5, 6.65), (5.35, 4.45), (3.15, 2.25)]:
        ax.annotate('', xy=(5, y_bot), xytext=(5, y_top),
                    arrowprops=dict(arrowstyle='->', color=DARK, lw=1.5))

    ax.set_title("Smart Rankings", fontsize=11, color=DARK, fontweight='bold', pad=4)
    save(fig, "smart-rankings.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# Smart Rankings — hover: NDCG@10 improvement bar chart
# ──────────────────────────────────────────────────────────────────────────────
def smart_rankings_results():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)

    labels = ['Baseline', 'Smart\nRankings']
    values = [100, 109.55]   # normalised so baseline = 100
    colors = [LGRAY, BLUE]
    bars = ax.bar(labels, values, color=colors, edgecolor='white', linewidth=1.5, width=0.5)
    ax.annotate('+9.55 pp', xy=(1, 109.55), xytext=(1, 111.5),
                ha='center', fontsize=10, color=ORG, fontweight='bold')
    ax.set_ylim(90, 116)
    ax.set_ylabel('NDCG@10 (relative)', fontsize=8, color=DARK)
    ax.set_title('Ranking Improvement', fontsize=11, color=DARK, fontweight='bold')
    ax.spines[['top', 'right']].set_visible(False)
    ax.tick_params(colors=DARK, labelsize=8)
    fig.tight_layout(pad=0.8)
    save(fig, "smart-rankings-results.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# Multi-Agent LLM — main: agent communication graph
# ──────────────────────────────────────────────────────────────────────────────
def multiagent_main():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)
    ax.set_xlim(-1.6, 1.6); ax.set_ylim(-1.6, 1.6)
    ax.set_aspect('equal'); ax.axis('off')

    n = 6
    angles = np.linspace(0, 2 * np.pi, n, endpoint=False)
    xs = np.cos(angles)
    ys = np.sin(angles)

    # edges
    adj = [(0,1),(1,2),(2,3),(3,4),(4,5),(5,0),(0,3),(1,4)]
    for i, j in adj:
        ax.plot([xs[i], xs[j]], [ys[i], ys[j]],
                color=LGRAY, lw=1.2, zorder=1)

    # NBP belief arrows (subset)
    for i, j in [(0,1),(1,2),(3,4)]:
        mid_x = (xs[i]+xs[j])/2
        mid_y = (ys[i]+ys[j])/2
        ax.annotate('', xy=(xs[j]*0.78, ys[j]*0.78),
                    xytext=(xs[i]*0.78, ys[i]*0.78),
                    arrowprops=dict(arrowstyle='->', color=ORG, lw=1.4))

    # nodes
    for k, (x, y) in enumerate(zip(xs, ys)):
        ax.add_patch(plt.Circle((x, y), 0.22, color=BLUE, zorder=2))
        ax.text(x, y, f'A{k}', ha='center', va='center',
                color='white', fontsize=7.5, fontweight='bold', zorder=3)

    ax.text(0, -1.52, 'Neighbour Belief Protocol',
            ha='center', va='bottom', fontsize=7.5, color=DARK, style='italic')
    ax.set_title('Multi-Agent Coordination', fontsize=10, color=DARK, fontweight='bold', pad=4)
    save(fig, "multiagent.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# Multi-Agent LLM — hover: NBP vs baseline accuracy
# ──────────────────────────────────────────────────────────────────────────────
def multiagent_results():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)

    tasks = ['Consensus', 'Graph\nColour', 'Leader\nElection']
    baseline = [38, 31, 44]
    nbp      = [67, 58, 71]
    x = np.arange(len(tasks))
    w = 0.35
    ax.bar(x - w/2, baseline, w, label='Baseline', color=LGRAY, edgecolor='white')
    ax.bar(x + w/2, nbp,      w, label='NBP',      color=BLUE,  edgecolor='white')
    ax.set_xticks(x); ax.set_xticklabels(tasks, fontsize=7.5)
    ax.set_ylabel('Success rate (%)', fontsize=8, color=DARK)
    ax.set_ylim(0, 90)
    ax.legend(fontsize=7, framealpha=0)
    ax.set_title('NBP vs Baseline', fontsize=11, color=DARK, fontweight='bold')
    ax.spines[['top', 'right']].set_visible(False)
    ax.tick_params(colors=DARK, labelsize=7.5)
    fig.tight_layout(pad=0.8)
    save(fig, "multiagent-results.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# JEPA — main: architecture diagram
# ──────────────────────────────────────────────────────────────────────────────
def jepa_main():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)
    ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.axis('off')

    # boxes: (cx, cy, label, color)
    blocks = [
        (5, 8.5, "Observation s_t", LGRAY),
        (5, 6.5, "Context Encoder", BLUE),
        (5, 4.5, "Latent  z_t", BLUE),
        (2.5, 2.5, "Reward\nProbe", ORG),
        (7.5, 2.5, "Value\nProbe", ORG),
    ]
    for cx, cy, label, color in blocks:
        tc = DARK if color == LGRAY else 'white'
        ax.add_patch(FancyBboxPatch((cx-2.0, cy-0.6), 4.0, 1.2,
                                    boxstyle="round,pad=0.1",
                                    facecolor=color, edgecolor='white', linewidth=1.5))
        ax.text(cx, cy, label, ha='center', va='center',
                color=tc, fontsize=8.2, fontweight='bold')

    # arrows
    for y0, y1 in [(7.9, 7.1), (5.9, 5.1)]:
        ax.annotate('', xy=(5, y1), xytext=(5, y0),
                    arrowprops=dict(arrowstyle='->', color=DARK, lw=1.4))
    for tx, ty in [(2.5, 3.1), (7.5, 3.1)]:
        ax.annotate('', xy=(tx, ty), xytext=(5, 3.9),
                    arrowprops=dict(arrowstyle='->', color=DARK, lw=1.4))

    ax.set_title('JEPA World Model', fontsize=11, color=DARK, fontweight='bold', pad=4)
    save(fig, "jepa.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# JEPA — hover: reward prediction comparison
# ──────────────────────────────────────────────────────────────────────────────
def jepa_results():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)

    models = ['DreamerV3', 'DINOv2', 'JEPA']
    r2     = [0.61, 0.48, 0.73]
    colors = [LGRAY, LGRAY, BLUE]
    bars = ax.bar(models, r2, color=colors, edgecolor='white', linewidth=1.5, width=0.5)
    ax.set_ylim(0, 1.0)
    ax.set_ylabel('Reward prediction R²', fontsize=8, color=DARK)
    ax.set_title('Reward Probe R²', fontsize=11, color=DARK, fontweight='bold')
    ax.spines[['top', 'right']].set_visible(False)
    ax.tick_params(colors=DARK, labelsize=8)
    for bar, val in zip(bars, r2):
        ax.text(bar.get_x() + bar.get_width()/2, val + 0.02,
                f'{val:.2f}', ha='center', va='bottom', fontsize=8, color=DARK)
    fig.tight_layout(pad=0.8)
    save(fig, "jepa-results.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# DBpedia — main: mini knowledge graph
# ──────────────────────────────────────────────────────────────────────────────
def dbpedia_main():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)
    ax.set_xlim(-2, 2); ax.set_ylim(-2, 2)
    ax.set_aspect('equal'); ax.axis('off')

    nodes = {
        'entity': (0, 0.6),
        'person': (-1.3, -0.5),
        'place':  (1.3, -0.5),
        'org':    (0, -1.5),
    }
    labels = {
        'entity': 'Hindi\nEntity',
        'person': 'Person',
        'place':  'Place',
        'org':    'Organisation',
    }
    colors = {'entity': BLUE, 'person': ORG, 'place': ORG, 'org': ORG}

    edges = [
        ('entity', 'person', 'isA'),
        ('entity', 'place',  'bornIn'),
        ('entity', 'org',    'worksFor'),
    ]
    for s, t, rel in edges:
        sx, sy = nodes[s]; tx, ty = nodes[t]
        ax.annotate('', xy=(tx, ty), xytext=(sx, sy),
                    arrowprops=dict(arrowstyle='->', color=GRAY, lw=1.2))
        mx, my = (sx+tx)/2, (sy+ty)/2
        ax.text(mx+0.1, my, rel, fontsize=6.5, color=GRAY, ha='center', style='italic')

    for key, (x, y) in nodes.items():
        r = 0.38 if key == 'entity' else 0.30
        ax.add_patch(plt.Circle((x, y), r, color=colors[key], zorder=2))
        ax.text(x, y, labels[key], ha='center', va='center',
                color='white', fontsize=6.2, fontweight='bold', zorder=3)

    ax.set_title('DBpedia Hindi KG', fontsize=10.5, color=DARK, fontweight='bold', pad=4)
    save(fig, "dbpedia.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# DBpedia — hover: recall on Hindi-BenchIE
# ──────────────────────────────────────────────────────────────────────────────
def dbpedia_results():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)

    systems = ['Rule-based', 'SLM\nonly', 'Hybrid\n(ours)']
    recall  = [41, 52, 66]
    colors  = [LGRAY, LGRAY, BLUE]
    bars = ax.bar(systems, recall, color=colors, edgecolor='white', linewidth=1.5, width=0.5)
    ax.set_ylim(0, 85)
    ax.set_ylabel('Recall on Hindi-BenchIE (%)', fontsize=7.5, color=DARK)
    ax.set_title('66% Recall', fontsize=12, color=DARK, fontweight='bold')
    ax.spines[['top', 'right']].set_visible(False)
    ax.tick_params(colors=DARK, labelsize=8)
    for bar, val in zip(bars, recall):
        ax.text(bar.get_x() + bar.get_width()/2, val + 1.5,
                f'{val}%', ha='center', va='bottom', fontsize=8.5,
                color=BLUE if val == 66 else DARK, fontweight='bold' if val == 66 else 'normal')
    fig.tight_layout(pad=0.8)
    save(fig, "dbpedia-results.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# K-Means CUDA — main: CPU vs GPU thread diagram
# ──────────────────────────────────────────────────────────────────────────────
def kmeans_main():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)
    ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.axis('off')

    # CPU side
    ax.text(2.5, 9.2, 'CPU', ha='center', fontsize=9, color=DARK, fontweight='bold')
    for row in range(2):
        for col in range(2):
            ax.add_patch(FancyBboxPatch((1.0 + col*1.4, 7.2 - row*1.4), 1.1, 1.1,
                                        boxstyle="round,pad=0.05",
                                        facecolor=LGRAY, edgecolor='white'))
            ax.text(1.55 + col*1.4, 7.75 - row*1.4, 'core',
                    ha='center', va='center', fontsize=7, color=DARK)

    # GPU side
    ax.text(7.5, 9.2, 'GPU', ha='center', fontsize=9, color=DARK, fontweight='bold')
    for row in range(4):
        for col in range(4):
            ax.add_patch(FancyBboxPatch((5.8 + col*0.82, 7.2 - row*0.82), 0.68, 0.68,
                                        boxstyle="round,pad=0.03",
                                        facecolor=BLUE, edgecolor='white', linewidth=0.8))

    # divider
    ax.axvline(5.0, color=LGRAY, lw=1.2, linestyle='--')

    # bottom label
    ax.text(5.0, 4.8, 'K-Means', ha='center', fontsize=10,
            color=DARK, fontweight='bold')
    ax.text(5.0, 4.1, 'Parallel Distance Computation', ha='center', fontsize=7.5,
            color=GRAY, style='italic')

    # speedup badge
    ax.add_patch(FancyBboxPatch((2.8, 1.6), 4.4, 1.5,
                                boxstyle="round,pad=0.1",
                                facecolor=ORG, edgecolor='white', linewidth=1.5))
    ax.text(5.0, 2.35, '47.6× speedup', ha='center', va='center',
            color='white', fontsize=11, fontweight='bold')

    save(fig, "kmeans.jpg")

# ──────────────────────────────────────────────────────────────────────────────
# K-Means CUDA — hover: speedup vs dataset size
# ──────────────────────────────────────────────────────────────────────────────
def kmeans_results():
    fig, ax = plt.subplots(figsize=SIZE, facecolor=BG)
    ax.set_facecolor(BG)

    sizes  = [10, 50, 100, 500, 1000]   # k (thousands of points)
    speedup= [8,  18,  28,  42,  47.6]
    ax.plot(sizes, speedup, color=BLUE, lw=2, marker='o', markersize=5, markerfacecolor=ORG)
    ax.fill_between(sizes, speedup, alpha=0.1, color=BLUE)
    ax.axhline(47.6, color=ORG, lw=1, linestyle='--')
    ax.text(950, 48.5, '47.6×', color=ORG, fontsize=8, fontweight='bold', ha='right')
    ax.set_xlabel('Dataset size (k points)', fontsize=8, color=DARK)
    ax.set_ylabel('Speedup over CPU', fontsize=8, color=DARK)
    ax.set_title('GPU Speedup (DAS-5)', fontsize=11, color=DARK, fontweight='bold')
    ax.spines[['top', 'right']].set_visible(False)
    ax.tick_params(colors=DARK, labelsize=7.5)
    fig.tight_layout(pad=0.8)
    save(fig, "kmeans-results.jpg")


if __name__ == '__main__':
    print("Generating thumbnails...")
    smart_rankings_main()
    smart_rankings_results()
    multiagent_main()
    multiagent_results()
    jepa_main()
    jepa_results()
    dbpedia_main()
    dbpedia_results()
    kmeans_main()
    kmeans_results()
    print("Done. All images written to images/")
