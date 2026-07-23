# STM32F103 最小系统

Stellaris-Nexus 使用 STM32F103C8T6 作为用户主控。芯片采用 Cortex-M3 内核，具有 64 KB Flash、20 KB SRAM，最高运行频率 72 MHz，适合完成外设入门、实时控制和中小型机器人节点开发。

![STM32F103 最小系统](/images/board/minimum-system.png){.board-figure}

<p class="figure-caption">主控、时钟、复位、启动与调试组成的最小系统</p>

## 时钟

板载 8 MHz 外部晶振作为 HSE，通过 PLL 9 倍频得到 72 MHz 系统时钟。常用总线配置为 AHB 72 MHz、APB1 36 MHz、APB2 72 MHz。

::: note 定时器时钟
当 APB 分频不为 1 时，对应总线上的定时器时钟通常会自动乘 2。计算 PWM 和定时中断参数时不要只看 APB 总线频率。
:::

## 启动与复位

BOOT 跳线用于选择从用户 Flash 或系统存储区启动。正常运行例程时应使用用户 Flash 启动；下载异常时可结合 BOOT 和复位排查。硬件复位键连接 `NRST`，可让系统回到确定初始状态。

## 调试接口

备用 SWD 使用 `PA13/SWDIO` 和 `PA14/SWCLK`。工程中不要随意关闭 SWD 或把这两个引脚改作普通 GPIO，否则可能导致调试器无法再次连接。
