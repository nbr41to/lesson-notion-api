import axios from 'axios';
// import fetch from 'node-fetch';

export default function Home() {
  // axios.get("https:/localhost:3000/api/hello").then(a => console.log(a.data));

  // axios.get("/api/post").then(a => console.log(a));
  const post = () => {
    try {
      // fetch('https://api.notion.com/v1/pages/b55c9c91-384d-452b-81db-d1ef79372b75', {
      //   mode: 'no-cors',
      //   headers: {
      //     'Notion-Version': '2021-05-13',
      //     'Authorization': 'Bearer secret_GgXF30iqZ1SjuacFgNLltGzdoRGXBK7p0munoylhnSa'
      //   }
      // });
      fetch('https://api.notion.com/v1/pages', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Authorization': 'Bearer secret_GgXF30iqZ1SjuacFgNLltGzdoRGXBK7p0munoylhnSa',
          'Content-Type': 'application/json',
          'Notion-Version': '2021-05-13'
        },
        body: JSON.stringify({ "parent": { "database_id": "481be50a529340e5856a801280ec6e8c" }, "properties": { "Name": { "title": [{ "text": { "content": "追加されたタイトル Yeah!!" } }] } } })
      });

      // var fetch = require('node-fetch');
      // fetch('https://api.notion.com/v1/pages', {
      //   mode: 'no-cors',
      //   method: 'POST',
      //   headers: {
      //     'Authorization': 'Bearer secret_GgXF30iqZ1SjuacFgNLltGzdoRGXBK7p0munoylhnSa',
      //     'Content-Type': 'application/json',
      //     'Notion-Version': '2021-05-13'
      //   },
      //   body: JSON.stringify({ "parent": { "database_id": "481be50a529340e5856a801280ec6e8c" }, "properties": { "Name": { "title": [{ "text": { "content": "追加されたタイトル Yeah!!" } }] } } })
      // });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Lesson Notion API</h1>
      <button onClick={post}>post</button>
      <button onClick={post}>get</button>
    </div>
  );
}
