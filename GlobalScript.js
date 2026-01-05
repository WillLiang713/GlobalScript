const customRules = [
  // 在此添加自定义代理规则。
  // 例如：
  //"DOMAIN-SUFFIX,gstatic.com,🤚 手动选择",
];

// 默认测试网址
const test_url = "https://cp.cloudflare.com/generate_204";
// 测试网址检测间隔
const test_interval = 240;
// 测试网址的间隔差值，超过这个差值就会切换节点，越小切换越频繁
const test_tolerance = 80;

// 国内DNS服务器
const domesticNameservers = [
  "tls://223.5.5.5", // 阿里云公共DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "tls://8.8.8.8", // Google DNS
  "tls://1.1.1.1", // Cloudflare DNS
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

  // 基础直连
  "RULE-SET,lan,全球直连",
  "RULE-SET,private,全球直连",

  // 核心分组规则
  "RULE-SET,googlefcm,谷歌FCM",
  "DOMAIN-SUFFIX,linux.do,LINUXDO",
  "RULE-SET,github,GitHub",
  "RULE-SET,dev,国外开发",
  "RULE-SET,openai,OpenAI",
  "RULE-SET,gemini,Gemini",
  "RULE-SET,ai,国外AI",
  "RULE-SET,zoom,Zoom",
  "RULE-SET,games,游戏平台",
  "RULE-SET,youtube,YouTube",
  "RULE-SET,netflix,Netflix",
  "RULE-SET,proxymedia,国外媒体",
  "RULE-SET,social,社交通讯",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,microsoft,微软服务",
  "RULE-SET,google,谷歌服务",

  // 兜底直连
  "RULE-SET,direct,全球直连",
  "RULE-SET,cnip,全球直连",
  "RULE-SET,download,全球直连",

  "GEOIP,CN,全球直连",
  "MATCH,漏网之鱼",
];

// 规则集配置 (尽量使用 mrs 格式以提高性能)
const ruleProviders = {
  lan: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs",
    path: "./ruleset/private.mrs",
  },
  private: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs",
    path: "./ruleset/private_ip.mrs",
  },
  googlefcm: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google-fcm.mrs",
    path: "./ruleset/googlefcm.mrs",
  },
  github: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs",
    path: "./ruleset/github.mrs",
  },
  dev: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-dev.mrs",
    path: "./ruleset/dev.mrs",
  },
  openai: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/openai.mrs",
    path: "./ruleset/openai.mrs",
  },
  gemini: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google-gemini.mrs",
    path: "./ruleset/gemini.mrs",
  },
  ai: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-ai-!cn.mrs",
    path: "./ruleset/ai.mrs",
  },
  zoom: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/zoom.mrs",
    path: "./ruleset/zoom.mrs",
  },
  games: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-games-!cn.mrs",
    path: "./ruleset/games.mrs",
  },
  youtube: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/youtube.mrs",
    path: "./ruleset/youtube.mrs",
  },
  netflix: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/netflix.mrs",
    path: "./ruleset/netflix.mrs",
  },
  proxymedia: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-media-!cn.mrs",
    path: "./ruleset/proxymedia.mrs",
  },
  social: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/telegram.mrs",
    path: "./ruleset/social.mrs",
  },
  apple: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple.mrs",
    path: "./ruleset/apple.mrs",
  },
  microsoft: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft.mrs",
    path: "./ruleset/microsoft.mrs",
  },
  google: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google.mrs",
    path: "./ruleset/google.mrs",
  },

  direct: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs",
    path: "./ruleset/direct.mrs",
  },
  cnip: {
    ...ruleProviderCommon,
    behavior: "ipcidr",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs",
    path: "./ruleset/cnip.mrs",
  },
  download: {
    ...ruleProviderCommon,
    behavior: "domain",
    url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/download.mrs",
    path: "./ruleset/download.mrs",
  },
};

// 地区配置
const regionConfig = [
  {
    name: "香港",
    matcher: "(🇭🇰|港|HK|HKG|HongKong|Hong Kong|香港)",
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/HK.png",
  },
  {
    name: "美国",
    matcher:
      "(🇺🇸|美|US|USA|United ?States|美国|波特兰|达拉斯|俄勒冈|凤凰城|费利蒙|硅谷|拉斯维加斯|洛杉矶|圣何塞|圣克拉拉|西雅图|芝加哥|Portland|Dallas|Oregon|Phoenix|Fremont|Silicon Valley|Las Vegas|Los Angeles|San Jose|Santa Clara|Seattle|Chicago)",
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/US.png",
  },
  {
    name: "日本",
    matcher:
      "(🇯🇵|日本|川日|东京|大阪|泉日|埼玉|沪日|深日|JP|Japan|Tokyo|Osaka)",
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/JP.png",
  },
  {
    name: "新加坡",
    matcher: "(🇸🇬|SG|SGP|Singapore|新加坡|狮城)",
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/SG.png",
  },
  {
    name: "台湾",
    matcher: "(🇹🇼|台|TW|Taiwan|台湾|台灣|台北|Taipei|桃園|Taoyuan|HiNet)",
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TW.png",
  },
  {
    name: "韩国",
    matcher: "(🇰🇷|韩|KR|Korea|韩国|首尔|Seoul)",
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/KR.png",
  },
];

// 基本代理组选项
const baseProxies = [
  "自动选择",
  "故障转移",
  "全球直连",
  "手动选择",
  "香港",
  "台湾",
  "新加坡",
  "日本",
  "韩国",
  "美国",
  "其他地区",
];

// 显示节点配置
const proxyGroups = [
  {
    ...groupBaseOption,
    name: "手动选择",
    type: "select",
    proxies: ["自动选择", "故障转移", "DIRECT"],
    "include-all": true,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png",
  },
  {
    ...groupBaseOption,
    name: "自动选择",
    type: "url-test",
    interval: test_interval,
    tolerance: test_tolerance,
    "include-all": true,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png",
  },
  {
    ...groupBaseOption,
    name: "故障转移",
    type: "fallback",
    "include-all": true,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Loop.png",
  },
  {
    ...groupBaseOption,
    name: "OpenAI",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png",
  },
  {
    ...groupBaseOption,
    name: "Gemini",
    type: "select",
    proxies: baseProxies,
    icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
  },
  {
    ...groupBaseOption,
    name: "国外AI",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Siri.png",
  },
  {
    ...groupBaseOption,
    name: "国外开发",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Stack.png",
  },
  {
    ...groupBaseOption,
    name: "LINUXDO",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cat.png",
  },
  {
    ...groupBaseOption,
    name: "GitHub",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png",
  },
  {
    ...groupBaseOption,
    name: "Zoom",
    type: "select",
    proxies: baseProxies,
    icon: "https://www.zoom.com/favicon.ico",
  },
  {
    ...groupBaseOption,
    name: "苹果服务",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png",
  },
  {
    ...groupBaseOption,
    name: "微软服务",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png",
  },
  {
    ...groupBaseOption,
    name: "谷歌服务",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png",
  },
  {
    ...groupBaseOption,
    name: "谷歌FCM",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png",
  },
  {
    ...groupBaseOption,
    name: "游戏平台",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Game.png",
  },
  {
    ...groupBaseOption,
    name: "YouTube",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png",
  },
  {
    ...groupBaseOption,
    name: "Netflix",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png",
  },
  {
    ...groupBaseOption,
    name: "国外媒体",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Media.png",
  },
  {
    ...groupBaseOption,
    name: "社交通讯",
    type: "select",
    proxies: baseProxies,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png",
  },

  {
    ...groupBaseOption,
    name: "全球直连",
    type: "select",
    proxies: ["DIRECT", "REJECT", "手动选择"],
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Direct.png",
  },
  {
    ...groupBaseOption,
    name: "漏网之鱼",
    type: "select",
    proxies: [
      "自动选择",
      "故障转移",
      "全球直连",
      "手动选择",
      "香港",
      "美国",
      "日本",
      "新加坡",
      "台湾",
      "韩国",
      "其他地区",
    ],
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
  },
];

// 添加地区分组
function addRegions(config) {
  const providers = config["proxy-providers"]
    ? Object.keys(config["proxy-providers"])
    : [];
  const hasProxyProviders = providers.length > 0;
  const hasProxies = config.proxies && config.proxies.length > 0;

  if (!hasProxyProviders && !hasProxies) return;

  // 1. 创建地区代理组
  const regions = [];
  for (const region of regionConfig) {
    const group = {
      ...groupBaseOption,
      name: region.name,
      type: "url-test",
      interval: test_interval,
      tolerance: test_tolerance,
      icon: region.icon,
    };

    if (hasProxyProviders) {
      group.use = providers;
      group.filter = region.matcher;
    } else {
      const names = config.proxies.map((p) => p.name);
      const regex = new RegExp(region.matcher, "i");
      group.proxies = names.filter((name) => regex.test(name));
    }

    if ((group.proxies && group.proxies.length > 0) || hasProxyProviders) {
      config["proxy-groups"].push(group);
      regions.push(region.name);
    }
  }

  // 2. 创建 "其他地区" 分组
  const otherGroup = {
    ...groupBaseOption,
    name: "其他地区",
    type: "url-test",
    interval: test_interval,
    tolerance: test_tolerance,
    icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png",
  };

  const allMatchers = regionConfig.map((r) => r.matcher).join("|");
  if (hasProxyProviders) {
    otherGroup.use = providers;
    otherGroup["exclude-filter"] = allMatchers;
  } else {
    const names = config.proxies.map((p) => p.name);
    const regex = new RegExp(allMatchers, "i");
    otherGroup.proxies = names.filter((name) => !regex.test(name));
  }
  config["proxy-groups"].push(otherGroup);

  // 3. 修正各组的 proxies 列表，确保包含实际存在的地区组
  for (const group of config["proxy-groups"]) {
    if (group.proxies && Array.isArray(group.proxies)) {
      // 过滤掉原本占位的地区名，替换为实际生成的地区名
      const regionNames = regionConfig.map((r) => r.name).concat(["其他地区"]);
      group.proxies = group.proxies.filter(
        (p) =>
          !regionNames.includes(p) || regions.includes(p) || p === "其他地区"
      );
    }
  }
}

// 主函数
function main(config) {
  // 基础配置
  config["profile"] = { "store-selected": true, "store-fake-ip": true };
  config["geodata-loader"] = "standard";
  config["geosite-matcher"] = "mph";
  config["global-client-fingerprint"] = "chrome";
  config["global-ua"] = "chrome";
  config["unified-delay"] = true;
  config["tcp-concurrent"] = true;

  // DNS配置
  config["dns"] = {
    ...config["dns"],
    enable: true,
    ipv6: true,
    listen: "0.0.0.0:1053",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    nameserver: domesticNameservers,
    "proxy-server-nameserver": [...foreignNameservers, ...domesticNameservers],
  };

  // 规则和代理组
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;
  config["proxy-groups"] = proxyGroups;

  // 动态生成地区组
  addRegions(config);

  return config;
}
