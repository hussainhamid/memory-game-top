export default function DisplayScore({ score, bestScore }) {
  return (
    <>
      <p>Current score: {score}</p>

      <p>Best score: {bestScore}</p>
    </>
  );
}
