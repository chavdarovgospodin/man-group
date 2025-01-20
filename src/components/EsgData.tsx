import { Box, ListItemText } from '@mui/material';
import { ScoreItem } from './ScoreItem';

export type EsgData = {
  date: string;
  environmental: string;
  social: string;
  governance: string;
  [key: string]: string;
};

export const EsgData = (data: EsgData) => {
  const dataKeys = Object.keys(data);

  return (
    <Box sx={{ border: '1px solid white', margin: 1 }}>
      {dataKeys.map((el, index) => {
        return el === 'date' ? (
          <ListItemText
            key={index}
            sx={{ p: '8px 16px' }}
            primary={`Date: ${data[el]}`}
          />
        ) : (
          <ScoreItem key={index + el} name={el} value={data[el]} />
        );
      })}
    </Box>
  );
};
