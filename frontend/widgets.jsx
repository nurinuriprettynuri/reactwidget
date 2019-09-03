import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tab from "./tabs";
import Autocomplete from "./auto";

let tabContent = [
  { title: "what to do", content: "algorithm study" },
  { title: "what to eat", content: "some beer" },
  { title: "what to buy", content: "some shoes" }
];

function Root() {
  return (
    <div>
      <Clock />
      <Tab tabContent={tabContent} />
      <Autocomplete />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
