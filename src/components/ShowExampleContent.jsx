import React from "react";
import { EXAMPLES } from "./data";
function ShowExampleContent({ Value }) {
  return (
    <div>
      {!Value ? <p>click</p> : null}
      {Value ? (
        <div id="tab-content">
          <div className="inner-content">
            <h3>{EXAMPLES[Value].title}</h3>
            <p>{EXAMPLES[Value].description}</p>
            <pre>{EXAMPLES[Value].code}</pre>
          </div>
        </div>
      ) : null}
      {console.log("example", EXAMPLES[Value])}
    </div>
  );
}

export default ShowExampleContent;
