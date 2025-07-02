# GlobalScript

用于 Clash Verge 的全局扩展脚本，提供丰富的代理规则、DNS 配置和智能路由功能。

## 主要功能

- 自定义代理规则配置
- 智能 DNS 解析（区分国内外 DNS）
- 自动化的地区节点分组
- 丰富的规则集支持（Google、Microsoft、Netflix 等主流服务）
- 域名嗅探功能
- 多种负载均衡策略

## 配置说明

### 基本配置

```javascript
// 默认测试网址
const test_url = "http://www.google.com/generate_204";
// 测试间隔(秒)
const test_interval = 240;
// 容忍延迟差(ms)
const test_tolerance = 80;
```

### DNS 配置

- 国内 DNS: `tls://223.5.5.5` (阿里云公共 DNS)
- 国外 DNS: `tls://dns.opendns.com` (OpenDNS)
- 启用 IPv6、fake-ip 等高级功能

### 代理规则

支持以下服务自动分流:

- Google 服务
- Microsoft 服务
- Apple 服务
- GitHub
- Netflix
- YouTube
- TikTok
- 电报
- Bilibili
- 等 30+常用服务

完整规则列表请查看 GlobalScript.js 中的`rules`数组。

### 地区支持

自动识别并分组以下地区节点:

- 美国、日本、韩国、新加坡、香港、台湾
- 英国、法国、德国、俄罗斯
- 澳大利亚、加拿大
- 等 20+国家和地区

## 使用方法

1. 将 GlobalScript.js 放入 Clash Verge 的脚本目录
2. 在 Clash Verge 配置中引用此脚本
3. 脚本会自动:
   - 添加智能 DNS 配置
   - 设置代理规则
   - 创建地区分组
   - 配置域名嗅探

## 自定义规则

在`customRules`数组中添加自定义规则，格式为:

```javascript
"DOMAIN-SUFFIX,example.com,代理组名称",
```

## 注意事项

- 修改配置后需要重启 Clash Verge 生效
- 国内 DNS 建议只保留最快的一个
- 测试间隔和容忍值影响节点切换灵敏度
