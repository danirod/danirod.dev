---
name: update-dependencies
description: >
  Review, update and verify application dependencies.
  Use for dependency maintenance in this repository.
---

Run commands and resolve project paths from the repository root.

# Stage 1: Inventory

Review these dependency sources:

- `mise.toml`: Node.js and pnpm versions.
- `package.json`: Direct dependencies, scripts and the `packageManager` pin.
- `pnpm-lock.yaml`: Resolved dependencies and peer dependency relationships.
- `pnpm-workspace.yaml`: Release cooldown, exceptions, overrides and allowed
  build scripts.
- `vercel.json`: The pnpm version in `installCommand` and deployment rewrites.

Record the configured Node.js version and check the official Node.js release
schedule and releases for its support status and available newer versions.
Distinguish minor and patch updates within the configured major from newer LTS
and Current majors. Include updates within the configured major in the
inventory; newer majors are report-only, even if the configured major is
unsupported or is not LTS.

Check usage in `nuxt.config.ts`, `uno.config.ts`, Vue components, layouts,
composables and `server/` before changing dependencies. Account for Nuxt modules,
auto-imports and build plugins; absence of an explicit import does not prove a
package is unused. Keep the inventory scoped to tools and dependencies actually
used here.

Use `pnpm outdated` and `pnpm audit` through the mise-configured tools to
identify updates and known vulnerabilities. Preserve the configured release
cooldown for routine updates and verify release eligibility separately;
outdated reports may include releases still within their cooldown. Inspect
existing overrides and exceptions before changing them.

# Stage 2: Plan

- Include stable Node.js minor and patch updates within the major configured
  at the start of the task. For example, Node.js 26.x may move to a newer 26.x,
  but not to 28.x. Major upgrades need a separate plan and user validation.
  If a dependency or pnpm upgrade requires a newer Node.js major, choose the
  latest eligible release compatible with the configured major or defer it and
  report the runtime requirement; do not change the Node.js major to unblock it.
- For all other dependencies and tooling actually used by the project, target
  the latest eligible stable releases, including majors, unless the user
  narrows the scope. This includes build tools and compilers. Honor explicit
  exclusions without narrowing unrelated updates. Exclude prereleases by
  default.
- Review direct dependency changelogs and Node.js/pnpm release notes before
  updating and identify required adaptations. Transitive dependency changelog
  review is intentionally omitted. Use official release notes and migration
  guides.
- Review majors and 0.x minor updates closely, especially Nuxt, its modules,
  Vue, Vue Router, UnoCSS, Mailgun and the build toolchain. Check peer dependency
  and Node.js engine compatibility before selecting versions.
- Review audit findings against upstream security advisories: identify affected
  dependency paths, applicability and patched versions. Apply reviewed security
  fixes promptly even when they are still within the cooldown; record the
  advisory and reason for each exception. A cooldown reduces supply-chain risk
  but must not force a known vulnerability to remain until a patch ages out.

# Stage 3: Update

- Update compatible packages together where peer dependencies require it.
  Keep `unocss`, `@unocss/nuxt` and `@unocss/postcss` on compatible versions.
- Adapt Nuxt modules, UnoCSS/PostCSS configuration and application code where
  required by package changes.
- Synchronize pnpm versions in `mise.toml`, `package.json` and the install
  command in `vercel.json`. Update the Node.js pin in `mise.toml` to the selected
  minor or patch release within the configured major, and synchronize any other
  runtime pins present. Check the selected runtime against dependency engine
  requirements and Vercel's supported runtime versions.
- Prefer `pnpm audit --fix=update` for reviewed security fixes. In pnpm 11 this
  updates vulnerable packages in the lockfile instead of adding the dependency
  overrides produced by plain `pnpm audit --fix`. With `minimumReleaseAge` set,
  audit fixes also add the advisory's minimum patched versions to
  `minimumReleaseAgeExclude`. Use `--interactive` when selecting only a subset
  of reviewed advisories. Review the resulting resolutions and compatibility;
  the command does not guarantee every vulnerability can be fixed. See the
  [pnpm audit documentation](https://pnpm.io/cli/audit#--fix).
- Keep security cooldown exceptions version-specific. Do not lower the global
  cooldown or exempt an entire package or scope to install a security patch.
  Preserve `minimumReleaseAgeExcludePrune: true`: dependency operations remove
  exclusions no longer resolved by the newly written lockfile, rather than
  removing them merely because the cooldown has elapsed. See the
  [pruning documentation](https://pnpm.io/settings/dependency-resolution#minimumreleaseageexcludeprune).
- Regenerate `pnpm-lock.yaml` with the selected pnpm version. Then update
  remaining eligible transitive dependencies and review the diff. Remove
  overrides or cooldown exceptions only when their original purpose no longer
  applies; routine updates must still respect the cooldown.
- Keep changes focused on dependency maintenance and required adaptations.

# Stage 4: Verify

Run using the project's mise-configured tools:

- `pnpm install --frozen-lockfile`
- `pnpm audit` to confirm remediation and identify any remaining findings.
- `pnpm run build`
- `pnpm run preview` and smoke-test the production build locally.

There are currently no lint, typecheck or test scripts in `package.json`. Use
any that have since been added, but do not invent commands or install tools
solely to fill that gap. Prettier is available via `pnpm exec prettier`; check
changed supported source/configuration files without reformatting unrelated
files. Distinguish pre-existing failures from upgrade regressions.

Apply these regression checks when the relevant dependencies change:

- **Nuxt, Vue and routing:** Load `/en` and `/es`, exercise navigation and check
  hydration and browser/server errors. Verify `/` redirects according to
  `Accept-Language`.
- **i18n and SEO:** Verify translations, language switching, `html lang`,
  hreflang links and the configured robots exclusions for contact success pages.
- **UnoCSS and PostCSS:** Check styling and icons in the production build and
  watch-mode rebuilding after a temporary asset/component edit. Check PostCSS
  ESM plugin loading after configuration changes and restore the temporary edit.
- **Images and fonts:** Verify the hero's `NuxtPicture` output, responsive image
  delivery and font loading.
- **Contact form:** Test multipart submissions with and without
  `Accept: application/json`, preserving the JSON success response and localized
  success redirect. Cover validation, reCAPTCHA and Mailgun failures. Use local
  mocks for reCAPTCHA/Mailgun so checks do not send real email. If the integration
  cannot be exercised, report it as unverified.
- **Analytics:** Check the Plausible integration and preserve the `/js/script.js`
  and `/api/event` rewrites in `vercel.json`.

Fix upgrade-related failures and rerun affected checks. An upgrade is verified
only when its checks pass; report blocked checks as unverified. Do not deploy as
part of local verification unless the user requests deployment.

# Stage 5: Summary

Report old → new versions, deferred updates with reasons, required adaptations,
security fixes and their advisory IDs, cooldown exceptions added or pruned,
remaining audit findings, and checks that passed, failed or could not run.
Report the current Node.js version and support status, available newer versions
and any updates deferred because of their runtime requirements. Make clear that
Node.js major upgrades require separate planning and user validation.
