import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Quote from "./components/quote";
import Sphere from "./components/sphere";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full h-full text-white">
        <Quote/> 
      </div>
      <div>
        <Sphere />
      </div>

    </div>
  );
}