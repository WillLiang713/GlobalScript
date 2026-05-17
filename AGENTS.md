# Repository Guidelines

## Project Structure & Module Organization

This repository is a compact Clash Meta / Mihomo configuration template project.

- `Clash_Full.yaml` is the primary template and should remain node-free; users merge their own `proxies` separately.
- `scripts/convert.js` contains the JavaScript operator for creating chained proxy nodes from `relay` and `landing` arguments.
- `demo/` stores example Clash YAML files used for reference and manual comparison.
- `ruleset/` is reserved for external or generated rule-set assets if they are added later.
- `README.md` documents user-facing behavior and should be updated when routing logic changes.
- `LICENSE` covers this repository's own template and script content; remotely referenced icons, demo rules, and other third-party resources remain under their upstream terms.

## Build, Test, and Development Commands

There is no package manager manifest and no generated build step. Use lightweight validation before committing:

- `node --check scripts/convert.js` verifies JavaScript syntax without executing the operator.
- `mihomo -t -f Clash_Full.yaml` validates the main configuration when the Mihomo binary is installed locally.
- `yamllint Clash_Full.yaml demo/*.yaml` checks YAML formatting when `yamllint` is available.
- `git diff --check` catches trailing whitespace and common patch formatting issues.

## Coding Style & Naming Conventions

Keep YAML indentation at two spaces and group rules by routing intent, with short comments explaining each block. Preserve established Chinese strategy-group names such as `代理出口`, `AI出口`, `流媒体`, `谷歌服务`, `苹果服务`, `微软服务`, `开发工具`, and `游戏平台` unless a routing change requires renaming them. For overlapping `GEOSITE` categories, place the more specific or higher-intent rule first; for example, keep `GEOSITE,category-dev` before `GEOSITE,microsoft` so GitHub traffic reaches `开发工具`. Top-level scenario `select` groups should keep a consistent candidate order and use `include-all: true` so each scenario can directly select a concrete node without adding one-off duplicate groups such as `开发自建节点`. In JavaScript, use two-space indentation, semicolons, `const`/`let`, and small helper functions as shown in `scripts/convert.js`. Prefer descriptive argument aliases and avoid changing existing aliases unless backward compatibility is intentionally broken.

## Testing Guidelines

No automated test suite is currently checked in. For configuration edits, validate with Mihomo and manually compare behavior against `demo/` examples where relevant. For `scripts/convert.js`, run `node --check` and test the operator in the target subscription-conversion environment with both required arguments:

```text
relay=<中转节点名>&landing=<落地节点名>&name=<自定义名称>
```

## Commit & Pull Request Guidelines

Recent history mostly follows Conventional Commit style with optional scopes, for example `chore(rules): ...`, `feat(config): ...`, and `refactor(config): ...`. Use concise Chinese or English summaries, and choose scopes such as `config`, `rules`, `docs`, or `scripts`.

Pull requests should describe the routing or script behavior changed, list validation commands run, and mention compatibility risks for existing Clash Meta / Mihomo clients. Include screenshots only when UI panel behavior or strategy-group ordering is relevant.

## Security & Configuration Tips

Do not commit personal proxy nodes, subscription URLs, credentials, API tokens, or generated configs containing private endpoints. Keep `Clash_Full.yaml` as a reusable public template. Do not vendor third-party icon assets or rulesets unless their license and attribution requirements are checked and documented; remote icon references currently point mainly to `Koolson/Qure` and `Orz-3/mini`.
