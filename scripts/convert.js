/**
 * 生成链式代理节点：中转(relay) -> 落地(landing)
 *
 * 参数（$arguments）：
 *   relay   : 中转节点名称（前置/下一跳）
 *   landing : 落地节点名称（出口/最终节点，会被复制一份）
 *   name    : （可选）新生成的链式节点名称
 *
 * 你也可以用 URL fragment 传参：
 *   #relay=中转节点名&landing=落地节点名&name=自定义链式名
 */
function operator(proxies) {
  const args = $arguments || {};

  const relay =
    args.relay ||
    args.relay_name ||
    args.transit ||
    args.upstream ||
    args.dialer;
  const landing =
    args.landing ||
    args.landing_name ||
    args.exit ||
    args.downstream ||
    args.proxy;
  const desiredName = args.name || args.chain_name || args.new_name;

  const log = (msg) => {
    try {
      $.info(msg);
    } catch (e) {
      try {
        console.log(msg);
      } catch (e2) {}
    }
  };
  const err = (msg) => {
    try {
      $.error(msg);
    } catch (e) {
      try {
        console.error(msg);
      } catch (e2) {}
    }
  };

  if (!relay || !landing) {
    err(`需要参数 relay 和 landing。当前参数：${JSON.stringify(args)}`);
    return proxies;
  }
  if (relay === landing) {
    err(`relay 和 landing 不能相同：${relay}`);
    return proxies;
  }

  // 直接查找落地节点（用于复制配置）
  const landingProxy = proxies.find((p) => p && p.name === landing);

  // 深拷贝落地节点，如果找不到就创建空对象
  const chained = landingProxy ? JSON.parse(JSON.stringify(landingProxy)) : {};

  // 生成唯一名称
  let name = desiredName || `${relay} ➜ ${landing}`;
  if (proxies.some((p) => p && p.name === name)) {
    let i = 2;
    while (proxies.some((p) => p && p.name === `${name} #${i}`)) i++;
    name = `${name} #${i}`;
  }

  chained.name = name;

  // 核心：让“落地节点”通过“中转节点”建立连接（链式代理）
  chained["underlying-proxy"] = relay;

  log(`已生成链式节点：${name} （landing=${landing} via relay=${relay}）`);

  return proxies.concat(chained);
}
