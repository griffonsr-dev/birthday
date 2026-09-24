function PhotoGallery({ photos = [], visible, title = 'A little reminder of how special you are.' }) {
  const safePhotos = photos.length ? photos : Array(5).fill('/assets/placeholder.svg');

  return (
    <div className={`scene gallery-scene ${visible ? 'is-active' : ''}`}>
      <div className="gallery-box">
        <h3>{title}</h3>
        <div className="photo-grid">
          {safePhotos.map((photo, index) => (
            <div
              key={`${photo}-${index}`}
              className="photo-tile"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <img src={photo} alt={`Margaret memory ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
