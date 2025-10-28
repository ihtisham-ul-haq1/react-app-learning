import {useState , useEffect}  from "react";
import axios from "axios";

export const useMyHook = (initialvalue = 0 , url) => {
    const [count ,  setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => setCount(0)

    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
      if(!url)
          return;
      const fetchData = async () => {
          try{
              setLoading(true);
              await axios.get(url)
                  .then((res) => setData(res.data));
              setLoading(false);
          }catch (e) {
              setError(e.message.toString());
          }
      };

      fetchData();
    } , [url])

    return {
    count,
    increment,
    decrement,
    reset,
    data,
    loading,
    error,
  };
}