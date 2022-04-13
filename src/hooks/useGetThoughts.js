import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetThoughts = (API) => {
  //Pensamientos
  const [thoughts, setThoughts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    // console.log(response);
    setThoughts(response.data);
  }, []);

  return thoughts
}

export default useGetThoughts