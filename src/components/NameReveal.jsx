function NameReveal({ visible, name = 'MARGARET' }) {
  return (
    <div className={`scene name-scene ${visible ? 'is-active' : ''}`}>
      <div className="digital-rain soft" aria-hidden="true" />
      <div className="name-lockup">{name}</div>
    </div>
  );
}

export default NameReveal;
