import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  let offset = 0;
  const [list, setList] = useState([]);

  const loadMoreList = () => {
    axios
      .get(`https://dummyjson.com/products?skip=5&limit=10&offset=${offset}`)
      .then(({ data }) => {
        const newList = [];
        data.products.map((x) => newList.push(x));
        // data.products.forEach((l) => newList.push(l.title));
        setList((oldList) => [...oldList, ...newList]);
      });
    offset += 10;
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMoreList();
    }
  };

  useEffect(() => {
    loadMoreList();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <main>
        {list.map((x) => {
          return (
            <div className="column">
              <div className="row">
                <img alt="" className="img" src={x.thumbnail} />
              </div>

              <div className="title">{x.title}</div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default App;
