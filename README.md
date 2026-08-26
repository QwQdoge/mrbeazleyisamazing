# Mr Beazley Gallery

This repository is a small static image gallery for Mr Beazley. The browser
loads the image list from resources/manifest.json and renders gallery items
with main.js. It is a source repository, not a folder for exports, screenshots,
or personal project notes.

## What is in this repository

| Path | Purpose |
| --- | --- |
| index.html | Static page structure. |
| style.css | Gallery presentation and responsive styling. |
| main.js | Browser-side manifest loading and gallery rendering. |
| resources/ | Versioned gallery images and the source-controlled manifest.json. |
| scripts/scan_resources.py | Helper that regenerates resources/manifest.json from supported image files. |

When an image is intentionally added or removed, update the tracked manifest
with the helper as part of the same source change and inspect the page through
a local HTTP server. Do not treat a file-manager preview as browser acceptance.

## Filing rule for new material

| Material | Required location |
| --- | --- |
| Page source and gallery assets | Their existing owning directory in this repository. |
| A stable code/hosting contract | docs/ when one is needed. |
| Plans, audits, decisions, agent journals, and historical reports | /home/shekong/Documents/Obsidian Vault/MeoArch/Projects/mr-beazley-is-amazing/ |
| Reproducible build work | /home/shekong/Projects/outputs/mr-beazley-is-amazing/build/ |
| Hosting/install handoff | /home/shekong/Projects/outputs/mr-beazley-is-amazing/install/ |
| Validation evidence | /home/shekong/Projects/outputs/mr-beazley-is-amazing/validation/<UTC-run-id>/ |
| Release/archive packages | /home/shekong/Projects/outputs/mr-beazley-is-amazing/packages/ |
| Disposable generated work | /home/shekong/Projects/outputs/mr-beazley-is-amazing/tmp/ |

Use a UTC run identifier in the form YYYY-MM-DDTHHMMSSZ-short-label, such as
2026-08-26T143015Z-gallery-check. Use the
Obsidian project folders 00-inbox, 01-overview, 02-decisions, 03-work,
04-validation, and 99-archive for records instead of putting notes at the
repository root.

## Safety

- Preserve the existing images, manifest, source files, and worktree. Do not
  delete user-provided gallery assets as cleanup.
- Do not publish or overwrite a hosted gallery without explicit authorization.
- Existing content is retained during this organization pass. Any later asset
  migration/removal needs a separate reviewed, recoverable task.
