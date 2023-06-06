import React from "react";
import "./Show.css";
import Summery from "./Summery";
import { Link, useNavigate } from "react-router-dom";

export default function Show({ obj }) {
  const navigate = useNavigate();
  const goTo = (id) => {
    navigate("/deep", { state: { id: obj.summary } });
  };
  return (
    <div className="col-4">
      <ul>
        <li>
          <b>{obj.name}</b>
        </li>
        <li>{obj.id}</li>
        <li>{obj.type}</li>
        <li>{obj.language}</li>
        <Link to="/deep" state={{ id: obj.summary }}></Link>
        <button onClick={goTo}>SHOW</button>
      </ul>
    </div>
  );
}
