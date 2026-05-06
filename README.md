# GlobalScript

GlobalScript 是一份面向 Clash Meta / Mihomo 的精简分流模板。它不追求把每个服务都拆成独立策略组，而是采用更易维护的主线逻辑：**国内与游戏直连，其他非中国大陆流量统一进入代理出口，同时保留地区节点选择能力**。

## 配置文件

- [`Clash_Full.yaml`](https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Clash_Full.yaml)：主配置模板，不包含任何代理节点。

> 这是模板配置，不是完整订阅。你需要搭配自己的节点订阅、配置合并功能或手动添加 `proxies` 后使用。

## 设计思路

### 1. 分流规则保持极简

规则层只负责区分几类核心流量：

- 局域网 / 私有地址：`DIRECT`
- 中国大陆相关域名与 IP：`DIRECT`
- Apple CN / Google CN：中国大陆可直连服务走 `DIRECT`
- 游戏平台：强制 `DIRECT`，避免与游戏加速器冲突
- 非中国大陆域名：统一进入 `代理出口`
- 最终兜底：统一进入 `代理出口`

这样可以避免 Google、AI、流媒体、开发工具、社交通讯等服务各自拆组导致的选择负担。

### 2. 出口选择集中到「代理出口」

`代理出口` 是日常最主要的策略组，并被放在代理组列表最前面，方便在 Zashboard / Yacd / MetaCubeXD 等面板中快速选择。

可选出口包括：

- 智能优选
- 手动切换
- 自建节点
- 香港节点
- 美国节点
- 日本节点
- 新加坡节点
- 台湾节点
- 韩国节点
- 其他节点
- DIRECT

也就是说，**服务不再分组，但地区出口仍然保留**。如果需要临时切换到香港、日本、美国等地区，只需要在 `代理出口` 中选择对应地区即可。

### 3. 地区节点自动分类

配置通过 `include-all`、`filter` 和 `exclude-filter` 自动从已有节点中筛选地区节点：

- 香港节点
- 美国节点
- 日本节点
- 新加坡节点
- 台湾节点
- 韩国节点
- 其他节点
- 自建节点

地区组使用 `url-test` 自动测速，适合需要快速选择相对可用线路的场景。

## 当前分流逻辑

```yaml
rules:
# 局域网 / 私有地址
- GEOSITE,private,DIRECT
- GEOIP,private,DIRECT,no-resolve

# 游戏平台：国内服务和下载/CDN直连
- GEOSITE,category-games-cn,DIRECT
- GEOSITE,category-games@cn,DIRECT
- GEOSITE,category-game-platforms-download,游戏下载
- GEOSITE,category-games,游戏平台

# GFW 域名优先代理，避免被后续 GEOIP 规则直连
- GEOSITE,gfw,代理出口

# 国内兜底 (域名)
- GEOSITE,cn,DIRECT

# 国内兜底 (IP)
- GEOIP,CN,DIRECT

# 最终兜底
- MATCH,代理出口
```

## 快速使用

1. 下载 [`Clash_Full.yaml`](https://raw.githubusercontent.com/WillLiang713/GlobalScript/main/Clash_Full.yaml)。
2. 将你的节点订阅与该模板合并，或手动补充节点信息。
3. 使用支持 Clash Meta / Mihomo 规则语法的客户端加载配置。
4. 打开控制面板，在 `代理出口` 中选择自动、手动、自建或指定地区出口。

## 适合人群

这个配置适合希望：

- 国内流量稳定直连
- 国外流量统一代理
- 游戏流量不被代理接管
- 面板中减少服务类策略组
- 仍然可以按地区选择代理出口
- 配置规则清晰、少维护、容易排错

如果你需要对 AI、流媒体、开发工具、社交通讯等服务分别指定不同节点，可以在此模板基础上自行添加对应策略组和规则。

## 注意事项

- 本配置依赖客户端内置或已下载的 `GEOSITE` / `GEOIP` 数据。
- `Clash_Full.yaml` 不包含节点，直接导入不会产生可用代理。
- 游戏相关流量默认直连，适合搭配 UU、迅游等游戏加速器使用。
- 如果某些节点名称无法被地区规则识别，可以调整对应地区组的 `filter`。

## License

本项目以 [MIT License](./LICENSE) 发布。

仓库内部分图标素材来自第三方开源项目，相关素材仍遵循其各自上游许可证：

- `lucide-icons/lucide`：ISC License
- `lipis/flag-icons`：MIT License
- `homarr-labs/dashboard-icons`：MIT License
- `simple-icons/simple-icons`：CC0 1.0 Universal

---

简单分流，集中选择，保留地区自由度。
