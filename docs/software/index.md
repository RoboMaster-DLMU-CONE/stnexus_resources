# 软件实验

实验按外设复杂度和工程能力逐步推进。每一节都说明目标、配置要点、实现路径和验收方法；标记为“现有例程”的内容可直接与源资料工程对照，其余页面是为后续代码补充准备的训练规范。

## 基础外设

::: navCard
```yaml
- name: 01 GPIO LED
  desc: 输出、电平与最小下载闭环
  link: /software/gpio-led
  badge: 现有例程
  badgeType: tip
- name: 02 GPIO 按键
  desc: 输入、消抖与边沿事件
  link: /software/gpio-key
  badge: 基础
  badgeType: info
- name: 03 ADC 电压采样
  desc: 模拟量、标定与滤波
  link: /software/adc-voltage
  badge: 基础
  badgeType: info
- name: 04 PWM LED
  desc: 定时器、占空比与呼吸效果
  link: /software/pwm-led
  badge: 定时器
  badgeType: warning
- name: 05 PWM 蜂鸣器
  desc: 频率、音调与非阻塞播放
  link: /software/pwm-buzzer
  badge: 定时器
  badgeType: warning
```
:::

## 传感器与显示

::: navCard
```yaml
- name: 06 I²C AHT20
  desc: 总线事务、状态检查和数据换算
  link: /software/i2c-aht20
  badge: I²C
  badgeType: tip
- name: 07 I²C OLED
  desc: 帧缓冲、图形绘制与菜单 UI
  link: /software/i2c-oled
  badge: 现有例程
  badgeType: tip
- name: 08 SPI BMI270
  desc: 设备初始化、六轴数据与零偏
  link: /software/spi-bmi270
  badge: SPI
  badgeType: danger
```
:::

## 实时系统与控制

::: navCard
```yaml
- name: 09 FreeRTOS LED
  desc: 任务创建、延时与调度
  link: /software/freertos-led
  badge: RTOS
  badgeType: info
- name: 10 FreeRTOS 工程框架
  desc: BSP、模块、任务与共享资源
  link: /software/freertos-framework
  badge: 现有工程
  badgeType: tip
- name: 11 CAN M3508
  desc: CAN 帧、反馈解析与电机安全
  link: /software/can-m3508
  badge: 控制
  badgeType: danger
- name: 12 WS2812
  desc: 严格时序、DMA 与状态灯效
  link: /software/ws2812
  badge: 扩展
  badgeType: warning
```
:::

## 通用验收标准

- 工程能够从干净状态完成构建和下载。
- 文档写明引脚、外设实例、时钟和关键参数。
- 正常现象可重复，异常输入有明确处理。
- 不在中断中执行长延时、阻塞通信或复杂计算。
- 提交中保留 CubeMX 用户代码区，避免重新生成后丢失逻辑。
