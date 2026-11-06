> 📚 [MeoArch 主文档 / Master Doc](https://github.com/QwQdoge/MeoArch-os-workspace/blob/main/docs/MEOARCH_MASTER.md)：全部仓库地图、操作手册、Cloudflare 清单、全部文档链接。<!-- meoarch-master -->

# Mr Beazley Gallery agent rules

## Scope

This is a small static gallery.

- `index.html`: page structure.
- `style.css`: styling.
- `main.js`: gallery behavior.
- `resources/`: source-controlled images and `manifest.json`.
- `scripts/scan_resources.py`: manifest generator.

Inspect only the affected files and `git status`; do not turn small gallery work into a repository-wide audit.

## Validation

If gallery images are intentionally added/removed/reordered, regenerate the manifest with `scripts/scan_resources.py` and review the resulting diff.

For UI/behavior changes, serve the site through local HTTP and inspect the affected viewport/browser state. A file-manager preview is not browser validation, and a local preview is not proof of live hosting.

## Safety and files

Preserve user-provided gallery assets. Do not publish or overwrite a hosted gallery without explicit authorization.

Keep plans/records under `$MEO_DOCS_ROOT/Projects/mr-beazley-is-amazing/` and generated evidence/output under `$MEO_OUTPUT_ROOT/mr-beazley-is-amazing/{build,install,validation,packages,tmp}/`. If those roots are unset, do not invent machine-specific paths.

Avoid destructive Git cleanup or broad deletion.

## Shared workspace rules (owner)

Source: the owner's local `projects/agent.md`, repeated here on purpose. These rules apply to every repository and win over generic caution in the rest of this file.

- "All repositories" means: the `projects` folder inside WSL Arch (`~/projects`), the Windows `projects` folder, and whatever `gh repo list QwQdoge` shows; confirm with `gh`.
- Reading a repository: `git pull` and `git push` first so it matches the cloud. If there are open PRs/branches, merge all of them. If a branch is large or needs a decision, ask once, then merge everything without asking again before each merge; after merging, ask whether to run tests. Exceptions: old dependency-bump branches and branches that are clearly unneeded.
- Work: update dependencies to the newest versions dynamically; only if a bug survives a real fix attempt, roll back and tell the user. Never create working branches: one shared workspace on the default branch, kept tidy. Push every piece of work to the cloud right away; always `git pull` then `git push`, no delay.
- Ask the user as little as possible: anything solvable by a simple attempt, or that matches the user's stated wishes, is done without asking. Ask only after repeated real attempts show the goal cannot be reached.
- Read every relevant document before working: local ones and https://meoarch.org/docs/ (agent entry: https://meoarch.org/llms.txt).
- Releases the owner asks for are authorized end to end (tag, manifest, dispatch, approve via `gh api .../pending_deployments`); do not stop for extra approvals.
- Never write personal or machine-specific details (usernames, absolute local paths, emails, VM or machine layout, secrets, resource ids) into repositories or published docs; keep them in local-only files (`~/.claude/CLAUDE.md`, the owner's local `projects/agent.md`).
