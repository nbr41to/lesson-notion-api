export default function Home() {
  const get = async () => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div>
      <h1>Lesson Notion API</h1>
      <button onClick={get}>get</button>
    </div>
  );
}
