# Mr Beazley Gallery agent rules

This is a small static gallery. Keep changes limited to `index.html`, `style.css`, `main.js`, `resources/`, and the manifest-generation helper.

When gallery images intentionally change, run `python3 scripts/scan_resources.py` so `resources/manifest.json` stays in sync, then inspect the page through a local HTTP server. Preserve user-provided images and their intended ordering; do not delete or reorder assets as routine cleanup.

Use `$MEO_DOCS_ROOT/Projects/mr-beazley-is-amazing/` for plans/decisions/audits and `$MEO_OUTPUT_ROOT/mr-beazley-is-amazing/{build,install,validation,packages,tmp}/` for generated output. Do not create screenshots, logs, plans, or temporary reports at the repository root.

A local browser preview proves only local rendering. Do not publish or overwrite a hosted gallery without explicit authorization, and do not reset/clean the worktree to organize it.
