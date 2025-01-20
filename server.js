import express from 'express';
import cors from 'cors';

const app = express();
const port = 5001;

app.use(cors());

const esgData = [
  {
    company: 'Company A',
    esg_scores: [
      { date: '2023-01-01', environmental: 75, social: 80, governance: 70 },
      { date: '2022-06-01', environmental: 70, social: 78, governance: 65 },
    ],
  },
  {
    company: 'Company B',
    esg_scores: [
      { date: '2023-01-01', environmental: 60, social: 85, governance: 80 },
      { date: '2022-06-01', environmental: 55, social: 82, governance: 78 },
    ],
  },
  {
    company: 'Company C',
    esg_scores: [
      { date: '2023-01-01', environmental: 90, social: 88, governance: 85 },
      { date: '2022-06-01', environmental: 88, social: 85, governance: 82 },
    ],
  },
];

app.get('/api/esg-scores', (req, res) => {
  res.json(esgData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
