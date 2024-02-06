import "./components/nav/nav.scss";
import Nav from "./components/nav/Nav";
import News from "./components/news/News";
import Info from "./components/info/Info";

function App() {
  return (
    <div className="App">
      <Nav />
      <News />
      <Info />
    </div>
  );
}

export default App;
