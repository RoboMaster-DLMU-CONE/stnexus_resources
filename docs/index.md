---
layout: home
titleTemplate: false

hero:
  name: "星创矩阵 Wiki"
  text: 'Stellaris-Nexus<br><span class="hero-text-underline">开发板文档<svg aria-hidden="true" width="240" height="11" viewBox="0 0 240 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 7C18 4 34 9 51 6C70 3 87 9 104 6C126 3 144 9 163 6C184 3 211 8 238 5L238 9C210 11 184 7 163 10C143 12 125 7 104 10C86 12 68 7 51 10C34 12 17 7 2 10Z" /></svg></span>'
  tagline: "面向嵌入式入门、新生培训与机器人控制实践"
  image:
    src: /images/board/stellaris-nexus-assembly.png
    alt: Stellaris-Nexus 星创矩阵开发板装配图
  actions:
    - theme: brand
      text: 开始学习
      link: /getting-started/
    - theme: alt
      text: 查看硬件手册
      link: /hardware/

features:
  - title: 硬件手册
    icon: "🔌"
    details: 从最小系统、板载 Link 到传感器与通信接口，快速定位引脚、供电要求和接线注意事项。
  - title: 实验教程
    icon: "🔧"
    details: 按 GPIO、ADC、PWM、I²C、SPI、FreeRTOS 与 CAN 的顺序推进，建立完整的嵌入式知识链。
  - title: 工程实践
    icon: "⚙"
    details: 基于真实例程学习 CubeMX 配置、HAL 驱动、分层代码组织和机器人执行机构控制。
---

## 从这里开始

这不是一份只用于查参数的说明书。站点按照新生培训节奏，把 Stellaris-Nexus 的板载资源组织成一条可以动手验证的学习路线。

::: navCard
```yaml
config:
  target: _self
data:
  - name: 认识开发板
    desc: 先了解主控、板载资源和训练目标
    link: /getting-started/
    badge: 第 0 站
    badgeType: info
  - name: 点亮第一个 LED
    desc: 完成环境检查、构建、下载和运行闭环
    link: /software/gpio-led.html
    badge: 入门
    badgeType: tip
  - name: 查询硬件接口
    desc: 查找引脚、总线、供电与接线限制
    link: /hardware/pinout.html
    badge: 手册
    badgeType: warning
  - name: 进入 FreeRTOS
    desc: 从裸机循环过渡到任务、调度与模块化工程
    link: /software/freertos-framework.html
    badge: 进阶
    badgeType: danger
```
:::

## 建议训练路线

1. **基础输入输出**：GPIO LED → GPIO 按键 → ADC 电压采样。
2. **定时器与波形**：PWM LED → PWM 蜂鸣器。
3. **板载传感器**：AHT20 → OLED → BMI270。
4. **实时系统与机器人控制**：FreeRTOS LED → 工程框架 → CAN M3508 → WS2812。

::: tip 学习方法
每个实验先确认引脚和供电，再配置外设、写最小验证程序，最后才扩展功能。遇到异常时，优先用调试器观察寄存器、变量和返回值，不要只靠反复烧录猜测。
:::

## 两类文档，各司其职

::: navCard
```yaml
config:
  target: _self
data:
  - name: 硬件手册
    desc: 说明板载电路、接口定义、器件参数与安全边界，是接线和配置外设前的查询入口。
    link: /hardware/
    badge: Hardware
    badgeType: info
  - name: 软件实验
    desc: 说明实验目标、CubeMX 配置、核心 API、验证方法和常见问题，是循序训练的操作入口。
    link: /software/
    badge: Software
    badgeType: tip
```
:::
