import express from 'express';


const topicArn = 'your-sns-topic-arn'; // Replace with your SNS Topic ARN

// Create an Express app
const app = express();
const port = 3000;


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});