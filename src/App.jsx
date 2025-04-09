import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { NavigationBar } from "../Components/Nav";
import { NewsCard } from "../Components/NewsCard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <NewsCard title="Uber to acquire drizly" />
      <NewsCard title="Amazon music closes in on Apple Music" />
      <NewsCard title="Rocket.chat raises $19M" />

      <NavigationBar />

      <Footer />
    </>
  );
}

export default App;
