// Just for the purpose of this demo
// CORS Handling: It bypasses cross-origin resource sharing (CORS) restrictions that browsers enforce when trying to fetch PDFs directly from different domains.
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/proxy-pdf', async (req, res) => {
  try {
    const response = await fetch(req.query.url);
    const buffer = await response.buffer();
    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
  } catch (error) {
    res.status(500).send('Error fetching PDF');
  }
});

// If we wish to use mammoth to convert word document to html

// app.get('/proxy-docx', async (req, res) => {
//   try {
//     const response = await fetch(req.query.url);
//     const buffer = await response.buffer();
//     const result = await mammoth.convertToHtml({ buffer });
//     res.json({ content: result.value });
//   } catch (error) {
//     res.status(500).send('Error fetching Word document');
//   }
// });

app.listen(3001, () => console.log('Proxy server running on port 3001'));