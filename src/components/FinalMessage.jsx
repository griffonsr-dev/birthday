function FinalMessage({ visible, title, subtitle }) {
  return (
    <div className={`scene final-scene ${visible ? 'is-active' : ''}`}>
      <div className="final-content">
        <div className="final-halo" aria-hidden="true" />
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default FinalMessage;
