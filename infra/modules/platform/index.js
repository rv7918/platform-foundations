const AWS = require("aws-sdk");
const sqs = new AWS.SQS();

exports.handler = async () => {
  const id = Date.now().toString();

  await sqs.sendMessage({
    QueueUrl: process.env.QUEUE_URL,
    MessageBody: JSON.stringify({ id })
  }).promise();

  return {
    statusCode: 202,
    body: JSON.stringify({ message: "Queued", id })
  };
};
