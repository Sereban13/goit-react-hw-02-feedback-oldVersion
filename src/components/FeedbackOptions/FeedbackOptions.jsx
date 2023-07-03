// const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
//   return (
//     <section>
//       <div>
//         <button type="button" onClick={onGood}>
//           Good
//         </button>
//         <button type="button" onClick={onNeutral}>
//           Neutral
//         </button>
//         <button type="button" onClick={onBad}>
//           Bad
//         </button>
//       </div>
//     </section>
//   );
// };

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                className=""
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FeedbackOptions;
