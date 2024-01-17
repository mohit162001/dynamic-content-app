import { useState } from "react";
import React from "react";
import MenuButtons from "./MenuButtons";
import ShowExampleContent from "./ShowExampleContent";

function Examples() {
  const [Value, setValue] = useState();


  function buttonClicked(selectd) {
    setValue(selectd);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <MenuButtons
          isSelected={Value === "component"}
          onSelect={() => buttonClicked("component")}
        >
          Component
        </MenuButtons>
        <MenuButtons
          isSelected={Value === "Functions"}
          onSelect={() => buttonClicked("Functions")}
        >
          Function
        </MenuButtons>
        <MenuButtons
          isSelected={Value === "state"}
          onSelect={() => buttonClicked("state")}
        >
          State
        </MenuButtons>
        <MenuButtons
          isSelected={Value === "jsx"}
          onSelect={() => buttonClicked("jsx")}
        >
          JSX
        </MenuButtons>
      </menu>

      <ShowExampleContent Value={Value}/>
    </section>
  );
}

export default Examples;
