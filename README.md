# GlobalScript

用于 Clash Verge 的全局扩展脚本，提供丰富的代理规则、DNS 配置和智能路由功能。

## 📋 目录

- [主要功能](#主要功能)
- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [高级配置](#高级配置)
- [故障排除](#故障排除)
- [更新日志](#更新日志)
- [贡献指南](#贡献指南)

## ✨ 主要功能

- 🔧 **自定义代理规则配置** - 支持丰富的规则集和自定义规则
- 🌐 **智能 DNS 解析** - 区分国内外 DNS，支持多种 DNS 协议
- 🎯 **自动化地区节点分组** - 自动识别和分组不同地区节点
- 📦 **丰富的规则集支持** - Google、Microsoft、Netflix 等主流服务
- 🔍 **域名嗅探功能** - 自动识别和分流 HTTPS 流量
- ⚖️ **多种负载均衡策略** - 轮询、散列、延迟选优等
- 🚫 **智能节点过滤** - 自动过滤流量到期、剩余套餐等无效节点
- 🌍 **地区节点限制** - 仅保留指定地区节点（美国、日本、新加坡、香港、台湾）
- ⚡ **优化的测试网址** - 使用 Cloudflare 测试，兼容性更好

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

### 版本选择

| 版本                      | 适用场景 | 特点                               |
| ------------------------- | -------- | ---------------------------------- |
| `GlobalScript.js`         | 完整功能 | 包含所有规则集、地区分组、智能过滤 |
| `GlobalScript-Minimal.js` | 轻量使用 | 基础代理功能，适合简单需求         |

## ⚙️ 配置说明

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

#### 高级功能

- 启用 IPv6 支持
- fake-ip 模式
- 域名嗅探
- 强制 DNS 映射

### 代理规则

支持以下服务自动分流:

#### 🎯 主流服务

- **Google 服务** (搜索、Gmail、Drive 等)
- **Microsoft 服务** (Office、Teams、Outlook 等)
- **Apple 服务** (iCloud、App Store 等)
- **GitHub** (代码托管、API 等)

#### 📺 流媒体服务

- **Netflix** (流媒体服务)
- **YouTube** (视频平台)
- **TikTok** (短视频平台)
- **Bilibili** (国内视频平台)

#### 💬 通讯服务

- **电报** (Telegram 消息)
- **Zoom** (视频会议)

#### 🤖 AI 服务

- **ChatGPT** (OpenAI)
- **Claude** (Anthropic)
- **其他 AI 平台**

#### 🎮 游戏服务

- **Steam** (游戏平台)
- **Epic Games** (游戏商店)
- **其他游戏服务**

#### 🎵 音乐服务

- **Spotify** (音乐流媒体)
- **Apple Music** (苹果音乐)

#### 📱 其他服务

- **Bing** (搜索引擎)
- **OneDrive** (云存储)
- **广告拦截** (自动过滤广告域名)

完整规则列表请查看 `GlobalScript.js` 中的 `rules` 数组。

### 地区分组

**当前支持的地区分组：**

| 地区         | 图标 | 匹配关键词                           |
| ------------ | ---- | ------------------------------------ |
| 🇺🇸 美国 📶   | 🏳️   | 美国、🇺🇸、US、United States、America |
| 🇯🇵 日本 📶   | 🇯🇵   | 日本、🇯🇵、JP、Japan                  |
| 🇸🇬 新加坡 📶 | 🇸🇬   | 新加坡、🇸🇬、SG、狮城、Singapore      |
| 🇭🇰 香港 📶   | 🇭🇰   | 香港、🇭🇰、HK、Hong Kong、HongKong    |
| 🇹🇼 台湾 📶   | 🇹🇼   | 台湾、🇹🇼、TW、Taiwan、tai wan        |

每个地区分组都会：

- 自动识别对应地区的节点
- 进行延迟测试和健康检查
- 支持故障转移和负载均衡
- 提供独立的代理选择

## 🔧 高级配置

### 自定义规则

在 `customRules` 数组中添加自定义规则：

```javascript
const customRules = [
  "DOMAIN-SUFFIX,example.com,代理组名称",
  "DOMAIN,api.example.com,节点选择",
  "IP-CIDR,192.168.1.0/24,DIRECT,no-resolve",
  "GEOIP,CN,DIRECT",
];
```

### 修改地区限制

如需修改保留的地区，编辑 `main` 函数中的过滤条件：

```javascript
// 修改地区关键词
/香港|HK|Hong Kong|HongKong|台湾|TW|Taiwan|tai wan|日本|JP|Japan|美国|US|United States|America|新加坡|SG|Singapore|狮城/i.test(
  proxy.name
);
```

### 调整过滤关键词

如需调整过滤的关键词，修改 `main` 函数中的排除条件：

```javascript
// 修改排除关键词
!/流量|到期|剩余|套餐|expire|traffic|quota|剩余流量|有效期/i.test(proxy.name);
```

### 更换测试网址

如需更换测试网址，修改 `test_url` 变量：

```javascript
// 推荐测试网址
const test_url = "http://cp.cloudflare.com/generate_204"; // Cloudflare (推荐)
const test_url = "http://www.google.com/generate_204"; // Google
const test_url = "http://1.1.1.1/generate_204"; // Cloudflare DNS
```

### 性能优化

#### 测试间隔调整

- `test_interval`: 测试间隔，建议 240 秒
- `test_tolerance`: 容忍延迟差，建议 50-100ms
- 数值越小切换越频繁，但会增加网络负载

#### DNS 优化

- 国内 DNS 建议只保留最快的一个
- 国外 DNS 可以保留多个作为备用
- 启用 `prefer-h3` 可提升 DNS 查询性能

## 🔍 故障排除

### 常见问题

#### 1. 节点不显示

**可能原因：**

- 节点名称不包含地区关键词
- 节点名称包含过滤关键词
- 配置文件格式错误

**解决方法：**

```bash
# 检查节点名称格式
# 确保包含以下关键词之一：
# 美国、日本、新加坡、香港、台湾
# 或对应的英文关键词
```

#### 2. 地区分组为空

**可能原因：**

- `regionConfig` 中的 `matcher` 配置错误
- 节点名称格式不匹配

**解决方法：**

```javascript
// 检查 regionConfig 配置
const regionConfig = [
  {
    name: "🇺🇸 美国 📶",
    matcher: "美国|🇺🇸|US|United States|America",
    icon: "...",
  },
];
```

#### 3. 测试失败

**可能原因：**

- 网络连接问题
- 防火墙阻止
- 测试网址不可访问

**解决方法：**

```javascript
// 尝试更换测试网址
const test_url = "http://cp.cloudflare.com/generate_204";
// 或
const test_url = "http://www.google.com/generate_204";
```

#### 4. 规则不生效

**可能原因：**

- 配置文件语法错误
- 规则集下载失败
- 服务未重启

**解决方法：**

1. 检查 Clash Verge 日志
2. 重启 Clash Verge
3. 验证规则语法

### 调试方法

#### 1. 查看日志

```bash
# Linux/macOS
tail -f ~/.config/clash-verge/logs/clash.log

# Windows
# 在 Clash Verge 界面查看日志
```

#### 2. 检查节点数量

- 对比脚本运行前后的节点数量
- 确认过滤规则是否生效

#### 3. 验证 DNS 解析

```bash
# 测试 DNS 解析
nslookup google.com 127.0.0.1:1053
```

#### 4. 测试服务访问

- 访问 Google、YouTube 等服务
- 检查是否正常代理

### 性能监控

#### 网络延迟测试

```bash
# 测试节点延迟
curl -o /dev/null -s -w "时间: %{time_total}s\n" http://cp.cloudflare.com/generate_204
```

#### 内存使用监控

```bash
# 监控 Clash 进程内存使用
ps aux | grep clash
```

## 📝 更新日志

### v2.0 (当前版本)

#### ✨ 新增功能

- ✅ 新增智能节点过滤功能
- ✅ 限制仅保留指定地区节点
- ✅ 优化测试网址为 Cloudflare
- ✅ 完善地区分组配置
- ✅ 增强错误处理和容错性

#### 🔧 优化改进

- 🚀 提升脚本执行效率
- 🛡️ 增强网络稳定性
- 📊 改进延迟测试算法
- 🎯 优化规则匹配精度

#### 🐛 问题修复

- 修复 DNS 解析偶发失败问题
- 修复地区分组显示异常
- 修复规则集更新失败问题

### v1.0

#### ✅ 基础功能

- ✅ 基础代理规则配置
- ✅ DNS 智能分流
- ✅ 地区节点分组
- ✅ 域名嗅探功能

## ⚠️ 注意事项

### 重要提醒

- 修改配置后需要重启 Clash Verge 生效
- 国内 DNS 建议只保留最快的一个
- 测试间隔和容忍值影响节点切换灵敏度
- 节点过滤功能会永久移除无效节点，请谨慎调整关键词
- 建议定期备份配置文件

### 安全建议

- 定期更新脚本版本
- 监控网络流量异常
- 保护配置文件安全
- 避免在公共网络使用

### 性能建议

- 根据网络环境调整测试间隔
- 合理设置 DNS 服务器数量
- 定期清理日志文件
- 监控系统资源使用

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
- 🔧 **配置优化** - 优化默认配置

### 代码规范

- 使用清晰的变量和函数命名
- 添加必要的注释说明
- 保持代码风格一致
- 测试功能完整性

## 📄 许可证

本项目采用 [MIT License](LICENSE) 许可证。

## 🙏 致谢

感谢以下项目的支持：

- [Clash Verge](https://github.com/clash-verge-rev/clash-verge-rev) - 优秀的 Clash 客户端
- [MetaCubeX](https://github.com/MetaCubeX) - 规则集数据
- [DustinWin](https://github.com/DustinWin) - 规则集贡献

## 📞 联系方式

- **GitHub Issues**: [提交问题](https://github.com/your-repo/GlobalScript/issues)
- **讨论区**: [GitHub Discussions](https://github.com/your-repo/GlobalScript/discussions)
- **邮箱**: your-email@example.com

---

**⭐ 如果这个项目对您有帮助，请给我们一个 Star！**
