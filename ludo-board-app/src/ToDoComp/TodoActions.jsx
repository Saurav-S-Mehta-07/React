export default function TodoActions({
  toUpperCaseChange,
  toLowerCaseChange,
  MarkAllAsDone
}) {
  return (
    <>
      <button onClick={toUpperCaseChange}>To UpperCase</button>
      &nbsp;&nbsp;
      <button onClick={toLowerCaseChange}>To LowerCase</button>
      &nbsp;&nbsp;
      <button onClick={MarkAllAsDone}>Mark All as Done</button>
    </>
  );
}
