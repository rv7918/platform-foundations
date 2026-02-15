const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const id = Date.now().toString();

  await dynamodb.put({
    TableName: "pf-items-dev",
    Item: { id }
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Item stored", id })
  };
};
