# 09 FreeRTOS LED

## 实验目标

把裸机 LED 闪烁改写为 FreeRTOS 任务，理解任务创建、优先级、阻塞延时和调度，并验证一个任务等待时其他任务仍可运行。

## 最小任务

```c
void LedTask(void *argument) {
  for (;;) {
    HAL_GPIO_TogglePin(LED_B_GPIO_Port, LED_B_Pin);
    osDelay(250);
  }
}
```

`osDelay()` 会让当前任务进入阻塞态，调度器可以运行其他就绪任务；`HAL_Delay()` 在 RTOS 工程中的行为依赖时基配置，不应作为任务周期控制的默认方案。

## 练习

- 创建两个不同周期的 LED 任务，观察并发闪烁。
- 改用一个任务维护三色 LED 状态机，比较资源占用。
- 使用 `osDelayUntil` 或等价 API 减少周期漂移。

## 验收

- [ ] 空闲任务能够运行，系统没有忙等。
- [ ] 两个不同周期任务互不阻塞。
- [ ] 记录任务栈余量，解释栈过小和过大的影响。
