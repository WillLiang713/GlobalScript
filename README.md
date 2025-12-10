# GlobalScript

Clash 配置模板和预处理脚本，提供智能节点分组、规则优化和 DNS 配置。

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 项目说明

专为 Clash 内核设计的配置方案：

- 配置模板 - 完整版和精简版订阅转换模板
- 预处理脚本 - 自动节点分组和过滤
- 规则集 - 直连域名规则

## 核心功能

- 自动地区节点分组（美国、日本、新加坡、香港）
- 智能过滤无效节点（流量到期、套餐提示等）
- 国内外 DNS 分流（阿里云 DoT / Google DoT）
- 集成主流服务规则集

## 快速开始

### 订阅转换

将 `Custom_Clash_Simple.ini` 上传到订阅转换后端 `profiles` 目录，转换时指定配置名称。

### Clash Verge / Mihomo Party

1. 下载 `GlobalScript.js` 添加为预处理脚本
2. 导入订阅链接，脚本自动处理节点分组

### OpenClash

在配置订阅中上传 `Custom_Clash_Simple.ini` 作为转换模板。

## 文件说明

| 文件 | 说明 |
|------|------|
| [Custom_Clash_Simple.ini](Custom_Clash_Simple.ini) | 完整版配置模板 |
| [Custom_Clash_Minimal.ini](Custom_Clash_Minimal.ini) | 精简版配置模板 |
| [GlobalScript.js](GlobalScript.js) | 预处理脚本 |
| [Clash_Direct.list](Clash_Direct.list) | 直连域名规则集 |

### 订阅 Raw 地址

- 完整版 `Custom_Clash_Simple.ini`：`https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Custom_Clash_Simple.ini`
- 精简版 `Custom_Clash_Minimal.ini`：`https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Custom_Clash_Minimal.ini`

## 配置说明

### 节点过滤

保留地区：美国、日本、新加坡、香港

过滤关键词：流量、到期、剩余、套餐、有效期、expire、traffic、quota

### DNS 配置

- 国内：`tls://223.5.5.5`
- 国外：`tls://8.8.8.8`

## 许可证

[MIT License](LICENSE)

## 致谢

- [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo)
- [MetaCubeX/meta-rules-dat](https://github.com/MetaCubeX/meta-rules-dat)
- [DustinWin/ruleset_geodata](https://github.com/DustinWin/ruleset_geodata)
