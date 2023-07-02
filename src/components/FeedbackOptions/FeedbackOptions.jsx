const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <section>
      <div>
        <button type="button" onClick={onGood}>
          Good
        </button>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </div>
    </section>
  );
};

export default FeedbackOptions;
