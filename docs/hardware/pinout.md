# 引脚速查

## 板载功能

| 功能 | MCU 引脚 / 外设 | 备注 |
| --- | --- | --- |
| RGB LED 红 | `PB0` | 共阳极三色 LED |
| RGB LED 绿 | `PA7` | 支持 PWM 调光 |
| RGB LED 蓝 | `PA6` | 支持 PWM 调光 |
| 按键 SW2 | `PA8` | 输入电平以实物与原理图为准 |
| 按键 SW3 | `PA4` | V1.2 说明书标注带上拉电阻 |
| ADC 电位器 | `PA5 / ADC_IN5` | 0～3.3 V 对应 0～4095 |
| 继电器 | `PB5` | 高电平吸合 |
| 舵机 PWM | `PB8 / TIM4_CH3` | 常用 50 Hz |
| 蜂鸣器 PWM | `PB9 / TIM4_CH4` | 无源蜂鸣器，建议 20% 占空比 |
| IMU 加热 | `PA1 / TIM2_CH2` | PWM 控制，禁止持续 100% |

## 通信与传感器

| 功能 | 引脚 | 关键参数 |
| --- | --- | --- |
| CAN RX / TX | `PA11 / PA12` | TJA1051，板上无终端电阻 |
| SBUS RX | `PA3 / USART2_RX` | 100000，8E2，反相 TTL |
| USART1 | `PA9 TX / PA10 RX` | GH1.25-4P 接口 |
| I²C1 | `PB6 SCL / PB7 SDA` | AHT20 与 OLED 共用 |
| BMI270 SPI2 | `PB12 CS / PB13 SCK / PB14 MISO / PB15 MOSI` | 4 线 SPI |
| SWD | `PA13 SWDIO / PA14 SWCLK` | 备用下载与调试 |

::: warning 复用冲突
同一引脚可能同时具备 GPIO、定时器或通信复用功能。修改 CubeMX 配置时注意冲突提示，不要在多个初始化函数中重复配置同一引脚。
:::
