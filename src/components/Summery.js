import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Summery() {
  const location = useLocation();
  let str = location.state.id;
  const [html, setHtml] = useState("");
  useEffect(() => {
    setHtml(str);
  }, [html]);
  return <>{parse(html)}</>;
}
