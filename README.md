# Random sequence generator


## How to run
Dowload the zip from releases, unzip and change into the directory.
```bash
npm install
node app.js
```
# Random sequence generator

## UML

![UML](./UML.png)

## How to run

Dowload the zip from releases, unzip and change into the directory.

```bash
npm install
node app.js
```

Open your browser on http://localhost:3000/

You will find a simple ui for interacting with the random sequence generator.

To interact with the api directly, you can send a request to the following endpoint:

```
POST /generate sequence

{
    "sequenceLength": "100",
    "gcPercentage": "50",
    "includeStartSequence": true,
    "includeStopSequence": true
}
```

You will receive a response in the format

```json
{
  "sequence": "ATGGAGAACCGGGGTAAATCTAGATTGAATTGCATTGTCCACATTTCTTCCACTTTGAGCGCGGAAGCTAGTTCCTACGCACCCACTCTATAGCAAGGGGGCGTAA"
}
```

A text file `result.txt` will also be created in the root directory of the project with the sequence.
