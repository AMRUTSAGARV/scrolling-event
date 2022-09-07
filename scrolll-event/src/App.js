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
        data.products.forEach((l) => newList.push(l.thumbnail));
        // data.products.forEach((l) => newList.push(l.title));
        setList((oldList) => [...oldList, ...newList]);
      });
    offset += 10;
  };

  const handleScroll = (e) => {
    // console.log("top: ", e.target.documentElement.scrollTop);
    // console.log("win: ", window.innerHeight);
    // console.log("height: ", e.target.documentElement.scrollHeight);
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      // console.log("at the bottom of the page!");
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
        {list.map((l, i) => {
          return (
            <div className="column">
              <div className="row">
                <img alt="" className="img" src={l} />
              </div>
              <div className="ide" key={i}>
                {i + 1}
              </div>
              <div></div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default App;
