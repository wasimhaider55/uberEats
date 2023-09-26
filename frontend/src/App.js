import Headline from "./components/headline/Headline";
import { HeadlineCard } from "./components/headline/HeadlineCard";
import Home from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar";
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      {/* <Headline/> */}
      <HeadlineCard/>
    </div>
  );
}

export default App;
