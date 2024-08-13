import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {createThread, addMessageToThread, runAssistant} from './openaiService.js';
import morgan from 'morgan'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));

app.use(cors({ origin: '*' }));

app.use(express.json());

app.post('/api/openai', async(req, res)=>{ //asynchronous, meaning it will wait for the response before proceeding.
    try {
      const { prompt } = req.body;
      console.log(prompt);
      // Create a new thread for the conversation
      const thread = await createThread();
      console.log(thread);
      // Add the user's prompt as a message to the thread
      await addMessageToThread(thread.id, prompt);
       // Step 4: Run the assistant to get a response
      const responseText = await runAssistant(thread.id);
      console.log(responseText);

    // Return the response to the client
    res.json({ message: responseText });
  } catch (error) {
    console.error('Error in /api/openai route:', error);
    if (error.code === 'insufficient_quota') {
      res.status(429).json({ error: 'You have exceeded your quota. Please try again later or upgrade your plan.' });
    } else {
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});