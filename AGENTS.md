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
