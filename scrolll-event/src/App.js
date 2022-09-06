import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const loadMoreList = () => {
    axios.get("https://dummyjson.com/products").then(({ data }) => {
      const newList = [];
      data.products.forEach((l) => newList.push(l.thumbnail));
      setList(newList);
    });
  };

  useEffect(() => {
    loadMoreList();
  }, []);

  return (
    <div className="App">
      <main>
        {list.map((l, i) => {
          return (
            <div className="column">
              <div className="row">
                <img className="img" src={l} />
              </div>
              <div className="ide" key={i}>
                {i + 1}
              </div>
              <div className="title">OnePlus 5T</div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default App;
