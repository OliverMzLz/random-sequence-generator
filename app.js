const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Add endpoint for generating random DNA sequence
app.post("/generate-sequence", (req, res) => {
  console.log(req.body);
  const {
    sequenceLength,
    gcPercentage,
    includeStartSequence,
    includeStopSequence,
  } = req.body;

  // Validate input
  if (!sequenceLength || !gcPercentage) {
    return res
      .status(400)
      .json({ error: "Please provide sequence length and GC percentage." });
  }

  // Generate random DNA sequence
  const randomSequence = generateRandomDNA(
    sequenceLength,
    gcPercentage,
    includeStartSequence,
    includeStopSequence
  );

  // Send response
  res.json({ sequence: randomSequence });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Function to generate random DNA sequence
function generateRandomDNA(
  length,
  gcPercentage,
  includeStartSequence,
  includeStopSequence
) {
  const gcCount = Math.round((length * gcPercentage) / 100);
  const atCount = length - gcCount;
  const gcSequence = "GC".repeat(gcCount / 2);
  const atSequence = "AT".repeat(atCount / 2);
  const sequence = gcSequence + atSequence;
  const randomSequence = sequence
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return (
    (includeStartSequence ? "ATG" : "") +
    randomSequence +
    (includeStopSequence ? "TAA" : "")
  );
}
