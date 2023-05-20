import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Router from "./router/Router";
import { useEffect } from "react";
function App() {
  const scrollToTop = () => {
    document.querySelector("body").scrollTo({ top: 0 });
  };
  useEffect(() => {
    window.matchMedia("(orientation: landscape)").addListener(() => {
      scrollToTop();
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <div className="main-content">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
