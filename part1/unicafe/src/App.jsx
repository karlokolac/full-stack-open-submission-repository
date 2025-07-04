import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="Total" value={props.all} />
          <StatisticLine text="Average" value={props.average} />
          <StatisticLine text="Positive" value={props.positive + "%"} />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodFeedback = () => {
    const updatedGood = good + 1;
    const updatedAll = updatedGood + neutral + bad;

    setGood(updatedGood);
    setAll(updatedAll);
    setAverage((updatedGood - bad) / updatedAll);
    setPositive((updatedGood / updatedAll) * 100);
  };

  const handleNeutralFeedback = () => {
    const updatedNeutral = neutral + 1;
    const updatedAll = good + updatedNeutral + bad;

    setNeutral(updatedNeutral);
    setAll(updatedAll);
    setAverage((good - bad) / updatedAll);
    setPositive((good / updatedAll) * 100);
  };

  const handleBadFeedback = () => {
    const updatedBad = bad + 1;
    const updatedAll = good + neutral + updatedBad;

    setBad(updatedBad);
    setAll(updatedAll);
    setAverage((good - updatedBad) / updatedAll);
    setPositive((good / updatedAll) * 100);
  };

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button onClick={handleGoodFeedback} text="Good" />
        <Button onClick={handleNeutralFeedback} text="Neutral" />
        <Button onClick={handleBadFeedback} text="Bad" />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </>
  );
};

export default App;
