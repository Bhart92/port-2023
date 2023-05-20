import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Router from "./router/Router";

function App() {
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
