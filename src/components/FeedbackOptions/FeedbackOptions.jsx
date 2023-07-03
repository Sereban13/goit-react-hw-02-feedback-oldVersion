const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              className=""
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FeedbackOptions;
