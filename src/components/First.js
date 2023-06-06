import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summery from "./Summery";
import Show from "./Show";

import "./First.css";
let endPoint = "https://api.tvmaze.com/search/shows?q=all";

let arr = [];
function First() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(endPoint)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((actualData) => {
        arr = [];
        actualData.map((obj) => {
          arr.push(obj.show);
        });

        setData(actualData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <div className="row">
      {
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={arr.map((item) => (
                <Show obj={item} key={item.id} />
              ))}
            />
            <Route exact path="/deep" element={<Summery />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default First;
