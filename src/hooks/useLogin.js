import { useEffect, useState } from 'react';
import axios from 'axios';

const useLogin = (API) => {
  const [user, setUser] = useState([])

  useEffect(async () => {
    const response = await axios.post('/login', {
      username: 'Fred',
      password: 'Flintstone'
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(response);

    setUser(response.data);
  }, []);

  return user

}

export default useLogin