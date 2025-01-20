import { ListItemButton, Typography } from '@mui/material';
import { useState } from 'react';

export const ScoreItem = ({
  name,
  value,
}: {
  name: string;
  value: unknown;
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <ListItemButton onClick={() => setIsHighlighted(!isHighlighted)}>
      <Typography
        sx={{ fontWeight: 'bold', color: isHighlighted ? 'red' : 'initial' }}
      >
        {`${name[0].toUpperCase() + name.slice(1)}: ${value}`}
      </Typography>
    </ListItemButton>
  );
};
