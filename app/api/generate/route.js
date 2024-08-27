import { NextResponse } from 'next/server';
import model from '../../../utils/gemini';

export async function POST(req) {
  const topic = await req.text();
  console.log('Received topic:', topic);

  try {
    // Generate content using the Gemini API with a specific prompt
    const prompt = `
      Generate 6 unique pieces of information about the topic "${topic}". 
      Provide the best information.
      Each piece of information should be a distinct fact or piece of knowledge.
      Do not use any text formatting (e.g., bold, italic).
      Format each fact as a simple line of text.
    `;
    console.log('Sending prompt to Gemini API:', prompt);

    const result = await model.generateContent(prompt);
    console.log('Received response from Gemini API');

    const response = await result.response;
    const text = await response.text();
    console.log('Response text:', text);

    // Parse the response to create the flashcards
    const flashcards = parseFlashcardsFromText(text);
    console.log('Generated flashcards:', flashcards);

    return NextResponse.json({ flashcards });
  } catch (error) {
    console.error('Error generating flashcards:', error);
    return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
  }
}

// Function to parse flashcards from the response text
function parseFlashcardsFromText(text) {
  console.log('Parsing response text into flashcards');

  const flashcards = [];

  // Split text into lines and filter out empty lines
  const lines = text.split('\n').filter(line => line.trim() !== '');
  console.log('Split text into lines:', lines);

  // Each line is considered a single flashcard
  lines.forEach((line) => {
    flashcards.push(line.trim()); // Add each line as a flashcard
  });

  console.log('Parsed flashcards:', flashcards);
  return flashcards;
}
