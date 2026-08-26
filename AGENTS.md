# Mr Beazley Gallery agent rules

This is a small static gallery. Keep work scoped to the page, its style and
behavior, the versioned resources, and the manifest-generation helper.

## Source rules

- HTML belongs in index.html, styles in style.css, and gallery behavior in
  main.js.
- Gallery images and resources/manifest.json are source-owned assets. Preserve
  user-provided images and do not delete/reorder them as routine cleanup.
- When image files intentionally change, regenerate the manifest with
  scripts/scan_resources.py and validate in a local HTTP-served browser page.

## Documentation and records

- README.md and this file are the only root orientation documents. Put a
  source-bound contract in docs/ if one becomes necessary.
- Do not create root-level plans, audits, architecture drafts, agent journals,
  screenshots, build logs, or temporary notes.
- Store plans, decisions, work journals, and historical reports under
  /home/shekong/Documents/Obsidian Vault/MeoArch/Projects/mr-beazley-is-amazing/
  in 00-inbox, 01-overview, 02-decisions, 03-work, 04-validation, or
  99-archive.

## Output rules

New durable output belongs only under
/home/shekong/Projects/outputs/mr-beazley-is-amazing/:

| Kind | Path |
| --- | --- |
| Build work | build/ |
| Hosting/install handoff | install/ |
| Validation evidence | validation/<UTC-run-id>/ |
| Release/archive packages | packages/ |
| Disposable work | tmp/ |

Use YYYY-MM-DDTHHMMSSZ-short-label as the UTC validation run identifier.

## Safety

- Do not publish, overwrite a hosted page, remove gallery assets, reset the
  worktree, or perform broad deletion without explicit user authorization.
- A local preview proves only that local browser rendering was checked. Record
  the viewport/browser/result in the validation evidence when validation is
  requested.
