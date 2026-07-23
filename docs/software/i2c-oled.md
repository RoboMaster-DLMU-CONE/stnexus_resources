# 07 I²C OLED

::: tip 例程状态
源资料 `7-IIC-OLED/IIC-OLED-UI` 已提供完整工程，包含 SSD1306 底层、1024 字节显示缓冲、图形绘制、菜单数据与 UI 状态机。
:::

## 实验目标

初始化 SSD1306 OLED，在 128×64 屏幕上绘制文字和图形，再理解现有菜单 UI 如何把输入、动画与页面切换组织起来。

## 总线与地址

OLED 与 AHT20 共用 I²C1 的 `PB6/PB7`。说明书中的 `0x78` 是常见 8 位写地址；若驱动使用 7 位地址，应核对是否应传 `0x3C`。

## 现有工程流程

```c
OLED_Init();
OLED_Clear();
memcpy(OLED_DisplayBuf, OLED_BootLogo, 1024);
OLED_Update();
HAL_Delay(1000);
OLED_UI_Init(&MainMenuPage);
```

主循环调用 `OLED_UI_MainLoop()`，定时器中断周期执行按键扫描和 UI 时基处理。绘图先修改内存帧缓冲，再通过 `OLED_Update()` 刷新屏幕。

## 验收

- [ ] 上电显示启动图，随后进入主菜单。
- [ ] 按键操作不会造成页面撕裂或卡死。
- [ ] 能新增一个菜单项并显示 ADC 或 AHT20 数据。
