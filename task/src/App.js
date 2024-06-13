import svg from "./svg.png";
import Body from "./components/Body";
import Form from "./components/Form";
import Gmap from "./components/Gmap";
import Info from "./components/Info";
import Bottom from "./components/Bottom";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <nav className="navbar">
        <img className=" m-2 w-auto h-10" alt="logo" src={svg}></img>
      </nav>
      <Body />
      <Form />
      <Gmap />
      <Info />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
