import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <h2>Statistics</h2>
      <ul className={css.statistics}>
        <li>
          <span>Good: {good}</span>
        </li>
        <li>
          <span>Neutral: {neutral}</span>
        </li>
        <li>
          <span>Bad: {bad}</span>
        </li>
        <li>
          <span>Total: {total}</span>
        </li>
        <li>
          <span>Positive feedback: {positivePercentage} %</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
