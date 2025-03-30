import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-black text-white pt-[2rem] flex text-center justify-center items-center">
        <p className="text-[1.5rem]">"hello world..."</p>
      </div>
    </>
  );
}

export default App;
