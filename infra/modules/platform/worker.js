const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  for (const record of event.Records) {
    const body = JSON.parse(record.body);

    await dynamodb.put({
      TableName: "pf-items-dev",
      Item: { id: body.id }
    }).promise();
  }

  return {};
};
