import { Box, List, Typography } from '@mui/material';
import { EsgData } from './EsgData';

export interface CompanyInterface {
  company: string;
  isHidden?: boolean;
  esg_scores: Array<EsgData>;
}

export const Company = (data: CompanyInterface) => {
  const { company, esg_scores } = data;

  return (
    <List sx={{ width: '100%', maxWidth: 480 }}>
      <Typography variant="h5" component="h5">
        {company}
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
        {esg_scores.map((score: EsgData, index: number) => (
          <EsgData key={score.date + index} {...score} />
        ))}
      </Box>
    </List>
  );
};
