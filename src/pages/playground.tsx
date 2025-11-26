import Playground from "../components/Playground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Playground />
      <Footer />
    </div>
  ) ;
  
} 