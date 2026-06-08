import os
import json

def main():
    resources_dir = os.path.join(os.getcwd(), 'resources')
    if not os.path.exists(resources_dir):
        os.makedirs(resources_dir)
        print(f"Created resources directory: {resources_dir}")

    supported_exts = ('.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg')
    
    try:
        files = os.listdir(resources_dir)
        images = []
        for file in files:
            file_path = os.path.join(resources_dir, file)
            if os.path.isfile(file_path) and file.lower().endswith(supported_exts) and not file.startswith('.'):
                images.append(file)
        
        # Sort files alphabetically
        images.sort()

        manifest_path = os.path.join(resources_dir, 'manifest.json')
        with open(manifest_path, 'w', encoding='utf-8') as fh:
            json.dump(images, fh, indent=2)

        print(f"Scan complete: Found {len(images)} images. Saved to resources/manifest.json.")
    except Exception as e:
        print(f"Error scanning resources: {e}")

if __name__ == '__main__':
    main()
