import Router from "./routers/index";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Router></Router>
      </div>
    </div>
  );
};

export default App;
