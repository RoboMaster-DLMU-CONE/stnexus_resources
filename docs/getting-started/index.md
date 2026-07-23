# 认识星创矩阵

Stellaris-Nexus 星创矩阵是一块面向嵌入式学习、机器人控制和新生培训的 STM32 开发板。它以 STM32F103C8T6 为主控，在 10 × 7 cm 的板卡上集成了下载调试器、交互器件、传感器、显示与机器人常用接口。

![Stellaris-Nexus 开发板正面线稿](/images/board/stellaris-nexus-front.png){.board-figure}

<p class="figure-caption">Stellaris-Nexus 板载资源分布</p>

## 你会学到什么

- 使用 CubeMX/CubeIDE 或 CMake 工程配置 STM32F103 外设。
- 理解 GPIO、ADC、PWM、I²C、SPI、USART 与 CAN 的工作方式。
- 用板载 Link 完成下载、断点、变量观察和故障定位。
- 从裸机程序过渡到 FreeRTOS 任务和分层工程。
- 驱动机器人常见传感器、显示器与执行机构。

## 板载资源

| 类别 | 资源 |
| --- | --- |
| 主控 | STM32F103C8T6，Cortex-M3，72 MHz，64 KB Flash，20 KB SRAM |
| 人机交互 | 三色 LED、2 个按键、无源蜂鸣器、0.96 英寸 OLED |
| 传感器 | AHT20 温湿度、BMI270 六轴 IMU、10 kΩ ADC 电位器 |
| 控制输出 | 继电器、PWM 舵机接口、WS2812 扩展 |
| 通信 | USART、CAN、SBUS、I²C、SPI |
| 调试 | USB Type-C 板载 Link、备用 SWD、BOOT 选择与复位 |

::: warning 上电前
先阅读[供电与安全](/hardware/safety)。尤其是舵机、CAN 与继电器等外部负载，接线错误可能损坏设备。
:::

## 下一步

准备好一根支持数据传输的 USB Type-C 线，继续完成[开发环境](/getting-started/environment)配置。
