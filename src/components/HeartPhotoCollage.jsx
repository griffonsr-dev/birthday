import { useMemo } from 'react';

function heartPoint(t, scale = 1) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  return {
    x: x * scale,
    y: -y * scale,
  };
}

function HeartPhotoCollage({ photos = [] }) {
  const tiles = useMemo(() => {
    const safePhotos = photos.length ? photos : Array(12).fill('/assets/placeholder.svg');
    const count = Math.min(safePhotos.length, 18);
    const positions = [];

    for (let i = 0; i < count; i += 1) {
      const t = -Math.PI + (i / Math.max(1, count - 1)) * (Math.PI * 2);
      const point = heartPoint(t, 1.2);
      const spread = 1 + (i % 5) * 0.12;
      positions.push({
        id: i,
        x: point.x * spread,
        y: point.y * spread,
        angle: (i % 3 - 1) * 5,
        src: safePhotos[i % safePhotos.length],
      });
    }

    return positions;
  }, [photos]);

  return (
    <div className="heart-collage-wrap">
      <div className="heart-collage" aria-label="Heart made from Margaret's photos">
        {tiles.map(({ id, x, y, angle, src }) => (
          <div
            key={id}
            className="heart-photo-card"
            style={{
              transform: `translate(${x * 10}px, ${y * 9}px) rotate(${angle}deg)`,
              animationDelay: `${id * 0.08}s`,
            }}
          >
            <img src={src} alt="Margaret memory" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeartPhotoCollage;
