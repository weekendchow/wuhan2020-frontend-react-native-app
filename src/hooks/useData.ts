import { useState, useEffect } from 'react';
import logisticData from '../fixture/logistics';

function useData(url: string) {
  const [data, setData] = useState(null);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(1);

  useEffect(
    function() {
      setLoading(true);
      if (url === 'logistics') {
        setData(logisticData);
        setTotal(logisticData.length);
      } else {
        setData([]);
      }
    },
    [pageIndex],
  );

  function fetchMore() {
    setPageIndex(pageIndex + 1);
  }

  function refresh() {
    setPageIndex(1);
  }

  return [data, total, loading, fetchMore, refresh];
}

export default useData;