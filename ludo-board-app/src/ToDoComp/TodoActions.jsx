export default function TodoActions({
  toUpperCaseChange,
  toLowerCaseChange,
  MarkAllAsDone
}) {
  return (
    <>
      <button onClick={toUpperCaseChange} className="btn">To UpperCase</button>
      &nbsp;&nbsp;
      <button onClick={toLowerCaseChange} className="btn">To LowerCase</button>
      &nbsp;&nbsp;
      <button onClick={MarkAllAsDone} className="btn">Mark All as Done</button>
    </>
  );
}
