function BirthdayTitle({ visible, text = 'BIRTHDAY' }) {
  return (
    <div className={`scene title-scene ${visible ? 'is-active' : ''}`}>
      <div className="digital-rain soft" aria-hidden="true" />
      <div className="title-stack">
        <span className="title-label">{text}</span>
      </div>
    </div>
  );
}

export default BirthdayTitle;
