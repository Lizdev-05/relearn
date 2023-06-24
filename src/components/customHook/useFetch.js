import { useEffect, useState } from "react";

const useFetch = (userUrl) => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(userUrl);
      if (!response.ok) {
        throw new Error("Seems like something is not right!");
      }
      const data = await response.json();
      setUser(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetch(userUrl)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setUser(data);
    //   });

    getUser();
  }, [userUrl]);

  return { user, error, isLoading };
};

export default useFetch;
