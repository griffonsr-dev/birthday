function AgeReveal({ visible }) {
  return (
    <div className={`scene age-scene ${visible ? 'is-active' : ''}`}>
      <div className="digital-rain" aria-hidden="true" />
      <div className="age-number" data-content="20">20</div>
    </div>
  );
}

export default AgeReveal;
