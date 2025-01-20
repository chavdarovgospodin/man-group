import { MenuItem, Select } from '@mui/material';
import { memo } from 'react';

export const HistoryDropdown = memo(
  ({
    period,
    handlePeriodChange,
    allDates,
  }: {
    period: string;
    handlePeriodChange: (data: string) => void;
    allDates: Array<string>;
  }) => (
    <Select
      fullWidth
      sx={{ background: 'white' }}
      value={period}
      defaultChecked
      label="Period"
      onChange={(event) => handlePeriodChange(event.target.value)}
    >
      <MenuItem value={'All Period'}>All Period</MenuItem>
      {allDates?.map((date: string) => (
        <MenuItem key={date} value={date}>
          {date}
        </MenuItem>
      ))}
    </Select>
  )
);
