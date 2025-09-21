# GlobalScript

🚀 **专业的网络代理解决方案** - 为 Clash Verge 提供全面的扩展脚本，集成智能路由、DNS 优化和网络配置管理功能。

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-v2.0-green.svg)](#更新日志)
[![Platform](https://img.shields.io/badge/Platform-Clash%20Verge-orange.svg)](https://github.com/clash-verge-rev/clash-verge-rev)

## 🎯 项目概述

GlobalScript 是一个专为网络代理和优化设计的综合性解决方案，包含：

- **🔧 Clash 扩展脚本** - 智能代理规则和节点管理
- **⚙️ 配置模板** - OpenClash 订阅转换模板
- **📚 优化指南** - 家用网络优化最佳实践

## ✨ 主要功能

- 🔧 **自定义代理规则配置** - 支持丰富的规则集和自定义规则
- 🌐 **智能 DNS 解析** - 区分国内外 DNS，支持多种 DNS 协议
- 🎯 **自动化地区节点分组** - 自动识别和分组不同地区节点
- 📦 **丰富的规则集支持** - Google、Microsoft、Netflix 等主流服务
- 🔍 **域名嗅探功能** - 自动识别和分流 HTTPS 流量
- ⚖️ **多种负载均衡策略** - 轮询、散列、延迟选优等
- 🚫 **智能节点过滤** - 自动过滤流量到期、剩余套餐等无效节点
- 🌍 **地区节点限制** - 仅保留指定地区节点（美国、日本、新加坡、香港、台湾）

## 🚀 快速开始

### 安装步骤

1. **下载脚本文件**

   ```bash
   # 下载完整版脚本
   wget https://raw.githubusercontent.com/your-repo/GlobalScript/main/GlobalScript.js

   # 或下载精简版脚本
   wget https://raw.githubusercontent.com/your-repo/GlobalScript/main/GlobalScript-Minimal.js
   ```

2. **放置脚本文件**

   - 将 `GlobalScript.js` 放入 Clash Verge 的脚本目录
   - 通常路径：`~/.config/clash-verge/scripts/` (Linux/macOS) 或 `%APPDATA%\clash-verge\scripts\` (Windows)

3. **配置 Clash Verge**

   - 打开 Clash Verge
   - 进入设置 → 脚本
   - 添加脚本并选择 `GlobalScript.js`

4. **重启服务**
   - 重启 Clash Verge 使配置生效
   - 检查节点分组和规则是否正常加载

## 📁 文件说明

### 核心脚本文件

| 文件名 | 类型 | 功能描述 | 适用场景 |
|--------|------|----------|----------|
| [`GlobalScript.js`](GlobalScript.js) | JavaScript | 完整版 Clash 扩展脚本，包含智能路由、DNS 优化、地区分组、节点过滤等全部功能 | 需要完整代理功能的用户 |
| [`GlobalScript-Minimal.js`](GlobalScript-Minimal.js) | JavaScript | 精简版脚本，仅包含基础代理功能，体积小、加载快 | 简单代理需求或性能敏感场景 |

### 配置模板文件

| 文件名 | 类型 | 功能描述 | 用途 |
|--------|------|----------|------|
| [`Custom_Clash.ini`](Custom_Clash.ini) | INI配置 | OpenClash 订阅转换模板，包含完整的规则集和代理组配置 | 用于 OpenClash 的订阅转换 |
| [`Custom_Clash_Simple.ini`](Custom_Clash_Simple.ini) | INI配置 | 精简版 OpenClash 订阅转换模板，规则集和代理组配置相对简洁 | 适用于日常使用，规则相对简洁但覆盖常用场景 |

### 版本选择建议

| 用户类型 | 推荐文件 | 理由 |
|----------|----------|------|
| **新手用户** | `GlobalScript-Minimal.js` + `Custom_Clash_Simple.ini` | 配置简单，容易上手 |
| **进阶用户** | `GlobalScript.js` + `Custom_Clash.ini` | 功能完整，满足复杂需求 |
| **开发者** | 全部文件 | 可以学习和自定义配置 |

## ⚙️ 核心配置

### 基本配置

```javascript
// 默认测试网址（已优化为 Cloudflare）
const test_url = "http://cp.cloudflare.com/generate_204";
// 测试间隔(秒)
const test_interval = 240;
// 容忍延迟差(ms)
const test_tolerance = 80;
```

### 节点过滤配置

脚本会自动过滤以下类型的节点：

#### 1. 地区限制

**当前仅保留以下地区节点：**

- 🇺🇸 **美国** (US, United States, America)
- 🇯🇵 **日本** (JP, Japan)
- 🇸🇬 **新加坡** (SG, Singapore, 狮城)
- 🇭🇰 **香港** (HK, Hong Kong, HongKong)
- 🇹🇼 **台湾** (TW, Taiwan, tai wan)

#### 2. 无效节点过滤

**自动排除包含以下关键词的节点：**

- 流量、到期、剩余、套餐
- expire、traffic、quota
- 剩余流量、有效期

### DNS 配置

#### 国内 DNS

- `tls://223.5.5.5` (阿里云公共 DNS)

#### 国外 DNS

- `tls://4.2.2.1` (Microsoft DNS)
- `tls://8.8.8.8` (Google DNS)
- `tls://9.9.9.9` (Quad9 DNS)

## 🤝 贡献指南

### 如何贡献

1. **Fork 项目**

   ```bash
   git clone https://github.com/your-repo/GlobalScript.git
   cd GlobalScript
   ```

2. **创建功能分支**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **提交更改**

   ```bash
   git add .
   git commit -m "feat: 添加新功能"
   git push origin feature/your-feature-name
   ```

4. **创建 Pull Request**

### 贡献类型

- 🐛 **Bug 修复** - 修复脚本中的问题
- ✨ **新功能** - 添加新的规则或功能
- 📝 **文档改进** - 完善文档和说明
- 🎨 **代码优化** - 改进代码结构和性能

## 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 🙏 致谢

感谢以下项目的支持：

- [Clash Verge](https://github.com/clash-verge-rev/clash-verge-rev) - 优秀的 Clash 客户端
- [MetaCubeX](https://github.com/MetaCubeX) - 规则集数据
- [DustinWin](https://github.com/DustinWin) - 规则集贡献

---

**⭐ 如果这个项目对您有帮助，请给我们一个 Star！**
