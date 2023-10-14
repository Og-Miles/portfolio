import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='max-w-7xl px-10 mx-auto space-x-2 py-2'>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
