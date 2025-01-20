import { useCallback, useMemo, useState } from 'react';
import { CircularProgress, Box } from '@mui/material';
import './App.css';
import { useESGData } from './hooks';
import { useDebouce } from './customHooks';
import { Company, CompanyInterface } from './components/Company';
import { Search } from './components/Search';
import { HistoryDropdown } from './components/HistoryDropdown';

function App() {
  const { data, isLoading } = useESGData();
  const [search, setSearch] = useState('');
  const [period, setPeriod] = useState('All Period');
  const debouncedSearch = useDebouce(search, 500);
  const allDates =
    data &&
    Array.from(
      new Set(
        data.flatMap((el: CompanyInterface) =>
          el.esg_scores.map((score) => score.date)
        )
      )
    ).sort();

  const onSearchChangeHandler = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const handlePeriodChange = useCallback((value: string) => {
    setPeriod(value);
  }, []);

  const filteredCompanies = useMemo(
    () =>
      data
        ?.filter((company: CompanyInterface) =>
          company.company.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        .map((company: CompanyInterface) => ({
          ...company,
          esg_scores:
            period === 'All Period'
              ? company.esg_scores
              : company.esg_scores.filter((score) => score.date === period),
        })),
    [data, debouncedSearch, period]
  );

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateRows: 'auto auto',
        placeItems: 'center',
      }}
    >
      <Box display={'flex'} gap={3}>
        <Search search={search} onSearchChangeHandler={onSearchChangeHandler} />
        <HistoryDropdown
          period={period}
          allDates={allDates}
          handlePeriodChange={handlePeriodChange}
        />
      </Box>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80vh"
        >
          <CircularProgress />
        </Box>
      ) : (
        filteredCompanies.map((company: CompanyInterface, index: number) => (
          <Company key={index + company.company} {...company} />
        ))
      )}
    </Box>
  );
}

export default App;
