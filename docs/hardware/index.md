# 硬件手册

本章整理 Stellaris-Nexus V1.2 说明书中的核心硬件信息，用于接线前确认接口、编写驱动前查询引脚，以及排查供电和总线问题。

![Stellaris-Nexus 引脚说明](/images/board/stellaris-nexus-pinout.png){.board-figure}

<p class="figure-caption">开发板功能与引脚分布总览</p>

## 核心规格

| 项目 | 规格 |
| --- | --- |
| 主控 | STM32F103C8T6，Arm Cortex-M3 |
| 主频 | 最高 72 MHz |
| 存储 | 64 KB Flash，20 KB SRAM |
| 尺寸 | 10 × 7 cm |
| 整板供电 | USB Type-C 5 V |
| 板载调试 | Link 调试/烧录，备用 SWD |
| 传感器 | BMI270、AHT20、ADC 电位器 |
| 显示与交互 | OLED、RGB LED、按键、蜂鸣器 |
| 机器人接口 | CAN、SBUS、舵机 PWM、USART、继电器 |

## 按任务查文档

::: navCard
```yaml
- name: 我要找引脚
  desc: 一张表查询 GPIO、定时器和通信复用关系
  link: /hardware/pinout
  badge: 速查
  badgeType: info
- name: 我要连接外设
  desc: 先确认电压、线序、共地和总线终端
  link: /hardware/safety
  badge: 必读
  badgeType: danger
- name: 我要配置通信
  desc: CAN、SBUS 与 USART 的接口和参数
  link: /hardware/communication
  badge: 总线
  badgeType: tip
- name: 我要读取传感器
  desc: AHT20、OLED 与 BMI270 的总线定义
  link: /hardware/sensors-display
  badge: 传感器
  badgeType: warning
```
:::

::: info 版本说明
本文档依据《Stellaris-Nexus 星创矩阵开发板使用说明书 V1.2》编排。扩展板接口与 WS2812 章节在原说明书中仍标记为待更新，使用前应再核对实物版本和最新原理图。
:::
