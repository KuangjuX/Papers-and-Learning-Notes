"""Build the editable draw.io source for the DSA kernel overview.

Rebuilding replaces manual edits in dsa-kernel-overview.drawio. For subsequent
manual edits, treat that .drawio file as the source and export it with draw.io.
The Overview page is the master. Algorithm and Hardware mapping are generated
views for full-width note embeds; regenerate those views after master edits.
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
W, H = 2520, 1380
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
edge([(40,126),(2340,126)],LINE,1,False)
text(40,143,760,34,'(a) Query slices and tokenwise KV gather',26,INK,True,'left')
a_start = serial

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
edge([(740,683),(828,683)],GREEN,2,True,True)
label(741,646,100,'see (b)',MUTED,20)

# Keep the accepted algorithm panel, including its output sheets.
edge([(820,852),(720,852)],BLUE,2.5)
label(735,818,143,'TMA store',BLUE,21)
for i in range(5,-1,-1):
    sheet(551+i*24,842,'#70B6E9' if i!=2 else GREEN,'#24597E')
label(322,842,219,'Output · HBM',BLUE,24,True)
label(312,877,229,'64 × 512 / query slice',MUTED,21)
a_end=serial

# B. Source-constrained qualitative schedule over two adjacent tile pairs.
# Async bars span issue to the corresponding wait; widths are not measured cycles.
b_start=serial
BX,BY=900,196
TW=1580
X0,SCALE=240,63

def R(x,y,w,h,fill='#FFFFFF',stroke=LINE,sw=1):
    return rect(BX+x,BY+y,w,h,fill,stroke,sw)
def T(x,y,w,h,value,size=23,color=INK,bold=False,align='center'):
    return text(BX+x,BY+y,w,h,value,size,color,bold,align)
def E(points,color=INK,width=2,arrow=True,dashed=False):
    return edge([(BX+x,BY+y) for x,y in points],color,width,arrow,dashed)
def tx(t): return X0+SCALE*t

def stage(start,end,y,label,fill,stroke=INK,h=36,size=21):
    R(tx(start),y,(end-start)*SCALE,h,fill,stroke,1.1)
    T(tx(start)+2,y+1,(end-start)*SCALE-4,h-2,label,size,INK,True)

C0,C1,C2,C3='#FFE09A','#BDE0F7','#F8BD86','#DAC8EF'
text(BX,143,1600,36,'(b) Pipeline schedule · one CTA / SM · WG2 loads; WG0 + WG1 compute',28,INK,True,'left')
R(0,0,TW,1040,'#FAFBFD',INK,1.4)
T(18,12,1544,34,'One query × 64 heads · Q loaded once by TMA · WG0 owns O[:,0:256], WG1 owns O[:,256:512]',23,INK,True)
T(18,53,1544,29,'QK / PV: Tensor Core WGMMA   |   softmax: SIMT   |   t = 0: KV0 + KV1; t = 1: KV2 + KV3',22,MUTED)
# Common qualitative time axis; no fake ticks or measured duration scale.
E([(X0,118),(1538,118)],INK,2)
T(X0,83,1260,30,'time →  (qualitative schedule; not a cycle scale)',23,INK)
T(18,146,196,35,'WG2 / SMEM',24,GREEN,True)
# Physical region lifetimes: issue/load, resident until last reader releases, then refill.
regions=[
    ('A.L · 256',190,0,1,8,8,9,16.5,'0','2'),
    ('B.R+RoPE · 320',246,1,2,8.6,9,10,17,'1','3'),
    ('A.R+RoPE · 320',302,2,3,10.5,10.5,11.5,19,'0','2'),
    ('B.L · 256',358,3,4,11,11.5,12.5,19.5,'1','3')]
for title,y,ls,ready,free,ls2,ready2,free2,k,k2 in regions:
    T(12,y,214,36,title,21,GREEN,True,'right')
    stage(ls,ready,y,'load','#54B78B',GREEN,size=17)
    stage(ready,free,y,'KV'+k+' resident','#E0F0E8',GREEN,size=21)
    stage(ls2,ready2,y,'load','#54B78B',GREEN,size=17)
    stage(ready2,free2,y,'KV'+k2+' resident','#E0F0E8',GREEN,size=21)
    E([(tx(free),y-7),(tx(free),y+43)],GREEN,1.4,False,True)
T(235,404,1260,27,'ready starts a resident interval; free ends it. R regions include 256 V features + 64 RoPE features.',20,MUTED)
# WG0: QK2 is issued before peer PV1 has completed.
for top,title,sub in [(452,'WG0','O left half'),(672,'WG1','O right half')]:
    R(10,top-7,1555,199,'#FFFFFF',LINE,1)
    T(18,top-1,132,34,title,27,INK,True)
    T(18,top+34,132,26,'128 threads',20,MUTED)
    T(18,top+66,132,27,sub,20,MUTED)
    for dy,role in [(0,'QK'),(58,'SIMT / sync'),(116,'PV')]:
        T(145,top+dy,81,36,role,19,INK,True,'right')
        E([(X0,top+dy+40),(1538,top+dy+40)],'#E2E7ED',.8,False)
# Async issue-to-wait windows, not exclusive Tensor Core occupancy.
stage(1,5,452,'QK0: L → R',C0)
stage(9.2,13.5,452,'QK2: L → R',C2)
stage(5,6,510,'SM0',C0,size=18)
stage(8,9,510,'P / m','#E5E9EE',size=17)
stage(13.5,14.5,510,'SM2',C2,size=18)
stage(16.5,17.5,510,'P / m','#E5E9EE',size=17)
stage(6,8,568,'PV0,L',C0)
stage(9,11,568,'PV1,L',C1)
stage(14.5,16.5,568,'PV2,L',C2)
stage(17.5,19.5,568,'PV3,L',C3)
# WG1 waits for WG0's row max, shares P1 and consumes the rebased P0.
stage(2,6,672,'QK1: R → L',C1)
stage(10.5,14.5,672,'QK3: R → L',C3)
stage(6,7,730,'SM1',C1,size=18)
stage(7,8.6,730,'share P1 / wait P0','#E5E9EE',size=16)
stage(14.5,15.5,730,'SM3',C3,size=18)
stage(15.5,17,730,'share P3 / wait P2','#E5E9EE',size=16)
stage(7,8.6,788,'PV1,R',C1,size=19)
stage(8.6,10.5,788,'PV0,R',C0,size=19)
stage(15.5,17,788,'PV3,R',C3,size=19)
stage(17,19,788,'PV2,R',C2,size=19)
# Readiness links: only the first region of QK can start, the other is still loading.
E([(tx(1),226),(tx(1),449)],GREEN,1.6,True,True)
E([(tx(2),282),(tx(2),669)],GREEN,1.6,True,True)
# Softmax row-max handoff is a dependency across compute groups.
E([(tx(6),546),(tx(6),727)],BLUE,1.6,True,True)
T(tx(6)+5,620,90,26,'m ready',18,BLUE)
# Reuse event 1: last local PV releases A.L; producer may already load the next pair.
E([(tx(8),568),(tx(8),228)],GREEN,1.8,True,True)
R(tx(8)-13,427,26,26,GREEN,GREEN,1)
T(tx(8)-13,427,26,26,'1',19,'#FFFFFF',True)
# Overlap event 2: WG0 issues next QK while preceding peer PV is outstanding.
R(tx(9.2),446,(11-9.2)*SCALE,164,'none','#C37816',1.5)
R(tx(9.2)-13,427,26,26,'#C37816','#C37816',1)
T(tx(9.2)-13,427,26,26,'2',19,'#FFFFFF',True)
# Reuse event 3: wait<1> releases old B.L before next QK's full wait<0>.
E([(tx(11),568),(tx(11),398)],GREEN,1.8,True,True)
R(tx(11)-13,427,26,26,GREEN,GREEN,1)
T(tx(11)-13,427,26,26,'3',19,'#FFFFFF',True)
# Concise keyed explanations and traceable iteration colors.
T(25,891,510,72,'1  PV0,L completes → A.L free\n→ load KV2.L',22,INK,True)
T(540,891,510,72,'2  Issue QK2 while PV1,L\nis still outstanding',22,INK,True)
T(1070,891,485,72,'3  wait<1> → B.L free\n→ load KV3.L',22,INK,True)
for x,fill,name in [(235,C0,'tile 0'),(410,C1,'tile 1'),(585,C2,'tile 2'),(760,C3,'tile 3'),(935,'#54B78B','cp.async'),(1165,'#E0F0E8','resident')]:
    R(x,988,20,20,fill,INK,.8)
    T(x+30,981,170,31,name,21,MUTED,False,'left')
T(15,1060,1550,32,'WGMMA bars: issue → corresponding wait. SM = online softmax. P / m = probability exchange and rescaling.',21,MUTED)
T(15,1098,1550,32,'After all 32 tiles: combine row sums → normalize both output halves → TMA store. Widths are schematic.',21,MUTED)
b_end=serial
# Shared legend outside the two panels.
for x,fill,title in [(50,'#70B6E9','HBM tensors'),(340,GREEN,'selected KV'),(580,LIGHT_GOLD,'Tensor Core compute')]:
    rect(x,988,16,16,fill,INK,.8)
    text(x+25,981,300,29,title,20,MUTED,align='left')
text(45,1023,800,30,'FlashMLA ba89a34 · Hopper sparse prefill · logical shapes',21,MUTED)

# Native pages permit full-width subfigure exports in a note, without raster crops.
# The Overview page is the master; exported panel pages are generated views.
import copy

def panel_page(name,first,last,dx,dy,width,height,include_header=None):
    d=ET.SubElement(file,'diagram',id=name.lower().replace(' ','-'),name=name)
    m=ET.SubElement(d,'mxGraphModel',page='1',pageScale='1',pageWidth=str(width),pageHeight=str(height),background='#FFFFFF')
    rr=ET.SubElement(m,'root')
    ET.SubElement(rr,'mxCell',id='0'); ET.SubElement(rr,'mxCell',id='1',parent='0')
    cells=[c for c in root.findall('mxCell') if c.get('id','').startswith('v') and first<int(c.get('id')[1:])<=last]
    if include_header is not None:
        cells.insert(0,include_header)
    for c in cells:
        cc=copy.deepcopy(c); g=cc.find('mxGeometry')
        if g is not None:
            if cc.get('vertex')=='1':
                g.set('x',str(float(g.get('x','0'))-dx));g.set('y',str(float(g.get('y','0'))-dy))
            for point in g.iter('mxPoint'):
                if 'x' in point.attrib: point.set('x',str(float(point.get('x'))-dx))
                if 'y' in point.attrib: point.set('y',str(float(point.get('y'))-dy))
        rr.append(cc)

header_a=next(c for c in root.findall('mxCell') if c.get('value','').startswith('(a)'))
panel_page('Algorithm',a_start,a_end,0,135,850,790,header_a)
panel_page('Hardware mapping',b_start,b_end,890,135,1600,1210)
ET.indent(file, space='  ')
path=OUT/'dsa-kernel-overview.drawio'
ET.ElementTree(file).write(path,encoding='UTF-8',xml_declaration=True)
print(f'{path}: {serial} editable vector objects; overview + 2 panel views')
