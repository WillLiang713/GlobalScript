const customRules = [
  // 在此添加自定义代理规则。
  // 例如：
  //"DOMAIN-SUFFIX,gstatic.com,节点选择",
];

// 默认测试网址
const test_url = "https://www.gstatic.com/generate_204";
// 测试网址检测间隔
const test_interval = 240;
// 测试网址的间隔差值，超过这个差值就会切换节点，越小切换越频繁
const test_tolerance = 80;

// 国内DNS服务器,只写最快的一个，写多了会导致访问速度变慢和内核内存占用变大
const domesticNameservers = [
  "tls://223.5.5.5", // 阿里云公共DNS
];
// 国外DNS服务器，同上
const foreignNameservers = [
  "tls://8.8.8.8", // Google DNS
];

// 规则集通用配置
const ruleProviderCommon = {
  type: "http",
  format: "mrs",
  interval: 86400,
};

// 代理组通用配置
const groupBaseOption = {
  interval: 300,
  timeout: 3000,
  url: test_url,
  lazy: true,
  hidden: false,
  "disable-udp": false,
};

// 代理规则
const rules = [
  // 自定义规则
  ...customRules,
  // 内网和私有IP直连
  "RULE-SET,ipprivate,全局直连",
  "RULE-SET,private,全局直连",
  // Telegram走自动选择
  "RULE-SET,telegramcidr,自动选择",
  // 核心服务分类
  "RULE-SET,ai,AI",
  "RULE-SET,dev,开发",
  "RULE-SET,entertainment,媒体",
  "RULE-SET,games,游戏",
  // 国内直连
  "RULE-SET,direct,全局直连",
  "RULE-SET,ipdirect,全局直连",
  // 其他海外代理
  "RULE-SET,proxy,自动选择",
  "RULE-SET,gfw,自动选择",
  // 未匹配的规则
  "MATCH,漏网之鱼",
];

// 规则集配置
const ruleProviders = {
  ipprivate: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs",
    path: "./ruleset/lancidr.mrs",
  },
  private: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs",
    path: "./ruleset/private.mrs",
  },
  telegramcidr: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/telegram.mrs",
    path: "./ruleset/telegramcidr.mrs",
  },
  ai: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-ai-!cn.mrs",
    path: "./ruleset/ai.mrs",
  },
  dev: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-dev.mrs",
    path: "./ruleset/dev.mrs",
  },
  entertainment: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-entertainment.mrs",
    path: "./ruleset/entertainment.mrs",
  },
  games: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/category-games-!cn.mrs",
    path: "./ruleset/games.mrs",
  },
  direct: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs",
    path: "./ruleset/direct.mrs",
  },
  ipdirect: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs",
    path: "./ruleset/cncidr.mrs",
  },
  proxy: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo-lite/geosite/proxy.mrs",
    path: "./rulesets/loyalsoldier/proxy.mrs",
  },
  gfw: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/gfw.mrs",
    path: "./ruleset/gfw.mrs",
  },
};

// 地区配置
const regionConfig = [
  {
    name: "美国",
    matcher: "美国|🇺🇸|US|United States|America",
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg",
  },
  {
    name: "日本",
    matcher: "日本|🇯🇵|JP|Japan",
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg",
  },
  {
    name: "新加坡",
    matcher: "新加坡|🇸🇬|SG|狮城|Singapore",
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg",
  },
  {
    name: "香港",
    matcher: "香港|🇭🇰|HK|Hong Kong|HongKong",
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg",
  },
];

// 显示节点配置
const proxyGroups = [
  {
    ...groupBaseOption,
    name: "手动选择",
    type: "select",
    "include-all": true,
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
  },
  {
    ...groupBaseOption,
    name: "自动选择",
    type: "url-test",
    interval: test_interval,
    tolerance: test_tolerance,
    "include-all": true,
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg",
  },
  {
    ...groupBaseOption,
    name: "AI",
    type: "select",
    proxies: ["自动选择"],
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/AI.png",
  },
  {
    ...groupBaseOption,
    name: "开发",
    type: "select",
    proxies: ["自动选择"],
    icon: "https://www.clashverge.dev/assets/icons/github.svg",
  },
  {
    ...groupBaseOption,
    name: "媒体",
    type: "select",
    proxies: ["自动选择"],
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg",
  },
  {
    ...groupBaseOption,
    name: "游戏",
    type: "select",
    proxies: ["自动选择", "手动选择", "全局直连"],
    icon: "https://www.clashverge.dev/assets/icons/steam.svg",
  },
  {
    ...groupBaseOption,
    name: "全局直连",
    type: "select",
    proxies: ["DIRECT", "REJECT", "自动选择", "手动选择"],
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg",
  },
  {
    ...groupBaseOption,
    name: "漏网之鱼",
    type: "select",
    proxies: ["自动选择", "全局直连", "手动选择"],
    icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg",
  },
];

// DNS配置
const dnsConfig = {
  enable: true,
  ipv6: true,
  "prefer-h3": false,
  "use-hosts": false,
  "use-system-hosts": true,
  listen: "0.0.0.0:1053",
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter-mode": "blacklist",
  "fake-ip-filter": [
    "+.lan",
    "+.local",
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    "localhost.work.weixin.qq.com",
    "*.localdomain",
    "*.example",
    "*.invalid",
    "*.localhost",
    "*.test",
    "*.local",
    "*.home.arpa",
  ],
  nameserver: [...domesticNameservers],
  "proxy-server-nameserver": [...foreignNameservers, ...domesticNameservers],
  "nameserver-policy": {},
};

// 域名嗅探
const snifferConfig = {
  enable: true,
  "force-dns-mapping": true,
  "parse-pure-ip": true,
  "override-destination": true,
  sniff: {
    TLS: {
      ports: [443, 8443],
    },
    HTTP: {
      ports: [80, "8080-8880"],
      "override-destination": true,
    },
    QUIC: {
      ports: [443, 8443],
    },
  },
};

// 添加地区分组
function addRegions(config) {
  let regions = [];
  if (!config.proxies) {
    if (!config["proxy-providers"]) return;
    const providers = Object.keys(config["proxy-providers"]);
    if (providers.length === 0) return;
    for (const region of regionConfig) {
      if (!region.name || !region.matcher) continue;
      config["proxy-groups"].push({
        ...groupBaseOption,
        name: region.name,
        type: "url-test",
        interval: test_interval,
        tolerance: test_tolerance,
        use: providers,
        filter: region.matcher,
        icon: region.icon,
      });
      regions.push(region.name);
    }
  } else {
    let names = config.proxies.map((p) => p.name).filter(Boolean);
    if (names.length === 0) return;
    for (const region of regionConfig) {
      const matches = region.matcher.split("|");
      if (matches.length === 0) continue;
      const proxies = names.filter((name) =>
        matches.some((m) => name.includes(m))
      );
      if (proxies.length === 0) continue;
      config["proxy-groups"].push({
        ...groupBaseOption,
        name: region.name,
        type: "url-test",
        interval: test_interval,
        tolerance: test_tolerance,
        proxies: proxies,
        icon: region.icon,
      });
      regions.push(region.name);
    }
  }
  if (regions.length === 0) return;
  const entries = config["proxy-groups"];
  for (const entry of entries) {
    if (!entry || !entry.proxies) continue;
    if (
      entry.type === "select" &&
      !entry.hasOwnProperty("include-all") &&
      entry.name !== "全局直连" &&
      entry.name !== "漏网之鱼"
    ) {
      entry.proxies.push(...regions);
    }
  }
  config["proxy-groups"] = entries;
}

// 主函数
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object"
      ? Object.keys(config["proxy-providers"]).length
      : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 配置
  config["profile"] = {
    "store-selected": true,
    "store-fake-ip": true,
  };
  // Geo设置
  config["geodata-loader"] = "standard";
  config["geosite-matcher"] = "mph";
  // 全局客户端指纹
  config["global-client-fingerprint"] = "chrome";
  config["global-ua"] = "chrome";
  // 统一延迟
  config["unified-delay"] = true;
  // TCP 并发
  config["tcp-concurrent"] = true;
  // 域名服务
  config["foreign_nameservers"] = foreignNameservers;
  config["domestic_nameservers"] = domesticNameservers;
  // DNS配置
  config["dns"] = dnsConfig;
  // 域名嗅探
  config["sniffer"] = snifferConfig;
  // 规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  // 代理组
  config["proxy-groups"] = proxyGroups;
  // 地区分组
  addRegions(config);
  // 返回修改后的配置
  return config;
}
