export const Scoreboard = ({ score, highScore }) => {
  return (
    <div id="scoreboard">
      <h2>Current score: {score}</h2>
      <h2>High score: {highScore}</h2>
    </div>
  );
};
