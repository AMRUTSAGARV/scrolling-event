import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const apiurl = "https://dummyjson.com/products";

  const [data, setdata] = useState([]);

  const fetchData = () => {
    return axios
      .get(apiurl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="App">jj</div>;

  return <div>App</div>;
};

export default App;
