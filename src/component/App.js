import React from "react";
import useWindowDimension from "./windowDimension/useWindowDimension";

function App() {
  const { width, height } = useWindowDimension();
  return (
    <div>
      width: {width} <br /> height: {height}
    </div>
  );
}

export default App;
