import { useState } from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
