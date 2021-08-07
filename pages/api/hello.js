// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.INTEGRATION_TOKEN,
});

export default async (req, res) => {
  /* データベース情報とプロパティ種類や名前のみ */
  const response1 = await notion.databases.retrieve({
    database_id: '882c1f0ec2da465089b9dc0f4dcf3a98',
  });
  /* データベース全部とプロパティの中身のみ */
  const response2 = await notion.databases.query({
    database_id: '882c1f0ec2da465089b9dc0f4dcf3a98',
  });
  /* ページ情報とプロパティのみ */
  const response3 = await notion.pages.retrieve({
    page_id: 'b0b30d7ae4074912bc8029fcdd26e702',
  });
  /* ブロックの中身を取得 */
  const response4 = await notion.blocks.retrieve({
    block_id: '8c74f997516c4401a4cdaf5f696604c4',
  });
  /* ブロックの中にあるブロックを取得 */
  const response5 = await notion.blocks.children.list({
    block_id: '888936cd27f94ab6a6d4a8a48a624afe',
    page_size: 30,
  });
  /* page_idを使えばページ内のブロック一覧を取得できる */
  const response6 = await notion.blocks.children.list({
    block_id: 'b0b30d7ae4074912bc8029fcdd26e702',
  });

  res.status(200).json({
    response1,
    response2,
    response3,
    response4,
    response5,
    response6,
  });
  // res.status(200).json({ name: 'John Doe' });
};
