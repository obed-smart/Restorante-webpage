import Category from "./Category";
import Dishes from "./Dishes";
import Foooter from "./Foooter";
import Hero from "./Hero";
import "./index.css";
import Nav from "./Nav";
import Story from "./Story";
import Testimonial from "./Testimonial";

function App() {
  return (
    <div className="bg-secondary h-auto font-sans">
      <div className="max-w-[1200px] px-10  mx-auto">
        <Nav />
        <div className="py-10">
          <Hero />
          <Category />
          <Dishes />
          <Testimonial />
          <Story />
        </div>
          <Foooter />
      </div>
    </div>
  );
}

export default App;
