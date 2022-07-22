import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Presentation } from "./style";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Presentation>
        <h1>
          Template made by Marioto{" "}
          <a href="https://github.com/henriquemarioto" target="_blank">
            Paulo Marioto
          </a>
          &nbsp;♥
        </h1>
      </Presentation>
    </div>
  );
}

export default App;
