# iFlow CLI 上下文：GlobalScript 项目

## 项目概述

GlobalScript 是一个专为 [Clash Verge](https://github.com/clash-verge-rev/clash-verge-rev) 设计的网络代理解决方案。它提供了一套完整的 JavaScript 扩展脚本和 OpenClash 配置模板，旨在简化代理规则配置、优化 DNS 解析、实现智能节点分组和过滤，从而提升用户的网络代理体验。

该项目的主要目标是为用户提供一个开箱即用、功能丰富且易于管理的代理配置环境。

## 核心组件

1.  **Clash 扩展脚本 (`GlobalScript.js`, `GlobalScript-Minimal.js`)**:
    *   `GlobalScript.js`: 功能完整的脚本，包含智能路由、DNS 优化、地区节点分组、节点过滤等所有高级功能。
    *   `GlobalScript-Minimal.js`: 精简版脚本，仅包含基础代理功能，适用于性能敏感或简单需求的场景。

2.  **OpenClash 配置模板 (`Custom_Clash.ini`, `Custom_Clash_Simple.ini`, `demo/Custom_Clash_Demo.ini`)**:
    *   这些 `.ini` 文件是用于 OpenClash 订阅转换的模板。它们定义了详细的规则集（`ruleset`）和代理组（`custom_proxy_group`），用于将上游订阅链接转换为结构化的 Clash 配置文件。
    *   `Custom_Clash.ini`: 功能最全面的模板。
    *   `Custom_Clash_Simple.ini`: 可能是功能简化版的模板。
    *   `demo/Custom_Clash_Demo.ini`: 一个演示模板，展示了配置的基本结构和用法。

3.  **规则文件 (`clash_direct.yaml`)**:
    *   一个自定义的 Clash YAML 规则文件，通常用于定义直连规则。

## 主要功能与特性

*   **智能节点分组**: 根据地区（美国、日本、新加坡、香港、台湾）自动创建 `url-test` 类型的代理组。
*   **节点过滤**: 自动过滤包含“流量”、“到期”、“剩余”等关键词的无效节点，并可限制只保留指定地区的节点。
*   **预设规则集**: 集成了大量针对主流服务（如 Google, Microsoft, Apple, GitHub, ChatGPT, YouTube, Netflix, TikTok, Spotify, 游戏等）的规则集 (`rule-providers`) 和对应的代理组。
*   **优化的 DNS 配置**: 区分国内外 DNS 服务器，支持 DoT (DNS over TLS)。
*   **域名嗅探 (Sniffer)**: 启用域名嗅探以正确处理 HTTPS 流量。
*   **多种负载均衡策略**: 提供 `select` (手动选择), `url-test` (延迟选优), `fallback` (故障转移) 等代理组类型。
*   **丰富的 OpenClash 模板**: 提供了详细的规则和代理组配置，方便用户进行订阅转换。

## 技术栈

*   **核心语言**: JavaScript (用于 Clash Verge 扩展脚本)
*   **配置格式**: INI (OpenClash 模板), YAML (Clash 规则文件)
*   **依赖服务**: Clash Verge 或兼容的 Clash 内核

## 使用流程

1.  **获取脚本**: 下载 `GlobalScript.js` 或 `GlobalScript-Minimal.js`。
2.  **放置脚本**: 将脚本文件放入 Clash Verge 的脚本目录。
3.  **配置 Clash Verge**: 在 Clash Verge 设置中添加并启用该脚本。
4.  **(可选) 使用 OpenClash 模板**: 如果使用 OpenClash 进行订阅转换，可以使用 `Custom_Clash.ini` 等模板文件作为转换后端配置。
5.  **重启服务**: 重启 Clash Verge 以应用配置。

## 开发与贡献

*   项目鼓励社区贡献，包括 Bug 修复、新功能开发、文档改进和代码优化。
*   贡献流程遵循标准的 Fork -> Branch -> Commit -> Pull Request 模式。