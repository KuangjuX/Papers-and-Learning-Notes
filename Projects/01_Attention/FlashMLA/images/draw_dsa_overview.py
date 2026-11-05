"""Render the SM90 sparse-prefill overview: uv run --with matplotlib <this file>.

Implementation: FlashMLA ba89a3466e9470ad08ab39738d4e7bb66989e1e7,
csrc/kernels/sm90/prefill/sparse/{config.h,phase1.cuh}.
The matrix panels are logical GEMMs, not individual WGMMA instruction shapes.
The bottom panel shows dependencies, not measured timing or a precise schedule.
"""
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle, FancyArrowPatch
from matplotlib.path import Path as MPath

OUT = Path(__file__).resolve().parent
plt.rcParams.update({
    "font.family": "serif", "font.serif": ["Times New Roman", "DejaVu Serif"],
    "mathtext.fontset": "stix", "svg.fonttype": "none", "pdf.fonttype": 42,
})
fig = plt.figure(figsize=(14, 9.6), facecolor="white")
ax = fig.add_axes([0, 0, 1, 1])
ax.set(xlim=(0, 1400), ylim=(960, 0))
ax.axis("off")

INK = "#263643"
MUTED = "#62727D"
LINE = "#A7B3BA"
BLUE = "#497BA4"
BLUE_LIGHT = "#DAE8F3"
PURPLE = "#82759A"
PURPLE_LIGHT = "#E9E4F0"
GREEN = "#4D887B"
GREEN_LIGHT = "#DDEEE7"
GOLD = "#B58B50"
GOLD_LIGHT = "#F6EAD6"
GREY = "#F0F2F3"


def text(x, y, s, size=15, color=INK, ha="left", va="center", weight="normal", **kw):
    return ax.text(x, y, s, fontsize=max(size, 15), color=color, ha=ha, va=va,
                   weight=weight, linespacing=1.15, **kw)


def rect(x, y, w, h, fill="white", edge=LINE, lw=1, **kw):
    ax.add_patch(Rectangle((x, y), w, h, facecolor=fill, edgecolor=edge,
                           linewidth=lw, **kw))


def line(points, color=LINE, lw=1, dashed=False):
    xs, ys = zip(*points)
    ax.plot(xs, ys, color=color, lw=lw, linestyle=(0, (4, 4)) if dashed else "-",
            solid_capstyle="round")


def arrow(points, color=INK, lw=1.4, dashed=False, scale=12):
    path = MPath(points, [MPath.MOVETO] + [MPath.LINETO] * (len(points) - 1))
    ax.add_patch(FancyArrowPatch(path=path, arrowstyle="-|>", mutation_scale=scale,
                                color=color, linewidth=lw,
                                linestyle=(0, (4, 4)) if dashed else "-"))


def matrix(x, y, w, h, rows=6, cols=8, fill=BLUE_LIGHT, edge=BLUE,
           selected=None):
    rect(x, y, w, h, "white", edge, 1.2)
    for r in range(rows):
        for c in range(cols):
            fc = fill if selected is None or r in selected else GREY
            rect(x + c*w/cols, y + r*h/rows, w/cols, h/rows,
                 fc, "white", .55)
    rect(x, y, w, h, "none", edge, 1.2)


def bracket(x1, x2, y, label, color=MUTED):
    line([(x1, y-5), (x1, y), (x2, y), (x2, y-5)], color, .85)
    text((x1+x2)/2, y+18, label, 13, color, ha="center")


text(35, 35, "DSA sparse attention · FlashMLA", 25, weight="bold")
text(35, 76, "Hopper sparse prefill  |  1 CTA: 1 query × 64 heads  |  Top-k = 2048  |  BF16", 15, MUTED)
line([(35, 105), (1365, 105)], LINE, .8)

# (a) Concrete sparse rows become a regular tile.
text(35, 139, "(a)  Tokenwise gather", 18, weight="bold")
text(65, 184, r"Shared indices:  $i_0,\ i_1,\ \ldots,\ i_{2047}$", 15)
text(137, 224, "KV cache · HBM", 15, ha="center")
selected = [1, 4, 6, 9, 12, 14]
matrix(65, 250, 144, 288, rows=16, cols=9, selected=selected)
text(40, 394, "sequence tokens", 13, MUTED, ha="center", rotation=90)
bracket(65, 209, 550, "576 features")

text(350, 265, "Gathered KV", 15, ha="center")
matrix(296, 304, 108, 162, rows=6, cols=9)
for j, row in enumerate(selected):
    sy = 250 + (row+.5)*18
    dy = 304 + (j+.5)*27
    arrow([(211, sy), (237+j*5, sy), (237+j*5, dy), (294, dy)], BLUE, .85, scale=8)
text(350, 492, "64 × 576", 16, BLUE, ha="center")
text(350, 523, "one KV tile", 14, MUTED, ha="center")
text(245, 597, "2048 selected tokens → 32 KV tiles", 15, ha="center")
rect(65, 625, 14, 14, BLUE_LIGHT, BLUE, .8)
text(88, 632, "selected", 12, MUTED)
rect(199, 625, 14, 14, GREY, LINE, .8)
text(222, 632, "not selected", 12, MUTED)

line([(456, 128), (456, 655)], LINE, .8)

# (b) Matrix geometry exposes the head axis and shared-KV reuse.
text(490, 139, "(b)  Head-packed computation on chip", 18, weight="bold")
text(617, 191, r"$Q$", 20, PURPLE, ha="center")
text(800, 191, r"$K_j^{\mathsf{T}}$", 20, BLUE, ha="center")
text(1025, 191, r"$S_j$", 20, GOLD, ha="center")
matrix(530, 230, 174, 104, rows=8, cols=9, fill=PURPLE_LIGHT, edge=PURPLE)
matrix(759, 214, 82, 136, rows=9, cols=8)
matrix(973, 230, 104, 104, rows=8, cols=8, fill=GOLD_LIGHT, edge=GOLD)
text(508, 282, "64 heads", 12, PURPLE, ha="center", rotation=90)
text(731, 282, "×", 25, ha="center")
arrow([(866, 282), (950, 282)])
text(907, 252, "QKᵀ", 14, ha="center")
text(907, 311, "WGMMA", 12, MUTED, ha="center")
text(617, 363, "64 × 576", 14, PURPLE, ha="center")
text(617, 389, "TMA: HBM → shared memory", 11, MUTED, ha="center")
text(800, 375, "576 × 64", 14, BLUE, ha="center")
text(1025, 363, "64 × 64", 14, GOLD, ha="center")
text(1208, 236, "tile axes", 13, MUTED, ha="center")
text(1208, 269, "heads × selected tokens", 14, ha="center")
text(1208, 307, "64 heads reuse", 14, BLUE, ha="center")
text(1208, 333, "the same KV tile", 14, BLUE, ha="center")

rect(720, 409, 310, 56, GOLD_LIGHT, GOLD, 1)
text(875, 426, "Online softmax", 16, ha="center")
text(875, 450, "update row max / sum", 12, MUTED, ha="center")
arrow([(1079, 318), (1092, 318), (1092, 391), (930, 391), (930, 407)], GOLD, 1.3)
arrow([(718, 437), (497, 437), (497, 544), (528, 544)], GOLD, 1.3)
arrow([(1032, 437), (1280, 437), (1280, 514)], GOLD, 1.2, dashed=True)
text(1168, 420, "rescale O", 13, GOLD, ha="center")

text(582, 491, r"$P_j$", 19, GOLD, ha="center")
text(839, 491, r"$V_j$", 19, BLUE, ha="center")
matrix(530, 516, 104, 104, rows=8, cols=8, fill=GOLD_LIGHT, edge=GOLD)
matrix(752, 516, 174, 104, rows=8, cols=8)
matrix(1114, 516, 174, 104, rows=8, cols=8, fill=GREEN_LIGHT, edge=GREEN)
text(1201, 491, r"$O_{\mathrm{acc}}$", 19, GREEN, ha="center")
text(692, 568, "×", 25, ha="center")
arrow([(945, 568), (1094, 568)])
text(1020, 538, "PV + accumulate", 13, ha="center")
text(1020, 597, "WGMMA", 12, MUTED, ha="center")
text(582, 645, "64 × 64", 14, GOLD, ha="center")
text(839, 645, "64 × 512", 14, BLUE, ha="center")
text(1201, 645, "64 × 512", 14, GREEN, ha="center")

# (c) Physical roles and buffer handoff, deliberately not a cycle timeline.
line([(35, 683), (1365, 683)], LINE, .8)
text(35, 717, "(c)  CTA execution · asynchronous load / compute overlap", 18, weight="bold")
text(1328, 717, "384 threads", 14, MUTED, ha="right")

rect(55, 775, 240, 82, "#F7F9FB", LINE, 1)
text(175, 794, "Producer · WG2", 16, ha="center")
text(175, 823, "indexed cp.async", 15, BLUE, ha="center")
text(175, 846, "8 threads / token", 12, MUTED, ha="center")

text(474, 760, "Shared memory · 2 KV buffers", 14, ha="center")
for x, label in [(370, "A"), (484, "B")]:
    matrix(x, 797, 94, 60, rows=4, cols=6)
    text(x+47, 782, label, 15, BLUE, ha="center")
arrow([(297, 823), (351, 823)], BLUE)
arrow([(582, 823), (651, 823)], BLUE)
text(616, 803, "ready", 11, MUTED, ha="center")

rect(656, 775, 320, 82, "#FAF9F5", LINE, 1)
text(816, 795, "Compute · WG0 + WG1", 16, ha="center")
text(816, 828, "QKᵀ  →  softmax  →  PV", 16, ha="center")
arrow([(816, 859), (816, 888), (473, 888), (473, 859)], MUTED, 1, dashed=True)
text(641, 909, "free: buffer reusable after consumption", 12, MUTED, ha="center")

arrow([(978, 823), (1070, 823)], GREEN)
text(1024, 797, "all tiles", 12, MUTED, ha="center")
rect(1075, 775, 250, 82, GREEN_LIGHT, GREEN, 1)
text(1200, 794, "Merge + normalize", 16, ha="center")
text(1200, 829, "O → HBM", 16, GREEN, ha="center")

text(35, 946, "Cells are schematic; arrows show dependencies, not timing.", 12, MUTED)
text(1365, 946, "FlashMLA · ba89a34", 12, MUTED, ha="right")

for extension in ("svg", "png"):
    fig.savefig(OUT / f"dsa-kernel-overview.{extension}", dpi=180,
                facecolor="white", metadata={"Creator": "DSA overview generator"})
plt.close(fig)
