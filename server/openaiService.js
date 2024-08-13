import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

let assistantId = process.env.ASSISTANT_ID; // Assume the assistant is already created


export async function createThread() {
  try {
    const thread = await openai.beta.threads.create();
    return thread;
  } catch (error) {
    console.error('Error creating thread:', error);
    throw error;
  }
}

export async function addMessageToThread(threadId, content) {
  try {
    const message = await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content,
    });
    return message;
  } catch (error) {
    console.error('Error adding message to thread:', error);
    throw error;
  }
}

export async function runAssistant(threadId) {
  return new Promise((resolve, reject) => {
    try {
      let accumulatedText = '';
      const run = openai.beta.threads.runs.stream(threadId, {
        assistant_id: assistantId,
      })
        .on('textCreated', (text) => {
          process.stdout.write('\nassistant > ');
          accumulatedText += text;
        })
        .on('textDelta', (textDelta, snapshot) => {
          process.stdout.write(textDelta.value);
          accumulatedText += textDelta.value;
        })
        .on('end', () => {
          resolve(accumulatedText);
        })
        .on('error', (error) => {
          console.error('Error during assistant run:', error);
          reject(error);
        });
    } catch (error) {
      console.error('Error running assistant:', error);
      reject(error);
    }
  });
}

