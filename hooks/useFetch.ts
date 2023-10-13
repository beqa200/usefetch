import { useState } from 'react';
import axios from 'axios';

interface hookType {
  data: any;
  error: any;
  loading: boolean;
}

function useFetch(): [(apiUrl: string) => Promise<void>, hookType] {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (apiUrl: string) => {
    try {
      setLoading(true);
      const response = await axios.get(apiUrl);
      setData(response.data);
      setError(null);
    } catch (err: any) {
      setError(err);
      setData(null)
    } finally {
      setLoading(false);
    }
  };

  return [fetchData, { data, error, loading }];
}

export default useFetch;
