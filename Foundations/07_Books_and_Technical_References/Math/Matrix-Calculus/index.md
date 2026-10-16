---
title: "[译] 深度学习所需的矩阵微积分"
outline: false
---

# [译] 深度学习所需的矩阵微积分

[下载完整中文 PDF](./article.pdf)

<!-- imported-translation:start -->
<div class="translated-article" v-pre>

<div class="watermark">
<i>由以下网站提供：<a href="http://explained.ai">explained.ai</a></i><br/>
</div>
<!-- original-title --><div class="translation-note">完整中文译本 · 原作者：Terence Parr、Jeremy Howard<br/>正文、表格文字、推导说明及附录均已翻译；公式和图内英文保留原样。本文中的“我们”指原作者。原文的符号约定与推导保持不变，未将译文改写为新的数学教材。<br/>原文：<a href="https://explained.ai/matrix-calculus/index.html">The Matrix Calculus You Need For Deep Learning</a> · 翻译与排版：2026-10-10</div>
<p></p>
<p data-translation="B001"><a href="https://www.linkedin.com/in/terence-parr/">Terence Parr</a> 与 <a href="http://www.fast.ai/about/#jeremy">Jeremy Howard</a></p>
<div class="paragraph-group" style="font-size: 80%; line-height:1.1;">（以下简介沿用原文：Terence 是 Google 的技术负责人，曾任<a href="https://www.usfca.edu/arts-sciences/graduate-programs/data-science">旧金山大学数据科学硕士项目</a>的计算机／数据科学教授。你也许知道他是 ANTLR 解析器生成器的作者。更多资料可参见 Jeremy 的<a href="http://course.fast.ai">fast.ai 课程</a>，以及旧金山大学数据研究所的<a href="https://www.usfca.edu/data-institute/certificates/deep-learning-part-one">线下深度学习课程</a>.)
<p data-translation="B002">如有评论、建议或纠错，请联系 <a href="mailto:terence@parr.us">Terence</a>。</p>
<p data-translation="B003"><a href="https://arxiv.org/abs/1802.01528">可打印版本</a>（此 HTML 由 <a href="https://github.com/parrt/bookish">bookish</a> 根据标记文本生成）。原站也提供一份<a href="https://explained.ai/matrix-calculus/矩阵微积分译文.pdf">中文版本</a>（其内容未经原作者核实）。</p>
</div>
<p data-translation="B004"><b>摘要</b></p>
<p data-translation="B005">本文尝试讲清理解深度神经网络训练所需的全部矩阵微积分知识。我们只假设你掌握了微积分入门课程的内容，并在需要时提供链接，帮助你复习必要的数学知识。请注意：在开始实践、学习训练和使用深度学习模型之前，你<b>不必</b>先读懂本文。本文面向已经熟悉神经网络基础、希望进一步理解其数学原理的读者。如果读到某处卡住了，不必担心：回头重读上一节，试着写下几个例子，亲手推算。如果仍有疑问，我们很乐意在 <a href="http://forums.fast.ai/c/theory">forums.fast.ai 的 Theory 板块</a>回答。<b>注意</b>：文末的<a href="#reference">速查部分</a>汇总了本文讨论的关键矩阵微积分法则和术语。</p>
<div id="toc"><h2>目录</h2><ul><li class="toc-h2"><a href="#intro">引言</a></li><li class="toc-h2"><a href="#sec:1.2">回顾：标量求导法则</a></li><li class="toc-h2"><a href="#sec:1.3">向量微积分与偏导数入门</a></li><li class="toc-h2"><a href="#sec:1.4">矩阵微积分</a></li><li class="toc-h3"><a href="#sec:1.4.1">雅可比矩阵的推广</a></li><li class="toc-h3"><a href="#sec:1.4.2">向量逐元素二元运算的导数</a></li><li class="toc-h3"><a href="#sec:1.4.3">涉及标量扩展的导数</a></li><li class="toc-h3"><a href="#sec:1.4.4">向量求和归约</a></li><li class="toc-h3"><a href="#sec:1.4.5">链式法则</a></li><li class="toc-h4"><a href="#sec:1.4.5.1">单变量链式法则</a></li><li class="toc-h4"><a href="#sec:1.4.5.2">单变量全导数链式法则</a></li><li class="toc-h4"><a href="#sec:1.4.5.3">向量链式法则</a></li><li class="toc-h2"><a href="#sec:1.5">神经元激活值的梯度</a></li><li class="toc-h2"><a href="#sec:1.6">神经网络损失函数的梯度</a></li><li class="toc-h3"><a href="#sec:1.6.1">对权重的梯度</a></li><li class="toc-h3"><a href="#sec:1.6.2">对偏置的导数</a></li><li class="toc-h2"><a href="#sec:1.7">总结</a></li><li class="toc-h2"><a href="#reference">矩阵微积分速查</a></li><li class="toc-h3"><a href="#sec:1.8.1">梯度与雅可比矩阵</a></li><li class="toc-h3"><a href="#sec:1.8.2">向量的逐元素运算</a></li><li class="toc-h3"><a href="#sec:1.8.3">标量扩展</a></li><li class="toc-h3"><a href="#sec:1.8.4">向量归约</a></li><li class="toc-h3"><a href="#sec:1.8.5">链式法则</a></li><li class="toc-h2"><a href="#notation">符号说明</a></li><li class="toc-h2"><a href="#sec:1.10">参考资源</a></li></ul></div>
<h2 data-translation="B026" id="intro">引言</h2>
<p data-translation="B027">我们大多数人上一次接触微积分还是在学校里，但导数是机器学习的关键组成部分。深度神经网络尤其如此：它们通过优化损失函数来训练。随手翻开一篇机器学习论文，或 <a href="http://pytorch.org">PyTorch</a> 这样的库的文档，微积分就会像逢年过节的远房亲戚一样，突然闯回你的生活。而且，出现的还不只是普通的标量微积分：你需要的是把<a href="https://en.wikipedia.org/wiki/Linear_algebra">线性代数</a>与<a href="https://en.wikipedia.org/wiki/Multivariable_calculus">多元微积分</a>拉到一起的<i>矩阵微分学</i>。</p>
<p data-translation="B028">不过……“需要”也许不太准确。Jeremy 的课程表明，借助现代深度学习库内置的自动微分，只掌握少量标量微积分知识，也能成为一流的深度学习实践者。但是，如果你真的想理解这些库底层发生了什么，并读懂讨论最新模型训练技术的学术论文，就需要了解矩阵微积分中的一部分知识。</p>
<p data-translation="B029">例如，神经网络中单个计算单元的激活值，通常先由连接权重向量 <span class="eqnvec">w</span> 与输入向量 <span class="eqnvec">x</span> 的点积（线性代数中的运算），再加上一个标量偏置（阈值）得到：<img src="./assets/82614dbe8bd4-eqn-EEDCFA4252D0992243A283CE0EB777A6-depth003.31.svg" style="width:125.400pt;height:10.640pt;vertical-align:-2.641pt"/>。函数 <img src="./assets/e0e21c8b4f25-eqn-C599D931407509E0FA08F8686B205B6D-depth003.25.svg" style="width:16.720pt;height:10.640pt;vertical-align:-2.594pt"/> 称为该单元的<i>仿射函数</i>，其后接一个<a href="https://goo.gl/7BXceK">整流线性单元</a>，将负值截断为零：<img src="./assets/98ce0ed7d283-eqn-66258AA93A4746DA10D306190271DE4B-depth003.25.svg" style="width:49.400pt;height:10.640pt;vertical-align:-2.594pt"/>。这样的计算单元有时称为“人工神经元”，如下图所示：</p>
<div class="paragraph-group"><center>
<a href="assets/bdefde230f7e-neuron.png">
<img alt="neuron.png" src="./assets/bdefde230f7e-neuron.png" width="30%"/>
</a>
</center>
</div>
<p data-translation="B030">神经网络由许多这样的单元组成，神经元被组织成多个称为<i>层</i>的集合。一层中各单元的激活值，成为下一层各单元的输入。最后一层中一个或多个单元的激活值，就是网络输出。</p>
<p data-translation="B031"><i>训练</i>这个神经元，意味着选择权重 <span class="eqnvec">w</span> 和偏置 <span class="eqn">b</span>，使其对全部 <span class="eqn">N</span> 个输入 <span class="eqnvec">x</span> 都产生期望输出。为此，我们最小化一个<i>损失函数</i>：它对所有输入向量 <span class="eqnvec">x</span>，比较网络最终的 <img src="./assets/831c1a9d1a49-eqn-7971D42A6C6C6A28D6443F0645E4A036-depth003.25.svg" style="width:52.440pt;height:10.640pt;vertical-align:-2.594pt"/> 与 <img src="./assets/ba809b9d4341-eqn-E146B831A1E53B95E4C63775285D62CF-depth003.25.svg" style="width:36.480pt;height:10.640pt;vertical-align:-2.594pt"/>（<span class="eqnvec">x</span> 的期望输出）。为了最小化损失，我们使用某种梯度下降方法，例如普通的<a href="https://en.wikipedia.org/wiki/Stochastic_gradient_descent">随机梯度下降</a>（SGD）、带动量的 SGD，或 <a href="https://en.wikipedia.org/wiki/Stochastic_gradient_descent#Adam">Adam</a>。这些方法都需要 <img src="./assets/831c1a9d1a49-eqn-7971D42A6C6C6A28D6443F0645E4A036-depth003.25.svg" style="width:52.440pt;height:10.640pt;vertical-align:-2.594pt"/> 对模型参数 <span class="eqnvec">w</span> 和 <span class="eqn">b</span> 的偏导数（梯度）。我们的目标是逐步调整 <span class="eqnvec">w</span> 和 <span class="eqn">b</span>，使所有输入 <span class="eqnvec">x</span> 上的总体损失不断减小。</p>
<p data-translation="B032">只要仔细一些，就可以对常见损失函数（均方误差）的标量形式求导，从而得到梯度：</p>
<div><img alt="" class="blkeqn" src="./assets/32007d12bbc8-blkeqn-FEE44D816921C28B1DB3F31B7EE7E7EC.svg" style="width:330.460pt;height:29.520pt;vertical-align:0.000pt"/></div>
<p data-translation="B033">但这还只是一个神经元，而神经网络必须同时训练所有层中全部神经元的权重和偏置。由于存在多个输入，以及可能存在的多个网络输出，我们确实需要函数对向量求导的一般法则，甚至需要向量值函数对向量求导的法则。</p>
<p data-translation="B034">本文将逐步推导一些重要的向量偏导数计算法则，尤其是那些对训练神经网络有用的法则。这个领域称为<i>矩阵微积分</i>。好消息是，我们只需要其中很小的一部分，也就是本文介绍的内容。网上关于多元微积分和线性代数的资料很多，但它们通常作为两门独立的本科课程讲授，因此大多数资料也将二者分开讨论。真正讨论矩阵微积分的网页，往往只罗列法则而缺少解释，或者只讲了部分内容。由于符号密集，对基础概念的讨论又很少，除了少数数学专业读者之外，其他人通常很难读懂。（文末有一份附带评述的资源清单。）</p>
<p data-translation="B035">这里，我们会通过重新推导、重新发现一些关键法则来解释矩阵微积分。你会发现，它其实并没有那么难！需要学习的不是几十条新规则，而只是几个关键概念。希望这篇短文能帮助你快速入门与神经网络训练相关的矩阵微积分。我们假设你已经熟悉神经网络结构和训练的基础知识；如果还不熟悉，请先完成 <a href="http://course.fast.ai">Jeremy 课程</a>的第一部分，再回来阅读。（请注意，与许多更偏学术的学习路径不同，我们强烈建议<i>先</i>在实践中学习训练和使用神经网络，<i>再</i>研究背后的数学。有了具体背景，数学会容易理解得多；而且，成为有效的实践者，并不需要先彻底掌握这些微积分知识。）</p>
<p data-translation="B036"><i>关于符号的说明</i>：Jeremy 的课程完全使用代码而非数学符号解释概念，因为代码中不熟悉的函数很容易检索和实验。本文则相反，会使用大量数学符号，因为目标之一就是帮助你理解深度学习论文和书籍中的记号。<a href="#notation">文末</a>有一张简明符号表，同时列出了可用于进一步搜索的词语或短语。</p>
<h2 data-translation="B037" id="sec:1.2">回顾：标量求导法则</h2>
<p data-translation="B038">希望你还记得下面这些主要的标量求导法则。如果记忆有些模糊，可以看看<a href="https://www.khanacademy.org/math/ap-calculus-ab/ab-derivative-rules">可汗学院关于标量求导法则的视频</a>。</p>
<center>
<table style="">
<thead>
<tr>
<th align="center" data-translation="B039" valign="top" width="20%">法则</th><th align="center" valign="top"><img src="./assets/061cf3e586d3-eqn-50BBD36E1FD2333108437A2CA378BE62-depth003.25.svg" style="width:17.480pt;height:10.640pt;vertical-align:-2.594pt"/></th><th align="center" data-translation="B040" valign="top" width="30%">对 <span class="eqn">x</span> 的标量导数记法</th><th align="center" data-translation="B041" valign="top">示例</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" data-translation="B042" valign="top"><b>常数</b></td><td align="center" data-translation="B043" valign="top"><span class="eqn">c</span></td><td align="center" valign="top"><img src="./assets/8f3e0961309c-eqn-CFCD208495D565EF66E7DFF9F98764DA-depth000.20.svg" style="width:5.320pt;height:7.600pt;vertical-align:-0.380pt"/></td><td align="center" valign="top"> <img src="./assets/426ad9dec20d-eqn-64F478FC4F8CA7284B3A00A378371DD9-depth004.58.svg" style="width:35.720pt;height:12.920pt;vertical-align:-3.655pt"/></td>
</tr>
<tr>
<td align="center" data-translation="B044" valign="top"><b>常数倍</b></td><td align="center" data-translation="B045" valign="top"><span class="eqn">cf</span></td><td align="center" valign="top"><img src="./assets/50e7e2d37a3a-eqn-6F4437952F8A3645EDFDBA34800939C7-depth004.58.svg" style="width:13.680pt;height:13.680pt;vertical-align:-3.655pt"/></td><td align="center" valign="top"><img src="./assets/bc3dc4c50d6b-eqn-E6BBA7095B8356839BB31CBAA81BEB2D-depth004.58.svg" style="width:34.960pt;height:12.920pt;vertical-align:-3.655pt"/></td>
</tr>
<tr>
<td align="center" data-translation="B046" valign="top"><b>幂法则</b></td><td align="center" valign="top"><img src="./assets/b36014ba88ee-eqn-B41952E9DFED8E1ED562FDDAFECA7C70-depth000.14.svg" style="width:9.120pt;height:7.600pt;vertical-align:-0.380pt"/> </td><td align="center" valign="top"><img src="./assets/206376c93460-eqn-778B829130B1FD49AB222C57E43AA511-depth000.14.svg" style="width:21.280pt;height:9.120pt;vertical-align:-0.380pt"/></td><td align="center" valign="top"><img src="./assets/0fab80292802-eqn-0E35EE43AF43B99B9DEC113EF495C9B1-depth004.58.svg" style="width:42.560pt;height:12.920pt;vertical-align:-3.655pt"/></td>
</tr>
<tr>
<td align="center" data-translation="B047" valign="top"><b>和法则</b></td><td align="center" valign="top"><img src="./assets/6a61930bfa90-eqn-F90CB0F11C73CF039948C790CB958167-depth002.72.svg" style="width:22.800pt;height:9.880pt;vertical-align:-2.171pt"/></td><td align="center" valign="top"><img src="./assets/9d5b9642b881-eqn-272CCFD170B42C2D5FC34B8F6B59B919-depth004.58.svg" style="width:29.640pt;height:13.680pt;vertical-align:-3.655pt"/></td><td align="center" valign="top"><img src="./assets/50567c1398bd-eqn-30CBA4C53B1DA339D30A685E5F750181-depth004.58.svg" style="width:84.360pt;height:12.920pt;vertical-align:-3.655pt"/></td>
</tr>
<tr>
<td align="center" data-translation="B048" valign="top"><b>差法则</b></td><td align="center" valign="top"><img src="./assets/7c91f42e9728-eqn-6BF1771953527A02849B0FD62C669A81-depth002.72.svg" style="width:22.800pt;height:9.880pt;vertical-align:-2.171pt"/></td><td align="center" valign="top"><img src="./assets/a01e0bffa8fb-eqn-94A32391D8AF942F5DD6DF56F3A6B9D7-depth004.58.svg" style="width:29.640pt;height:13.680pt;vertical-align:-3.655pt"/></td><td align="center" valign="top"><img src="./assets/63d5fd3a4c10-eqn-A5BC3AF74DAB50898B00534C3A67F8E7-depth004.58.svg" style="width:84.360pt;height:12.920pt;vertical-align:-3.655pt"/></td>
</tr>
<tr>
<td align="center" data-translation="B049" valign="top"><b>乘积法则</b></td><td align="center" data-translation="B050" valign="top"><span class="eqn">fg</span></td><td align="center" valign="top"><img src="./assets/68b33ef25920-eqn-BEE9614EE8574DD7D3739CB7B896CF87-depth004.58.svg" style="width:41.800pt;height:13.680pt;vertical-align:-3.655pt"/></td><td align="center" valign="top"><img src="./assets/6f74bb13492a-eqn-80B75BFF0AE78CDC1377C9DA385E5733-depth004.58.svg" style="width:93.480pt;height:12.920pt;vertical-align:-3.655pt"/></td>
</tr>
<tr>
<td align="center" data-translation="B051" valign="top"><b>链式法则</b></td><td align="center" valign="top"><img src="./assets/0c8ca55b7c56-eqn-8BC3A7E80988236E8F017205F413461C-depth003.25.svg" style="width:29.640pt;height:10.640pt;vertical-align:-2.594pt"/></td><td align="center" data-translation="B052" valign="top"><img src="./assets/9ad721bdf785-eqn-8FF3736047AA480DA61894A92CA055ED-depth004.58.svg" style="width:26.600pt;height:14.440pt;vertical-align:-3.655pt"/>，令 <img src="./assets/acac5bc79bcc-eqn-F1EA68A4A1E70E96ADA7592EF8752C30-depth003.25.svg" style="width:34.200pt;height:10.640pt;vertical-align:-2.594pt"/></td><td align="center" valign="top"><img src="./assets/d1cd70b8f7c6-eqn-951A8B94D11F280E3A440D55B3D520D3-depth004.61.svg" style="width:79.800pt;height:12.920pt;vertical-align:-3.679pt"/></td>
</tr>
</tbody>
</table>
</center>
<p data-translation="B053">此外还有三角函数、指数函数等的求导法则，可以在<a href="https://www.khanacademy.org/math/differential-calculus">可汗学院微分学课程</a>中找到。</p>
<p data-translation="B054">对于只有一个参数的函数 <img src="./assets/061cf3e586d3-eqn-50BBD36E1FD2333108437A2CA378BE62-depth003.25.svg" style="width:17.480pt;height:10.640pt;vertical-align:-2.594pt"/>，你经常会看到用 <img src="./assets/6fd90a4b73ef-eqn-6BDA8AF54C40BC23ED858E9E9F5C11D2-depth002.72.svg" style="width:7.600pt;height:10.640pt;vertical-align:-2.171pt"/> 和 <img src="./assets/b59d45a8e719-eqn-74CAF4D1EC90D3A36EA7C7BBFE65B516-depth003.25.svg" style="width:19.760pt;height:10.640pt;vertical-align:-2.594pt"/> 简写 <img src="./assets/4f2f765b3338-eqn-5BA9D16419154B1BDBECA39D99E8E809-depth004.58.svg" style="width:25.080pt;height:12.920pt;vertical-align:-3.655pt"/>。我们不推荐这种记法，因为它没有明确指出求导所针对的变量。</p>
<p data-translation="B055">可以把 <img src="./assets/b720e4688651-eqn-624FEBB9A49A3FC96353C861D175C806-depth004.58.svg" style="width:7.600pt;height:12.920pt;vertical-align:-3.655pt"/> 看成一个算子：它把一个单参数函数映射到另一个函数。也就是说，<img src="./assets/d3fd7d63d4aa-eqn-EC0CEC5F9488EC510F8D688E7003222D-depth004.58.svg" style="width:25.080pt;height:12.920pt;vertical-align:-3.655pt"/> 将 <img src="./assets/061cf3e586d3-eqn-50BBD36E1FD2333108437A2CA378BE62-depth003.25.svg" style="width:17.480pt;height:10.640pt;vertical-align:-2.594pt"/> 映射为它对 <span class="eqn">x</span> 的导数，也就是 <img src="./assets/40fb29d007d1-eqn-07A5EA519C4CEA1A3539E3A7FC289163-depth004.58.svg" style="width:16.720pt;height:14.440pt;vertical-align:-3.655pt"/>。同样，如果 <img src="./assets/9383ee0ebcb3-eqn-FD91C508F91C2C84498680BD337C1D7A-depth003.25.svg" style="width:35.720pt;height:10.640pt;vertical-align:-2.594pt"/>，那么 <img src="./assets/6b0c962e621c-eqn-B1ED3CF9BA4D6F25A5A4F481C45EC658-depth004.58.svg" style="width:78.280pt;height:14.440pt;vertical-align:-3.655pt"/>。把求导视为一种算子，有助于化简复杂的导数，因为这个算子具有分配性质，并允许我们把常数提出去。例如，在下面的等式中，我们可以提出常数 9，再把求导算子分别作用到括号中的各项上。</p>
<div><img alt="" class="blkeqn" src="./assets/b64870983ee8-blkeqn-EBF5FE53A7BB81EBF698EC22D698D70A.svg" style="width:302.580pt;height:22.960pt;vertical-align:0.000pt"/></div>
<p data-translation="B056">这样一来，对 <img src="./assets/e8e980670b04-eqn-FDFD125C741CD062B2CA779DDE0524BE-depth003.25.svg" style="width:36.480pt;height:11.400pt;vertical-align:-2.594pt"/> 求导就转化成了一点算术运算，以及对 <span class="eqn">x</span> 和 <img src="./assets/9c463adf1e69-eqn-32F5240D0DBF2CCBE75EF7F8EF2015E0-depth000.14.svg" style="width:9.120pt;height:9.120pt;vertical-align:-0.380pt"/> 求导，后两者比原式容易处理得多。</p>
<h2 data-translation="B057" id="sec:1.3">向量微积分与偏导数入门</h2>
<p data-translation="B058">神经网络层并不是单个单参数函数 <img src="./assets/061cf3e586d3-eqn-50BBD36E1FD2333108437A2CA378BE62-depth003.25.svg" style="width:17.480pt;height:10.640pt;vertical-align:-2.594pt"/>。因此，接下来看看具有多个参数的函数，例如 <img src="./assets/d38dd1b9a6d9-eqn-3BAF1600AE50930A155F58AE172B51BD-depth003.25.svg" style="width:25.840pt;height:10.640pt;vertical-align:-2.594pt"/>。比如，<span class="eqn">xy</span>（即 <span class="eqn">x</span> 与 <span class="eqn">y</span> 相乘）的导数是什么？换句话说，稍微改变变量时，乘积 <span class="eqn">xy</span> 会怎样变化？答案取决于改变的是 <span class="eqn">x</span> 还是 <span class="eqn">y</span>。我们每次只对一个变量（参数）求导，因此这个双参数函数有两个不同的<i>偏导数</i>（分别对 <span class="eqn">x</span> 和 <span class="eqn">y</span>）。偏导数使用的算子是 <img src="./assets/0f7901289356-eqn-4D6C379F66675645B3FFE28A15306857-depth004.67.svg" style="width:7.600pt;height:13.680pt;vertical-align:-3.727pt"/>，而不是 <img src="./assets/b720e4688651-eqn-624FEBB9A49A3FC96353C861D175C806-depth004.58.svg" style="width:7.600pt;height:12.920pt;vertical-align:-3.655pt"/>；其中的符号是变体的 <span class="eqn">d</span>，不是希腊字母 <img src="./assets/2146b698a0d9-eqn-77A3B715842B45E440A5BEE15357AD29-depth000.22.svg" style="width:5.320pt;height:8.360pt;vertical-align:-0.380pt"/>。所以，<img src="./assets/fef5472480be-eqn-08DCCFBE629A14FCCD9FB9A20F2E367C-depth004.67.svg" style="width:17.480pt;height:13.680pt;vertical-align:-3.727pt"/> 和 <img src="./assets/aeb4f7f6c9e8-eqn-1FDCF7A9F137AE48FA25EE34A69F8201-depth006.34.svg" style="width:17.480pt;height:14.440pt;vertical-align:-5.059pt"/> 就是 <span class="eqn">xy</span> 的偏导数，英文常简称为 <i>partials</i>。对于单参数函数，算子 <img src="./assets/0f7901289356-eqn-4D6C379F66675645B3FFE28A15306857-depth004.67.svg" style="width:7.600pt;height:13.680pt;vertical-align:-3.727pt"/> 与 <img src="./assets/b720e4688651-eqn-624FEBB9A49A3FC96353C861D175C806-depth004.58.svg" style="width:7.600pt;height:12.920pt;vertical-align:-3.655pt"/> 等价（假定函数足够光滑）。不过，最好使用 <img src="./assets/b720e4688651-eqn-624FEBB9A49A3FC96353C861D175C806-depth004.58.svg" style="width:7.600pt;height:12.920pt;vertical-align:-3.655pt"/>，明确表示这里指的是标量导数。</p>
<p data-translation="B059">对 <span class="eqn">x</span> 求偏导，其实就是普通的标量求导，只需将式中的其他变量都视为常数。考虑函数 <img src="./assets/6f719a488dc7-eqn-D6DEAE7E403381C2C425D4B40CCA936E-depth003.25.svg" style="width:57.000pt;height:11.400pt;vertical-align:-2.594pt"/>。它对 <span class="eqn">x</span> 的偏导数记作 <img src="./assets/31e3a4f04464-eqn-F063B8EC812DF3D204F9327F5D094073-depth004.67.svg" style="width:25.840pt;height:13.680pt;vertical-align:-3.727pt"/>。从 <img src="./assets/0f7901289356-eqn-4D6C379F66675645B3FFE28A15306857-depth004.67.svg" style="width:7.600pt;height:13.680pt;vertical-align:-3.727pt"/> 的角度看，有三个常数：3、2 和 <span class="eqn">y</span>。因此，<img src="./assets/b87fe497b515-eqn-D981BA4BD14AC44C43A4E4E0EC750B4A-depth004.67.svg" style="width:124.640pt;height:13.680pt;vertical-align:-3.727pt"/>。对 <span class="eqn">y</span> 求偏导时，则把 <span class="eqn">x</span> 当作常数：<img src="./assets/fbf78d8deff0-eqn-55A3A400FAD3326FEF1BB9DDD2658383-depth006.34.svg" style="width:170.240pt;height:15.200pt;vertical-align:-5.059pt"/>。继续阅读之前，最好自己推导一下，否则后文可能难以理解。如需帮助，可以观看<a href="https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/introduction-to-partial-derivatives">可汗学院的偏导数视频</a>。</p>
<p data-translation="B060">为了说明我们讨论的是向量微积分，而不只是多元微积分，来看看如何处理刚才为 <img src="./assets/6f719a488dc7-eqn-D6DEAE7E403381C2C425D4B40CCA936E-depth003.25.svg" style="width:57.000pt;height:11.400pt;vertical-align:-2.594pt"/> 算出的偏导数 <img src="./assets/6a691053ac7e-eqn-84D799755A7F73945BD58B2E057121AB-depth004.67.svg" style="width:22.040pt;height:14.440pt;vertical-align:-3.727pt"/> 和 <img src="./assets/fe9de3aec2bf-eqn-A2DE2EC029172B84A0A0E8A8D00F5A6F-depth006.34.svg" style="width:22.040pt;height:15.960pt;vertical-align:-5.059pt"/>（也就是 <img src="./assets/c1c780c4ae31-eqn-75645E70B6C95F7466C353E9C2306FE0-depth004.67.svg" style="width:34.200pt;height:13.680pt;vertical-align:-3.727pt"/> 和 <img src="./assets/e7547f472e13-eqn-B20FF70C037320C2D0B710F4B592927E-depth006.34.svg" style="width:34.200pt;height:14.440pt;vertical-align:-5.059pt"/> 的另一种写法）。不要让它们零散地放着，而是将它们组织成一个行向量。这个向量称为 <img src="./assets/d38dd1b9a6d9-eqn-3BAF1600AE50930A155F58AE172B51BD-depth003.25.svg" style="width:25.840pt;height:10.640pt;vertical-align:-2.594pt"/> 的<i>梯度</i>，记为：</p>
<div><img alt="" class="blkeqn" src="./assets/4fb97cd0c699-blkeqn-0C95BB61B2BFFB0C2A95A9DC5D8AF44E.svg" style="width:187.780pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B061">所以，<img src="./assets/d38dd1b9a6d9-eqn-3BAF1600AE50930A155F58AE172B51BD-depth003.25.svg" style="width:25.840pt;height:10.640pt;vertical-align:-2.594pt"/> 的梯度就是由其偏导数组成的向量。梯度属于向量微积分的范畴，处理的是把 <span class="eqn">n</span> 个标量参数映射为一个标量的函数。现在再大胆一点，考虑同时对多个函数求导。</p>
<h2 data-translation="B062" id="sec:1.4">矩阵微积分</h2>
<p data-translation="B063">从一个函数的导数转向多个函数的导数，我们就从向量微积分进入了矩阵微积分。来计算两个函数的偏导数，每个函数都有两个参数。保留上一节的 <img src="./assets/6f719a488dc7-eqn-D6DEAE7E403381C2C425D4B40CCA936E-depth003.25.svg" style="width:57.000pt;height:11.400pt;vertical-align:-2.594pt"/>，再引入 <img src="./assets/ec5c65267371-eqn-D182AD2135D1E887AFFCA045F432B2CA-depth003.25.svg" style="width:68.400pt;height:11.400pt;vertical-align:-2.594pt"/>。<span class="eqn">g</span> 的梯度有两个分量，每个参数对应一个偏导数：</p>
<div><img alt="" class="blkeqn" src="./assets/fa9d0121e123-blkeqn-FDB56AA8804E0D13E1555DB8E0E1AAEE.svg" style="width:206.640pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B064">以及</p>
<div><img alt="" class="blkeqn" src="./assets/a65e7955f87e-blkeqn-13AF8214DD5A2040D650C7B460C88129.svg" style="width:173.020pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B065">由此得到梯度 <img src="./assets/97ff7080ccff-eqn-E2670D9705180E731C7455A4B46B7AF6-depth003.25.svg" style="width:72.960pt;height:11.400pt;vertical-align:-2.594pt"/>。</p>
<p data-translation="B066">梯度向量将一个特定标量函数的所有偏导数组织在一起。如果有两个函数，也可以把它们的梯度逐行堆叠成矩阵。这样得到的就是<i>雅可比矩阵</i>（Jacobian matrix，简称 Jacobian），其中每一行都是一个梯度：</p>
<div><img alt="" class="blkeqn" src="./assets/86909a645c46-blkeqn-B45AD8AF1574CD63AE6980B44770D643.svg" style="width:213.200pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B067">欢迎来到矩阵微积分的世界！</p>
<p data-translation="B068"><b>注意，雅可比矩阵有多种表示方式。</b>我们使用所谓的<a href="https://en.wikipedia.org/wiki/Matrix_calculus#Layout_conventions">分子布局</a>，但许多论文和软件采用<i>分母布局</i>。后者就是分子布局雅可比矩阵的转置（沿主对角线翻转）：</p>
<div><img alt="" class="blkeqn" src="./assets/858c1f774b0f-blkeqn-56D2916E9F9FCAC89A303AFADE00AB84.svg" style="width:43.460pt;height:26.240pt;vertical-align:0.000pt"/></div>
<h3 data-translation="B069" id="sec:1.4.1">雅可比矩阵的推广</h3>
<p data-translation="B070">到目前为止，我们看的是雅可比矩阵的具体例子。为了给出更一般的定义，先把多个参数合并成一个向量参数：<img src="./assets/f9a1b0c35a77-eqn-8C56090E55CDB76D1CD0E738EBA7F164-depth003.25.svg" style="width:67.640pt;height:10.640pt;vertical-align:-2.594pt"/>。（文献中有时也用 <img src="./assets/c0602bb9ac47-eqn-B936F86B11CF5D61050A7042532EE3BE-depth000.00.svg" style="width:9.880pt;height:9.880pt;vertical-align:-0.380pt"/> 表示向量。）像 <span class="eqnvec">x</span> 这样的粗体小写字母表示向量，像 <span class="eqn">x</span> 这样的斜体字母表示标量。<span class="eqn">x<sub>i</sub></span> 是向量 <span class="eqnvec">x</span> 的第 <img src="./assets/e820174d1d4c-eqn-97361F12A3555FC4FC4E2FFCE1799AC3-depth000.14.svg" style="width:8.360pt;height:9.120pt;vertical-align:-0.380pt"/> 个元素，使用斜体是因为单个向量元素是标量。还需要约定向量 <span class="eqnvec">x</span> 的方向。我们默认所有向量都是大小为 <img src="./assets/cbe4b3b290a0-eqn-88512AB12706879FEC83C0C3AA79931F-depth001.08.svg" style="width:21.280pt;height:7.600pt;vertical-align:-0.821pt"/> 的列向量：</p>
<div><img alt="" class="blkeqn" src="./assets/ae67c4cec1d7-blkeqn-D76C868C669197F65B05E96473454834.svg" style="width:40.180pt;height:51.660pt;vertical-align:0.000pt"/></div>
<p data-translation="B071">对于多个标量值函数，也可以像处理参数那样，把它们组合成一个向量。令 <img src="./assets/0469aafea427-eqn-A16203A31AD7C6CC63FD297D522170F1-depth003.25.svg" style="width:34.960pt;height:10.640pt;vertical-align:-2.594pt"/> 是由 <span class="eqn">m</span> 个标量值函数组成的向量，每个函数都接受一个长度为 <img src="./assets/ba269d4c6976-eqn-E3114C625CDDDC18ED29BA629242BD65-depth003.25.svg" style="width:28.120pt;height:10.640pt;vertical-align:-2.594pt"/> 的向量 <span class="eqnvec">x</span>；其中 <img src="./assets/2dc48c3966b4-eqn-DEA8E196A572D082201CD5ABF2FA82DE-depth003.25.svg" style="width:9.120pt;height:10.640pt;vertical-align:-2.594pt"/> 表示 <span class="eqnvec">x</span> 中元素的基数（数量）。与上一节一样，<span class="eqnvec">f</span> 中的每个函数 <span class="eqn">f<sub>i</sub></span> 都返回一个标量：</p>
<div><img alt="" class="blkeqn" src="./assets/4139546d52d1-blkeqn-808B0EC49232D5E92C9299028ABAFA8E.svg" style="width:59.860pt;height:53.300pt;vertical-align:0.000pt"/></div>
<p data-translation="B072">例如，上一节的 <img src="./assets/6f719a488dc7-eqn-D6DEAE7E403381C2C425D4B40CCA936E-depth003.25.svg" style="width:57.000pt;height:11.400pt;vertical-align:-2.594pt"/> 和 <img src="./assets/ec5c65267371-eqn-D182AD2135D1E887AFFCA045F432B2CA-depth003.25.svg" style="width:68.400pt;height:11.400pt;vertical-align:-2.594pt"/> 可以写成：</p>
<div><img alt="" class="blkeqn" src="./assets/098044f488f3-blkeqn-1085F139D721DD44566EAEF7FC842234.svg" style="width:257.480pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B073">常见的情形是 <img src="./assets/86c2e1c83d04-eqn-A193EBC083B4745370F6F1343383D9CC-depth000.14.svg" style="width:25.080pt;height:5.320pt;vertical-align:-0.380pt"/>，因为向量 <span class="eqnvec">x</span> 中的每个元素都对应一个标量函数结果。例如，考虑恒等函数 <img src="./assets/558f642e23a8-eqn-23225C9E5521B6A9777579BE4B92245C-depth003.25.svg" style="width:54.720pt;height:10.640pt;vertical-align:-2.594pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/29e646f3153e-blkeqn-4BAF672444FD71616154DE2BE79A5DD6.svg" style="width:90.200pt;height:53.300pt;vertical-align:0.000pt"/></div>
<p data-translation="B074">在这个例子中，函数和参数的数量均为 <img src="./assets/86c2e1c83d04-eqn-A193EBC083B4745370F6F1343383D9CC-depth000.14.svg" style="width:25.080pt;height:5.320pt;vertical-align:-0.380pt"/>。一般而言，雅可比矩阵汇集了全部 <img src="./assets/e8240192acd9-eqn-FBFEB9C8459FEE5A2BD529C07B881153-depth001.08.svg" style="width:24.320pt;height:5.320pt;vertical-align:-0.821pt"/> 个可能的偏导数（<span class="eqn">m</span> 行、<span class="eqn">n</span> 列），也就是将 <span class="eqn">m</span> 个对 <span class="eqnvec">x</span> 的梯度堆叠起来：</p>
<div><img alt="" class="blkeqn" src="./assets/dacbf9db4fd0-blkeqn-DC306E7A179A49A78AEB2B12B21D9E68.svg" style="width:306.680pt;height:58.220pt;vertical-align:0.000pt"/></div>
<p data-translation="B075">每个 <img src="./assets/93f73cd1ef9e-eqn-98F52E62B85A836D750F1CEDF32E1D68-depth004.67.svg" style="width:28.880pt;height:13.680pt;vertical-align:-3.727pt"/> 都是一个长度为 <span class="eqn">n</span> 的行向量，因为偏导数所针对的向量 <span class="eqnvec">x</span> 长度为 <img src="./assets/7db210241f2e-eqn-A921357AFE67E47CC9D1DB575BCE1B77-depth003.25.svg" style="width:28.120pt;height:10.640pt;vertical-align:-2.594pt"/>。对 <span class="eqnvec">x</span> 求偏导时，雅可比矩阵的宽度是 <span class="eqn">n</span>，因为有 <span class="eqn">n</span> 个可以改变的参数，每个都可能影响函数值。因此，对于 <span class="eqn">m</span> 个方程，雅可比矩阵总有 <span class="eqn">m</span> 行。将这些可能的形状画出来，有助于理解：</p>
<div><img alt="
\begin{tabular}{c|ccl}
  &amp; \begin{tabular}[t]{c}
  scalar\\
  \framebox(18,18){$x$}\\
  \end{tabular} &amp; \begin{tabular}{c}
  vector\\
  \framebox(18,40){$\mathbf{x}$}
  \end{tabular}\\
\hline
%\[\dimexpr-\normalbaselineskip+5pt]
\begin{tabular}[b]{c}
  scalar\\
  \framebox(18,18){$f$}\\
  \end{tabular} &amp;\framebox(18,18){$\frac{\partial f}{\partial {x}}$} &amp; \framebox(40,18){$\frac{\partial f}{\partial {\mathbf{x}}}$}&amp;\\
\begin{tabular}[b]{c}
  vector\\
  \framebox(18,40){$\mathbf{f}$}\\
  \end{tabular} &amp; \framebox(18,40){$\frac{\partial \mathbf{f}}{\partial {x}}$} &amp; \framebox(40,40){$\frac{\partial \mathbf{f}}{\partial \mathbf{x}}$}\\
\end{tabular}
" class="blkeqn" src="./assets/df7106368a85-latex-FEFCAA3AA3D0B051E4960CE52D92A7C0.svg" style="width:150.880pt;height:131.200pt;vertical-align:0.000pt"/></div>
<p data-translation="B076">恒等函数 <img src="./assets/fe74f5c6d279-eqn-3ABE4A0471143ABFC180C9FA485E5F0A-depth003.25.svg" style="width:35.720pt;height:10.640pt;vertical-align:-2.594pt"/> 的雅可比矩阵（其中 <img src="./assets/41e1e5af7c34-eqn-E314355F5E2135483279531C62D7E8EC-depth003.25.svg" style="width:39.520pt;height:10.640pt;vertical-align:-2.594pt"/>）涉及 <span class="eqn">n</span> 个函数，每个函数都有 <span class="eqn">n</span> 个参数，统一放在向量 <span class="eqnvec">x</span> 中。因此，雅可比矩阵是方阵，因为 <img src="./assets/86c2e1c83d04-eqn-A193EBC083B4745370F6F1343383D9CC-depth000.14.svg" style="width:25.080pt;height:5.320pt;vertical-align:-0.380pt"/>：</p>
<div><img alt="
\begin{eqnarray*}
	\frac{\partial \mathbf{y}}{\partial \mathbf{x}} = \begin{bmatrix}
	\frac{\partial}{\partial \mathbf{x}} f_1(\mathbf{x}) \\
	\frac{\partial}{\partial \mathbf{x}} f_2(\mathbf{x})\\
	\ldots\\
	\frac{\partial}{\partial \mathbf{x}} f_m(\mathbf{x})
	\end{bmatrix} &amp;=&amp; \begin{bmatrix}
	\frac{\partial}{\partial {x_1}} f_1(\mathbf{x})~ \frac{\partial}{\partial {x_2}} f_1(\mathbf{x}) ~\ldots~  \frac{\partial}{\partial {x_n}} f_1(\mathbf{x}) \\
	\frac{\partial}{\partial {x_1}} f_2(\mathbf{x})~ \frac{\partial}{\partial {x_2}} f_2(\mathbf{x}) ~\ldots~  \frac{\partial}{\partial {x_n}} f_2(\mathbf{x}) \\
	\ldots\\
	~\frac{\partial}{\partial {x_1}} f_m(\mathbf{x})~ \frac{\partial}{\partial {x_2}} f_m(\mathbf{x}) ~\ldots~ \frac{\partial}{\partial {x_n}} f_m(\mathbf{x}) \\
	\end{bmatrix}\\\\
	&amp; = &amp; \begin{bmatrix}
	\frac{\partial}{\partial {x_1}} x_1~ \frac{\partial}{\partial {x_2}} x_1 ~\ldots~ \frac{\partial}{\partial {x_n}} x_1 \\
	\frac{\partial}{\partial {x_1}} x_2~ \frac{\partial}{\partial {x_2}} x_2 ~\ldots~ \frac{\partial}{\partial {x_n}} x_2 \\
	\ldots\\
	~\frac{\partial}{\partial {x_1}} x_n~ \frac{\partial}{\partial {x_2}} x_n ~\ldots~ \frac{\partial}{\partial {x_n}} x_n \\
	\end{bmatrix}\\\\
	&amp; &amp; (\text{and since } \frac{\partial}{\partial {x_j}} x_i = 0 \text{ for } j \neq i)\\
	 &amp; = &amp; \begin{bmatrix}
	\frac{\partial}{\partial {x_1}} x_1 &amp; 0 &amp; \ldots&amp; 0 \\
	0 &amp; \frac{\partial}{\partial {x_2}} x_2 &amp;\ldots &amp; 0 \\
	&amp; &amp; \ddots\\
	0 &amp; 0 &amp;\ldots&amp; \frac{\partial}{\partial {x_n}} x_n \\
	\end{bmatrix}\\\\
	 &amp; = &amp; \begin{bmatrix}
	1 &amp; 0 &amp; \ldots&amp; 0 \\
	0 &amp;1 &amp;\ldots &amp; 0 \\
	&amp; &amp; \ddots\\
	0 &amp; 0 &amp; \ldots &amp;1 \\
	\end{bmatrix}\\\\
	&amp; = &amp; I ~~~(I \text{ is the identity matrix with ones down the diagonal})\\
	\end{eqnarray*}
" class="blkeqn" src="./assets/178e368aa159-latex-A936169BDEA3E18A4B377A21C743CB21.svg" style="width:363.260pt;height:299.300pt;vertical-align:0.000pt"/></div>
<p data-translation="B077">继续之前，请确保自己能推导上面的每一步。如果卡住了，就单独考虑矩阵中的每个元素，应用普通的标量求导法则。这是一个普遍有用的技巧：先把向量表达式拆成一组标量表达式，再计算所有偏导数，最后将结果适当地组合成向量和矩阵。</p>
<p data-translation="B078">还要仔细区分矩阵是纵向的 <span class="eqnvec">x</span>，还是横向的 <img src="./assets/af1e941136b5-eqn-FAAEE783424BC0E27E9AA2F56A7B50B8-depth000.00.svg" style="width:9.880pt;height:9.120pt;vertical-align:-0.380pt"/>；其中 <img src="./assets/af1e941136b5-eqn-FAAEE783424BC0E27E9AA2F56A7B50B8-depth000.00.svg" style="width:9.880pt;height:9.120pt;vertical-align:-0.380pt"/> 表示 <span class="eqnvec">x</span> 的转置。同时，也要注意区分标量值函数 <img src="./assets/b35e8ebe7492-eqn-D3172B9A65679CB6EF09F17BE0918890-depth002.65.svg" style="width:25.840pt;height:7.600pt;vertical-align:-2.115pt"/> 与函数向量（或向量值函数）<img src="./assets/1f0f3b9f4d8a-eqn-BCAEE673D10908E8197A79E9D4FB6249-depth002.33.svg" style="width:26.600pt;height:6.080pt;vertical-align:-1.859pt"/>。</p>
<h3 data-translation="B079" id="sec:1.4.2">向量逐元素二元运算的导数</h3>
<p data-translation="B080">向量的逐元素二元运算，例如向量加法 <img src="./assets/88dd4df2c0f7-eqn-F26AC9FE4C8C9B953164428DCE00BE9C-depth001.06.svg" style="width:25.080pt;height:6.840pt;vertical-align:-0.806pt"/>，非常重要，因为许多常见向量运算（如向量乘以标量）都可以表示为逐元素二元运算。所谓“逐元素二元运算”，就是将算子作用于两个向量的第一个元素，得到输出的第一个元素；再作用于第二个元素，得到输出的第二个元素，依此类推。例如，NumPy 或 TensorFlow 默认就是这样应用基本数学运算符的。深度学习中常见的例子有 <img src="./assets/ea2485286358-eqn-E50C0CB908AF7566CCC6D4585634EDC2-depth003.25.svg" style="width:41.040pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/bf30321ef7b2-eqn-C65762AB635D8E08F759F1203D223C29-depth000.51.svg" style="width:26.600pt;height:6.840pt;vertical-align:-0.388pt"/>（后者返回由 1 和 0 组成的向量）。</p>
<p data-translation="B081">可以用 <img src="./assets/f149577537bc-eqn-E2E59AE84EE7A5B1C905E50FA7753A31-depth003.25.svg" style="width:69.920pt;height:10.640pt;vertical-align:-2.594pt"/> 概括逐元素二元运算，其中 <img src="./assets/22e93afbc98b-eqn-5D19E7D8CDFE53DEB40F29D8936E6C89-depth003.25.svg" style="width:95.760pt;height:10.640pt;vertical-align:-2.594pt"/>。（提醒一下：<img src="./assets/c67d7518de8f-eqn-CF513DECF6E4ACE0E25CB1C932AAA049-depth003.25.svg" style="width:8.360pt;height:10.640pt;vertical-align:-2.594pt"/> 是 <span class="eqn">x</span> 中元素的数量。）符号 <img src="./assets/d71651503d83-eqn-1A74909B6CBAA4532A76D83B72C12DE0-depth002.52.svg" style="width:9.880pt;height:9.880pt;vertical-align:-2.011pt"/> 表示任意逐元素运算符（例如 <img src="./assets/abd0763c2c0a-eqn-26B17225B626FB9238849FD60EABDF60-depth001.06.svg" style="width:7.600pt;height:6.840pt;vertical-align:-0.806pt"/>），而不是函数复合运算符 <img src="./assets/7a1790e51d05-eqn-1B3C1A40F9CB094D47E8C6F9B0DF773F-depth000.00.svg" style="width:4.560pt;height:4.560pt;vertical-align:-0.380pt"/>。将方程 <img src="./assets/f149577537bc-eqn-E2E59AE84EE7A5B1C905E50FA7753A31-depth003.25.svg" style="width:69.920pt;height:10.640pt;vertical-align:-2.594pt"/> 展开到标量层面，就得到：</p>
<div><img alt="" class="blkeqn" src="./assets/227c331fd279-blkeqn-75C71D2F5C54E19F3EA46C048D8275D6.svg" style="width:109.060pt;height:53.300pt;vertical-align:0.000pt"/></div>
<p data-translation="B082">这里将 <span class="eqn">n</span> 个（而不是 <span class="eqn">m</span> 个）方程竖着排列，是为了强调逐元素运算的结果是大小为 <img src="./assets/86c2e1c83d04-eqn-A193EBC083B4745370F6F1343383D9CC-depth000.14.svg" style="width:25.080pt;height:5.320pt;vertical-align:-0.380pt"/> 的向量。</p>
<p data-translation="B083">根据上一节的思路可知，对 <span class="eqnvec">w</span> 的雅可比矩阵在一般情况下是如下方阵：</p>
<div><img alt="" class="blkeqn" src="./assets/77e788ace1c6-blkeqn-54F95B3CFFD404740FAD218B308DEF70.svg" style="width:365.720pt;height:58.220pt;vertical-align:0.000pt"/></div>
<p data-translation="B084">而对 <span class="eqnvec">x</span> 的雅可比矩阵为：</p>
<div><img alt="" class="blkeqn" src="./assets/52011e7b180d-blkeqn-2693C112F589CD0E26853EAD5ED36CFD.svg" style="width:356.700pt;height:58.220pt;vertical-align:0.000pt"/></div>
<p data-translation="B085">看上去相当复杂，但幸运的是，雅可比矩阵常常是对角矩阵，也就是除了主对角线之外，其他位置全为零的矩阵。这会极大地简化计算，因此我们仔细看看：对于逐元素运算，雅可比矩阵何时会化为对角矩阵？</p>
<p data-translation="B086">在对角雅可比矩阵中，所有非对角元素都为零：<img src="./assets/87782a4c073f-eqn-8B14469E98630C19F16578F90C45F62E-depth007.21.svg" style="width:95.000pt;height:15.200pt;vertical-align:-5.754pt"/>，其中 <img src="./assets/9e7a9e9b9ced-eqn-B064F8555EC660F2F8BDC927D9636A06-depth002.72.svg" style="width:20.520pt;height:9.880pt;vertical-align:-2.171pt"/>。（注意，这里是对 <span class="eqn">w<sub>j</sub></span> 而不是 <span class="eqn">w<sub>i</sub></span> 求偏导。）这些非对角元素在什么条件下为零？正是在 <span class="eqn">f<sub>i</sub></span> 和 <span class="eqn">g<sub>i</sub></span> 对 <span class="eqn">w<sub>j</sub></span> 而言都是常数时，即 <img src="./assets/d0534becada1-eqn-44C0281EC00A2C0E93E4E3863EE9083D-depth007.21.svg" style="width:99.560pt;height:15.200pt;vertical-align:-5.754pt"/>。无论使用什么运算符，只要这些偏导数为零，整个运算结果对该变量的导数就为零，即 <img src="./assets/d1e52dba1c0e-eqn-A180A4C31CAC188626034423680B71E0-depth002.52.svg" style="width:42.560pt;height:9.880pt;vertical-align:-2.011pt"/>，因为常数的偏导数是零。</p>
<p data-translation="B087">当 <span class="eqn">f<sub>i</sub></span> 和 <span class="eqn">g<sub>i</sub></span> 不依赖于 <span class="eqn">w<sub>j</sub></span> 时，这些偏导数就为零。我们知道，逐元素运算意味着 <span class="eqn">f<sub>i</sub></span> 仅是 <span class="eqn">w<sub>i</sub></span> 的函数，<span class="eqn">g<sub>i</sub></span> 仅是 <span class="eqn">x<sub>i</sub></span> 的函数。例如，<img src="./assets/c8eb1cf855be-eqn-2361C23CB78AC04537D7D642DF065EF5-depth001.06.svg" style="width:25.080pt;height:6.840pt;vertical-align:-0.806pt"/> 计算的是 <img src="./assets/d8e5919eb79c-eqn-4AF62C4A6B74D712D3FFD3FA4A0062BD-depth002.05.svg" style="width:27.360pt;height:7.600pt;vertical-align:-1.636pt"/> 之和。因此，<img src="./assets/977b31833f31-eqn-45553270D20A27EBD4AAE84292606CDD-depth003.25.svg" style="width:56.240pt;height:10.640pt;vertical-align:-2.594pt"/> 化为 <img src="./assets/cec3876b0963-eqn-5F2A3B3A730ABED47918785C5EBF5039-depth003.25.svg" style="width:58.520pt;height:10.640pt;vertical-align:-2.594pt"/>，我们的目标也变成 <img src="./assets/01e3abdb722d-eqn-767EBC7C8A1785557E38FD32A10FB123-depth007.21.svg" style="width:101.840pt;height:15.200pt;vertical-align:-5.754pt"/>。当 <img src="./assets/9e7a9e9b9ced-eqn-B064F8555EC660F2F8BDC927D9636A06-depth002.72.svg" style="width:20.520pt;height:9.880pt;vertical-align:-2.171pt"/> 时，对 <span class="eqn">w<sub>j</sub></span> 求偏导的算子会将 <img src="./assets/aa5b77e71e43-eqn-DB590A5BF8B0ACC05B1FEEDC07929CD7-depth003.25.svg" style="width:22.800pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/bf783d2f6b72-eqn-1BF8B4ED9F2C1D993DC0A1E547BDF5CB-depth003.25.svg" style="width:21.280pt;height:10.640pt;vertical-align:-2.594pt"/> 视为常数，所以非对角位置的偏导数为零。（严格来说，<img src="./assets/aa5b77e71e43-eqn-DB590A5BF8B0ACC05B1FEEDC07929CD7-depth003.25.svg" style="width:22.800pt;height:10.640pt;vertical-align:-2.594pt"/> 是对记号的一种滥用，因为 <span class="eqn">f<sub>i</sub></span> 和 <span class="eqn">g<sub>i</sub></span> 的参数是向量，而不是单个元素。我们本应写成类似 <img src="./assets/a5e157f51cbb-eqn-616C179024B43E6C340B1EE24D414DE8-depth003.25.svg" style="width:57.760pt;height:12.160pt;vertical-align:-2.594pt"/> 的形式，但这会让式子更加混乱；程序员通常也习惯函数重载，因此下文仍沿用这一记法。）</p>
<p data-translation="B088">后面我们会利用这种简化，并将“<img src="./assets/4f61fd06e249-eqn-BD5A63074F44F11CB2ED06325816582A-depth003.25.svg" style="width:21.280pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/a8864a6d50e7-eqn-5E597DAA4E5D9263DCBFB6AB02BDB67F-depth003.25.svg" style="width:19.760pt;height:10.640pt;vertical-align:-2.594pt"/> 分别最多只访问 <span class="eqn">w<sub>i</sub></span> 和 <span class="eqn">x<sub>i</sub></span>”这一约束称为<i>逐元素对角条件</i>。</p>
<p data-translation="B089">在这一条件下，雅可比矩阵的对角元素为 <img src="./assets/f52fd6db4d80-eqn-C196BF268027E86D3D2420C2A205AF28-depth005.92.svg" style="width:77.520pt;height:14.440pt;vertical-align:-4.724pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/4638acd73817-blkeqn-4CFC6C644E4A95B5760435C5094BE095.svg" style="width:357.520pt;height:66.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B090">（大号的“0”是一种简写，表示所有非对角元素都为 0。）</p>
<p data-translation="B091">更简洁地，可以写成：</p>
<div><img alt="" class="blkeqn" src="./assets/4b1ae0cf7d11-blkeqn-3D114C6873F46EE41AF91BF8B1BB37CD.svg" style="width:400.160pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B092">以及</p>
<div><img alt="" class="blkeqn" src="./assets/55a363f19569-blkeqn-78E1B2628221D9FD588A011D54670619.svg" style="width:391.140pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B093">其中，<img src="./assets/ebc6b6ffde18-eqn-4935E4C6B875FD6C7C181871B566AB1A-depth003.25.svg" style="width:30.400pt;height:10.640pt;vertical-align:-2.594pt"/> 构造一个对角元素取自向量 <span class="eqnvec">x</span> 的矩阵。</p>
<p data-translation="B094">由于经常进行简单的向量算术，逐元素二元运算中的一般函数 <img src="./assets/40d4cfe24214-eqn-5B39FE68B4FDD0AF04290BA579A993CB-depth003.25.svg" style="width:19.000pt;height:10.640pt;vertical-align:-2.594pt"/> 往往就是向量 <span class="eqnvec">w</span> 本身。只要这个一般函数就是向量本身，<img src="./assets/4f61fd06e249-eqn-BD5A63074F44F11CB2ED06325816582A-depth003.25.svg" style="width:21.280pt;height:10.640pt;vertical-align:-2.594pt"/> 就化为 <img src="./assets/fca40045af84-eqn-F5BDA09DDE6E00806B01094F5BED3026-depth003.25.svg" style="width:44.840pt;height:10.640pt;vertical-align:-2.594pt"/>。例如，向量加法 <img src="./assets/f175d5a8a543-eqn-DF3F5FDED9142A243031D03CF82121AE-depth001.06.svg" style="width:25.080pt;height:6.840pt;vertical-align:-0.806pt"/> 满足逐元素对角条件，因为 <img src="./assets/e2aa7697e64c-eqn-1ED79D2E2BBE9EE796433D13773157A7-depth003.25.svg" style="width:49.400pt;height:10.640pt;vertical-align:-2.594pt"/> 对应的标量方程 <img src="./assets/7b0c53c9bf14-eqn-F7C644AAA7A70D588A0E003C7C9E439E-depth003.25.svg" style="width:74.480pt;height:10.640pt;vertical-align:-2.594pt"/> 可以简化为 <img src="./assets/25ffb9228f1e-eqn-85550E18F87E4AF75645A38273B97A80-depth003.25.svg" style="width:117.800pt;height:10.640pt;vertical-align:-2.594pt"/>，其偏导数为：</p>
<div><img alt="" class="blkeqn" src="./assets/c365a912b49b-blkeqn-A5DC35FE0CEC748B35BB5991933C4698.svg" style="width:214.020pt;height:24.600pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/a217cf593e0f-blkeqn-C2B0BF832F19994D832F90C18B1F04AF.svg" style="width:209.100pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B095">由此得到 <img src="./assets/963e13090e0e-eqn-2935E504F134B53B2C03072175BCCD1F-depth004.67.svg" style="width:83.600pt;height:14.440pt;vertical-align:-3.727pt"/>，也就是单位矩阵，因为每个对角元素都为 1。<span class="eqn">I</span> 表示维度适当的方形单位矩阵：对角线全为 1，其余位置全为零。</p>
<p data-translation="B096">由于 <img src="./assets/4f61fd06e249-eqn-BD5A63074F44F11CB2ED06325816582A-depth003.25.svg" style="width:21.280pt;height:10.640pt;vertical-align:-2.594pt"/> 化为 <img src="./assets/aa5b77e71e43-eqn-DB590A5BF8B0ACC05B1FEEDC07929CD7-depth003.25.svg" style="width:22.800pt;height:10.640pt;vertical-align:-2.594pt"/> 这一特例十分简单，你应该能够自行推导常见向量逐元素二元运算的雅可比矩阵：</p>
<div><img alt="" class="blkeqn" src="./assets/25921d7a6597-blkeqn-71B7180689F0C8BB7D610CFD5C41CCD8.svg" style="width:235.340pt;height:112.340pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/50cfec0a1ca4-blkeqn-B50DDF4EB7C7148BD5EED63AE5B83271.svg" style="width:249.280pt;height:111.520pt;vertical-align:0.000pt"/></div>
<p data-translation="B097">算子 <img src="./assets/20a709c5a724-eqn-790C76CEB13E928D08EDC53D7AC4BB5C-depth001.08.svg" style="width:7.600pt;height:6.840pt;vertical-align:-0.821pt"/> 和 <img src="./assets/d597724d4295-eqn-98FF0549EBE322C195C2B36FD5EEAD33-depth001.08.svg" style="width:7.600pt;height:6.840pt;vertical-align:-0.821pt"/> 分别表示逐元素乘法和除法；<img src="./assets/20a709c5a724-eqn-790C76CEB13E928D08EDC53D7AC4BB5C-depth001.08.svg" style="width:7.600pt;height:6.840pt;vertical-align:-0.821pt"/> 有时称为<i>哈达玛积</i>（Hadamard product）。逐元素乘除没有统一的标准记号，所以这里采用与一般二元运算记法一致的方式。</p>
<h3 data-translation="B098" id="sec:1.4.3">涉及标量扩展的导数</h3>
<p data-translation="B099">将标量与向量相乘或相加时，我们隐式地把标量扩展为向量，再执行逐元素二元运算。例如，标量 <span class="eqn">z</span> 加到向量 <span class="eqnvec">x</span> 上得到 <img src="./assets/1c5d24a41792-eqn-6307CEA088D2D4E98E5B163B9CE8F510-depth002.33.svg" style="width:40.280pt;height:7.600pt;vertical-align:-1.859pt"/>，实际就是 <img src="./assets/c02bb438f179-eqn-8D9C0B9B15490F45C353D9DE64565A4F-depth003.25.svg" style="width:63.840pt;height:10.640pt;vertical-align:-2.594pt"/>，其中 <img src="./assets/fe74f5c6d279-eqn-3ABE4A0471143ABFC180C9FA485E5F0A-depth003.25.svg" style="width:35.720pt;height:10.640pt;vertical-align:-2.594pt"/> 且 <img src="./assets/4d3ff62667ca-eqn-96DAD084681FCA331FD43EA15A9D718C-depth003.25.svg" style="width:44.080pt;height:13.680pt;vertical-align:-2.594pt"/>。（记号 <img src="./assets/c65b56b2b830-eqn-F04358D7FCE318299240131F5AB0E6C2-depth000.00.svg" style="width:9.880pt;height:11.400pt;vertical-align:-0.380pt"/> 表示长度适当的全 1 向量。）<span class="eqn">z</span> 是任意不依赖于 <span class="eqnvec">x</span> 的标量；这一点很有用，因为此时对任意 <span class="eqn">x<sub>i</sub></span> 都有 <img src="./assets/a24f919fb836-eqn-EBCC35EEAE3B420D59689973D8B6BD2E-depth005.92.svg" style="width:28.120pt;height:14.440pt;vertical-align:-4.724pt"/>，从而简化偏导数计算。（在这里的讨论中，把变量 <span class="eqn">z</span> 当作常数就可以。）类似地，标量乘法 <img src="./assets/8885ddc16e6e-eqn-C9A7B878F49F3D964AFEC9C1F78061CF-depth002.33.svg" style="width:28.120pt;height:6.080pt;vertical-align:-1.859pt"/> 实际上是 <img src="./assets/35645dfaac7c-eqn-6087E94AE82EE5439F60B0795D45B1B8-depth003.25.svg" style="width:109.440pt;height:13.680pt;vertical-align:-2.594pt"/>，其中 <img src="./assets/20a709c5a724-eqn-790C76CEB13E928D08EDC53D7AC4BB5C-depth001.08.svg" style="width:7.600pt;height:6.840pt;vertical-align:-0.821pt"/> 表示两个向量的逐元素乘法（哈达玛积）。</p>
<p data-translation="B100">对于向量与标量的加法、乘法，对向量 <span class="eqnvec">x</span> 的偏导数可以用逐元素法则计算：</p>
<div><img alt="" class="blkeqn" src="./assets/de1d9cb89a22-blkeqn-66AE0770D566CAC52E54D7A15B0C7724.svg" style="width:173.840pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B101">这是因为函数 <img src="./assets/fe74f5c6d279-eqn-3ABE4A0471143ABFC180C9FA485E5F0A-depth003.25.svg" style="width:35.720pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/4d3ff62667ca-eqn-96DAD084681FCA331FD43EA15A9D718C-depth003.25.svg" style="width:44.080pt;height:13.680pt;vertical-align:-2.594pt"/> 显然满足雅可比矩阵的逐元素对角条件：<img src="./assets/0fff69906523-eqn-DAE17AB5EE9C0A7FFA3E9B1774E80201-depth003.25.svg" style="width:19.000pt;height:10.640pt;vertical-align:-2.594pt"/> 最多只涉及 <span class="eqn">x<sub>i</sub></span>，而 <img src="./assets/3e31744c1aa7-eqn-9F8AE8514327A98189F8F05E2ECD6496-depth003.25.svg" style="width:18.240pt;height:10.640pt;vertical-align:-2.594pt"/> 只涉及向量 <img src="./assets/093d32a4dab7-eqn-B33D85CAF97BB42F859E0895434EB94D-depth001.05.svg" style="width:13.680pt;height:12.160pt;vertical-align:-0.798pt"/> 的第 <img src="./assets/e820174d1d4c-eqn-97361F12A3555FC4FC4E2FFCE1799AC3-depth000.14.svg" style="width:8.360pt;height:9.120pt;vertical-align:-0.380pt"/> 个值。</p>
<p data-translation="B102">利用通常的标量偏导数法则，可以得到向量与标量相加时雅可比矩阵的对角元素：</p>
<div><img alt="" class="blkeqn" src="./assets/dade46075a6b-blkeqn-6B4EFB58ED5F9EBD623321FE1975FA4E.svg" style="width:250.100pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B103">所以，<img src="./assets/963e7a40c10a-eqn-44DC79699D852CF6804C4A58230A63DB-depth004.67.svg" style="width:104.120pt;height:15.200pt;vertical-align:-3.727pt"/>。</p>
<p data-translation="B104">不过，对标量参数 <span class="eqn">z</span> 求偏导，得到的是一个列向量，而不是对角矩阵。该向量的元素为：</p>
<div><img alt="" class="blkeqn" src="./assets/ee4310ec23a7-blkeqn-BEDEE6A7649E77A8A0F767878AB6FE08.svg" style="width:243.540pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B105">因此，<img src="./assets/a4db6cc23ae8-eqn-8BBEE76022B230F99EFEF395B7939E65-depth005.22.svg" style="width:60.040pt;height:15.200pt;vertical-align:-4.166pt"/>。</p>
<p data-translation="B106">向量与标量相乘时，雅可比矩阵的对角元素需要用到标量求导的乘积法则：</p>
<div><img alt="" class="blkeqn" src="./assets/2bd51e30ef7b-blkeqn-15E9C1F56A6E17941B0826DA6CC51781.svg" style="width:204.180pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B107">所以，<img src="./assets/0e7c842d82b8-eqn-7F35BFC9A1645602B9172CCE6D0FCA56-depth004.67.svg" style="width:99.560pt;height:15.200pt;vertical-align:-3.727pt"/>。</p>
<p data-translation="B108">对标量参数 <span class="eqn">z</span> 的偏导数是一个列向量，其元素为：</p>
<div><img alt="" class="blkeqn" src="./assets/4c16b810fd89-blkeqn-C1C1AD1A9E7A6ECCAAACE952B8355BFB.svg" style="width:203.360pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B109">由此得到 <img src="./assets/574e8c58cc7d-eqn-82B897A0A23D9C6BB66EDF17D1D3CB02-depth005.22.svg" style="width:43.320pt;height:13.680pt;vertical-align:-4.166pt"/>。</p>
<h3 data-translation="B110" id="sec:1.4.4">向量求和归约</h3>
<p data-translation="B111">将向量元素求和是深度学习中的重要操作，例如网络损失函数中就会用到。它也能帮助我们简化向量点积及其他将向量归约为标量的运算的求导。</p>
<p data-translation="B112">令 <img src="./assets/713525b31697-eqn-DC5FB5DC7AEB54D8C206744EED4AD748-depth003.31.svg" style="width:110.960pt;height:10.640pt;vertical-align:-2.641pt"/>。注意，这里特意将参数保留为向量 <span class="eqnvec">x</span>，因为每个函数 <span class="eqn">f<sub>i</sub></span> 都可能使用向量中的全部值，而不只是 <span class="eqn">x<sub>i</sub></span>。求和针对的是函数的<b>结果</b>，而不是参数。向量求和的梯度（大小为 <img src="./assets/d6de2f4f8f30-eqn-4C8971A9939B0BB2D8AF44195C5BD833-depth001.08.svg" style="width:21.280pt;height:7.600pt;vertical-align:-0.821pt"/> 的雅可比矩阵）为：</p>
<div><img alt="" class="blkeqn" src="./assets/ed1d6ac61ce5-blkeqn-59EDF630C04A1F938FF8B1FBAADCA94D.svg" style="width:374.740pt;height:83.640pt;vertical-align:0.000pt"/></div>
<p data-translation="B113">（梯度各分量内部的求和容易混淆，因此一定要保持符号一致。）</p>
<p data-translation="B114">来看看简单函数 <img src="./assets/ba4faa64bb8f-eqn-5FAFFB6A723E437AC6433DCA0B269846-depth003.25.svg" style="width:46.360pt;height:10.640pt;vertical-align:-2.594pt"/> 的梯度。求和内部的函数就是 <img src="./assets/41e1e5af7c34-eqn-E314355F5E2135483279531C62D7E8EC-depth003.25.svg" style="width:39.520pt;height:10.640pt;vertical-align:-2.594pt"/>，于是梯度为：</p>
<div><img alt="" class="blkeqn" src="./assets/913ce28cd6d2-blkeqn-B6DF766D85C48FF7434B8FFF7BEC9410.svg" style="width:322.260pt;height:19.680pt;vertical-align:0.000pt"/></div>
<p data-translation="B115">由于在 <img src="./assets/9e7a9e9b9ced-eqn-B064F8555EC660F2F8BDC927D9636A06-depth002.72.svg" style="width:20.520pt;height:9.880pt;vertical-align:-2.171pt"/> 时有 <img src="./assets/81db6113d15c-eqn-9B32CEB09BA5F0B84935A24BF81D3C9C-depth007.21.svg" style="width:35.720pt;height:15.200pt;vertical-align:-5.754pt"/>，可以化简为：</p>
<div><img alt="" class="blkeqn" src="./assets/a4216a53e0c8-blkeqn-4EE81B2FBD96DC0263211EC42E3BBBFC.svg" style="width:212.380pt;height:19.680pt;vertical-align:0.000pt"/></div>
<p data-translation="B116">注意，结果是全 1 的行向量，而非列向量，所以梯度为 <img src="./assets/363cf6eff485-eqn-414661E314B715901C47A3E3D995D91C-depth000.00.svg" style="width:14.440pt;height:11.400pt;vertical-align:-0.380pt"/>。（<img src="./assets/363cf6eff485-eqn-414661E314B715901C47A3E3D995D91C-depth000.00.svg" style="width:14.440pt;height:11.400pt;vertical-align:-0.380pt"/> 中的上标 <span class="eqn">T</span> 表示该向量的转置，在这里就是将列向量变成行向量。）务必始终理清所有向量和矩阵的形状，否则就无法计算复杂函数的导数。</p>
<p data-translation="B117">再看一个例子：向量乘以常数标量之后，对结果求和。若 <img src="./assets/362e46dbe72f-eqn-729968724651D87C8269B6FFEAD6EA90-depth003.25.svg" style="width:50.160pt;height:10.640pt;vertical-align:-2.594pt"/>，则 <img src="./assets/11907b608eff-eqn-A5D03DE59DCDBA948F463FAABD04791D-depth003.25.svg" style="width:51.680pt;height:10.640pt;vertical-align:-2.594pt"/>。梯度为：</p>
<div><img alt="" class="blkeqn" src="./assets/683922ead86d-blkeqn-4C28E3734FC6110AF58C567604ED3462.svg" style="width:195.160pt;height:77.080pt;vertical-align:0.000pt"/></div>
<p data-translation="B118">对标量变量 <span class="eqn">z</span> 的导数为 <img src="./assets/eb9943ce823a-eqn-5ED2D4C114D036610B8E20271C5026EF-depth001.08.svg" style="width:20.520pt;height:7.600pt;vertical-align:-0.821pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/5432751e998c-blkeqn-709809A15FF63948512A3F83DF9F04EA.svg" style="width:77.900pt;height:91.840pt;vertical-align:0.000pt"/></div>
<h3 data-translation="B119" id="sec:1.4.5">链式法则</h3>
<p data-translation="B120">仅靠目前介绍的基本矩阵微积分法则，还无法计算非常复杂函数的偏导数。例如，对于 <img src="./assets/e098a3e46997-eqn-DCA4F9F0CE7F7CA365E8B26987ED972A-depth003.25.svg" style="width:47.880pt;height:10.640pt;vertical-align:-2.594pt"/> 这样的嵌套表达式，若不先将其展开为等价的标量形式，就无法直接求导。我们需要一种能将基本向量法则组合起来的方法，可以称之为<i>向量链式法则</i>。遗憾的是，有多种求导法则都叫“链式法则”，因此必须明确我们说的是哪一种。本节的目标之一，就是清楚地定义并命名三种不同的链式法则，说明它们各自适用的情形。先从<i>单变量链式法则</i>开始：求标量函数对标量的导数。然后介绍<i>全导数</i>这一重要概念，并据此定义一个名称略显冗长的法则：<i>单变量全导数链式法则</i>。最后，我们就能完整地讨论神经网络所需的向量链式法则。</p>
<p data-translation="B121">从概念上说，链式法则是一种分治策略（类似快速排序）：将复杂表达式拆成导数更容易计算的子表达式。它的威力在于，我们可以分别处理每个简单子表达式，再把中间结果组合起来，依然得到正确的整体结果。</p>
<p data-translation="B122">当我们需要对包含嵌套子表达式的表达式求导时，链式法则就派上用场了。例如，处理 <img src="./assets/38297bf34f50-eqn-06D67DC7FE74C1895AEF564F8295E918-depth004.58.svg" style="width:34.960pt;height:12.920pt;vertical-align:-3.655pt"/> 就需要链式法则。最外层对中间结果求 <span class="eqn">sin</span>，而内层子表达式则对 <span class="eqn">x</span> 求平方。具体来说，这里需要单变量链式法则，下面详细讨论。</p>
<h4 data-translation="B123" id="sec:1.4.5.1">单变量链式法则</h4>
<p data-translation="B124">先给出这个嵌套表达式的导数：<img src="./assets/42b46bb69684-eqn-AB5ECA885C5685990CD778580665B3A4-depth004.58.svg" style="width:85.880pt;height:12.920pt;vertical-align:-3.655pt"/>。不需要是数学天才，也能看出结果中有两个熟悉的标量求导成分：<img src="./assets/c60b45b6527e-eqn-1A32AA532898DEBB80C0C7A818C5C70B-depth004.58.svg" style="width:38.760pt;height:12.920pt;vertical-align:-3.655pt"/> 和 <img src="./assets/65e1bc05ff27-eqn-DC7C2E5FB11394451EA6A2010904F0B2-depth004.58.svg" style="width:70.680pt;height:12.920pt;vertical-align:-3.655pt"/>。看来，只要把外层表达式的导数乘以内层表达式的导数，也就是“把各部分串起来”，就能得到答案。确实如此。本节将说明其一般原理，并给出适用于单变量深层嵌套表达式的计算流程。</p>
<p data-translation="B125">链式法则通常用嵌套函数来定义，例如单变量链式法则中的 <img src="./assets/42532dec8627-eqn-281717E562B6C04AA861AC9F2801D016-depth003.25.svg" style="width:47.880pt;height:10.640pt;vertical-align:-2.594pt"/>。（也会看到用函数复合 <img src="./assets/90d6a86ff8d5-eqn-88806005B64072FE5A06E4E609A9E251-depth003.25.svg" style="width:38.000pt;height:10.640pt;vertical-align:-2.594pt"/> 定义的形式，含义相同。）有些资料将导数简写为 <img src="./assets/e417d02a8b9e-eqn-3D59985B51738C2BF54BA3D955AB8588-depth003.25.svg" style="width:71.440pt;height:10.640pt;vertical-align:-2.594pt"/>，但这掩盖了我们引入中间变量 <img src="./assets/905547f08187-eqn-8C36385E70550C1C0EA86E14320174DF-depth003.25.svg" style="width:34.200pt;height:10.640pt;vertical-align:-2.594pt"/> 的事实，稍后会看到这一点。最好明确写出 <img src="./assets/0c8ca55b7c56-eqn-8BC3A7E80988236E8F017205F413461C-depth003.25.svg" style="width:29.640pt;height:10.640pt;vertical-align:-2.594pt"/> 的<a href="http://m.wolframalpha.com/input/?i=chain+rule">单变量链式法则</a>，以免对错误的变量求导。我们推荐以下形式：</p>
<div><img alt="" class="blkeqn" src="./assets/7e98994b31c7-blkeqn-9D3919C42833D1FF1456DEA11D8CC927.svg" style="width:51.660pt;height:22.960pt;vertical-align:0.000pt"/></div>
<p data-translation="B126">使用单变量链式法则时，遵循以下步骤：</p>
<ol>
<li data-translation="B127">为嵌套子表达式，以及二元和一元运算的子表达式引入中间变量。例如，<img src="./assets/9025f7fa1063-eqn-60C13E05D3EC8C10B8564EAE7023D9DB-depth001.08.svg" style="width:5.320pt;height:5.320pt;vertical-align:-0.821pt"/> 是二元运算；<img src="./assets/5d695b6d435e-eqn-6FFE53F1F614CC1D470F85B6C56A3AFB-depth003.25.svg" style="width:22.800pt;height:10.640pt;vertical-align:-2.594pt"/> 和其他三角函数通常是一元运算，因为只有一个操作数。这一步将所有方程规范化为单个运算或单次函数调用。</li>
<li data-translation="B128">计算各中间变量对其参数的导数。</li>
<li data-translation="B129">将各中间变量的导数相乘，得到整体结果。</li>
<li data-translation="B130">如果最终导数表达式中仍引用了中间变量，就代回它们的原始表达式。</li>
</ol>
<p data-translation="B131">第三步把中间结果串成一条“链”，这正是“链式法则”名称的由来。将中间导数相乘，是各种链式法则共有的主题。</p>
<p data-translation="B132">用这个流程处理 <img src="./assets/0dcaaff74630-eqn-872F24FC57CA661E3704C0A10869C6B5-depth003.25.svg" style="width:88.160pt;height:11.400pt;vertical-align:-2.594pt"/>：</p>
<ol>
<li>引入中间变量。令<img src="./assets/d0e9c3a3b3b4-eqn-FA510039FEDBE5A935A70EF6E3B46394-depth000.14.svg" style="width:25.840pt;height:9.120pt;vertical-align:-0.380pt"/>表示子表达式<img src="./assets/9c463adf1e69-eqn-32F5240D0DBF2CCBE75EF7F8EF2015E0-depth000.14.svg" style="width:9.120pt;height:9.120pt;vertical-align:-0.380pt"/>（是以下表达式的简写：<img src="./assets/35b9f1f62a19-eqn-879B57F3F479F58707D2477B46B060CF-depth003.25.svg" style="width:38.000pt;height:11.400pt;vertical-align:-2.594pt"/>）。由此得到：<div><img alt="" class="blkeqn" src="./assets/00a1632e432e-blkeqn-D6D1C54038A47B31E5773FF46765845A.svg" style="width:255.020pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B133">这些子表达式的排列顺序不影响答案，但我们建议按嵌套结构由内向外展开。这样，每个表达式及其导数都只依赖之前已经计算出的量。</p>
</li>
<li data-translation="B134">计算导数。<div><img alt="" class="blkeqn" src="./assets/41baabf57d75-blkeqn-AC63667E483F3FB2A584B2ABB1A94749.svg" style="width:262.400pt;height:27.880pt;vertical-align:0.000pt"/></div></li>
<li data-translation="B135">组合。<div><img alt="" class="blkeqn" src="./assets/27cca69373bc-blkeqn-9D1B1984635759F4C2D23464EBBAA995.svg" style="width:104.960pt;height:22.960pt;vertical-align:0.000pt"/></div></li>
<li data-translation="B136">代回。<div><img alt="" class="blkeqn" src="./assets/241dc889c531-blkeqn-6E1052BD462233E4BEA04D695437A984.svg" style="width:163.180pt;height:22.960pt;vertical-align:0.000pt"/></div></li>
</ol>
<p data-translation="B137">注意，分别计算各个中间变量的导数有多么简单！链式法则保证这种做法成立，并告诉我们如何组合中间结果，得到 <img src="./assets/35719088b378-eqn-E4D3AF86AC3E4315148DA23A886A72EA-depth003.25.svg" style="width:38.000pt;height:11.400pt;vertical-align:-2.594pt"/>。</p>
<p data-translation="B138">可以用单位约消来理解链式法则的组合步骤。设 <span class="eqn">y</span> 的单位是英里，<span class="eqn">x</span> 表示油箱中的加仑数，<span class="eqn">u</span> 的单位也是加仑，那么 <img src="./assets/b145395a7e0c-eqn-70047C98E4163674E78BB42D0CF4AEA8-depth004.58.svg" style="width:38.760pt;height:13.680pt;vertical-align:-3.655pt"/> 可以理解为 <img src="./assets/71f166eaac49-eqn-F98E0EBA888E860C7E51565C7225EBFA-depth006.34.svg" style="width:69.160pt;height:14.440pt;vertical-align:-5.059pt"/>。分母和分子中的 <span class="eqn">gallon</span> 会相互约消。</p>
<p data-translation="B139">理解单变量链式法则的另一种方式，是把整个表达式画成数据流图或运算链（对编译器开发者而言，就是<a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">抽象语法树</a>）：</p>
<div class="paragraph-group"><center>
<a href="assets/295a4e3b6a76-sin-square.png">
<img alt="sin-square.png" src="./assets/295a4e3b6a76-sin-square.png" width="20%"/>
</a>
</center>
</div>
<p data-translation="B140">函数参数 <span class="eqn">x</span> 的变化先经过平方运算，再经过 <span class="eqn">sin</span> 运算，最终改变结果 <span class="eqn">y</span>。可以将 <img src="./assets/8d554b3e6a01-eqn-B13DB657CBF4B8318DBF2799E687D1A1-depth004.58.svg" style="width:7.600pt;height:12.920pt;vertical-align:-3.655pt"/> 理解为“把变化从 <span class="eqn">x</span> 传到 <span class="eqn">u</span>”，将 <img src="./assets/065402bf04c4-eqn-6E939E305B65D08F88FF95E7E028796B-depth004.58.svg" style="width:7.600pt;height:13.680pt;vertical-align:-3.655pt"/> 理解为“把变化从 <span class="eqn">u</span> 传到 <span class="eqn">y</span>”。从 <span class="eqn">x</span> 到 <span class="eqn">y</span> 需要经过一个中间环节。按照惯例，链式法则通常从输出变量向参数方向书写，即 <img src="./assets/b145395a7e0c-eqn-70047C98E4163674E78BB42D0CF4AEA8-depth004.58.svg" style="width:38.760pt;height:13.680pt;vertical-align:-3.655pt"/>。但若从 <span class="eqn">x</span> 到 <span class="eqn">y</span> 的角度看，反过来写成等价的 <img src="./assets/0a7a4a34e561-eqn-256F5475DE15D99D8D55FE6F3A15CEA4-depth004.58.svg" style="width:38.760pt;height:13.680pt;vertical-align:-3.655pt"/> 会更直观。</p>
<p data-translation="B141"><b>单变量链式法则的适用条件。</b>注意，从 <span class="eqn">x</span> 到根节点 <span class="eqn">y</span> 只有一条数据流路径。<span class="eqn">x</span> 的变化只能通过一种方式影响输出 <span class="eqn">y</span>，这就是应用单变量链式法则的条件。另一个更容易记住、但不那么严密的说法是：所有中间子表达式函数（如 <img src="./assets/cafa35793054-eqn-3BCB9E96DA63C9CDC1E56647C2071688-depth003.25.svg" style="width:16.720pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/4bd46901441c-eqn-C6E9D6FA0C33AA632E25E953C6E5C35D-depth003.25.svg" style="width:17.480pt;height:10.640pt;vertical-align:-2.594pt"/>）都不超过一个参数。考虑 <img src="./assets/b4caf93ccdeb-eqn-026E2EF5E8E6906B6CE75FF6CDB0F14E-depth003.25.svg" style="width:54.720pt;height:11.400pt;vertical-align:-2.594pt"/>，引入中间变量 <span class="eqn">u</span> 后，它变成 <img src="./assets/a2fdfd75f7e7-eqn-A1829C9E1CDCFF4FE0BA9C0E7A70E635-depth003.25.svg" style="width:60.800pt;height:10.640pt;vertical-align:-2.594pt"/>。下一节会看到，在 <img src="./assets/ec6064b366a7-eqn-2C284C56D6E912E6D71990A11005902E-depth003.25.svg" style="width:25.840pt;height:10.640pt;vertical-align:-2.594pt"/> 中，从 <span class="eqn">x</span> 到 <span class="eqn">y</span> 有多条路径。处理这种情况需要单变量全导数链式法则。</p>
<p data-translation="B142"><hr/>给对自动微分感兴趣的读者补充一点：论文和库文档会使用<i>前向微分</i>与<i>反向微分</i>（用于反向传播算法）这些术语。从数据流的角度看，我们正在做前向微分，因为它沿着正常的数据流方向进行。反向微分则沿相反方向，追问输出的变化如何关联到函数参数 <span class="eqn">x</span>。由于反向微分能同时确定所有函数参数对应的变化，对于参数很多的函数，其导数计算会高效得多。前向微分则需要依次考虑每个参数的变化如何影响函数输出 <span class="eqn">y</span>。下表着重展示这两种方法计算偏导数的顺序。</p>
<center>
<table style="">
<thead>
<tr>
<th align="center" data-translation="B143" valign="top">从 <span class="eqn">x</span> 到 <span class="eqn">y</span> 的前向微分</th><th align="center" data-translation="B144" valign="top">从 <span class="eqn">y</span> 到 <span class="eqn">x</span> 的反向微分</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" valign="top"><img src="./assets/0a7a4a34e561-eqn-256F5475DE15D99D8D55FE6F3A15CEA4-depth004.58.svg" style="width:38.760pt;height:13.680pt;vertical-align:-3.655pt"/></td><td align="center" valign="top"><img src="./assets/b145395a7e0c-eqn-70047C98E4163674E78BB42D0CF4AEA8-depth004.58.svg" style="width:38.760pt;height:13.680pt;vertical-align:-3.655pt"/></td>
</tr>
</tbody>
</table>
</center>
<p data-translation="B145">自动微分超出了本文的范围，这里只是为今后的文章作铺垫。<hr/></p>
<p data-translation="B146">许多读者可以在脑中算出 <img src="./assets/8ce513f7852f-eqn-59B8E919C92D6DBE1DC50C5BE2CD8C1C-depth004.58.svg" style="width:34.960pt;height:12.920pt;vertical-align:-3.655pt"/>，但我们的目标是建立一套即使面对非常复杂的表达式也能使用的流程。这也正是 PyTorch 等库中<a href="https://en.wikipedia.org/wiki/Automatic_differentiation">自动微分</a>的工作方式。因此，按这种方式手工求导，也是在学习如何为 PyTorch 中的自定义神经网络定义函数。</p>
<p data-translation="B147">面对深层嵌套表达式，可以把使用链式法则想象成编译器将 <img src="./assets/1e03cbcba979-eqn-7559A5FC5EC5CA0B3E50011742D0A87B-depth003.25.svg" style="width:67.640pt;height:10.640pt;vertical-align:-2.594pt"/> 这样的嵌套函数调用，展开为一串调用的过程。函数 <span class="eqn">f<sub>i</sub></span> 的返回结果被存入一个称为寄存器的临时变量，再作为参数传给 <img src="./assets/8a536dd4ef55-eqn-36930D135F4763C21D1191803AC41B85-depth002.72.svg" style="width:15.200pt;height:9.880pt;vertical-align:-2.171pt"/>。下面把我们的流程应用于 <img src="./assets/6df83a97803e-eqn-642FD3E590A2B2D21AFE5254BE8E832F-depth003.25.svg" style="width:95.760pt;height:11.400pt;vertical-align:-2.594pt"/> 这样的深层嵌套方程，看看实际效果：</p>
<ol>
<li data-translation="B148">引入中间变量。<div><img alt="" class="blkeqn" src="./assets/7bbb74d8a788-blkeqn-A153933499426CFC383D252C30A87953.svg" style="width:142.680pt;height:50.840pt;vertical-align:0.000pt"/></div></li>
<li data-translation="B149">计算导数。<div><img alt="" class="blkeqn" src="./assets/b0b13780d19c-blkeqn-D507866D3C9BAE7D693683832C47C5A4.svg" style="width:136.940pt;height:56.580pt;vertical-align:0.000pt"/></div></li>
<li data-translation="B150">组合四个中间值。<div><img alt="" class="blkeqn" src="./assets/f1bc33c72a56-blkeqn-2CF824877C0FB75B7648CE66E56FB509.svg" style="width:283.720pt;height:26.240pt;vertical-align:0.000pt"/></div></li>
<li data-translation="B151">代回。<div><img alt="" class="blkeqn" src="./assets/fc23752d1718-blkeqn-9BC49A78C13740AC58294EAA333AF3CC.svg" style="width:346.860pt;height:27.060pt;vertical-align:0.000pt"/></div></li>
</ol>
<p data-translation="B152">下面展示从 <span class="eqn">x</span> 到 <span class="eqn">y</span> 的运算链中的数据流：</p>
<div class="paragraph-group"><center>
<a href="assets/e6b1c9465bee-chain-tree.png">
<img alt="chain-tree.png" src="./assets/e6b1c9465bee-chain-tree.png" width="20%"/>
</a>
</center>
</div>
<p data-translation="B153">至此，我们可以用链式法则处理单变量 <span class="eqn">x</span> 的嵌套表达式导数，但前提是 <span class="eqn">x</span> 只能通过一条数据流路径影响 <span class="eqn">y</span>。为了处理更复杂的表达式，接下来需要扩展这一方法。</p>
<h4 data-translation="B154" id="sec:1.4.5.2">单变量全导数链式法则</h4>
<p data-translation="B155">单变量链式法则的适用范围有限，因为所有中间变量都必须是单变量函数。不过，它展示了链式法则的核心机制：将中间子表达式的导数相乘。要处理 <img src="./assets/1e1fd9f1912b-eqn-4E2EFF28C6823738FA61BFC9A3DD6D0F-depth003.25.svg" style="width:73.720pt;height:11.400pt;vertical-align:-2.594pt"/> 这样的更一般表达式，我们需要扩展这条基本法则。</p>
<p data-translation="B156">当然，我们一眼就能看出 <img src="./assets/b4d7728ed752-eqn-18EF15EC4DDA421BE5BC86F0295D36CD-depth004.58.svg" style="width:103.360pt;height:13.680pt;vertical-align:-3.655pt"/>，但这用的是标量加法求导法则，而非链式法则。如果尝试直接应用单变量链式法则，就会得到错误答案。事实上，前面的链式法则在这里并不适用，因为求导算子 <img src="./assets/b720e4688651-eqn-624FEBB9A49A3FC96353C861D175C806-depth004.58.svg" style="width:7.600pt;height:12.920pt;vertical-align:-3.655pt"/> 不适用于中间变量中的多元函数，例如 <img src="./assets/acc17752dab4-eqn-89AE78BE880A004AA5404AC874A01BFF-depth001.95.svg" style="width:8.360pt;height:6.840pt;vertical-align:-1.556pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/e7a73cb551dc-blkeqn-75071782A1332F464A55110F2E4C5728.svg" style="width:209.100pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B157">不妨硬试一下，看看会发生什么。如果假装 <img src="./assets/e0a7cbfb6131-eqn-400C939294CFCAC13949F5A92DD9537A-depth005.85.svg" style="width:63.840pt;height:13.680pt;vertical-align:-4.668pt"/> 且 <img src="./assets/408989c8101b-eqn-8B1AAFE58A962E6F06775EBD2808D5FE-depth004.58.svg" style="width:34.200pt;height:12.920pt;vertical-align:-3.655pt"/>，那么得到的是 <img src="./assets/e47e74525d9f-eqn-69A0BF0F0F217A5C8CDB490B4C60ABEE-depth005.85.svg" style="width:92.720pt;height:14.440pt;vertical-align:-4.668pt"/>，而不是正确答案 <img src="./assets/6b537c22fca7-eqn-632334BF7A82AE1CEB6BF98756648B4E-depth001.06.svg" style="width:25.840pt;height:8.360pt;vertical-align:-0.806pt"/>。</p>
<p data-translation="B158">由于 <img src="./assets/6ba207cb2d1b-eqn-3DD76E5D04C44A4E7170558B8BFE3219-depth003.25.svg" style="width:67.640pt;height:10.640pt;vertical-align:-2.594pt"/> 有多个参数，偏导数就登场了。我们先不加辨别地对所有方程使用偏导算子，看看结果：</p>
<div><img alt="" class="blkeqn" src="./assets/046522c56ffd-blkeqn-637FEB09B811F98C4B3D575AAD9D9367.svg" style="width:343.580pt;height:45.100pt;vertical-align:0.000pt"/></div>
<p data-translation="B159">糟糕！偏导数 <img src="./assets/46e7b19df142-eqn-9A001AB7445AD6C36176920C0E5D253F-depth004.67.svg" style="width:28.120pt;height:14.440pt;vertical-align:-3.727pt"/> 在这里给出了错误结果，因为这种用法违反了偏导数的一个关键假设：对 <span class="eqn">x</span> 求偏导时，其他变量不能随着 <span class="eqn">x</span> 一起变化，否则就不能把它们当作常数。然而，<img src="./assets/dff0343f935e-eqn-0F0BF7F8711E6437357749F43EF529D8-depth003.25.svg" style="width:41.800pt;height:11.400pt;vertical-align:-2.594pt"/> 显然是 <span class="eqn">x</span> 的函数，因此会随 <span class="eqn">x</span> 变化。由于 <img src="./assets/ec3484e6342d-eqn-C9E3A40CD8239D58296F30B000154F1A-depth004.67.svg" style="width:38.000pt;height:14.440pt;vertical-align:-3.727pt"/>，所以 <img src="./assets/90a852c5aaac-eqn-78D6E87F2E36D9F4C482E9236F997C4C-depth004.67.svg" style="width:63.840pt;height:14.440pt;vertical-align:-3.727pt"/>。看看 <img src="./assets/207586f2cfba-eqn-AC2672C7A79B0E068FB3AC3D7FBF94C9-depth003.25.svg" style="width:51.680pt;height:10.640pt;vertical-align:-2.594pt"/> 的数据流图，就会发现从 <span class="eqn">x</span> 到 <span class="eqn">y</span> 有多条路径，这表明我们必须同时考虑对 <span class="eqn">x</span> 的直接依赖，以及通过 <img src="./assets/2f757ed446b2-eqn-D8F3471EF0522DC14012F0DC5D01D570-depth003.25.svg" style="width:20.520pt;height:10.640pt;vertical-align:-2.594pt"/> 产生的间接依赖：</p>
<div class="paragraph-group"><center>
<a href="assets/fffcb24ed14d-plus-square.png">
<img alt="plus-square.png" src="./assets/fffcb24ed14d-plus-square.png" width="20%"/>
</a>
</center>
</div>
<p data-translation="B160"><span class="eqn">x</span> 既作为加法的操作数，也作为平方运算的操作数影响 <span class="eqn">y</span>。下面的方程描述对 <span class="eqn">x</span> 作微小调整如何影响输出：</p>
<div><img alt="" class="blkeqn" src="./assets/e5a2a385b38d-blkeqn-69B14AB41D9A7514E8C105FDDF9649C5.svg" style="width:111.520pt;height:13.120pt;vertical-align:0.000pt"/></div>
<p data-translation="B161">于是有 <img src="./assets/ab54cd7a68c0-eqn-461DF6ABE0C0386D728B786B3116A5B1-depth002.65.svg" style="width:44.840pt;height:9.880pt;vertical-align:-2.115pt"/>，可读作：“<span class="eqn">y</span> 的变化，是原来的 <span class="eqn">y</span> 与调整 <span class="eqn">x</span> 后的 <span class="eqn">y</span> 之间的差。”</p>
<p data-translation="B162">如果令 <img src="./assets/4b5cfbe8710a-eqn-A255512F9D61A6777BD5A304235BD26D-depth000.14.svg" style="width:22.800pt;height:7.600pt;vertical-align:-0.380pt"/>，则 <img src="./assets/1f66b4ef65e1-eqn-433AD860B59D47738D7AECAB6367A8AD-depth002.65.svg" style="width:62.320pt;height:11.400pt;vertical-align:-2.115pt"/>。将 <span class="eqn">x</span> 增加 1，即 <img src="./assets/3665ae706dfd-eqn-60BD3A416346416B27D420F8EFEE9C9E-depth000.14.svg" style="width:28.120pt;height:7.600pt;vertical-align:-0.380pt"/>，则有 <img src="./assets/ca54a3a9f370-eqn-4DCF3FC9093036B469E832AEDCFDA608-depth003.25.svg" style="width:145.920pt;height:11.400pt;vertical-align:-2.594pt"/>。<span class="eqn">y</span> 的变化不是 <img src="./assets/2afb542405cc-eqn-BE27DFA2B74F7608759BD413AF458EB2-depth003.25.svg" style="width:28.120pt;height:10.640pt;vertical-align:-2.594pt"/> 可能让我们误以为的 <img src="./assets/16598c021cf9-eqn-C4CA4238A0B923820DCC509A6F75849B-depth000.00.svg" style="width:3.800pt;height:7.600pt;vertical-align:-0.380pt"/>，而是 <img src="./assets/27a64e821ade-eqn-F0B6923B35563AE91BDFC8B06222E495-depth001.08.svg" style="width:40.280pt;height:7.600pt;vertical-align:-0.821pt"/>！</p>
<p data-translation="B163">这时就需要<a href="https://en.wikipedia.org/wiki/Total_derivative">全导数</a>“法则”了。其基本含义是：计算 <img src="./assets/4dafb18b883d-eqn-3BAFFD623D24688B6229E8808F4DD24A-depth004.58.svg" style="width:7.600pt;height:13.680pt;vertical-align:-3.655pt"/> 时，必须将 <span class="eqn">x</span> 的变化对 <span class="eqn">y</span> 的变化产生的所有可能贡献加起来。对 <span class="eqn">x</span> 求全导数时，假设所有变量（如本例中的 <img src="./assets/200dc018491f-eqn-D33DEF0EB4933F91B88EB4E784ADAF05-depth001.95.svg" style="width:8.360pt;height:6.840pt;vertical-align:-1.556pt"/>）都是 <span class="eqn">x</span> 的函数，因此可能随 <span class="eqn">x</span> 改变。若 <img src="./assets/2978c92f2a9f-eqn-20596CA2E264644A086ABF3ABCA89367-depth003.25.svg" style="width:63.840pt;height:10.640pt;vertical-align:-2.594pt"/> 既直接依赖 <span class="eqn">x</span>，又通过中间变量 <img src="./assets/2f757ed446b2-eqn-D8F3471EF0522DC14012F0DC5D01D570-depth003.25.svg" style="width:20.520pt;height:10.640pt;vertical-align:-2.594pt"/> 间接依赖它，则其全导数为：</p>
<div><img alt="" class="blkeqn" src="./assets/0a52d10a2cdb-blkeqn-09EB861D79D7E60D9B37567CE097631B.svg" style="width:287.820pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B164">使用这个公式，就得到正确答案：</p>
<div><img alt="" class="blkeqn" src="./assets/adc86cc81499-blkeqn-41D8094A5C03D77FBC951A301E88C193.svg" style="width:238.620pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B165">这就是我们所称的<i>单变量全导数链式法则</i>的一次应用：</p>
<div><img alt="" class="blkeqn" src="./assets/7db98a65750d-blkeqn-B70D8CE7C35F9EF4FD85750EA5577D27.svg" style="width:353.420pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B166">全导数假设所有变量都可能存在相互依赖；偏导数则将除 <span class="eqn">x</span> 之外的所有变量视为常数。</p>
<p data-translation="B167">这里的符号有一个微妙之处。所有导数都写成偏导数，因为 <span class="eqn">f</span> 和 <span class="eqn">u<sub>i</sub></span> 是多变量函数。这与 <a href="http://mathworld.wolfram.com/TotalDerivative.html">MathWorld 的记法</a>一致，但不同于 <a href="https://en.wikipedia.org/wiki/Total_derivative">Wikipedia</a>，后者使用 <img src="./assets/2ca4d7f7a757-eqn-8A4956B34F845398E8CB25E9789E1477-depth003.25.svg" style="width:82.080pt;height:10.640pt;vertical-align:-2.594pt"/>（也许是为了强调等式的全导数性质）。我们将继续使用偏导数记号，以便与下一节讨论的向量链式法则保持一致。</p>
<p data-translation="B168">实际使用时，只要记住：对 <span class="eqn">x</span> 求全导数时，其他变量也可能是 <span class="eqn">x</span> 的函数，所以它们的贡献也要加进来。等式左侧看起来像普通偏导数，右侧实际上计算的是全导数。不过，许多临时变量通常只依赖一个参数，这时单变量全导数链式法则就退化为单变量链式法则。</p>
<p data-translation="B169">考虑一个嵌套子表达式，例如 <img src="./assets/5f209e3003a8-eqn-FD3AC7E953C3B294864C747188F6F370-depth003.25.svg" style="width:73.720pt;height:11.400pt;vertical-align:-2.594pt"/>。引入三个中间变量：</p>
<div><img alt="" class="blkeqn" src="./assets/664da7d432c5-blkeqn-932DB311437C0A9D267994C7446FD9C7.svg" style="width:202.540pt;height:37.720pt;vertical-align:0.000pt"/></div>
<p data-translation="B170">以及相应偏导数：</p>
<div><img alt="" class="blkeqn" src="./assets/79a03c228b70-blkeqn-D15380D7681A0462591F0EF255C180E8.svg" style="width:294.380pt;height:45.100pt;vertical-align:0.000pt"/></div>
<p data-translation="B171">其中，<img src="./assets/f3601a295ede-eqn-A5D73F881FB427D3CD136DA4815CACA4-depth004.67.svg" style="width:11.400pt;height:13.680pt;vertical-align:-3.727pt"/> 和 <img src="./assets/0a104a5a5d3f-eqn-110F22244D49C5AD607D2BEFE91944A5-depth004.67.svg" style="width:17.480pt;height:14.440pt;vertical-align:-3.727pt"/> 都包含 <img src="./assets/3b68beac4819-eqn-4E8A57E5001AA58AEAA927CF98746B9C-depth004.67.svg" style="width:9.880pt;height:13.680pt;vertical-align:-3.727pt"/> 项，用来计入全导数的贡献。</p>
<p data-translation="B172">还要注意，全导数公式始终对 <img src="./assets/894b423a70eb-eqn-935DA2BFCBE67A179A8DAAB35E19A1DA-depth005.92.svg" style="width:21.280pt;height:15.200pt;vertical-align:-4.724pt"/> 这些项<b>求和</b>，而不是相乘。你可能以为求和是因为原式（例如 <img src="./assets/63c5ecafaf1a-eqn-FCCD52402617C355E7BB85B3336D0142-depth002.65.svg" style="width:42.560pt;height:11.400pt;vertical-align:-2.115pt"/>）本身把两项相加，其实不是。全导数之所以相加，是因为它表示所有 <span class="eqn">x</span> 对 <span class="eqn">y</span> 变化的贡献的加权和。例如，即使用 <img src="./assets/d4180cd0e0f2-eqn-5C5A09876AA823C381141FDAC1D28BA6-depth002.65.svg" style="width:42.560pt;height:11.400pt;vertical-align:-2.115pt"/> 代替 <img src="./assets/def9795ac857-eqn-C26DA96086B50304FCE872846D4BE19F-depth002.65.svg" style="width:42.560pt;height:11.400pt;vertical-align:-2.115pt"/>，全导数链式法则仍然把各偏导项相加。（<img src="./assets/b64683bd631a-eqn-94E561C972A5FE1DDE82761012FB6DB1-depth001.08.svg" style="width:25.080pt;height:9.120pt;vertical-align:-0.821pt"/> 可以化简为 <img src="./assets/cbf6b04e8441-eqn-8C0FB3B076D9AEA142467B34F0F794EB-depth000.14.svg" style="width:8.360pt;height:9.120pt;vertical-align:-0.380pt"/>，但为了演示，这里不合并这些项。）中间变量和偏导数如下：</p>
<div><img alt="" class="blkeqn" src="./assets/15d0ecb8073a-blkeqn-1780CB7B7425E18FCA94A1B6E1F82616.svg" style="width:211.560pt;height:81.180pt;vertical-align:0.000pt"/></div>
<p data-translation="B173">而全导数的形式仍然相同：</p>
<div><img alt="" class="blkeqn" src="./assets/ceb2793bffd1-blkeqn-50D1EABA22B46536559D83F8C21F749D.svg" style="width:221.400pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B174">中间变量所用的运算符改变时，变化的是偏导数（权重），而不是公式本身。</p>
<p data-translation="B175">微积分基础较好的读者可能会疑惑：为什么连 <img src="./assets/431378befbe6-eqn-06671AD4FF442E623460886DA749C797-depth001.06.svg" style="width:25.080pt;height:9.880pt;vertical-align:-0.806pt"/> 中的 <img src="./assets/9c463adf1e69-eqn-32F5240D0DBF2CCBE75EF7F8EF2015E0-depth000.14.svg" style="width:9.120pt;height:9.120pt;vertical-align:-0.380pt"/> 这种非嵌套子表达式，也要积极地引入中间变量？原因有三点：（i）简化后的子表达式通常很容易求导；（ii）这样可以简化链式法则；（iii）这一流程与神经网络库中的自动微分机制一致。</p>
<p data-translation="B176">进一步使用中间变量，就可以把单变量全导数链式法则化为最终形式。目标是去掉前面那个显得突兀的 <img src="./assets/8040a58938d5-eqn-F6E0346D1D3410B0FBE32B41B85999AA-depth004.67.svg" style="width:9.120pt;height:14.440pt;vertical-align:-3.727pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/bf29ad4cb962-blkeqn-4D0ABC7598A50E6E3076BE5D170FE72F.svg" style="width:161.540pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B177">只需引入一个新的临时变量，作为 <span class="eqn">x</span> 的别名：<img src="./assets/de58e84e4c83-eqn-80A59ADB26E30571A3056E2EB3E8DDCB-depth002.69.svg" style="width:35.720pt;height:7.600pt;vertical-align:-2.147pt"/>，就能做到。于是公式化为最终形式：</p>
<div><img alt="" class="blkeqn" src="./assets/0095361a085e-blkeqn-58933C7525007AD650FC8DED275E38E3.svg" style="width:135.300pt;height:27.880pt;vertical-align:0.000pt"/></div>
<p data-translation="B178">当所有中间变量都是单变量函数时，这条全导数链式法则就退化为单变量链式法则。因此，只记住这个更一般的公式，就能覆盖两种情况。先埋个伏笔：注意，这个求和很像向量点积 <img src="./assets/8e2282f04120-eqn-3F95AED50A8E6A5C514952D767B771CE-depth004.67.svg" style="width:27.360pt;height:14.440pt;vertical-align:-3.727pt"/>，或者向量乘法 <img src="./assets/ae1167fa0b72-eqn-51D7B0B0455FB229AB4920E9CA4AB032-depth004.67.svg" style="width:19.760pt;height:14.440pt;vertical-align:-3.727pt"/>。</p>
<p data-translation="B179">继续之前，提醒一下网上的术语用法。遗憾的是，在微积分讨论中，本节这条基于全导数的链式法则通常被称为“多变量链式法则”，这个名称很容易造成误解！只有中间变量才是多元函数；整个函数（如 <img src="./assets/e30141f38cb6-eqn-A5A7963264669BCFA0CCFA897853A1E0-depth003.25.svg" style="width:55.480pt;height:11.400pt;vertical-align:-2.594pt"/>）仍是只接受一个参数 <span class="eqn">x</span> 的标量函数。导数和参数都是标量，而不是“多元链式法则”这个名字可能让人联想到的向量。（在不涉及矩阵微积分的课堂上，“多元链式法则”大概不会造成歧义。）为了减少混淆，我们用“单变量全导数链式法则”这个名称，明确区分它与简单的单变量链式法则 <img src="./assets/8f0f8f56b504-eqn-9D3919C42833D1FF1456DEA11D8CC927-depth004.58.svg" style="width:38.760pt;height:13.680pt;vertical-align:-3.655pt"/>。</p>
<h4 data-translation="B180" id="sec:1.4.5.3">向量链式法则</h4>
<p data-translation="B181">理解全导数链式法则之后，就可以处理函数向量和向量变量的链式法则了。令人意外的是，这条更一般的法则，看起来与标量的单变量链式法则同样简洁。与其直接给出公式，不如亲自重新推导，以便牢固掌握。先计算一个向量函数对标量的导数，例如 <img src="./assets/88586d950cd7-eqn-82C28F66A012D28717CA0CFC8ED7F09B-depth003.25.svg" style="width:34.200pt;height:10.640pt;vertical-align:-2.594pt"/>，看看能否从中抽象出一般公式。</p>
<div><img alt="" class="blkeqn" src="./assets/e2d195b9e959-blkeqn-9E6B0B0C3DBC5DCB4D63830FEFDFA672.svg" style="width:132.020pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B182">引入两个中间变量 <img src="./assets/1a90c77f39c4-eqn-E11BA37D5D784AF689E175BEC8A2F284-depth002.65.svg" style="width:8.360pt;height:7.600pt;vertical-align:-2.115pt"/> 和 <img src="./assets/c0628928cdc2-eqn-D7F116997176D81A3BBD4E6DFC6FE6B0-depth002.65.svg" style="width:8.360pt;height:7.600pt;vertical-align:-2.115pt"/>，每个 <span class="eqn">f<sub>i</sub></span> 对应一个，使 <span class="eqn">y</span> 更像 <img src="./assets/953a3c73e759-eqn-C5AF10997DA85D7540CDF87F1F10016C-depth003.25.svg" style="width:47.120pt;height:10.640pt;vertical-align:-2.594pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/3dff26d775f8-blkeqn-1FB5515EE5B06A5ECC31BCEF58951081.svg" style="width:64.780pt;height:26.240pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/21df0fe08e88-blkeqn-98CA28A528B6F33EE66FBB9C617FF7CA.svg" style="width:84.460pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B183">向量 <span class="eqnvec">y</span> 对标量 <span class="eqn">x</span> 的导数是一个列向量，其各元素可用单变量全导数链式法则计算：</p>
<div><img alt="" class="blkeqn" src="./assets/206c90e45cf7-blkeqn-5F78C81E8292A153BADC01B7FACB5A37.svg" style="width:360.800pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B184">现在，我们仅靠标量法则就得到了答案，只不过把导数组织成了向量。接下来尝试从这一结果抽象出向量形式：目标是将下面由标量运算组成的向量，改写为一次向量运算。</p>
<div><img alt="" class="blkeqn" src="./assets/47cc68d97129-blkeqn-B7CD7A8372D1979EC0B1C8E72520EE6A.svg" style="width:73.800pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B185">将 <img src="./assets/063b58449ab1-eqn-97D1ACA90CB316ED8AE1EDFFAED02C77-depth007.21.svg" style="width:22.800pt;height:16.720pt;vertical-align:-5.754pt"/> 各项拆开，并把 <img src="./assets/7f4bfe3b8e33-eqn-D513134B704605A9687A47F8841D7D29-depth004.67.svg" style="width:10.640pt;height:14.440pt;vertical-align:-3.727pt"/> 各项单独组成一个向量，就得到矩阵与向量的乘法：</p>
<div><img alt="" class="blkeqn" src="./assets/5b4e98646d37-blkeqn-926CF538B47F3EC06CACC470ECAD14B3.svg" style="width:113.980pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B186">这意味着，一个雅可比矩阵等于另外两个雅可比矩阵的乘积，很有意思。来核对一下结果：</p>
<div><img alt="" class="blkeqn" src="./assets/c2dafadb6aa8-blkeqn-5A74FF5BA8874F740E140E477E2B631F.svg" style="width:266.500pt;height:27.060pt;vertical-align:0.000pt"/></div>
<p data-translation="B187">太好了！结果与标量方法相同。对于函数向量和单个参数，这条向量链式法则看来是正确的，而且确实与单变量链式法则相呼应。比较向量法则：</p>
<div><img alt="" class="blkeqn" src="./assets/f6e5d9927662-blkeqn-B0D7932C93DA81FD62418DA5DF3CBE14.svg" style="width:86.100pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B188">与单变量链式法则：</p>
<div><img alt="" class="blkeqn" src="./assets/08a993fadbe3-blkeqn-8617320E088DCA9EC6795865C614324A.svg" style="width:85.280pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B189">要使公式适用于多个参数或向量 <span class="eqnvec">x</span>，只需将式中的 <span class="eqn">x</span> 换成向量 <span class="eqnvec">x</span>。这样，<img src="./assets/ace65f5ed0b3-eqn-A24633DDE0B5346B4AE6B49395AC8B6D-depth004.67.svg" style="width:9.120pt;height:13.680pt;vertical-align:-3.727pt"/> 和最终得到的雅可比矩阵 <img src="./assets/e056ab7cd376-eqn-A9A13E2AE753365278B4F2CD198BBF92-depth004.67.svg" style="width:9.120pt;height:13.680pt;vertical-align:-3.727pt"/> 就从列向量变成了矩阵。完整的<i>向量链式法则</i>为：</p>
<div><img alt="" class="blkeqn" src="./assets/2c023a4caf87-blkeqn-F0D28570D62F2B5A6FF8C795E2726E7F.svg" style="width:382.940pt;height:16.400pt;vertical-align:0.000pt"/></div>
<p data-translation="B190">相比单变量链式法则，向量公式的妙处在于：保持同样简洁的符号形式，同时自动计入全导数。雅可比矩阵包含了 <span class="eqn">f<sub>i</sub></span> 对 <span class="eqn">g<sub>j</sub></span>、以及 <span class="eqn">g<sub>i</sub></span> 对 <span class="eqn">x<sub>j</sub></span> 的所有可能组合。为完整起见，下面展开这两个雅可比矩阵：</p>
<div><img alt="" class="blkeqn" src="./assets/e77f9be40246-blkeqn-DF061D799B57F368ABC9B1BA8235C31B.svg" style="width:243.540pt;height:60.680pt;vertical-align:0.000pt"/></div>
<p data-translation="B191">其中 <img src="./assets/59fcf933045b-eqn-99ADCB62C02EE5D10CC7B5F211BFA15B-depth003.25.svg" style="width:30.400pt;height:10.640pt;vertical-align:-2.594pt"/>、<img src="./assets/6bdd262cf05f-eqn-6E37471488C004C0ABACDF4148B8F3D6-depth003.25.svg" style="width:27.360pt;height:10.640pt;vertical-align:-2.594pt"/>、<img src="./assets/573148022c08-eqn-26312045D51B3E69C8357FF7FAF3BB3F-depth003.25.svg" style="width:27.360pt;height:10.640pt;vertical-align:-2.594pt"/>。所得雅可比矩阵大小为 <img src="./assets/e8240192acd9-eqn-FBFEB9C8459FEE5A2BD529C07B881153-depth001.08.svg" style="width:24.320pt;height:5.320pt;vertical-align:-0.821pt"/>（一个 <img src="./assets/cb55331f68c9-eqn-2DC13003CC069B1027F12896B1A00631-depth001.08.svg" style="width:24.320pt;height:7.600pt;vertical-align:-0.821pt"/> 矩阵乘以一个 <img src="./assets/23750dff5ed9-eqn-6D999BBC8A6ECBB820C04121088529A1-depth001.08.svg" style="width:22.040pt;height:7.600pt;vertical-align:-0.821pt"/> 矩阵）。</p>
<p data-translation="B192">即使在 <img src="./assets/59922957cdc6-eqn-A7896E2D919F33CF607DC9E972C70458-depth006.23.svg" style="width:19.000pt;height:14.440pt;vertical-align:-4.972pt"/> 这个公式中，也常能进一步简化，因为在许多应用里，雅可比矩阵是方阵（<img src="./assets/86c2e1c83d04-eqn-A193EBC083B4745370F6F1343383D9CC-depth000.14.svg" style="width:25.080pt;height:5.320pt;vertical-align:-0.380pt"/>），且非对角元素为零。神经网络中的数学通常处理的是以向量为输入的函数，而不是一组任意函数组成的向量。例如，神经元的仿射函数包含 <img src="./assets/3aaee1b28a4a-eqn-DE94554BD6F158BD8A829624C65169F4-depth003.25.svg" style="width:47.880pt;height:10.640pt;vertical-align:-2.594pt"/> 项，激活函数为 <img src="./assets/cfb93e606e18-eqn-EA2DFCC1C759A6D2EE675EBD05B2C593-depth003.25.svg" style="width:38.000pt;height:10.640pt;vertical-align:-2.594pt"/>；下一节将讨论它们的导数。</p>
<p data-translation="B193">前面已经看到，对向量 <span class="eqnvec">w</span> 和 <span class="eqnvec">x</span> 的逐元素运算会产生对角矩阵，其元素为 <img src="./assets/e15a184de47e-eqn-D840B92230E9F1C5F2545BCA90B34038-depth005.92.svg" style="width:11.400pt;height:14.440pt;vertical-align:-4.724pt"/>，因为 <span class="eqn">w<sub>i</sub></span> 仅依赖 <span class="eqn">x<sub>i</sub></span>，不依赖 <img src="./assets/9e7a9e9b9ced-eqn-B064F8555EC660F2F8BDC927D9636A06-depth002.72.svg" style="width:20.520pt;height:9.880pt;vertical-align:-2.171pt"/> 时的 <span class="eqn">x<sub>j</sub></span>。这里也一样：当 <span class="eqn">f<sub>i</sub></span> 仅是 <span class="eqn">g<sub>i</sub></span> 的函数，且 <span class="eqn">g<sub>i</sub></span> 仅是 <span class="eqn">x<sub>i</sub></span> 的函数时，有：</p>
<div><img alt="" class="blkeqn" src="./assets/1363a05dc2d6-blkeqn-4869BA6DCF2C9A404EECD993808A74B7.svg" style="width:71.340pt;height:25.420pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/b57c3bff3c58-blkeqn-DDA2EF4AEBF897725FC240946CF0412E.svg" style="width:71.340pt;height:24.600pt;vertical-align:0.000pt"/></div>
<p data-translation="B194">在这种情况下，向量链式法则简化为：</p>
<div><img alt="" class="blkeqn" src="./assets/218a85812957-blkeqn-2D82A2CFEA0A49E9B7D3C8F986DAF14A.svg" style="width:222.220pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B195">因此，雅可比矩阵化为对角矩阵，每个对角元素都是相应单变量链式法则的计算结果。</p>
<p data-translation="B196">经过这一大段数学推导，终于得到回报：你只需要掌握向量链式法则，因为单变量公式都是它的特例。下表汇总了为得到雅可比矩阵而需要相乘的各个组成部分。</p>
<div><img alt="
\begin{tabular}[t]{c|cccc}
  &amp; 
\multicolumn{2}{c}{
  \begin{tabular}[t]{c}
  scalar\\
  \framebox(18,18){$x$}\\
  \end{tabular}} &amp; &amp;\begin{tabular}{c}
  vector\\
  \framebox(18,40){$\mathbf{x}$}\\
  \end{tabular} \\
  
  \begin{tabular}{c}$\frac{\partial}{\partial \mathbf{x}} \mathbf{f}(\mathbf{g}(\mathbf{x}))$
	   = $\frac{\partial \mathbf{f}}{\partial \mathbf{g}}\frac{\partial\mathbf{g}}{\partial \mathbf{x}}$
		\\
		\end{tabular} &amp; \begin{tabular}[t]{c}
  scalar\\
  \framebox(18,18){$u$}\\
  \end{tabular} &amp; \begin{tabular}{c}
  vector\\
  \framebox(18,40){$\mathbf{u}$}
  \end{tabular}&amp; &amp; \begin{tabular}{c}
  vector\\
  \framebox(18,40){$\mathbf{u}$}\\
  \end{tabular} \\
\hline
%\[dimexpr-\normalbaselineskip+5pt]

\begin{tabular}[b]{c}
  scalar\\
  \framebox(18,18){$f$}\\
  \end{tabular} &amp;\framebox(18,18){$\frac{\partial f}{\partial {u}}$} \framebox(18,18){$\frac{\partial u}{\partial {x}}$} ~~~&amp; \raisebox{22pt}{\framebox(40,18){$\frac{\partial f}{\partial {\mathbf{u}}}$}} \framebox(18,40){$\frac{\partial \mathbf{u}}{\partial x}$} &amp; ~~~&amp;
\raisebox{22pt}{\framebox(40,18){$\frac{\partial f}{\partial {\mathbf{u}}}$}} \framebox(40,40){$\frac{\partial \mathbf{u}}{\partial \mathbf{x}}$}
\\
  
\begin{tabular}[b]{c}
  vector\\
  \framebox(18,40){$\mathbf{f}$}\\
  \end{tabular} &amp; \framebox(18,40){$\frac{\partial \mathbf{f}}{\partial {u}}$} \raisebox{22pt}{\framebox(18,18){$\frac{\partial u}{\partial {x}}$}} &amp; \framebox(40,40){$\frac{\partial \mathbf{f}}{\partial \mathbf{u}}$} \framebox(18,40){$\frac{\partial \mathbf{u}}{\partial x}$} &amp; &amp; \framebox(40,40){$\frac{\partial \mathbf{f}}{\partial \mathbf{u}}$} \framebox(40,40){$\frac{\partial \mathbf{u}}{\partial \mathbf{x}}$}\\
  
\end{tabular}
" class="blkeqn" src="./assets/94b39ac3cd3d-latex-60482D46C45EEE61345A44D34A6BDEFA.svg" style="width:309.960pt;height:186.140pt;vertical-align:0.000pt"/></div>
<h2 data-translation="B197" id="sec:1.5">神经元激活值的梯度</h2>
<p data-translation="B198">现在，我们已经具备所需的全部工具，可以计算神经网络中单个计算单元的典型激活值对模型参数 <span class="eqnvec">w</span> 和 <span class="eqn">b</span> 的导数：</p>
<div><img alt="" class="blkeqn" src="./assets/704e82546967-blkeqn-690A7F42FFBB4FCB6874091E1277A68C.svg" style="width:147.600pt;height:11.480pt;vertical-align:0.000pt"/></div>
<p data-translation="B199">（这表示一个采用全连接权重和整流线性单元激活函数的神经元。当然，也存在卷积等其他仿射函数，以及指数线性单元等其他激活函数，它们遵循类似的逻辑。）</p>
<p data-translation="B200">先暂时放下 <span class="eqn">max</span>，专注于计算 <img src="./assets/6d66fcd97615-eqn-37826EBEE16CD487A60FA876F5038265-depth004.67.svg" style="width:55.480pt;height:13.680pt;vertical-align:-3.727pt"/> 和 <img src="./assets/107a5602426b-eqn-45DA2FE78D565E2361F35FF898D806A8-depth004.67.svg" style="width:53.200pt;height:13.680pt;vertical-align:-3.727pt"/>。（回忆一下，神经网络通过优化权重和偏置来学习。）我们还没有讨论点积的导数 <img src="./assets/05355cf8f580-eqn-31E193E45068EDA5F2E229B246720968-depth003.25.svg" style="width:62.320pt;height:10.640pt;vertical-align:-2.594pt"/>，但可以利用链式法则，避免再记一条新规则。（注意，这里使用 <span class="eqn">y</span> 而非 <span class="eqnvec">y</span>，因为结果是标量，不是向量。）</p>
<p data-translation="B201">点积 <img src="./assets/af4178e05b16-eqn-9CA8C3CD16894AF7620468A20C53D6FA-depth000.00.svg" style="width:20.520pt;height:4.560pt;vertical-align:-0.380pt"/> 就是逐元素乘积的和：<img src="./assets/7d44351bd9ce-eqn-4B722CF0EFB8F8ABCBB968086BB587E8-depth003.31.svg" style="width:95.000pt;height:10.640pt;vertical-align:-2.641pt"/>。（记住线性代数形式 <img src="./assets/4cb62b67b7b0-eqn-DE393E92B808CB595831DB7AF0D46F39-depth000.00.svg" style="width:51.680pt;height:9.120pt;vertical-align:-0.380pt"/> 也可能有所帮助。）我们知道如何计算 <img src="./assets/70fbf4bf52b4-eqn-1B8AC0FD13AAD81B7EFBE58CDD162D02-depth003.25.svg" style="width:28.120pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/a1cb8eaf05c1-eqn-68EE6C0B6C39602AC2A620854B5785B2-depth001.08.svg" style="width:25.080pt;height:6.840pt;vertical-align:-0.821pt"/> 的偏导数，但还没有讨论 <img src="./assets/8e44e8bb9116-eqn-307751654E2CF1B689CE1D06776B3934-depth003.25.svg" style="width:47.880pt;height:10.640pt;vertical-align:-2.594pt"/> 的偏导数。这需要链式法则，因此可以像使用单变量链式法则时那样，引入中间向量变量 <span class="eqnvec">u</span>：</p>
<div><img alt="" class="blkeqn" src="./assets/79460fafeacd-blkeqn-F96F2BC735B8DCA41045BDA7386930E7.svg" style="width:62.320pt;height:22.960pt;vertical-align:0.000pt"/></div>
<p data-translation="B202">将 <span class="eqn">y</span> 改写之后，就能认出两个偏导数已经知道的子表达式：</p>
<div><img alt="" class="blkeqn" src="./assets/afa888761e97-blkeqn-9227E0CBF856A76670F712C93DCDBA14.svg" style="width:141.860pt;height:28.700pt;vertical-align:0.000pt"/></div>
<p data-translation="B203">向量链式法则告诉我们，将这些偏导数相乘：</p>
<div><img alt="" class="blkeqn" src="./assets/596a39c34a4b-blkeqn-F06895900143D4DF2E9DF6ACB61EAEB7.svg" style="width:150.060pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B204">为了核对结果，可以将点积完全展开为标量函数：</p>
<div><img alt="" class="blkeqn" src="./assets/a0690899992c-blkeqn-C47CAE5B600CE950FAFDB1B759820EE9.svg" style="width:265.680pt;height:28.700pt;vertical-align:0.000pt"/></div>
<p data-translation="B205">于是：</p>
<div><img alt="" class="blkeqn" src="./assets/1e8e0ba9992e-blkeqn-44FAB0E50B6FA0C7012FF79FB03EBD14.svg" style="width:102.500pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B206">很好！标量计算的结果与向量链式法则的结果一致。</p>
<p data-translation="B207">现在令 <img src="./assets/01fb182e461b-eqn-EABE2A2F7035C793F48B3885A2EA0009-depth002.65.svg" style="width:55.480pt;height:9.880pt;vertical-align:-2.115pt"/>，也就是 <span class="eqn">max</span> 激活函数调用内部的完整表达式。我们要计算两个不同的偏导数，但这次不需要链式法则：</p>
<div><img alt="" class="blkeqn" src="./assets/6e682a4a9ea3-blkeqn-32D3EDC2E6F543CA718B3DAA02FE9518.svg" style="width:203.360pt;height:31.160pt;vertical-align:0.000pt"/></div>
<p data-translation="B208">接下来处理神经元激活值 <img src="./assets/8e70cfafe4c5-eqn-602D78206C69DAFE86EDC0775CF04CDB-depth003.25.svg" style="width:69.920pt;height:10.640pt;vertical-align:-2.594pt"/> 的偏导数。对标量 <span class="eqn">z</span> 应用 <img src="./assets/74f8d607c54d-eqn-2E8B663420C79458FF788F7C8F198AA2-depth003.25.svg" style="width:36.480pt;height:10.640pt;vertical-align:-2.594pt"/>，就是将所有负的 <span class="eqn">z</span> 值视为 0。max 函数的导数是分段函数。当 <img src="./assets/a3f4dd4f019b-eqn-B960DEAE3DC80FA85FEA3304A9474DB5-depth001.72.svg" style="width:22.040pt;height:9.120pt;vertical-align:-1.373pt"/> 时，导数为 0，因为 <span class="eqn">z</span> 是常数；当 <img src="./assets/7ade6a34c23a-eqn-E929E61EB1C05B5B7AC234027C595BE2-depth001.05.svg" style="width:22.040pt;height:8.360pt;vertical-align:-0.798pt"/> 时，max 的导数就是 <span class="eqn">z</span> 的导数，也就是 <img src="./assets/16598c021cf9-eqn-C4CA4238A0B923820DCC509A6F75849B-depth000.00.svg" style="width:3.800pt;height:7.600pt;vertical-align:-0.380pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/1a42befd6350-blkeqn-6D2BF5B3220F17D8D1492E97A7BA112F.svg" style="width:136.940pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B209"><hr/>补充说明如何将标量函数广播到各元素上。当 <span class="eqn">max</span> 的一个或两个参数是向量时，例如 <img src="./assets/cfb93e606e18-eqn-EA2DFCC1C759A6D2EE675EBD05B2C593-depth003.25.svg" style="width:38.000pt;height:10.640pt;vertical-align:-2.594pt"/>，我们将单变量函数 <span class="eqn">max</span> 广播到各个元素。这是逐元素一元运算的一个例子。明确写出就是：</p>
<div><img alt="" class="blkeqn" src="./assets/659fc5593e51-blkeqn-45CC079AA33DA0D8886CC5E6CF8E03CD.svg" style="width:112.340pt;height:51.660pt;vertical-align:0.000pt"/></div>
<p data-translation="B210">对于广播后的版本，其导数对应一个由 0 和 1 组成的向量，其中：</p>
<div><img alt="" class="blkeqn" src="./assets/6562835367f1-blkeqn-C2B5F84316BFF536F80F78FCF9DD9830.svg" style="width:148.420pt;height:32.800pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/d36426b0d64b-blkeqn-4EA88847E78682CFDBCA0019C1623945.svg" style="width:138.580pt;height:58.220pt;vertical-align:0.000pt"/></div>
<hr/>
<p data-translation="B211">要计算 <img src="./assets/4c8409f3ce41-eqn-FD043EAC3999F8DEAF1FF1E131B3346C-depth003.25.svg" style="width:52.440pt;height:10.640pt;vertical-align:-2.594pt"/> 的导数，由于存在嵌套子表达式 <img src="./assets/de4e8b04beb0-eqn-6C156670CEC09096976A6722592523F3-depth001.06.svg" style="width:37.240pt;height:8.360pt;vertical-align:-0.806pt"/>，需要使用链式法则。按照既定流程，引入中间标量变量 <span class="eqn">z</span> 表示仿射函数，得到：</p>
<div><img alt="" class="blkeqn" src="./assets/85b3a2814208-blkeqn-261BC49758F84DF99117345CD8D22CFE.svg" style="width:95.940pt;height:11.480pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/b5d7077ecd45-blkeqn-9E429AF61D15BF6942A3132FABAC77A2.svg" style="width:109.880pt;height:11.480pt;vertical-align:0.000pt"/></div>
<p data-translation="B212">向量链式法则给出：</p>
<div><img alt="" class="blkeqn" src="./assets/6893a1d490a5-blkeqn-B0C84C12426A7A698FBBCB890502411F.svg" style="width:133.660pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B213">可以将其改写为：</p>
<div><img alt="" class="blkeqn" src="./assets/dd20d3cd11a3-blkeqn-F94D315B3BCA31AEEDEA21880AC8E894.svg" style="width:349.320pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B214">再将 <img src="./assets/342e1f67acb5-eqn-F394C21EEE331911707D5EDBD9BCAE20-depth001.06.svg" style="width:53.960pt;height:8.360pt;vertical-align:-0.806pt"/> 代回：</p>
<div><img alt="" class="blkeqn" src="./assets/32f3fc41fbbc-blkeqn-D99784CE8232A77979A6ADFEBD882311.svg" style="width:159.900pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B215">这个等式符合直觉。当激活函数将仿射函数输出 <span class="eqn">z</span> 截断为 0 时，对任意权重 <span class="eqn">w<sub>i</sub></span> 的导数都为零。当 <img src="./assets/7ade6a34c23a-eqn-E929E61EB1C05B5B7AC234027C595BE2-depth001.05.svg" style="width:22.040pt;height:8.360pt;vertical-align:-0.798pt"/> 时，<span class="eqn">max</span> 函数仿佛消失了一样，剩下的就是 <span class="eqn">z</span> 对权重的导数。</p>
<p data-translation="B216">接着计算神经元激活值对 <span class="eqn">b</span> 的导数，得到：</p>
<div><img alt="" class="blkeqn" src="./assets/714f7ca221ec-blkeqn-9CE42F7BD715F354A87DF9043310E3BB.svg" style="width:179.580pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B217">现在利用这些偏导数，处理整个损失函数。</p>
<h2 data-translation="B218" id="sec:1.6">神经网络损失函数的梯度</h2>
<p data-translation="B219">训练神经元，需要对损失函数（也称“代价函数”）关于模型参数 <span class="eqnvec">w</span> 和 <span class="eqn">b</span> 求导。本例采用均方误差作为损失函数。由于训练使用多个向量输入（例如多张图像）及相应的标量目标（例如每张图像对应一个分类），我们需要引入更多符号。令：</p>
<div><img alt="" class="blkeqn" src="./assets/a93319a535e3-blkeqn-E0D9DAEE8A697C2E19FE66E14937D611.svg" style="width:93.480pt;height:13.120pt;vertical-align:0.000pt"/></div>
<p data-translation="B220">其中 <img src="./assets/c284ee099498-eqn-BEDD04B41054D234623B0BB3759ABF73-depth003.25.svg" style="width:32.680pt;height:10.640pt;vertical-align:-2.594pt"/>，再令：</p>
<div><img alt="" class="blkeqn" src="./assets/c5ec78e82d4d-blkeqn-5A01562788A7EF73942A2BE62977EA30.svg" style="width:194.340pt;height:13.120pt;vertical-align:0.000pt"/></div>
<p data-translation="B221">其中 <span class="eqn">y<sub>i</sub></span> 是标量。于是代价函数变为：</p>
<div><img alt="" class="blkeqn" src="./assets/d432212c879b-blkeqn-718C673BC0DE612BC185612904F24C22.svg" style="width:333.740pt;height:27.880pt;vertical-align:0.000pt"/></div>
<p data-translation="B222">按照链式法则流程，引入以下中间变量：</p>
<div><img alt="" class="blkeqn" src="./assets/7f3e788f2b4e-blkeqn-E3B2339A8BE4A415649748CB1D886F6C.svg" style="width:142.680pt;height:38.540pt;vertical-align:0.000pt"/></div>
<p data-translation="B223">先计算对 <span class="eqnvec">w</span> 的梯度。</p>
<h3 data-translation="B224" id="sec:1.6.1">对权重的梯度</h3>
<p data-translation="B225">根据前面的结果，我们知道：</p>
<div><img alt="" class="blkeqn" src="./assets/4479a5ad2ec9-blkeqn-5E0A4E7EF154D7560B184EE3DCA596DF.svg" style="width:166.460pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B226">以及</p>
<div><img alt="" class="blkeqn" src="./assets/fe783aea91e0-blkeqn-82119129B9536081C2075443A76B2E68.svg" style="width:309.140pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B227">于是，整体梯度为：</p>
<div><img alt="
\begin{eqnarray*}
 \frac{\partial C(v)}{\partial \mathbf{w}} &amp; = &amp; \frac{\partial }{\partial \mathbf{w}}\frac{1}{N} \sum_{i=1}^N v^2\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \frac{\partial}{\partial \mathbf{w}} v^2\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \frac{\partial v^2}{\partial v} \frac{\partial v}{\partial \mathbf{w}} \\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N 2v \frac{\partial v}{\partial \mathbf{w}} \\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \begin{cases}
	2v\overrightarrow{\mathbf 0}^T = \overrightarrow{\mathbf 0}^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
	-2v\mathbf{x}_i^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
\end{cases}\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \begin{cases}
	\overrightarrow{\mathbf 0}^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
	-2(y_i-u)\mathbf{x}_i^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
\end{cases}\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \begin{cases}
	\overrightarrow{\mathbf 0}^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
	-2(y_i-max(0, \mathbf{w}\cdot\mathbf{x}_i+b))\mathbf{x}_i^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
\end{cases}\\
\phantom{\frac{\partial C(v)}{\partial \mathbf{w}}} &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \begin{cases}
	\overrightarrow{\mathbf 0}^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
	-2(y_i-(\mathbf{w}\cdot\mathbf{x}_i+b))\mathbf{x}_i^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
\end{cases}\\\\
 &amp; = &amp; \begin{cases}
	\overrightarrow{\mathbf 0}^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
	\frac{-2}{N} \sum_{i=1}^N (y_i-(\mathbf{w}\cdot\mathbf{x}_i+b))\mathbf{x}_i^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
\end{cases}\\\\
 &amp; = &amp; \begin{cases}
	\overrightarrow{\mathbf 0}^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
	\frac{2}{N} \sum_{i=1}^N (\mathbf{w}\cdot\mathbf{x}_i+b-y_i)\mathbf{x}_i^T &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
\end{cases}
\end{eqnarray*}
" class="blkeqn" src="./assets/b4e5fa45aec3-latex-02017BA22EFFB5A44DD12B3EA1142444.svg" style="width:289.460pt;height:363.260pt;vertical-align:0.000pt"/></div>
<p data-translation="B228">为了理解这个等式，可以代入误差项 <img src="./assets/d0ad8cbc6f78-eqn-A90A948C72E3B6E10EF49E9CA3323248-depth002.65.svg" style="width:77.520pt;height:9.880pt;vertical-align:-2.115pt"/>，得到：</p>
<div><img alt="" class="blkeqn" src="./assets/dd666ca9f286-blkeqn-163C805C2F1B4149DC6D7EDC22457A99.svg" style="width:235.340pt;height:27.880pt;vertical-align:0.000pt"/></div>
<p data-translation="B229">注意，这个计算是在 <span class="eqn">X</span> 中的所有 <span class="eqnvec">x</span><sub class="eqn">i</sub> 上取加权平均。权重就是误差项，即对每个输入 <span class="eqnvec">x</span><sub class="eqn">i</sub>，目标输出与神经元实际输出之间的差。所得梯度总体上指向代价或损失增大的方向，因为较大的 <span class="eqn">e<sub>i</sub></span> 会突出对应的 <span class="eqnvec">x</span><sub class="eqn">i</sub> 的贡献。假设只有一个输入向量 <img src="./assets/85b03f05f6c9-eqn-75147DC2E59AB7AF04E48C0E3C2D71EA-depth003.25.svg" style="width:50.920pt;height:10.640pt;vertical-align:-2.594pt"/>，梯度就是 <img src="./assets/8f3fc88e22de-eqn-26DDD7C22F3D8F5B07FC7EE421EEE6ED-depth003.45.svg" style="width:23.560pt;height:12.160pt;vertical-align:-2.753pt"/>。误差为 0 时，梯度为零，损失也就达到了最小值。如果 <img src="./assets/0032e99ecebd-eqn-3104BCC503B3B8C16FFA2940B56AAF1C-depth001.95.svg" style="width:7.600pt;height:6.840pt;vertical-align:-1.556pt"/> 是一个较小的正差值，梯度就是沿 <img src="./assets/b87ad1b10dea-eqn-262A3BD0318D5034272A8F904D6FAD24-depth001.95.svg" style="width:8.360pt;height:6.080pt;vertical-align:-1.556pt"/> 方向迈出的一小步；如果 <img src="./assets/0032e99ecebd-eqn-3104BCC503B3B8C16FFA2940B56AAF1C-depth001.95.svg" style="width:7.600pt;height:6.840pt;vertical-align:-1.556pt"/> 很大，梯度就是沿该方向迈出的一大步。如果 <img src="./assets/0032e99ecebd-eqn-3104BCC503B3B8C16FFA2940B56AAF1C-depth001.95.svg" style="width:7.600pt;height:6.840pt;vertical-align:-1.556pt"/> 为负，梯度方向就反过来，意味着代价增大的方向是负方向。</p>
<p data-translation="B230">当然，我们希望减小而不是增大损失，因此<a href="https://en.wikipedia.org/wiki/Gradient_descent">梯度下降</a>的递推公式沿负梯度方向更新当前位置（标量学习率为 <img src="./assets/f6bf13bc1ba8-eqn-FFE9F913124F345732E9F00FA258552E-depth002.65.svg" style="width:6.080pt;height:8.360pt;vertical-align:-2.115pt"/>）：</p>
<div><img alt="" class="blkeqn" src="./assets/09beffaf648e-blkeqn-A03E71D2EAF4B8BA3BDFACE6299DD07C.svg" style="width:82.000pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B231">由于梯度指向代价增大的方向，我们要沿相反方向更新 <span class="eqnvec">w</span>。</p>
<h3 data-translation="B232" id="sec:1.6.2">对偏置的导数</h3>
<p data-translation="B233">为了优化偏置 <span class="eqn">b</span>，还需要对 <span class="eqn">b</span> 的偏导数。再次列出中间变量：</p>
<div><img alt="" class="blkeqn" src="./assets/41017da205f5-blkeqn-05147011C8D1FD09E6EEB6A916C12787.svg" style="width:142.680pt;height:38.540pt;vertical-align:0.000pt"/></div>
<p data-translation="B234">前面已经计算了方程 <img src="./assets/4dce5a968905-eqn-FBD5708C00E92A391A69A42591580BE0-depth003.25.svg" style="width:38.760pt;height:10.640pt;vertical-align:-2.594pt"/> 对偏置的偏导数：</p>
<div><img alt="" class="blkeqn" src="./assets/f47ef15a8119-blkeqn-97F6B2C0D2E31579875BAE3E458BF333.svg" style="width:110.700pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B235">对于 <span class="eqn">v</span>，偏导数为：</p>
<div><img alt="" class="blkeqn" src="./assets/cdeeb5f7acec-blkeqn-8C418D6F20C9CD5F0C56184F94005AF3.svg" style="width:282.900pt;height:32.800pt;vertical-align:0.000pt"/></div>
<p data-translation="B236">而代价函数本身的偏导数为：</p>
<div><img alt="
\begin{eqnarray*}
 \frac{\partial C(v)}{\partial b} &amp; = &amp; \frac{\partial }{\partial b}\frac{1}{N} \sum_{i=1}^N v^2\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \frac{\partial}{\partial b} v^2\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \frac{\partial v^2}{\partial v} \frac{\partial v}{\partial b} \\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N 2v \frac{\partial v}{\partial b} \\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \begin{cases}
 	0 &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
 	-2v &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
 \end{cases}\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \begin{cases}
 	0 &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
 	-2(y_i-max(0, \mathbf{w}\cdot\mathbf{x}_i+b)) &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
 \end{cases}\\\\
 &amp; = &amp; \frac{1}{N} \sum_{i=1}^N \begin{cases}
 	0 &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
 	2(\mathbf{w}\cdot\mathbf{x}_i+b-y_i) &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
 \end{cases}\\\\
&amp; = &amp; \frac{2}{N} \sum_{i=1}^N \begin{cases}
	0 &amp; \mathbf{w} \cdot \mathbf{x}_i + b \leq 0\\
	\mathbf{w}\cdot\mathbf{x}_i+b-y_i &amp; \mathbf{w} \cdot \mathbf{x}_i + b &gt; 0\\
 \end{cases}
\end{eqnarray*}
" class="blkeqn" src="./assets/df6eda871468-latex-4C786E1612F03A51376C7347F66D2DEF.svg" style="width:277.980pt;height:290.280pt;vertical-align:0.000pt"/></div>
<p data-translation="B237">和之前一样，可以代入误差项：</p>
<div><img alt="" class="blkeqn" src="./assets/7eeb9d44b001-blkeqn-010D7BD50356C45DC600E35E870120E4.svg" style="width:218.120pt;height:27.880pt;vertical-align:0.000pt"/></div>
<p data-translation="B238">因此，偏导数就是根据激活情况取误差值或零，再对它们求平均。更新神经元偏置时，沿代价增大的相反方向作小幅调整：</p>
<div><img alt="" class="blkeqn" src="./assets/01d23feab3a6-blkeqn-3F83D3A6790B0478D7E9C6C04138F84C.svg" style="width:75.440pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B239">实际中，将 <span class="eqnvec">w</span> 与 <span class="eqn">b</span> 合并为一个向量参数更方便，这样不必分别处理两个偏导数：<img src="./assets/74352a6556d5-eqn-1C5C3BA710F818B84DF992E699DB50C3-depth003.25.svg" style="width:53.200pt;height:11.400pt;vertical-align:-2.594pt"/>。这也需要调整输入向量 <span class="eqnvec">x</span>，但能简化激活函数。在 <span class="eqnvec">x</span> 的末尾补上一个 1，得到 <img src="./assets/076aa803331d-eqn-CDA92F9769DA156F5D82B4BF0D40A8B4-depth003.25.svg" style="width:43.320pt;height:11.400pt;vertical-align:-2.594pt"/> 后，<img src="./assets/de4e8b04beb0-eqn-6C156670CEC09096976A6722592523F3-depth001.06.svg" style="width:37.240pt;height:8.360pt;vertical-align:-0.806pt"/> 就变为 <img src="./assets/a1664920e56d-eqn-03741D422AA7DF7FF34288D8E4395143-depth000.00.svg" style="width:20.520pt;height:7.600pt;vertical-align:-0.380pt"/>。</p>
<p data-translation="B240">至此，神经网络损失函数的优化推导就完成了：我们已经得到执行梯度下降所需的两个偏导数。</p>
<h2 data-translation="B241" id="sec:1.7">总结</h2>
<p data-translation="B242">希望你一路读到了这里。你已经在理解矩阵微积分的道路上迈出了重要一步！下一节提供速查资料，汇总本文的全部法则。也请看看后面附带评述的资源链接。</p>
<p data-translation="B243">接下来，可以学习对矩阵而不只是对向量求偏导。例如，阅读 <a href="https://atmos.washington.edu/~dennis/MatrixCalculus.pdf">Matrix calculus</a> 中关于矩阵微分的部分。</p>
<p data-translation="B244"><b>致谢。</b>感谢 <a href="https://www.usfca.edu/faculty/yannet-interian">Yannet Interian</a>（旧金山大学数据科学硕士项目教师）和 <a href="http://www.cs.usfca.edu/~duminsky/">David Uminsky</a>（数据科学硕士项目教师兼主任）帮助完善本文的符号记法。</p>
<h2 data-translation="B245" id="reference">矩阵微积分速查</h2>
<h3 data-translation="B246" id="sec:1.8.1">梯度与雅可比矩阵</h3>
<p data-translation="B247">二元函数的<i>梯度</i>是一个长度为 2 的行向量：</p>
<div><img alt="" class="blkeqn" src="./assets/39a265d603e5-blkeqn-B3086170DA6B4B465F867D85C66E8359.svg" style="width:134.480pt;height:25.420pt;vertical-align:0.000pt"/></div>
<p data-translation="B248">以向量为输入的向量值函数，其<i>雅可比矩阵</i>是一个包含全部可能标量偏导数的 <img src="./assets/e8240192acd9-eqn-FBFEB9C8459FEE5A2BD529C07B881153-depth001.08.svg" style="width:24.320pt;height:5.320pt;vertical-align:-0.821pt"/> 矩阵（<img src="./assets/768a9db600f9-eqn-4B7BE5D4BAEFA7643CD9638A527AC10F-depth003.25.svg" style="width:28.880pt;height:10.640pt;vertical-align:-2.594pt"/>，<img src="./assets/ba269d4c6976-eqn-E3114C625CDDDC18ED29BA629242BD65-depth003.25.svg" style="width:28.120pt;height:10.640pt;vertical-align:-2.594pt"/>）：</p>
<div><img alt="" class="blkeqn" src="./assets/7fc98a27a971-blkeqn-3466FB5BF19F3537FB55469EBB13FDDD.svg" style="width:291.920pt;height:58.220pt;vertical-align:0.000pt"/></div>
<p data-translation="B249">恒等函数 <img src="./assets/fe74f5c6d279-eqn-3ABE4A0471143ABFC180C9FA485E5F0A-depth003.25.svg" style="width:35.720pt;height:10.640pt;vertical-align:-2.594pt"/> 的雅可比矩阵为 <span class="eqn">I</span>。</p>
<h3 data-translation="B250" id="sec:1.8.2">向量的逐元素运算</h3>
<p data-translation="B251">使用 <img src="./assets/d71651503d83-eqn-1A74909B6CBAA4532A76D83B72C12DE0-depth002.52.svg" style="width:9.880pt;height:9.880pt;vertical-align:-2.011pt"/> 这样的运算符（例如 <img src="./assets/abd0763c2c0a-eqn-26B17225B626FB9238849FD60EABDF60-depth001.06.svg" style="width:7.600pt;height:6.840pt;vertical-align:-0.806pt"/>），定义向量 <span class="eqnvec">w</span> 和 <span class="eqnvec">x</span> 上的一般<i>逐元素运算</i>：</p>
<div><img alt="" class="blkeqn" src="./assets/3a1adcba9239-blkeqn-7F26413653546ADCEB9BC3BCFA41D136.svg" style="width:109.060pt;height:53.300pt;vertical-align:0.000pt"/></div>
<p data-translation="B252">对 <span class="eqnvec">w</span> 的雅可比矩阵为（对 <span class="eqnvec">x</span> 的情形类似）：</p>
<div><img alt="" class="blkeqn" src="./assets/77e788ace1c6-blkeqn-54F95B3CFFD404740FAD218B308DEF70.svg" style="width:365.720pt;height:58.220pt;vertical-align:0.000pt"/></div>
<p data-translation="B253">如果满足<i>逐元素对角条件</i>，即 <img src="./assets/4f61fd06e249-eqn-BD5A63074F44F11CB2ED06325816582A-depth003.25.svg" style="width:21.280pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/a8864a6d50e7-eqn-5E597DAA4E5D9263DCBFB6AB02BDB67F-depth003.25.svg" style="width:19.760pt;height:10.640pt;vertical-align:-2.594pt"/> 分别最多只访问 <span class="eqn">w<sub>i</sub></span> 和 <span class="eqn">x<sub>i</sub></span>，则雅可比矩阵化为对角矩阵：</p>
<div><img alt="" class="blkeqn" src="./assets/4b1ae0cf7d11-blkeqn-3D114C6873F46EE41AF91BF8B1BB37CD.svg" style="width:400.160pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B254">以下是一些逐元素运算的例子：</p>
<div><img alt="" class="blkeqn" src="./assets/c2ad053f3ba9-blkeqn-96AF91DA8E0473180EE048EC940EDFE3.svg" style="width:341.940pt;height:72.160pt;vertical-align:0.000pt"/></div>
<h3 data-translation="B255" id="sec:1.8.3">标量扩展</h3>
<p data-translation="B256">将标量 <span class="eqn">z</span> 加到向量 <span class="eqnvec">x</span> 上得到 <img src="./assets/1c5d24a41792-eqn-6307CEA088D2D4E98E5B163B9CE8F510-depth002.33.svg" style="width:40.280pt;height:7.600pt;vertical-align:-1.859pt"/>，实际上就是 <img src="./assets/c02bb438f179-eqn-8D9C0B9B15490F45C353D9DE64565A4F-depth003.25.svg" style="width:63.840pt;height:10.640pt;vertical-align:-2.594pt"/>，其中 <img src="./assets/fe74f5c6d279-eqn-3ABE4A0471143ABFC180C9FA485E5F0A-depth003.25.svg" style="width:35.720pt;height:10.640pt;vertical-align:-2.594pt"/> 且 <img src="./assets/4d3ff62667ca-eqn-96DAD084681FCA331FD43EA15A9D718C-depth003.25.svg" style="width:44.080pt;height:13.680pt;vertical-align:-2.594pt"/>。</p>
<div><img alt="" class="blkeqn" src="./assets/f58023d9a19b-blkeqn-44DC79699D852CF6804C4A58230A63DB.svg" style="width:115.620pt;height:23.780pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/c5c917b9aea5-blkeqn-8BBEE76022B230F99EFEF395B7939E65.svg" style="width:67.240pt;height:23.780pt;vertical-align:0.000pt"/></div>
<p data-translation="B257">标量乘法得到：</p>
<div><img alt="" class="blkeqn" src="./assets/d5f7572e91b4-blkeqn-2A0AFB09BE7BE042E565C9C7FCC8B136.svg" style="width:54.940pt;height:23.780pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/2162c4a85da1-blkeqn-82B897A0A23D9C6BB66EDF17D1D3CB02.svg" style="width:50.840pt;height:23.780pt;vertical-align:0.000pt"/></div>
<h3 data-translation="B258" id="sec:1.8.4">向量归约</h3>
<p data-translation="B259">向量求和对其中一个向量的偏导数为：</p>
<div><img alt="" class="blkeqn" src="./assets/f10f9475cece-blkeqn-AD4B42FFE2F358BDABDC69EF1295F5CD.svg" style="width:316.520pt;height:19.680pt;vertical-align:0.000pt"/></div>
<p data-translation="B260">对于 <img src="./assets/ba4faa64bb8f-eqn-5FAFFB6A723E437AC6433DCA0B269846-depth003.25.svg" style="width:46.360pt;height:10.640pt;vertical-align:-2.594pt"/>：</p>
<div><img alt="" class="blkeqn" src="./assets/f4f91631bf05-blkeqn-786ECEFEABD0F3AFC11204B5E470897E.svg" style="width:46.740pt;height:14.760pt;vertical-align:0.000pt"/></div>
<p data-translation="B261">对于 <img src="./assets/137fe156e250-eqn-9D785998BBDB763E1D5EE5546D47E47E-depth003.25.svg" style="width:50.160pt;height:10.640pt;vertical-align:-2.594pt"/> 和 <img src="./assets/9b1154657c7f-eqn-B00911788A7536593130B4C89B6653A2-depth003.25.svg" style="width:27.360pt;height:10.640pt;vertical-align:-2.594pt"/>，得到：</p>
<div><img alt="" class="blkeqn" src="./assets/eafdfc231c35-blkeqn-C49A553A6A2A5CFFDF4A4EE2C82A7C06.svg" style="width:77.080pt;height:11.480pt;vertical-align:0.000pt"/></div>
<div><img alt="" class="blkeqn" src="./assets/4418964f3741-blkeqn-703E826114B29A81E6936BB369947E4C.svg" style="width:60.680pt;height:11.480pt;vertical-align:0.000pt"/></div>
<p data-translation="B262">向量点积为 <img src="./assets/f61d32f276eb-eqn-CF556A1D1CDF0863FDD547594536501A-depth003.31.svg" style="width:171.000pt;height:10.640pt;vertical-align:-2.641pt"/>。代入 <img src="./assets/cac79e0a8085-eqn-02A67275B737296ACC7D3FACA124192C-depth001.08.svg" style="width:44.080pt;height:6.840pt;vertical-align:-0.821pt"/> 并使用向量链式法则，得到：</p>
<div><img alt="" class="blkeqn" src="./assets/4cf01a48a7a0-blkeqn-350D7E3E3FB00B2CBD1A750ADFE8E4FF.svg" style="width:165.640pt;height:41.820pt;vertical-align:0.000pt"/></div>
<p data-translation="B263">类似地，<img src="./assets/36787f7483b9-eqn-D0E108FD2A63FFC84018DF9BCBE4C91B-depth004.58.svg" style="width:34.200pt;height:13.680pt;vertical-align:-3.655pt"/>。</p>
<h3 data-translation="B264" id="sec:1.8.5">链式法则</h3>
<p data-translation="B265"><i>向量链式法则</i>是一般形式，其他法则都是它的退化情形。当 <span class="eqn">f</span> 是单变量 <span class="eqn">x</span> 的函数，且所有中间变量 <span class="eqn">u</span> 都是单变量函数时，适用单变量链式法则。当部分或全部中间变量是多变量函数时，适用单变量全导数链式法则。其他情况下，则使用向量链式法则。</p>
<center>
<table style="">
<thead>
<tr>
<th align="center" data-translation="B266" valign="top">单变量法则</th><th align="center" data-translation="B267" valign="top">单变量全导数法则</th><th align="center" data-translation="B268" valign="top">向量法则</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center" valign="top"><img src="./assets/94a122423ac5-eqn-32235B531450ABE9E39C9C91D083A8E2-depth004.58.svg" style="width:40.280pt;height:13.680pt;vertical-align:-3.655pt"/></td><td align="center" valign="top"><img src="./assets/0b2bc91074f0-eqn-ED4CD5FBA6B6EC8A51FA203E2AAFF531-depth004.67.svg" style="width:70.680pt;height:14.440pt;vertical-align:-3.727pt"/></td><td align="center" valign="top"><img src="./assets/deec03cc3369-eqn-6396586BD585A1CFB33959EB6FA8BFA0-depth006.23.svg" style="width:72.960pt;height:14.440pt;vertical-align:-4.972pt"/></td>
</tr>
</tbody>
</table>
</center>
<h2 data-translation="B269" id="notation">符号说明</h2>
<p data-translation="B270">像 <span class="eqnvec">x</span> 这样的粗体小写字母表示向量，像 <span class="eqn">x</span> 这样的斜体字母表示标量。<span class="eqn">x<sub>i</sub></span> 是向量 <span class="eqnvec">x</span> 的第 <img src="./assets/e820174d1d4c-eqn-97361F12A3555FC4FC4E2FFCE1799AC3-depth000.14.svg" style="width:8.360pt;height:9.120pt;vertical-align:-0.380pt"/> 个元素，使用斜体是因为单个向量元素是标量。<img src="./assets/2dc48c3966b4-eqn-DEA8E196A572D082201CD5ABF2FA82DE-depth003.25.svg" style="width:9.120pt;height:10.640pt;vertical-align:-2.594pt"/> 表示“向量 <span class="eqnvec">x</span> 的长度”。</p>
<p data-translation="B271"><img src="./assets/af1e941136b5-eqn-FAAEE783424BC0E27E9AA2F56A7B50B8-depth000.00.svg" style="width:9.880pt;height:9.120pt;vertical-align:-0.380pt"/> 中的上标 <span class="eqn">T</span> 表示该向量的转置。</p>
<p data-translation="B272"><img src="./assets/874e0b070fae-eqn-60D8CDDDBF54CF43BC22AF322D2BB8E3-depth003.31.svg" style="width:26.600pt;height:11.400pt;vertical-align:-2.641pt"/> 相当于一个 for 循环：让 <span class="eqn">i</span> 从 <span class="eqn">a</span> 遍历到 <span class="eqn">b</span>，将所有 <span class="eqn">x<sub>i</sub></span> 相加。</p>
<p data-translation="B273">记号 <img src="./assets/061cf3e586d3-eqn-50BBD36E1FD2333108437A2CA378BE62-depth003.25.svg" style="width:17.480pt;height:10.640pt;vertical-align:-2.594pt"/> 表示名为 <span class="eqn">f</span>、参数为 <span class="eqn">x</span> 的函数。</p>
<p data-translation="B274"><span class="eqn">I</span> 表示维度适当的方形“单位矩阵”：主对角线全为 1，其他位置全为零。</p>
<p data-translation="B275"><img src="./assets/ebc6b6ffde18-eqn-4935E4C6B875FD6C7C181871B566AB1A-depth003.25.svg" style="width:30.400pt;height:10.640pt;vertical-align:-2.594pt"/> 构造一个对角元素取自向量 <span class="eqnvec">x</span> 的矩阵。</p>
<p data-translation="B276">点积 <img src="./assets/af4178e05b16-eqn-9CA8C3CD16894AF7620468A20C53D6FA-depth000.00.svg" style="width:20.520pt;height:4.560pt;vertical-align:-0.380pt"/> 是逐元素乘积的和：<img src="./assets/7d44351bd9ce-eqn-4B722CF0EFB8F8ABCBB968086BB587E8-depth003.31.svg" style="width:95.000pt;height:10.640pt;vertical-align:-2.641pt"/>。也可以将其看作 <img src="./assets/6568ff2bd1b9-eqn-CF0A6D64FC3321DB0EC98B7683024367-depth000.22.svg" style="width:16.720pt;height:9.120pt;vertical-align:-0.380pt"/>。</p>
<p data-translation="B277">求导 <img src="./assets/b720e4688651-eqn-624FEBB9A49A3FC96353C861D175C806-depth004.58.svg" style="width:7.600pt;height:12.920pt;vertical-align:-3.655pt"/> 是将单参数函数映射到另一个函数的算子。也就是说，<img src="./assets/d3fd7d63d4aa-eqn-EC0CEC5F9488EC510F8D688E7003222D-depth004.58.svg" style="width:25.080pt;height:12.920pt;vertical-align:-3.655pt"/> 把 <img src="./assets/061cf3e586d3-eqn-50BBD36E1FD2333108437A2CA378BE62-depth003.25.svg" style="width:17.480pt;height:10.640pt;vertical-align:-2.594pt"/> 映射为它对 <span class="eqn">x</span> 的导数，即 <img src="./assets/40fb29d007d1-eqn-07A5EA519C4CEA1A3539E3A7FC289163-depth004.58.svg" style="width:16.720pt;height:14.440pt;vertical-align:-3.655pt"/>。另外，如果 <img src="./assets/9383ee0ebcb3-eqn-FD91C508F91C2C84498680BD337C1D7A-depth003.25.svg" style="width:35.720pt;height:10.640pt;vertical-align:-2.594pt"/>，那么 <img src="./assets/6b0c962e621c-eqn-B1ED3CF9BA4D6F25A5A4F481C45EC658-depth004.58.svg" style="width:78.280pt;height:14.440pt;vertical-align:-3.655pt"/>。</p>
<p data-translation="B278">函数对 <span class="eqn">x</span> 的偏导数 <img src="./assets/7b207c188964-eqn-2E335C72CE43928A54BED52C5A6FCC87-depth004.67.svg" style="width:25.840pt;height:13.680pt;vertical-align:-3.727pt"/>，就是将其他所有变量保持不变后，进行普通的标量求导。</p>
<p data-translation="B279"><span class="eqn">f</span> 对向量 <span class="eqnvec">x</span> 的梯度 <img src="./assets/f22d860aef89-eqn-69AA2CF3DFE9D41CB1DB567D1B0AD275-depth003.25.svg" style="width:25.080pt;height:10.640pt;vertical-align:-2.594pt"/>，将一个特定标量函数的全部偏导数组织起来。</p>
<p data-translation="B280">雅可比矩阵通过逐行堆叠，将多个函数的梯度组织成一个矩阵：</p>
<div><img alt="" class="blkeqn" src="./assets/3911d4c48e84-blkeqn-1D28D95963AACA877CF0CB69216D9849.svg" style="width:59.040pt;height:26.240pt;vertical-align:0.000pt"/></div>
<p data-translation="B281">下面的记号表示：当 <img src="./assets/b157161e2665-eqn-585B40029A25F6E19FF42DBC26AE5702-depth001.95.svg" style="width:41.040pt;height:9.120pt;vertical-align:-1.556pt"/> 时，<span class="eqn">y</span> 取值 <span class="eqn">a</span>；当 <img src="./assets/50f7fe270350-eqn-CBECF4275AFD44DAD4B312042088DA7E-depth001.95.svg" style="width:41.800pt;height:9.120pt;vertical-align:-1.556pt"/> 时，取值 <span class="eqn">b</span>。</p>
<div><img alt="" class="blkeqn" src="./assets/a3b2fd1d4845-blkeqn-13365350430405832B147455540E8596.svg" style="width:89.380pt;height:32.800pt;vertical-align:0.000pt"/></div>
<h2 data-translation="B282" id="sec:1.10">参考资源</h2>
<p data-translation="B283"><a href="http://www.wolframalpha.com/input/?i=D%5B%7Bx%5E2,+x%5E3%7D.%7B%7B1,2%7D,%7B3,4%7D%7D.%7Bx%5E2,+x%5E3%7D,+x%5D">Wolfram Alpha</a> 可以进行符号矩阵代数运算；另外，还有一个很不错的专用<a href="http://www.matrixcalculus.org/">矩阵微积分求导工具</a>。</p>
<p data-translation="B284">在网上查找资料时，请搜索“matrix calculus”，而不是“vector calculus”。下面是对 <a href="https://www.google.com/search?q=matrix+calculus&amp;oq=matrix+calculus">Google 搜索</a>中靠前结果的一些评述：</p>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Matrix_calculus">https://en.wikipedia.org/wiki/Matrix_calculus</a>
<p data-translation="B285">Wikipedia 的条目其实相当不错，对不同布局约定也有清楚的说明。回忆一下，我们采用分子布局：雅可比矩阵中的变量横向排列，函数纵向排列。Wikipedia 对<a href="https://en.wikipedia.org/wiki/Total_derivative">全导数</a>的解释也很好，但要注意，其记号与本文略有不同。我们始终使用 <img src="./assets/a74ca9c3ced0-eqn-28DDB3E82115D069796FAF6356E2DBF6-depth000.27.svg" style="width:10.640pt;height:8.360pt;vertical-align:-0.380pt"/>，而不是 <span class="eqn">dx</span>。</p>
</li>
<li><a href="http://www.ee.ic.ac.uk/hp/staff/dmb/matrix/calculus.html">http://www.ee.ic.ac.uk/hp/staff/dmb/matrix/calculus.html</a>
<p data-translation="B286">这个网页有一节讨论矩阵微分，给出了一些有用的恒等式，作者采用分子布局。读完本文后，如果想进一步了解矩阵求导与向量求导的区别，可以从这里开始。</p>
</li>
<li><a href="https://www.colorado.edu/engineering/CAS/courses.d/IFEM.d/IFEM.AppC.d/IFEM.AppC.pdf">https://www.colorado.edu/engineering/CAS/courses.d/IFEM.d/IFEM.AppC.d/IFEM.AppC.pdf</a>
<p data-translation="B287">这是《有限元方法导论》课程讲义的一部分，作者应该是 <a href="https://www.colorado.edu/engineering/CAS/courses.d/IFEM.d">Carlos A. Felippa</a>。他采用分母布局，因此其雅可比矩阵是本文记法的转置。</p>
</li>
<li><a href="http://www.ee.ic.ac.uk/hp/staff/dmb/matrix/calculus.html">http://www.ee.ic.ac.uk/hp/staff/dmb/matrix/calculus.html</a>
<p data-translation="B288">这个网页列出了大量不同向量和矩阵的实用导数，是一份很好的速查表。基本没有解释，只是一组法则。</p>
</li>
<li><a href="https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf">https://www.math.uwaterloo.ca/~hwolkowi/matrixcookbook.pdf</a>
<p data-translation="B289">另一份速查资料，主要讨论一般矩阵运算，比上一项有更多说明。</p>
</li>
<li><a href="https://www.comp.nus.edu.sg/~cs5240/lecture/matrix-differentiation.pdf">https://www.comp.nus.edu.sg/~cs5240/lecture/matrix-differentiation.pdf</a>
<p data-translation="B290">一组有用的幻灯片。</p>
</li>
</ul>
<p data-translation="B291">如果想进一步了解神经网络，以及优化和反向传播背后的数学，我们强烈推荐 <a href="http://neuralnetworksanddeeplearning.com/chap1.html">Michael Nielsen 的书</a>。</p>
<p data-translation="B292">如果你特别关注卷积神经网络，可以阅读 <a href="https://arxiv.org/pdf/1603.07285.pdf">《深度学习卷积运算指南》（A guide to convolution arithmetic for deep learning）</a>。</p>
<p data-translation="B293">本文引用了<a href="https://en.wikipedia.org/wiki/Total_derivative">全导数</a>法则。这是一个重要概念，其含义只是：对 <span class="eqn">x</span> 求导时，必须考虑所有依赖于 <span class="eqn">x</span> 的变量对 <span class="eqn">x</span> 的导数。</p>

</div>
<!-- imported-translation:end -->

