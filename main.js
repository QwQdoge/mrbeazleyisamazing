document.addEventListener('DOMContentLoaded', () => {
  const galleryGrid = document.getElementById('galleryGrid');

  async function loadGallery() {
    try {
      const response = await fetch('resources/manifest.json');
      if (!response.ok) throw new Error('Manifest not found');
      const images = await response.json();
      if (!images || images.length === 0) {
        galleryGrid.innerHTML = '<p style="color: #666;">No images found in resources/</p>';
        return;
      }
      renderGallery(images);
    } catch (error) {
      console.error(error);
      galleryGrid.innerHTML = '<p style="color: #666;">Error loading gallery</p>';
    }
  }

  function renderGallery(images) {
    galleryGrid.innerHTML = '';
    
    if (images.length === 1) {
      galleryGrid.classList.add('single-item');
    } else {
      galleryGrid.classList.remove('single-item');
    }

    images.forEach(filename => {
      const item = document.createElement('div');
      item.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = `resources/${filename}`;
      img.alt = filename;
      img.loading = 'lazy';

      item.appendChild(img);
      galleryGrid.appendChild(item);
    });
  }

  loadGallery();
});
