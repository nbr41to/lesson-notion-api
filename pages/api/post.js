const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.INTEGRATION_TOKEN });

export default async (req, res) => {
  try {
    console.log(process.env.INTEGRATION_TOKEN);
    console.log(process.env.DATABASE_ID);
    const pageId = process.env.DATABASE_ID;
    const response = await notion.pages.retrieve({ page_id: pageId });
    console.log(response);
  } catch (error) {
    return error;
  }
  return response;
};
