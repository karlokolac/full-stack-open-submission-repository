import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(8));
  const [max, setMax] = useState(new Uint8Array(2));

  const handleSelected = () => {
    let random = Math.floor(Math.random() * 8);
    console.log("Random number: ", random);

    setSelected(random);
  };

  const handleVote = () => {
    let copy = [...votes];
    let copyMax = [...max];

    copy[selected] += 1;
    if (copy[selected] > copyMax[1]) {
      copyMax[0] = selected;
      copyMax[1] = copy[selected];

      setMax(copyMax);
    }

    setVotes(copy);
  };

  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Votes: {votes[selected]}</p>
      </div>
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleSelected}>Next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[max[0]]}</p>
      </div>
    </>
  );
};

export default App;
