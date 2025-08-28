import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Identity from "./components/Identity";
import Registration from "./components/Registration";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Identity />
      <Registration />
    </>
  );
}