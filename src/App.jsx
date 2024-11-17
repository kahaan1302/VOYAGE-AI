import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button"; // Ensure this is correct
import Hero from "./components/custom/Hero"; // Ensure this is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero /> {/* Call Hero as a component */}
    </>
  );
}

export default App;
