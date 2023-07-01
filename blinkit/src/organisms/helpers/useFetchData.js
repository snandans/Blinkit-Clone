import { useState, useEffect } from 'react';
import getResourceUrl from '../../utils/getResourceUrl';

function useFetchData(type) {
  const BASE_URL = 'http://localhost:3004/';
  const url = getResourceUrl(BASE_URL, type);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then((res) => { setData([...res[type]]); })
  }

  useEffect(() => {
    fetchData()
  }, []);
  return data;
}

export default useFetchData;