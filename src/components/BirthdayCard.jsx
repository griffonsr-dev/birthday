function BirthdayCard({ visible, title = 'Happy Birthday', message = 'Happy 20th Birthday, Margaret ❤️', children }) {
  return (
    <div className={`scene card-scene ${visible ? 'is-active' : ''}`}>
      <div className="card-shell">
        <div className="message-card" role="button" tabIndex={0} aria-label="Open birthday card">
          <div className="card-art" aria-hidden="true">
            <div className="card-hearts">
              <span className="heart heart-one" />
              <span className="heart heart-two" />
              <span className="heart heart-three" />
            </div>
            <div className="card-hands">
              <span className="hand left" />
              <span className="hand right" />
            </div>
          </div>
          <div className="card-copy">
            <p className="card-kicker">For Margaret</p>
            <h2>{title}</h2>
            <p>{message}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default BirthdayCard;
