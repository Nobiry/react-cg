import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changeText, setChangeText] = useState(false);

  function changeTextHandler() {
    setChangeText(true);
  }

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It&apos;s good to see you!</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
