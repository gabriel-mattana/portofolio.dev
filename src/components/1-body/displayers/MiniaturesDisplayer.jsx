import React from "react";
import Miniature from "./Miniature";

export default function MiniaturesDisplayer({props}) {
  var keyNb = 0;
  
  var miniatures = props.map((item) => (
    <Miniature props={item} key={keyNb++}></Miniature>
  ));

  return (
    <React.Fragment>
      <div className="miniature-displayer">
        {miniatures}
      </div>
    </React.Fragment>
  );
}
