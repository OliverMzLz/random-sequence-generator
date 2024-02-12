const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

// Add endpoint for generating random DNA sequence
app.post('/generate-sequence', (req, res) => {
  const { sequenceLength, gcPercentage, includeStartSequence, includeStopSequence } = req.body;

  // Validate input
  if (!sequenceLength || !gcPercentage) {
    return res.status(400).json({ error: 'Please provide sequence length and GC percentage.' });
  }

  // Generate random DNA sequence
  const randomSequence = generateRandomDNA(sequenceLength, gcPercentage, includeStartSequence, includeStopSequence);

  // Send response
  res.json({ sequence: randomSequence });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Function to generate random DNA sequence (replace with your actual implementation)
function generateRandomDNA(length, gcPercentage, includeStartSequence, includeStopSequence) {
}
