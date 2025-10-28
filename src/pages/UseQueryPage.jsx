import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const UseQueryPage = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  return (
    <div>
      UseQueryPage
      {isLoading ? <h1>Getting Data</h1> : <h1>Server Data = {data?.fact}</h1>}
      <button onClick={refetch}> ReFetch </button>
    </div>
  );
};
