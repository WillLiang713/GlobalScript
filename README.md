# GlobalScript

精简强大的 Clash 代理配置方案，专为 Clash Meta / Mihomo 优化，一份配置搞定所有分流需求。

## 核心文件

- **[Clash_Full.yaml](https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Clash_Full.yaml)** - 完整的 Clash 配置文件，基于 Geodata 优化

## 功能特性

- ✅ **Meta 优化** - 完美适配 Clash Meta / Mihomo 内核，采用内置 GEOSITE/GEOIP 规则
- ✅ **智能分流** - 涵盖 OpenAI、Gemini、GitHub、Netflix 等主流服务
- ✅ **地区分组** - 自动按香港、美国、日本、新加坡、台湾、韩国等地区分类节点
- ✅ **自动测速** - 各地区节点自动进行延迟测试并选择最优线路
- ✅ **精简高效** - 移除冗余 Rule Providers，启动速度极快

## 快速开始

### 方式一：远程订阅 (推荐)
直接在 Clash 客户端中添加以下订阅地址：
```
https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Clash_Full.yaml
```

### 方式二：手动导入
1. 下载 `Clash_Full.yaml` 到你的 Clash 客户端配置目录
2. 导入你的订阅节点或手动添加节点
3. 启动 Clash 即可使用

## 支持的服务

**AI 平台**: OpenAI、Gemini  
**开发工具**: GitHub、Microsoft  
**流媒体**: Netflix、YouTube、国外媒体  
**社交通讯**: Telegram、Twitter  
**游戏平台**: Steam、Epic、EA、PlayStation、Nintendo
**测速工具**：Speedtest

---
*简单、高效、开箱即用*
