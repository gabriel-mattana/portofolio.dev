import React from "react";
import Miniature from "./Miniature";
import "./MiniaturesDisplayer.css"

export default function MiniaturesDisplayer({props}) {
  var miniatures = props.map((item) => (
    <Miniature props={item} key={item.key}></Miniature>
  ));

  return (
    <React.Fragment>
      <div className="miniature-displayer">
        {miniatures}
      </div>
    </React.Fragment>
  );
}
