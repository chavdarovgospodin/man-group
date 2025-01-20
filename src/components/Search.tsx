import { TextField } from '@mui/material';
import { memo } from 'react';

export const Search = memo(
  ({
    search,
    onSearchChangeHandler,
  }: {
    search: string;
    onSearchChangeHandler: (data: string) => void;
  }) => (
    <TextField
      label="Search"
      variant="outlined"
      value={search}
      sx={{ background: 'white' }}
      onChange={(e) => onSearchChangeHandler(e.target.value)}
    />
  )
);
