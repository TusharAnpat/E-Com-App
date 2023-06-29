import "./App.css";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
    </div>
  );
}

export default App;
