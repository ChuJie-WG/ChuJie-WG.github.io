---
title: DDR 学习路线：从 DDR 到 LPDDR
date: 2026-08-18 22:00:00
categories:
  - 硬件设计
tags:
  - DDR
  - LPDDR
  - Hardware
---

对于硬件工程师来说，学习 DDR 不应只停留在“知道数据线和时钟线怎么连”，而要建立从控制器到颗粒、从协议到 PCB 的完整链路。

<!-- more -->

## 1. 先建立系统框架

一条典型 DDR 链路可以拆成：

`SoC DDR Controller → DDR PHY → Package/PCB → DRAM`

需要先知道每一层负责什么，再深入信号与时序。

## 2. 信号分组

### 2.1 Clock

CK/CK# 是差分时钟，用来建立 DRAM 命令与地址采样的时序基准。

### 2.2 Command / Address

用于传输命令、Bank、Row、Column 等信息。

### 2.3 Data

DQ、DQS/DQS# 与 DM/DBI 构成数据传输相关信号组。

## 3. 原理图阶段重点

- 电源轨与上电时序
- 颗粒拓扑与位宽
- ODT / ZQ 等端接相关设计
- DQ/DQS byte lane 对应关系
- 控制器与 DRAM 引脚映射

## 4. PCB 阶段重点

- 阻抗控制
- 差分对约束
- Byte lane 内时延匹配
- 地址/命令组拓扑
- 参考平面连续性

## 5. 从 DDR 到 LPDDR

LPDDR 面向低功耗移动与嵌入式场景，在电源、封装、训练机制以及信号组织上与桌面 DDR 存在明显差异。学习时建议先掌握 DDR 的共性，再逐代阅读 JEDEC 与 SoC Hardware Design Guide。

## 6. 建议的笔记模板

每学一个接口，都固定回答：

1. SoC 内部是什么控制器？
2. 外部连接什么器件？
3. 接口有哪些信号组？
4. 原理图有哪些关键约束？
5. PCB 有哪些 SI/PI 约束？
6. 上电后软件如何初始化与调试？
