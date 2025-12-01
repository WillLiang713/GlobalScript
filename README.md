# GlobalScript

🚀 **专业的网络代理解决方案** - 为 Clash 提供全面的配置模板和扩展脚本，集成智能路由、DNS 优化和网络配置管理功能。

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Clash-orange.svg)](https://github.com/MetaCubeX/mihomo)

## 🎯 项目概述

GlobalScript 是一个专为 Clash 内核设计的配置方案，包含：

- **📋 配置模板** - 适用于订阅转换和 OpenClash 的完整/精简配置模板
- **🔧 扩展脚本** - JavaScript 预处理脚本，用于节点智能分组和规则优化
- **📦 规则集合** - 包含直连规则的 YAML 配置文件

## ✨ 主要功能

- 🔧 **自定义代理规则配置** - 支持丰富的规则集和自定义规则
- 🌐 **智能 DNS 解析** - 区分国内外 DNS，支持 DoH/DoT 协议
- 🎯 **自动化地区节点分组** - 自动识别和分组不同地区节点（美国、日本、新加坡、香港）
- 📦 **丰富的规则集支持** - 集成主流服务规则（Google、Microsoft、Netflix 等）
- 🚫 **智能节点过滤** - 自动过滤流量到期、套餐提示等无效节点
- ⚖️ **多种负载均衡策略** - 支持轮询、散列、延迟选优等策略
- 🔍 **域名嗅探功能** - 自动识别和分流 HTTPS 流量

## 🚀 快速开始

### 方式一：订阅转换（推荐）

使用在线订阅转换服务（如 [subconverter](https://github.com/tindy2013/subconverter)）：

1. 将 `Custom_Clash_Simple.ini` 上传到订阅转换后端的 `profiles` 目录
2. 在转换时指定配置文件名称即可

### 方式二：Clash Verge / Mihomo Party

1. **下载配置模板**
   ```bash
   # 下载完整版配置
   wget https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Custom_Clash_Simple.ini
   ```

2. **配置预处理脚本（可选）**
   - 下载 `GlobalScript.js`
   - 在客户端中添加预处理脚本

3. **导入订阅**
   - 导入你的订阅链接
   - 脚本会自动处理节点分组和规则

### 方式三：OpenClash

1. 进入 OpenClash 设置 → 配置订阅
2. 上传 `Custom_Clash_Simple.ini` 作为转换模板
3. 更新订阅配置

## 📁 文件说明

### 配置模板文件

| 文件名 | 说明 | 适用场景 |
|--------|------|----------|
| [Custom_Clash_Simple.ini](Custom_Clash_Simple.ini) | 完整版订阅转换配置模板，包含丰富的代理组和规则集 | 订阅转换服务、OpenClash |
| [Custom_Clash_Minimal.ini](Custom_Clash_Minimal.ini) | 精简版订阅转换配置模板，包含核心代理组和基础规则 | 需要轻量配置的场景 |

### 预处理脚本

| 文件名 | 说明 | 适用场景 |
|--------|------|----------|
| [GlobalScript.js](GlobalScript.js) | 预处理脚本，包含智能节点分组、过滤和路由优化 | Clash Verge、Mihomo Party 等支持预处理的客户端 |

### 规则集文件

| 文件名 | 说明 | 用途 |
|--------|------|------|
| [clash_direct.yaml](clash_direct.yaml) | 直连域名规则集，包含 Docker 镜像等国内可直连服务 | 作为 Clash 规则集引用 |

## ⚙️ 核心配置

### 基本参数（脚本配置）

```javascript
// 测试 URL（使用 Google 连通性检测）
const test_url = "https://www.gstatic.com/generate_204";
// 测试间隔（秒）
const test_interval = 240;
// 容忍延迟差（毫秒）
const test_tolerance = 80;
```

### 节点过滤规则

#### 保留地区节点

仅保留以下地区的节点：

- 🇺🇸 **美国** (US, United States, America)
- 🇯🇵 **日本** (JP, Japan)
- 🇸🇬 **新加坡** (SG, Singapore, 狮城)
- 🇭🇰 **香港** (HK, Hong Kong, HongKong)

#### 过滤无效节点

自动排除包含以下关键词的节点：

- 中文关键词：流量、到期、剩余、套餐、有效期
- 英文关键词：expire、traffic、quota

### DNS 配置

#### 国内 DNS

- `tls://223.5.5.5` (阿里云公共 DNS)

#### 国外 DNS

- `tls://8.8.8.8` (Google DNS)

### 直连规则集

[clash_direct.yaml](clash_direct.yaml) 包含以下直连规则：

- **Docker 镜像** - `docker.1ms.run` (毫秒镜像)
- **Cloudflare Docker** - `production.cloudflare.docker.com`
- **其他服务** - `xget.xi-xu.me`, `api.kkyyxx.xyz`, `x666.me`, `2ksports.com`

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request 来改进项目！

### 贡献类型

- 🐛 **Bug 修复** - 修复配置或脚本问题
- ✨ **新功能** - 添加新的规则或优化
- 📝 **文档改进** - 完善使用说明
- 🎨 **代码优化** - 改进脚本性能和可读性

### 提交规范

```bash
git checkout -b feature/your-feature
git commit -m "feat: 添加新功能"
git push origin feature/your-feature
```

## 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 🙏 致谢

- [MetaCubeX/mihomo](https://github.com/MetaCubeX/mihomo) - Clash Meta 内核
- [MetaCubeX/meta-rules-dat](https://github.com/MetaCubeX/meta-rules-dat) - 规则集数据源
- [DustinWin/ruleset_geodata](https://github.com/DustinWin/ruleset_geodata) - 规则集贡献

---

**⭐ 如果这个项目对你有帮助，请给个 Star！**
