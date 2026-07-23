# 首次下载程序

第一个实验使用板载三色 LED 建立“打开工程 → 构建 → 下载 → 观察 → 调试”的完整闭环。现有 `1-GPIO-LED/GPIO-LED` 例程会依次闪烁蓝、红、绿三个通道，最后同时闪烁。

## 操作步骤

1. 获取仓库并打开 GPIO LED 示例工程。
2. 检查 LED 引脚：红色 `PB0`、绿色 `PA7`、蓝色 `PA6`。
3. 编译工程，确保没有错误。
4. 通过板载 Link 下载到 STM32F103C8T6。
5. 复位后观察三个颜色通道是否按顺序闪烁。

```c
HAL_GPIO_WritePin(LED_B_GPIO_Port, LED_B_Pin, GPIO_PIN_SET);
HAL_Delay(250);
HAL_GPIO_WritePin(LED_B_GPIO_Port, LED_B_Pin, GPIO_PIN_RESET);
HAL_Delay(250);
```

## 用调试器验证

在 `HAL_GPIO_WritePin` 所在行设置断点，单步执行并观察 GPIO 输出寄存器。这样能区分“程序未执行”“引脚配置错误”和“LED 电平逻辑理解错误”三类问题。

::: note 共阳极 LED
板载 LED 为共阳极结构，实际亮灭逻辑应以原理图和例程现象为准。不要仅凭函数参数名猜测亮灭状态。
:::
