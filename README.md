# GlobalScript

用于 Clash Verge 的全局扩展脚本，提供丰富的代理规则、DNS 配置和智能路由功能。

## 主要功能

- 自定义代理规则配置
- 智能 DNS 解析（区分国内外 DNS）
- 自动化的地区节点分组
- 丰富的规则集支持（Google、Microsoft、Netflix 等主流服务）
- 域名嗅探功能
- 多种负载均衡策略
- **智能节点过滤**（自动过滤流量到期、剩余套餐等无效节点）
- **地区节点限制**（仅保留指定地区节点）
- **优化的测试网址**（使用 Cloudflare 测试，兼容性更好）

## 配置说明

### 基本配置

```javascript
// 默认测试网址（已优化为 Cloudflare）
const test_url = "http://cp.cloudflare.com/generate_204";
// 测试间隔(秒)
const test_interval = 240; // 容忍延迟差(ms)
const test_tolerance = 80;
```

### 节点过滤配置

脚本会自动过滤以下类型的节点：

####1. 地区限制
**当前仅保留以下地区节点：**

- 🇺🇸 美国 (US, United States, America)
- 🇯🇵 日本 (JP, Japan)
- 🇸🇬 新加坡 (SG, Singapore, 狮城)
- 🇭🇰 香港 (HK, Hong Kong, HongKong)
- 🇹🇼 台湾 (TW, Taiwan, tai wan)

#### 2 无效节点过滤

**自动排除包含以下关键词的节点：**

- 流量、到期、剩余、套餐
- expire、traffic、quota
- 剩余流量、有效期

### DNS 配置

- **国内 DNS**: `tls://2230.5.5.5` (阿里云公共 DNS)
- **国外 DNS**:
  - `tls://40.20.1` (Microsoft DNS)
  - `tls://8.880.8` (Google DNS)
  - `tls://90.9.90.9` (Quad9 DNS)
- 启用 IPv6、fake-ip 等高级功能

### 代理规则

支持以下服务自动分流:

- **Google 服务** (搜索、Gmail、Drive 等)
- **Microsoft 服务** (Office、Teams、Outlook 等)
- **Apple 服务** (iCloud、App Store 等)
- **GitHub** (代码托管、API 等)
- **Netflix** (流媒体服务)
- **YouTube** (视频平台)
- **TikTok** (短视频平台)
- **电报** (Telegram 消息)
- **Bilibili** (国内视频平台)
- **AI 服务** (ChatGPT、Claude 等)
- **游戏服务** (Steam、Epic 等)
- **音乐服务** (Spotify、Apple Music 等)
- **等 30 常用服务**

完整规则列表请查看 GlobalScript.js 中的 `rules` 数组。

### 地区分组

**当前支持的地区分组：**

- 🇺🇸 美国 📶
- 🇯🇵 日本 📶
- 🇸🇬 新加坡 📶
- 🇭🇰 香港 📶
- 🇹🇼 台湾 📶

每个地区分组都会：

- 自动识别对应地区的节点
- 进行延迟测试和健康检查
- 支持故障转移和负载均衡

## 使用方法

1 将 `GlobalScript.js` 放入 Clash Verge 的脚本目录 2. 在 Clash Verge 配置中引用此脚本 3. 脚本会自动:

- 过滤无效节点（流量到期、非指定地区等）
- 添加智能 DNS 配置
- 设置代理规则
- 创建地区分组
- 配置域名嗅探

## 自定义配置

### 添加自定义规则

在 `customRules` 数组中添加自定义规则，格式为:

```javascript
const customRules = DOMAIN-SUFFIX,example.com,代理组名称",
  "DOMAIN,api.example.com,节点选择",
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
const test_url = "http://cp.cloudflare.com/generate_204;  // Cloudflare (推荐)
const test_url = http://www.google.com/generate_204   // Google
const test_url =http://1.11.1te_204          // Cloudflare DNS
```

## 性能优化

### 测试间隔调整

- `test_interval`: 测试间隔，建议 240
- `test_tolerance`: 容忍延迟差，建议 50-10s
- 数值越小切换越频繁，但会增加网络负载

### DNS 优化

- 国内 DNS 建议只保留最快的一个
- 国外 DNS 可以保留多个作为备用
- 启用 `prefer-h3` 可提升 DNS 查询性能

## 故障排除

### 常见问题

1 **节点不显示**

- 检查节点名称是否包含地区关键词
- 确认节点名称不包含过滤关键词

2. **地区分组为空**
   - 检查 `regionConfig` 中的 `matcher` 配置
   - 确认节点名称格式匹配
3. **测试失败**
   - 尝试更换测试网址
   - 检查网络连接和防火墙设置

4 **规则不生效**

- 重启 Clash Verge
- 检查规则语法是否正确

### 调试方法

1 查看 Clash Verge 日志 2 检查节点数量变化 3. 验证 DNS 解析是否正常 4. 测试各服务访问情况

## 更新日志

### v20 (当前版本)

- ✅ 新增智能节点过滤功能
- ✅ 限制仅保留指定地区节点
- ✅ 优化测试网址为 Cloudflare
- ✅ 完善地区分组配置
- ✅ 增强错误处理和容错性

### v10✅ 基础代理规则配置

- ✅ DNS 智能分流
- ✅ 地区节点分组
- ✅ 域名嗅探功能

## 注意事项

- 修改配置后需要重启 Clash Verge 生效
- 国内 DNS 建议只保留最快的一个
- 测试间隔和容忍值影响节点切换灵敏度
- 节点过滤功能会永久移除无效节点，请谨慎调整关键词
- 建议定期备份配置文件

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 许可证

MIT License
