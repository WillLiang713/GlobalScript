# Repository Guidelines

## Project Structure & Module Organization

This repository is a compact Clash Meta / Mihomo configuration template project.

- `Clash_Full.yaml` is the primary template and should remain node-free; users merge their own `proxies` separately.
- `scripts/convert.js` contains the JavaScript operator for creating chained proxy nodes from `relay` and `landing` arguments.
- `demo/` stores example Clash YAML files used for reference and manual comparison.
- `ruleset/` is reserved for external or generated rule-set assets if they are added later.
- `README.md` documents user-facing behavior and should be updated when routing logic changes.

## Build, Test, and Development Commands

There is no package manager manifest and no generated build step. Use lightweight validation before committing:

- `node --check scripts/convert.js` verifies JavaScript syntax without executing the operator.
- `mihomo -t -f Clash_Full.yaml` validates the main configuration when the Mihomo binary is installed locally.
- `yamllint Clash_Full.yaml demo/*.yaml` checks YAML formatting when `yamllint` is available.
- `git diff --check` catches trailing whitespace and common patch formatting issues.

## Coding Style & Naming Conventions

Keep YAML indentation at two spaces and group rules by routing intent, with short comments explaining each block. Preserve established Chinese strategy-group names such as `代理出口`, `游戏平台`, and `游戏下载` unless a routing change requires renaming them. In JavaScript, use two-space indentation, semicolons, `const`/`let`, and small helper functions as shown in `scripts/convert.js`. Prefer descriptive argument aliases and avoid changing existing aliases unless backward compatibility is intentionally broken.

## Testing Guidelines

No automated test suite is currently checked in. For configuration edits, validate with Mihomo and manually compare behavior against `demo/` examples where relevant. For `scripts/convert.js`, run `node --check` and test the operator in the target subscription-conversion environment with both required arguments:

```text
relay=<中转节点名>&landing=<落地节点名>&name=<自定义名称>
```

## Commit & Pull Request Guidelines

Recent history mostly follows Conventional Commit style with optional scopes, for example `chore(rules): ...`, `feat(config): ...`, and `refactor(config): ...`. Use concise Chinese or English summaries, and choose scopes such as `config`, `rules`, `docs`, or `scripts`.

Pull requests should describe the routing or script behavior changed, list validation commands run, and mention compatibility risks for existing Clash Meta / Mihomo clients. Include screenshots only when UI panel behavior or strategy-group ordering is relevant.

## Security & Configuration Tips

Do not commit personal proxy nodes, subscription URLs, credentials, API tokens, or generated configs containing private endpoints. Keep `Clash_Full.yaml` as a reusable public template.
