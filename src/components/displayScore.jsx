export default function DisplayScore({ score, bestScore, h2 }) {
  return (
    <>
      <p>Current score: {score}</p>
      <h2>{h2}</h2>
      <p>Best score: {bestScore}</p>
    </>
  );
}
