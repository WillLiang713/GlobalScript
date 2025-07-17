// 简洁版代理配置脚本
const config = {
  // 基础设置
  "profile": { "store-selected": true, "store-fake-ip": true },
  "geodata-loader": "standard",
  "global-client-fingerprint": "chrome",
  "tcp-concurrent": true,
  "unified-delay": true,

  // DNS配置
  "dns": {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "nameserver": ["tls://223.5.5.5"],
    "proxy-server-nameserver": ["tls://8.8.8.8"]
  },

  // 代理组
  "proxy-groups": [
    { "name": "节点选择", "type": "select", "proxies": ["自动选择", "手动选择", "DIRECT"] },
    { "name": "自动选择", "type": "url-test", "include-all": true, "url": "http://www.google.com/generate_204", "interval": 300 },
    { "name": "手动选择", "type": "select", "include-all": true }
  ],

  // 规则集
  "rule-providers": {
    "cn": { "type": "http", "behavior": "domain", "url": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs", "path": "./ruleset/cn.mrs" },
    "proxy": { "type": "http", "behavior": "domain", "url": "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo-lite/geosite/proxy.mrs", "path": "./ruleset/proxy.mrs" }
  },

  // 规则
  "rules": [
    "RULE-SET,cn,DIRECT",
    "RULE-SET,proxy,节点选择",
    "MATCH,节点选择"
  ]
};

// 主函数
function main(cfg) {
  if (!cfg?.proxies?.length && !Object.keys(cfg?.["proxy-providers"] || {}).length) {
    throw new Error("未找到代理配置");
  }
  return { ...cfg, ...config };
}
