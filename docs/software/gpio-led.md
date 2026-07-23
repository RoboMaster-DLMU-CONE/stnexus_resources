# 01 GPIO LED

::: tip 例程状态
源资料 `1-GPIO-LED/GPIO-LED` 已提供完整工程：蓝、红、绿通道依次闪烁，最后三色同时闪烁。
:::

## 实验目标

- 配置 GPIO 推挽输出。
- 使用 HAL API 设置输出电平。
- 完成编译、下载、复位和断点调试闭环。

## 硬件连接

板载共阳极 RGB LED 使用红色 `PB0`、绿色 `PA7`、蓝色 `PA6`，无需外接器件。

## 核心代码

```c
HAL_GPIO_WritePin(LED_B_GPIO_Port, LED_B_Pin, GPIO_PIN_SET);
HAL_Delay(250);
HAL_GPIO_WritePin(LED_B_GPIO_Port, LED_B_Pin, GPIO_PIN_RESET);
HAL_Delay(250);
```

共阳极结构可能让“置位”和肉眼观察到的亮灭关系与直觉相反，以实物和原理图为准。

## 验收

- [ ] 三个颜色通道按固定顺序重复闪烁。
- [ ] 修改延时后，闪烁频率按预期改变。
- [ ] 能在断点处读取 GPIO 输出寄存器并解释当前电平。

## 进阶任务

把重复代码封装为 `LED_SetColor()` 与 `LED_Blink()`；再用状态机替代长串阻塞延时，为后续实时系统训练做准备。
