import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./layouts/Hearder";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="container">
      {/* header */}
      <Header />
      {/* homepage */}
      <Homepage />
      {/* Createapp */}
      <Footer />
      {/* footer */}
    </div>
  );
}

export default App;
