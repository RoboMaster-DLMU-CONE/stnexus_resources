# 10 FreeRTOS 工程框架

::: tip 工程状态
源资料 `10-FreeRTOS-Example/FreeRTOS-Example` 已包含 CMSIS-RTOS2/FreeRTOS 工程，以及 GPIO、ADC、PWM、I²C、SPI、USART、DWT 等 BSP 目录和电机、遥控等模块骨架。
:::

## 分层思路

```text
Task       业务周期、状态机、调度与故障处理
Module     电机、遥控、LED 等可复用设备逻辑
BSP        GPIO、ADC、PWM、I²C、SPI、USART、DWT 适配
HAL/Core   CubeMX 生成的芯片初始化与中断入口
```

上层不直接散落 HAL 调用，而是通过明确接口访问 BSP/Module。这样更换外设实例、增加互斥或迁移到另一块板时，修改范围更可控。

## 当前工程现状

工程已创建 `defaultTask`，部分 BSP 有初始实现，其余任务和模块目录仍以骨架为主。训练时应逐层补齐，不要一次把所有外设逻辑塞进 `freertos.c`。

## 共享资源规则

- I²C、SPI、USART 等总线由互斥锁保护或由单一设备任务拥有。
- 中断只采集必要数据并通知任务，不执行长事务。
- 任务间用队列/事件传递状态，避免无保护的全局变量。
- 每个控制输出设置超时、限幅和安全默认值。

## 验收

- [ ] `Core`、`Bsp`、`Module`、`Task` 依赖方向清晰。
- [ ] 重新生成 CubeMX 代码不会覆盖用户模块。
- [ ] 调试器可观察任务状态、栈余量和运行周期。
