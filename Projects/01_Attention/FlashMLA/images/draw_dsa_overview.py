"""Build the editable draw.io source for the DSA kernel overview.

Rebuilding replaces manual edits in dsa-kernel-overview.drawio. For subsequent
manual edits, treat that .drawio file as the source and export it with draw.io.
Example export (set the actual executable path):
  drawio --export --theme light --format svg --output dsa-kernel-overview.svg dsa-kernel-overview.drawio
  drawio --export --theme light --scale 2 --format png --output dsa-kernel-overview.png dsa-kernel-overview.drawio

Implementation: FlashMLA ba89a3466e9470ad08ab39738d4e7bb66989e1e7,
csrc/kernels/sm90/prefill/sparse/{config.h,phase1.cuh}.
All tensor dimensions are logical tiles; depth is a visual cue, not a new axis.
"""
from pathlib import Path
import base64
import urllib.parse
import zlib
import xml.etree.ElementTree as ET

OUT = Path(__file__).resolve().parent
W, H = 1600, 1060
INK, MUTED, LINE = '#192F49', '#52667D', '#C5D0DD'
BLUE, PURPLE, GOLD, GREEN = '#176BB5', '#7041B2', '#B47A0B', '#087D6A'
PAL = {
    'kv': ('#71B6EA', '#AED9F5', '#287DBD', BLUE),
    'q': ('#AE8ADC', '#D3BCEF', '#8051BA', PURPLE),
    'p': ('#F4C15D', '#FFE2A1', '#D59924', GOLD),
    'o': ('#51C3AF', '#9AE2D5', '#169A84', GREEN),
}
file = ET.Element('mxfile', host='Electron', version='32.6.10')
diagram = ET.SubElement(file, 'diagram', id='dsa-sm90', name='DSA sparse prefill')
model = ET.SubElement(diagram, 'mxGraphModel', dx=str(W), dy=str(H), grid='1',
                      gridSize='10', guides='1', tooltips='1', connect='1', arrows='1',
                      fold='1', page='1', pageScale='1', pageWidth=str(W),
                      pageHeight=str(H), math='0', shadow='0', background='#FFFFFF')
root = ET.SubElement(model, 'root')
ET.SubElement(root, 'mxCell', id='0')
ET.SubElement(root, 'mxCell', id='1', parent='0')
serial = 0


def cell(value='', style='', parent='1', vertex=True, **attrs):
    global serial
    serial += 1
    opts = {'id': f'v{serial}', 'value': value, 'style': style, 'parent': parent}
    opts['vertex' if vertex else 'edge'] = '1'
    opts.update(attrs)
    return ET.SubElement(root, 'mxCell', opts)


def geometry(c, x, y, w, h):
    ET.SubElement(c, 'mxGeometry', x=str(x), y=str(y), width=str(w), height=str(h), **{'as': 'geometry'})
    return c.get('id')


def group(x, y, w, h, name):
    c = cell(name, 'group;container=0;connectable=0;')
    return geometry(c, x, y, w, h)


def rect(x, y, w, h, fill='#FFFFFF', stroke=LINE, sw=1, parent='1', extra=''):
    c = cell(style=f'rounded=0;whiteSpace=wrap;html=0;fillColor={fill};strokeColor={stroke};strokeWidth={sw};{extra}', parent=parent)
    return geometry(c, x, y, w, h)


def text(x, y, w, h, value, size=23, color=INK, bold=False, align='center', parent='1', extra=''):
    style = (f'text;html=0;whiteSpace=wrap;overflow=visible;align={align};verticalAlign=middle;'
             f'fontFamily=Times New Roman;fontSize={size};fontColor={color};fontStyle={1 if bold else 0};'
             f'fillColor=none;strokeColor=none;spacing=0;{extra}')
    return geometry(cell(value, style, parent), x, y, w, h)


def edge(points, color=INK, width=2, arrow=True, dashed=False, parent='1'):
    style = (f'edgeStyle=none;rounded=0;html=0;strokeColor={color};strokeWidth={width};'
             f'endArrow={"block" if arrow else "none"};endFill=1;endSize=8;'
             f'dashed={1 if dashed else 0};dashPattern=6 5;')
    c = cell(style=style, parent=parent, vertex=False)
    g = ET.SubElement(c, 'mxGeometry', relative='1', **{'as': 'geometry'})
    ET.SubElement(g, 'mxPoint', x=str(points[0][0]), y=str(points[0][1]), **{'as': 'sourcePoint'})
    if len(points) > 2:
        a = ET.SubElement(g, 'Array', **{'as': 'points'})
        for x, y in points[1:-1]:
            ET.SubElement(a, 'mxPoint', x=str(x), y=str(y))
    ET.SubElement(g, 'mxPoint', x=str(points[-1][0]), y=str(points[-1][1]), **{'as': 'targetPoint'})
    return c.get('id')


def polygon(points, fill, stroke, parent='1', sw=1.2):
    # Native mxGraph stencil: no SVG/PNG image is embedded in the editable file.
    x0, y0 = min(p[0] for p in points), min(p[1] for p in points)
    w, h = max(p[0] for p in points)-x0, max(p[1] for p in points)-y0
    shape = ET.Element('shape', name='Tensor face', w='100', h='100', aspect='variable', strokewidth='inherit')
    fg = ET.SubElement(shape, 'foreground')
    path = ET.SubElement(fg, 'path')
    for i, (x, y) in enumerate(points):
        ET.SubElement(path, 'move' if i == 0 else 'line', x=f'{(x-x0)/w*100:.5f}', y=f'{(y-y0)/h*100:.5f}')
    ET.SubElement(path, 'close')
    ET.SubElement(fg, 'fillstroke')
    raw = urllib.parse.quote(ET.tostring(shape, encoding='unicode'), safe="~()*!.'-").encode()
    compressor = zlib.compressobj(9, zlib.DEFLATED, -15)
    stencil = base64.b64encode(compressor.compress(raw)+compressor.flush()).decode()
    c = cell(style=f'shape=stencil({stencil});fillColor={fill};strokeColor={stroke};strokeWidth={sw};', parent=parent)
    return geometry(c, x0, y0, w, h)


def tensor(x, y, w, h, key, rows=8, cols=8, depth=20, selected=None, name='Tensor'):
    front, top, side, border = PAL[key]
    g = group(x, y-depth, w+depth, h+depth, name)
    # Coordinates in the group: the front begins at (0, depth).
    polygon([(0, depth), (depth, 0), (w+depth, 0), (w, depth)], top, border, g)
    polygon([(w, depth), (w+depth, 0), (w+depth, h), (w, h+depth)], side, border, g)
    rect(0, depth, w, h, front if selected is None else '#E8EEF3', border, 1.5, g)
    if selected is not None:
        for r in selected:
            ry = depth+r*h/rows
            rect(0, ry, w, h/rows, '#2F8ED5', 'none', 0, g)
            polygon([(w, ry), (w+depth, ry-depth), (w+depth, ry+h/rows-depth), (w, ry+h/rows)], '#1264A4', border, g, .5)
    for r in range(1, rows):
        yy = depth+r*h/rows
        edge([(0, yy), (w, yy)], '#FFFFFF', .8, False, parent=g)
        edge([(w, yy), (w+depth, yy-depth)], border, .6, False, parent=g)
    for c in range(1, cols):
        xx = c*w/cols
        edge([(xx, depth), (xx, depth+h)], '#FFFFFF', .8, False, parent=g)
        edge([(xx, depth), (xx+depth, 0)], border, .5, False, parent=g)
    rect(0, depth, w, h, 'none', border, 1.4, g)
    return g


def solid(x, y, w, h, front, top, side, border, depth=12, name='Module'):
    g = group(x, y-depth, w+depth, h+depth, name)
    polygon([(0, depth), (depth, 0), (w+depth, 0), (w, depth)], top, border, g)
    polygon([(w, depth), (w+depth, 0), (w+depth, h), (w, h+depth)], side, border, g)
    rect(0, depth, w, h, front, border, 1.2, g)
    return g


def panel_header(x, y, letter, title, color):
    rect(x, y, 36, 36, color, color, 1)
    text(x, y, 36, 36, letter, 24, '#FFFFFF', True)
    text(x+50, y, 800, 36, title, 27, INK, True, 'left')


# Background and title.
rect(0, 0, W, H, '#FFFFFF', 'none', 0)
rect(42, 36, 7, 60, '#1675C9', 'none', 0)
text(66, 30, 1050, 44, 'DSA sparse attention · FlashMLA', 36, INK, True, 'left')
text(66, 81, 1080, 28, 'One query · 64 heads / CTA · Top-k = 2048 · BF16', 23, MUTED, align='left')
rect(1280, 41, 280, 48, '#192F49', '#192F49')
text(1280, 41, 280, 48, 'Hopper / SM90 prefill', 23, '#FFFFFF', True)
edge([(42, 130), (1558, 130)], LINE, 1, False)

# A: discrete sparse rows and their regular shared-memory tile.
panel_header(42, 155, 'A', 'Sparse token gather', BLUE)
text(80, 219, 425, 34, 'Shared indices:  i₀, i₁, …, i₂₀₄₇', 24)
text(74, 263, 220, 32, 'KV cache · HBM', 24, BLUE, True)
selected = [1, 4, 6, 9, 12, 14]
tensor(92, 320, 164, 290, 'kv', 16, 9, 20, selected, 'HBM KV cache')
text(0, 450, 120, 30, 'sequence tokens', 21, MUTED, extra='rotation=270;whiteSpace=nowrap;')
text(82, 627, 200, 30, '576 features', 23, BLUE)
text(353, 301, 170, 35, 'KV tile j', 25, BLUE, True)
tensor(372, 377, 124, 180, 'kv', 6, 9, 22, name='Gathered KV tile')
for j, row in enumerate(selected):
    sy = 320+(row+.5)*290/16
    dy = 377+(j+.5)*30
    edge([(278, sy-10), (300+j*6, sy-10), (300+j*6, dy), (370, dy)], BLUE, 1.8)
text(353, 579, 182, 32, '64 × 576', 26, BLUE, True)
text(353, 616, 182, 28, 'cp.async gather', 22, BLUE)
text(56, 677, 475, 32, '2048 tokens → 32 logical KV tiles', 24, INK, True)
rect(83, 726, 17, 17, '#2F8ED5', BLUE)
text(109, 718, 125, 32, 'selected', 21, MUTED, align='left')
rect(253, 726, 17, 17, '#E8EEF3', LINE)
text(279, 718, 210, 32, 'not selected', 21, MUTED, align='left')
edge([(553, 155), (553, 755)], LINE, 1, False)

# B: logical tensor shapes. Faces use one consistent depth direction.
panel_header(586, 155, 'B', 'Head-packed tile computation', PURPLE)
text(610, 221, 212, 34, 'Q', 30, PURPLE, True)
text(867, 210, 117, 34, 'Kⱼᵀ', 30, BLUE, True)
text(1100, 221, 150, 34, 'Sⱼ', 30, GOLD, True)
tensor(626, 282, 178, 112, 'q', 8, 9, 20, name='Query tile')
tensor(882, 268, 84, 145, 'kv', 9, 8, 20, name='Transposed key tile')
tensor(1118, 282, 112, 112, 'p', 8, 8, 20, name='Score tile')
text(548, 320, 100, 30, '64 heads', 20, PURPLE, extra='rotation=270;whiteSpace=nowrap;')
text(828, 317, 40, 45, '×', 36)
edge([(994, 339), (1096, 339)], INK, 2.4)
text(991, 293, 110, 32, 'QKᵀ', 24, INK, True)
text(982, 359, 130, 30, 'WGMMA', 21, MUTED)
text(622, 420, 190, 32, '64 × 576', 24, PURPLE, True)
text(866, 437, 137, 30, '576 × 64', 23, BLUE, True)
text(1098, 420, 154, 32, '64 × 64', 24, GOLD, True)
text(602, 458, 240, 28, 'Q: TMA → SMEM', 21, MUTED)
text(1283, 279, 260, 34, '64 heads share', 26, BLUE, True)
text(1283, 315, 260, 32, 'one KV tile', 26, BLUE, True)
text(1285, 365, 260, 52, 'tile axes:\nheads × selected tokens', 22, MUTED)

solid(842, 494, 346, 64, '#FFCD65', '#FFE3A7', '#D89D2E', GOLD, 12, 'Online softmax')
text(852, 502, 326, 30, 'Online softmax', 26, '#583D05', True)
text(852, 532, 326, 25, 'row max / sum across KV tiles', 21, '#684B12')
edge([(1252, 369), (1266, 369), (1266, 469), (1143, 469), (1143, 480)], GOLD, 2.2)
edge([(840, 525), (596, 525), (596, 673), (624, 673)], GOLD, 2.2)
edge([(1202, 525), (1495, 525), (1495, 613), (1471, 613)], GOLD, 2, True, True)
text(1285, 486, 210, 30, 'rescale O', 23, GOLD)
text(617, 578, 128, 34, 'Pⱼ', 30, GOLD, True)
text(868, 578, 206, 34, 'Vⱼ', 30, BLUE, True)
text(1282, 578, 200, 34, 'Oacc', 29, GREEN, True)
tensor(626, 633, 112, 112, 'p', 8, 8, 20, name='Probability tile')
tensor(888, 633, 178, 112, 'kv', 8, 8, 20, name='Value latent slice')
tensor(1291, 633, 178, 112, 'o', 8, 8, 20, name='Accumulated output')
text(795, 661, 45, 45, '×', 36)
edge([(1095, 689), (1269, 689)], INK, 2.4)
text(1090, 644, 182, 32, 'PV + accumulate', 23, INK, True)
text(1110, 708, 143, 30, 'WGMMA', 21, MUTED)
text(604, 760, 163, 30, '64 × 64', 23, GOLD, True)
text(876, 760, 205, 30, '64 × 512', 23, BLUE, True)
text(1286, 760, 202, 30, '64 × 512', 23, GREEN, True)

# C: physical buffers and roles, not a quantitative timeline.
edge([(42, 811), (1558, 811)], LINE, 1, False)
panel_header(42, 832, 'C', 'CTA execution · load / compute overlap', GREEN)
text(1308, 834, 236, 34, '384 threads / CTA', 23, MUTED)
solid(61, 911, 245, 91, '#247AC0', '#6EAFE0', '#14558E', '#14558E', 13, 'Producer warpgroup')
text(67, 919, 234, 34, 'Producer · WG2', 25, '#FFFFFF', True)
text(67, 953, 234, 24, 'indexed cp.async', 23, '#FFFFFF')
text(67, 979, 234, 23, '8 threads / token', 21, '#E7F4FF')
text(395, 871, 282, 30, 'KV double buffer · SMEM', 23, BLUE, True)
for x, label in [(420, 'A'), (555, 'B')]:
    tensor(x, 927, 100, 75, 'kv', 4, 6, 17, name=f'KV buffer {label}')
    rect(x+32, 945, 36, 39, '#176BB5', '#176BB5')
    text(x+32, 945, 36, 39, label, 27, '#FFFFFF', True)
edge([(324, 957), (401, 957)], BLUE, 2.6)
edge([(675, 957), (741, 957)], BLUE, 2.6)
text(675, 917, 69, 30, 'ready', 21, MUTED)
solid(746, 911, 365, 91, '#263B58', '#607794', '#132640', '#132640', 13, 'Computing warpgroups')
text(751, 922, 354, 34, 'Compute · WG0 + WG1', 25, '#FFFFFF', True)
text(751, 963, 354, 31, 'QKᵀ → softmax → PV', 24, '#E5F1FF')
edge([(929, 1005), (929, 1024), (544, 1024), (544, 1003)], MUTED, 1.8, True, True)
text(566, 1030, 394, 27, 'free: buffer reusable after consumption', 20, MUTED)
edge([(1130, 957), (1232, 957)], GREEN, 2.6)
text(1134, 917, 90, 30, 'all tiles', 21, MUTED)
solid(1238, 911, 287, 91, '#15967F', '#5CC3B1', '#086E5C', '#086E5C', 13, 'Output epilogue')
text(1243, 921, 277, 34, 'Merge + normalize', 25, '#FFFFFF', True)
text(1243, 962, 277, 31, 'O → HBM', 25, '#FFFFFF')

ET.indent(file, space='  ')
path = OUT/'dsa-kernel-overview.drawio'
ET.ElementTree(file).write(path, encoding='UTF-8', xml_declaration=True)
print(f'{path}: {serial} editable vector objects')
