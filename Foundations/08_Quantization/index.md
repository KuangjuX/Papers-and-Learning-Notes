# 量化

[基础总览](../index.md) · [量化论文](../../Papers/08_Quantization/index.md)

## 数值格式与缩放

- [FP32、FP16、BF16 与混合精度](floating-point.md)：表示范围、精度、loss scaling，以及存储、乘法和累加精度的区别。
- [FP8 Current Scaling：量化、缩放与精度边界](fp8-current-scaling.md)：E4M3 / E5M2、当前张量的 amax 与缩放因子、舍入误差，以及量化和通信成本。

## 与推理成本的关系

[推理的计算、访存与复用成本](../02_Inference_and_KV_Cache/inference-costs.md)区分权重、激活和 KV Cache 的搬运成本；压缩元素大小不等于端到端延迟按相同比例下降。
