export default function Question({ question }) {
  console.log(question);
  return <div>{JSON.stringify(question)}</div>;
}
