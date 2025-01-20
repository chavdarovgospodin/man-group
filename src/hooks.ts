import { useQuery } from 'react-query';

const fetchESGData = async () => {
  const response = await fetch('http://localhost:5001/api/esg-scores');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useESGData = () => {
  return useQuery('esgData', fetchESGData);
};
