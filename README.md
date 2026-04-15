# GlobalScript

精简强大的 Clash 代理配置方案，专为 Clash Meta / Mihomo 优化，一份配置搞定所有分流需求。

## 核心文件

- **[Clash_Full.yaml](https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Clash_Full.yaml)** - 模板配置文件（不含节点），基于 Geodata 优化

## 功能特性

- ✅ **Meta 优化** - 完美适配 Clash Meta / Mihomo 内核，采用内置 GEOSITE/GEOIP 规则
- ✅ **智能分流** - 涵盖 OpenAI、Gemini、GitHub、Netflix 等主流服务
- ✅ **地区分组** - 自动按香港、美国、日本、新加坡、台湾、韩国等地区分类节点
- ✅ **自动测速** - 各地区节点自动进行延迟测试并选择最优线路
- ✅ **精简高效** - 移除冗余 Rule Providers，启动速度极快

## 快速开始

`Clash_Full.yaml` 只是**模板**，不包含任何节点信息，不能作为订阅直接使用。

### 推荐方式：下载模板后与节点合并
1. 下载 `Clash_Full.yaml` 到你的 Clash 客户端配置目录
2. 在客户端中导入你的订阅节点，或手动把节点加入此配置（`proxies:` 或客户端的配置合并功能）
3. 选中该配置并启用即可使用

## 支持的服务

**AI 平台**: OpenAI、Gemini  
**开发工具**: GitHub、Microsoft  
**流媒体**: Netflix、YouTube、国外媒体  
**社交通讯**: Telegram、X(Twitter)  
**游戏平台**: Steam、Epic、EA、PlayStation、Nintendo
**测速工具**：Speedtest

## License

本项目以 [MIT License](./LICENSE) 发布。

仓库内部分图标素材来自第三方开源项目，相关素材仍遵循其各自上游许可证：

- `lucide-icons/lucide`：ISC License
- `lipis/flag-icons`：MIT License
- `glincker/thesvg`：MIT License

---
*简单、高效、开箱即用*
