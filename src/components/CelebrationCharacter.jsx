function CelebrationCharacter({ visible }) {
  return (
    <div className={`scene celebration-scene ${visible ? 'is-active' : ''}`}>
      <div className="starfield" aria-hidden="true" />
      <div className="celebration-orb">
        <div className="celebration-head">
          <span className="eye left" />
          <span className="eye right" />
          <span className="smile" />
        </div>
        <div className="celebration-body" />
        <div className="celebration-arm left" />
        <div className="celebration-arm right" />
        <div className="celebration-heart h1" />
        <div className="celebration-heart h2" />
        <div className="celebration-heart h3" />
      </div>
    </div>
  );
}

export default CelebrationCharacter;
