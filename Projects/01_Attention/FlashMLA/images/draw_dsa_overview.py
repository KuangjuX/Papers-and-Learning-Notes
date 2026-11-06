"""Build the editable draw.io source for the DSA kernel overview.

Rebuilding replaces manual edits in dsa-kernel-overview.drawio. For subsequent
manual edits, treat that .drawio file as the source and export it with draw.io.
Example export (set the actual executable path):
  drawio --export --theme light --format svg --output dsa-kernel-overview.svg dsa-kernel-overview.drawio
  drawio --export --theme light --scale 2 --format png --output dsa-kernel-overview.png dsa-kernel-overview.drawio

Implementation: FlashMLA ba89a3466e9470ad08ab39738d4e7bb66989e1e7,
csrc/kernels/sm90/prefill/sparse/{config.h,phase1.cuh}.
Tensor sheets represent queries; grids are schematic, with logical shapes labelled.
"""
from pathlib import Path
import base64
import urllib.parse
import zlib
import xml.etree.ElementTree as ET

OUT = Path(__file__).resolve().parent
W, H = 1520, 970
INK, MUTED, LINE = '#192F49', '#52667D', '#C5D0DD'
BLUE, PURPLE, GOLD, GREEN = '#176BB5', '#7041B2', '#B47A0B', '#087D6A'
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


# Paper-style vocabulary: thin query sheets, token strips, small matrix operands.
BLUE, GREEN, PURPLE, GOLD = '#3E90D5', '#149D67', '#8858BF', '#D99C22'
LIGHT_BLUE, LIGHT_GREEN, LIGHT_PURPLE, LIGHT_GOLD = '#DCECF8', '#C2EBD6', '#E6DAF4', '#FFE3A0'

def matrix(x, y, w, h, rows=4, cols=6, fill=LIGHT_BLUE, stroke=BLUE):
    rect(x, y, w, h, fill, stroke, 1.6)
    for r in range(1, rows):
        edge([(x,y+r*h/rows),(x+w,y+r*h/rows)], stroke, .8, False)
    for c in range(1, cols):
        edge([(x+c*w/cols,y),(x+c*w/cols,y+h)], stroke, .8, False)


def sheet(x, y, fill, stroke=INK):
    # A 64-head query slice; stacking direction is the query axis.
    polygon([(x,y+18),(x+34,y),(x+116,y+26),(x+82,y+44)],fill,stroke,sw=1.5)
    for t in [.25,.5,.75]:
        edge([(x+34+82*t,y+26*t),(x+82*t,y+18+26*t)],stroke,.6,False)


def label(x,y,w,value,color=INK,size=23,bold=False):
    text(x,y,w,30,value,size,color,bold)

rect(0,0,W,H,'#FFFFFF','none',0)
text(40,25,1100,45,'DSA sparse attention: from token selection to head-packed tiles',32,INK,True,'left')
text(40,78,1000,30,'FlashMLA · Hopper sparse prefill · BF16 · Top-k = 2048',23,MUTED,align='left')
edge([(40,126),(1480,126)],LINE,1,False)
text(40,143,760,34,'(a) Query slices and tokenwise KV gather',26,INK,True,'left')
text(863,143,620,34,'(b) One CTA: one query × 64 heads',26,INK,True,'left')

# A. Blue sheets are one 64-head slice per query. Green selects the current q.
label(50,205,170,'Q · HBM',BLUE,25,True)
label(45,238,180,'64 × 576 / slice',MUTED,21)
for r in range(11,-1,-1):
    sheet(84,282+r*24, GREEN if r==5 else '#70B6E9', '#116D4D' if r==5 else '#24597E')
edge([(47,298),(47,593)],INK,2)
text(-15,427,115,30,'queries',22,INK,extra='rotation=270;whiteSpace=nowrap;')
label(70,610,160,'current query q',GREEN,22,True)
# Top token strip: features vertical, tokens horizontal. K/V share one cache.
label(257,199,490,'Shared latent KV cache · HBM',BLUE,25,True)
label(257,232,490,'sequence tokens →   (576 features / token)',MUTED,21)
x0,y0,cw=260,278,20
selected=[1,4,8,13,18,22]
for c in range(24):
    rect(x0+c*cw,y0,cw,45,GREEN if c in selected else LIGHT_BLUE,INK,1)
# Sparse selection map is a relation, not a materialized score matrix.
my,rh=355,22
label(260,321,480,'Selection mask · query × sequence token',MUTED,21)
for r in range(12):
    cols=selected if r==5 else sorted({(r*5+v)%24 for v in [0,2,7,11,17]})
    for c in range(24):
        fill=GREEN if r==5 and c in cols else LIGHT_GREEN if c in cols else '#FFFFFF'
        rect(x0+c*cw,my+r*rh,cw,rh,fill,'#CDD5DD',.7)
rect(x0,my+5*rh,480,rh,'none',GREEN,2)
# Q selection relates the thin query plane to its sparse row.
edge([(208,432),(233,432),(233,476),(257,476)],GREEN,2.5)
# Indices identify non-contiguous cache tokens. No contiguous-block implication.
for c in selected:
    cx=x0+(c+.5)*cw
    edge([(cx,323),(cx,350)],GREEN,1.5,False,True)
# An index-based gather path wraps the selection map.
edge([(744,299),(795,299),(795,712),(738,712)],GREEN,2.5)
text(754,420,180,30,'indexed load',21,GREEN,extra='rotation=270;whiteSpace=nowrap;')
label(267,631,467,'I[q]: 2048 indices shared by all heads',GREEN,22,True)
edge([(500,621),(500,677)],MUTED,1.5,True,True)
# Packed tokens: one of 32 logical tiles, not 32 physical buffers.
for c in range(8):
    rect(344+c*48,685,48,54,LIGHT_GREEN,GREEN,1.3)
label(347,692,376,'KVⱼ   ·   64 selected tokens × 576',INK,22,True)
label(307,750,460,'WG2: cp.async · 8 threads / token',GREEN,23,True)
label(310,785,460,'2048 selected tokens → 32 logical tiles',MUTED,22)
# The tile is expanded at right into SMEM and compute.
edge([(740,683),(829,683),(829,293),(871,293)],GREEN,2,True,True)
label(741,246,122,'tile detail',MUTED,20)

# B. SageAttention-style on-chip boundary and small matrix formulas.
rect(862,196,618,704,'#F7F9FB',INK,1.6)
label(876,208,578,'ON CHIP',INK,22,True)
label(885,247,569,'SMEM · two KV buffers, each 64 × 576',BLUE,23,True)
for bx,name in [(900,'A'),(1173,'B')]:
    matrix(bx,289,220,48,3,8,LIGHT_GREEN,GREEN)
    rect(bx+86,299,48,29,'#FFFFFF',GREEN,1)
    label(bx+86,298,48,name,GREEN,22,True)
label(884,347,565,'ready / free barriers ↔ WG0 + WG1',MUTED,22)
edge([(890,389),(1452,389)],LINE,1,False)
label(879,398,577,'WGMMA · QKᵀ',INK,23,True)
# Query tile x key tile -> scores; 64 rows are heads.
for x,w,h,key,title,shape in [
    (900,114,58,'q','Qq · TMA','64 × 576'),
    (1074,76,76,'kv','Kⱼᵀ','576 × 64'),
    (1294,76,76,'p','Sⱼ','64 × 64')]:
    color,fill={'q':(PURPLE,LIGHT_PURPLE),'kv':(GREEN,LIGHT_GREEN),'p':(GOLD,LIGHT_GOLD)}[key]
    matrix(x,464,w,h,4,6,fill,color)
    label(x-19,431,w+38,title,color,22,True)
    label(x-20,545,w+40,shape,color,22)
label(1026,476,36,'×',INK,31)
edge([(1171,501),(1278,501)],INK,2)
label(1167,464,110,'WGMMA',MUTED,19)
text(846,483,75,24,'heads',18,PURPLE,extra='rotation=270;whiteSpace=nowrap;')
# Online softmax, with running state and rescaling outside the GEMM equation.
edge([(1372,501),(1448,501),(1448,589),(1264,589)],GOLD,2)
label(898,579,365,'Pⱼ = OnlineSoftmax(Sⱼ)',GOLD,26,True)
label(897,611,534,'running max / sum; rescale output',MUTED,21)
# Probability x latent V -> accumulated output.
for x,w,key,title,shape in [
    (900,76,'p','Pⱼ','64 × 64'),
    (1056,114,'kv','Vⱼ','64 × 512'),
    (1300,114,'o','Oacc','64 × 512')]:
    color,fill={'kv':(GREEN,LIGHT_GREEN),'p':(GOLD,LIGHT_GOLD),'o':(BLUE,LIGHT_BLUE)}[key]
    matrix(x,680,w,60,4,6,fill,color)
    label(x-10,646,w+20,title,color,24,True)
    label(x-20,751,w+40,shape,color,22)
label(996,692,40,'×',INK,31)
edge([(1182,711),(1286,711)],INK,2)
label(1178,676,112,'WGMMA',MUTED,19)
label(1180,720,106,'+ accum.',MUTED,19)
label(877,785,585,'Vⱼ: the first 512 features of the same KV tile',GREEN,21)
# Epilogue after all selected tokens. Output sheet keeps the query-slice grammar.
edge([(1357,818),(1357,852),(1179,852)],BLUE,2.5)
label(899,834,280,'Merge + normalize',INK,24,True)
edge([(890,852),(720,852)],BLUE,2.5)
label(735,818,143,'TMA store',BLUE,21)
for i in range(5,-1,-1):
    sheet(551+i*24,842,'#70B6E9' if i!=2 else GREEN,'#24597E')
label(322,842,219,'Output · HBM',BLUE,24,True)
label(312,877,229,'64 × 512 / query slice',MUTED,21)
# Key dimensions rather than decorative depth.
edge([(40,922),(1480,922)],LINE,1,False)
for x,fill,title in [(50,'#70B6E9','HBM tensors'),(310,GREEN,'current query / selected KV'),(745,LIGHT_GOLD,'scores / probabilities')]:
    rect(x,938,16,16,fill,INK,.8)
    text(x+25,931,410,29,title,20,MUTED,align='left')
text(1166,931,314,29,'schematic cells; logical shapes',19,MUTED,align='right')

ET.indent(file, space='  ')
path = OUT/'dsa-kernel-overview.drawio'
ET.ElementTree(file).write(path, encoding='UTF-8', xml_declaration=True)
print(f'{path}: {serial} editable vector objects')
