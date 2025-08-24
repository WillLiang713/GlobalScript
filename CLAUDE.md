# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个为 Clash Verge 提供的网络代理解决方案，包含智能路由、DNS 优化和网络配置管理功能。代码库由 JavaScript 脚本和配置模板组成，用于网络代理管理。

## 核心文件

### JavaScript 脚本
- `GlobalScript.js` - 完整版 Clash 扩展脚本，包含智能路由、DNS 优化、地区分组、节点过滤和全面的代理管理功能
- `GlobalScript-Minimal.js` - 精简版脚本，仅包含基础代理功能，适用于简单场景

### 配置模板
- `Custom_Clash.ini` - OpenClash 订阅转换模板，包含完整的规则集和代理组配置
- `clash_direct.yaml` - 特定域名的直连规则
- `Custom_Clash_Simple.ini` - 简化版配置模板

### 演示文件 (demo/)
- `Custom_Clash_Demo.ini` - 演示配置模板，展示基本结构
- `ACL4SSR_Online_Full_AdblockPlus.ini` - 广告拦截规则集
- `AWAvenue-Ads-Rule-Clash.yaml` - Clash 广告拦截规则
- `subconverter-cn.md` - 订阅转换器文档

## 架构设计

### 脚本结构
JavaScript 脚本遵循模块化模式：
- **配置常量** - 测试 URL、间隔时间、DNS 服务器和规则提供者设置
- **规则提供者** - 来自 MetaCubeX 和 DustinWin 仓库的外部规则集
- **代理组** - 服务特定的代理组，支持故障转移和负载均衡
- **地区逻辑** - 按地理区域（美国、日本、新加坡、香港、台湾）自动节点分组
- **主函数** - 将所有配置应用到 Clash 配置的入口点

### 核心组件

#### DNS 配置
- 国内 DNS：`tls://223.5.5.5`（阿里云）
- 国外 DNS：`tls://4.2.2.1`、`tls://8.8.8.8`、`tls://9.9.9.9`（Microsoft、Google、Quad9）
- Fake-IP 模式，带缓存优化

#### 节点过滤
- **地区过滤**：仅允许美国、日本、新加坡、香港、台湾节点
- **无效节点过滤**：排除包含"流量"、"到期"、"剩余"、"套餐"、"expire"、"traffic"、"quota"等关键词的节点

#### 规则优先级
1. 本地/私有网络（直连）
2. 国内服务（直连）
3. CDN 服务
4. 开发服务（GitHub、Zoom）
5. AI 服务（OpenAI、Cursor 等）
6. 游戏和媒体服务
7. 社交媒体
8. 电商和成人内容
9. 科技巨头（Apple、Microsoft、Google）
10. 兜底规则

## 开发指南

### 脚本修改
- 添加新规则时，保持 `rules` 数组中的优先级顺序
- 新增服务类别时，添加相应的代理组并配置适当的图标 URL
- 地区匹配器使用正则表达式模式，部署前需仔细测试
- 需要时在常量部分更新测试 URL 和间隔时间

### 配置模板修改
- INI 文件遵循 OpenClash 订阅转换器格式
- 规则顺序很重要，保持优先级结构
- 自定义代理组应包含所有地区选项以保持一致性
- 使用来自指定 CDN 源的标准化图标 URL

### 测试
- 提交更改前在 Clash Verge 中测试脚本
- 验证 DNS 解析在国内外域名上都能正常工作
- 检查地区分组是否正确识别和分类节点
- 确保所有代理组都有有效的故障转移选项

## 文件规范

- 代理组名称使用中文（如"节点选择"、"全局直连"、"漏网之鱼"）
- 图标 URL 使用 jsdelivr.net 或官方服务域名的 CDN 源
- 规则提供者 URL 指向可靠的仓库（MetaCubeX、DustinWin）
- 测试 URL 使用 Google 的 generate_204 端点以确保可靠性