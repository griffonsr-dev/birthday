function IntroScene({ visible, onComplete }) {
  return (
    <div className={`scene intro-scene ${visible ? 'is-active' : ''}`}>
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-scanlines" aria-hidden="true" />
      <div className="intro-loading">
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
      </div>
      <div className="intro-text-wrap">
        <div className="intro-text intro-text-main">LOADING</div>
        <div className="intro-text intro-text-sub">MARGARET&apos;S BIRTHDAY</div>
      </div>
      <button type="button" className="sr-only" onClick={onComplete}>
        Continue
      </button>
    </div>
  );
}

export default IntroScene;
